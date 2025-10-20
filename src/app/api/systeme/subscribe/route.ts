import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Minimal Systeme.io newsletter subscription proxy with robust fallbacks
// - Expects JSON: { email: string, firstName?: string, lastName?: string, tags?: string[] }
// - Uses SYSTEME_API_KEY from environment

// Try both documented hosts: help docs point to api.systeme.io, some guides use systeme.io/api
const SYSTEME_API_BASES = [
  "https://api.systeme.io", // Official Public API (X-API-Key, /public/v1/*)
  "https://systeme.io/api", // Legacy guides (Authorization: Bearer, /contacts, /tags)
];

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.SYSTEME_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing SYSTEME_API_KEY" }, { status: 500 });
    }

    const { email, firstName, lastName, tags } = (await req.json()) as {
      email?: string;
      firstName?: string;
      lastName?: string;
      tags?: string[];
    };

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 1) Create or find contact in Systeme with path fallbacks
    // Note: Public API (api.systeme.io) expects X-API-Key and /public/v1/... paths.
    //       Legacy guides (systeme.io/api) often use Authorization Bearer and /contacts paths.
    const createPaths = [
      // Public API v2 (newer)
      "/public/v2/contacts",
      "/public/v2/contacts/upsert",
      // Public API v1 (older)
      "/public/v1/contacts",
      "/public/v1/contacts/upsert",
      // Legacy API (will be tried on legacy base)
      "/contacts",
    ];

    let contactId: string | undefined;
    let lastErr: { status: number; details?: string } | undefined;
    const attempts: Array<{ url: string; status?: number; body?: string }> = [];

    for (const base of SYSTEME_API_BASES) {
      // Pick header style per host
      const headers = (() => {
        const common = {
          "Content-Type": "application/json",
          Accept: "application/json",
        } as Record<string, string>;
        if (base.includes("systeme.io/api")) {
          // Legacy style
          return { ...common, Authorization: `Bearer ${apiKey}` };
        }
        // Public API host: send both header casings just in case
        return { ...common, "X-API-Key": apiKey, "X-Api-Key": apiKey };
      })();

      for (const path of createPaths) {
        const url = `${base}${path}`;
        const body = JSON.stringify({
          email,
          first_name: firstName,
          last_name: lastName,
        });

        const createRes = await fetch(url, {
          method: "POST",
          headers,
          body,
        });

        if (createRes.ok) {
          const data = (await toJsonSafe(createRes)) as { id?: string } | any;
          contactId = data?.id || data?.data?.id;
          attempts.push({ url, status: createRes.status });
          break;
        }

        // record failed attempt with short body
        attempts.push({ url, status: createRes.status, body: await safeText(createRes) });

        // Unauthorized / Forbidden => API key issue
        if (createRes.status === 401 || createRes.status === 403) {
          const details = attempts[attempts.length - 1]?.body;
          return NextResponse.json(
            {
              error: "Unauthorized with Systeme API. Check SYSTEME_API_KEY.",
              status: createRes.status,
              details,
              attempts,
            },
            { status: 502 }
          );
        }

        // Conflict/validation => likely exists; try to look up by email and continue
        if (
          createRes.status === 409 ||
          createRes.status === 422 ||
          createRes.status === 400
        ) {
          const lookupId = await findContactIdByEmail(apiKey, email);
          if (lookupId) {
            contactId = lookupId;
            break;
          }
          // store error, try next path
          lastErr = { status: createRes.status, details: attempts[attempts.length - 1]?.body };
          continue;
        }

        // Other errors: remember and try next path
        lastErr = { status: createRes.status, details: attempts[attempts.length - 1]?.body };
      }
      if (contactId) break;
    }

    if (!contactId) {
      // Graceful fallback: store locally via newsletter-subscribers API
      try {
        const origin = new URL(req.url).origin;
        const fallbackRes = await fetch(`${origin}/api/newsletter-subscribers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Forward auth if present (APIs may require it); ignore if absent
            Authorization: req.headers.get("authorization") || "",
          },
          body: JSON.stringify({
            email,
            firstName,
            lastName,
            tags,
            source: "local",
            status: "pending",
            errorText: `systeme_${lastErr?.status || 0}: ${String(lastErr?.details || "Not Found").slice(0, 300)}`,
          }),
        });

        if (fallbackRes.ok) {
          const saved = await fallbackRes.json();
          return NextResponse.json(
            {
              ok: true,
              fallback: "local",
              subscriber: saved,
              attempts,
              message:
                "Systeme API unavailable (404). Stored locally and marked pending. We'll sync when API is available.",
            },
            { status: 202 }
          );
        }

        // If fallback failed (e.g., auth required), surface both errors
        const fbText = await fallbackRes.text();
        return NextResponse.json(
          {
            error: "Failed to create contact in Systeme and local fallback failed",
            status: lastErr?.status ?? 0,
            details: lastErr?.details,
            attempts,
            fallbackStatus: fallbackRes.status,
            fallbackError: fbText?.slice(0, 1000),
            hint:
              "If all attempts are 404, your account may not have Public API enabled. Ensure local fallback endpoint is reachable and (if protected) pass Authorization bearer token.",
          },
          { status: 502 }
        );
      } catch (e: any) {
        return NextResponse.json(
          {
            error: "Failed to create contact in Systeme and fallback threw",
            status: lastErr?.status ?? 0,
            details: lastErr?.details,
            attempts,
            fallbackThrown: e?.message || String(e),
          },
          { status: 502 }
        );
      }
    }

    // 2) Optionally assign tags if provided and we have contactId (non-blocking)
    if (contactId && Array.isArray(tags) && tags.length > 0) {
      // Systeme may require numeric tag IDs; if names are provided, attempt a best-effort resolve
      try {
        const numericTags = tags.filter((t) => /^(\d+)$/.test(String(t)));
        const nameTags = tags.filter((t) => !/^(\d+)$/.test(String(t)));
        let finalTags: (string | number)[] = [...numericTags];

        if (nameTags.length > 0) {
          // Try to resolve tag names to IDs via list-all (best-effort)
          const tagList = await listAllTags(apiKey);
          if (Array.isArray(tagList)) {
            for (const nt of nameTags) {
              const match = tagList.find(
                (tg: any) => tg?.name?.toLowerCase?.() === String(nt).toLowerCase()
              );
              if (match?.id) finalTags.push(match.id);
            }
          }
        }

        if (finalTags.length > 0) {
          // Try multiple paths for tag assignment
          const tagPaths = [
            // Public API v2
            `/public/v2/contacts/${contactId}/tags`,
            // Public API v1
            `/public/v1/contacts/${contactId}/tags`,
            // Legacy
            `/contacts/${contactId}/tags`,
          ];
          let tagged = false;
          for (const base of SYSTEME_API_BASES) {
            const headers = (() => {
              const common = {
                "Content-Type": "application/json",
                Accept: "application/json",
              } as Record<string, string>;
              if (base.includes("systeme.io/api")) {
                return { ...common, Authorization: `Bearer ${apiKey}` };
              }
              return { ...common, "X-API-Key": apiKey, "X-Api-Key": apiKey };
            })();

            for (const tPath of tagPaths) {
              const tagRes = await fetch(`${base}${tPath}`, {
                method: "POST",
                headers,
                body: JSON.stringify({ tags: finalTags }),
              });
              if (tagRes.ok) {
                tagged = true;
                break;
              }
            }
            if (tagged) break;
          }
        }
      } catch {
        // ignore tag errors completely
      }
    }

    // 3) Enviar notificación por email a carlos@synth-insights.com
    try {
      const resendApiKey = process.env.RESEND_API_KEY;
      if (resendApiKey) {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: "Newsletter Synth <notificaciones@synth-insights.com>",
          to: "carlos@synth-insights.com",
          subject: "🔔 Nueva suscripción a Newsletter",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #FF6634;">Nueva suscripción recibida</h2>
              <p style="font-size: 16px; color: #333;">
                <strong>Email:</strong> ${email}
              </p>
              ${firstName ? `<p style="font-size: 16px; color: #333;"><strong>Nombre:</strong> ${firstName}</p>` : ''}
              ${lastName ? `<p style="font-size: 16px; color: #333;"><strong>Apellido:</strong> ${lastName}</p>` : ''}
              ${tags && tags.length > 0 ? `<p style="font-size: 16px; color: #333;"><strong>Tags:</strong> ${tags.join(', ')}</p>` : ''}
              <p style="font-size: 14px; color: #666; margin-top: 20px;">
                Suscriptor registrado exitosamente en tu lista de Systeme.io
              </p>
            </div>
          `,
        });
      }
    } catch (emailError) {
      // No bloquear la respuesta si falla el email, solo registrar en consola
      console.error("Error enviando notificación por email:", emailError);
    }

    return NextResponse.json({ ok: true, contactId: contactId || null });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Unexpected error", details: error?.message || String(error) },
      { status: 500 }
    );
  }
}

// Lightweight diagnostics to verify Public API availability quickly
export async function GET() {
  const apiKey = process.env.SYSTEME_API_KEY || "";
  const checks: Array<{ base: string; path: string; status?: number; ok?: boolean; body?: string }> = [];

  for (const base of SYSTEME_API_BASES) {
    const headers = base.includes("systeme.io/api")
      ? ({ Accept: "application/json", Authorization: `Bearer ${apiKey}` } as Record<string, string>)
      : ({ Accept: "application/json", "X-API-Key": apiKey, "X-Api-Key": apiKey } as Record<string, string>);

    const paths = [
      "/public/v2/tags",
      "/public/v1/tags",
      "/public/v1/contacts?limit=1",
      "/documentation",
    ];

    for (const path of paths) {
      try {
        const res = await fetch(`${base}${path}`, { headers, cache: "no-store" as any });
        const body = await safeText(res);
        checks.push({ base, path, status: res.status, ok: res.ok, body });
      } catch (e) {
        checks.push({ base, path, body: (e as Error)?.message || String(e) });
      }
    }
  }

  // Heuristic summary
  const any200 = checks.some((c) => (c.status || 0) >= 200 && (c.status || 0) < 300);
  const any401 = checks.some((c) => c.status === 401 || c.status === 403);
  const all404 = checks.every((c) => c.status === 404);

  return NextResponse.json({
    ok: any200,
    all404,
    unauthorized: any401,
    message: all404
      ? "All probes returned 404 — Public API likely not enabled for this account/plan or endpoint not available."
      : any401
      ? "Unauthorized — check SYSTEME_API_KEY (public API key)."
      : any200
      ? "At least one endpoint is reachable."
      : "See individual probe results.",
    probes: checks,
  });
}

async function findContactIdByEmail(apiKey: string, email: string) {
  for (const base of SYSTEME_API_BASES) {
    const headers = base.includes("systeme.io/api")
      ? ({ Accept: "application/json", Authorization: `Bearer ${apiKey}` } as Record<string, string>)
      : ({ Accept: "application/json", "X-API-Key": apiKey, "X-Api-Key": apiKey } as Record<string, string>);

    const paths = [
      // Public API v2
      `/public/v2/contacts?email=${encodeURIComponent(email)}`,
      `/public/v2/contacts?filter[email]=${encodeURIComponent(email)}`,
      // Public API v1
      `/public/v1/contacts?email=${encodeURIComponent(email)}`,
      `/public/v1/contacts?filter[email]=${encodeURIComponent(email)}`,
      // Legacy style
      `/contacts?email=${encodeURIComponent(email)}`,
    ];
    for (const path of paths) {
      try {
        const res = await fetch(`${base}${path}`, { headers });
        if (!res.ok) continue;
        const listJson: any = await toJsonSafe(res);
        const arr = Array.isArray(listJson?.data)
          ? listJson.data
          : Array.isArray(listJson)
          ? listJson
          : [];
        const found = arr?.[0];
        if (found?.id) return found.id;
      } catch {
        // continue
      }
    }
  }
  return undefined;
}

async function listAllTags(apiKey: string) {
  for (const base of SYSTEME_API_BASES) {
    const headers = base.includes("systeme.io/api")
      ? ({ Accept: "application/json", Authorization: `Bearer ${apiKey}` } as Record<string, string>)
      : ({ Accept: "application/json", "X-API-Key": apiKey, "X-Api-Key": apiKey } as Record<string, string>);

    const paths = [
      // Public API v2
      "/public/v2/tags",
      // Public API v1
      "/public/v1/tags",
      // Legacy
      "/tags",
    ];
    for (const path of paths) {
      try {
        const res = await fetch(`${base}${path}`, { headers });
        if (!res.ok) continue;
        const json: any = await toJsonSafe(res);
        const arr = Array.isArray(json?.data) ? json.data : Array.isArray(json) ? json : [];
        if (arr.length) return arr;
      } catch {
        // continue
      }
    }
  }
  return [];
}

async function safeText(res: Response) {
  try {
    const txt = await res.text();
    return txt?.slice(0, 2000);
  } catch {
    return undefined;
  }
}

async function toJsonSafe(res: Response) {
  try {
    return await res.json();
  } catch {
    return undefined;
  }
}