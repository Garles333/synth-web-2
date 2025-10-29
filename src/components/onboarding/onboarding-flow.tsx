"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

export const OnboardingFlow = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitting, setSubmitting] = useState(false);

  const [goal, setGoal] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [teamSize, setTeamSize] = useState<string>("");
  const [methods, setMethods] = useState<string[]>([]);

  const progress = useMemo(() => (step / 3) * 100, [step]);

  const canContinue = useMemo(() => {
    if (step === 1) return Boolean(goal);
    if (step === 2) return Boolean(role) && Boolean(teamSize);
    if (step === 3) return methods.length > 0;
    return false;
  }, [step, goal, role, teamSize, methods]);

  const proceed = async () => {
    if (step < 3) {
      setStep((s) => (s + 1) as 1 | 2 | 3);
      return;
    }

    const payload = { goal, role, teamSize, methods };

    // If there is a session, send to backend and associate with user
    if (session?.user) {
      try {
        setSubmitting(true);
        const token = typeof window !== "undefined" ? localStorage.getItem("bearer_token") : "";
        
        // 1. Guardar respuestas de onboarding en la base de datos
        const res = await fetch("/api/onboarding-responses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token || ""}`,
          },
          body: JSON.stringify(payload),
        });

        // 2. Enviar a systeme.io con tags según las respuestas
        const tags = [
          "onboarding-completado",
          `objetivo-${goal.toLowerCase().replace(/\s+/g, "-")}`,
          `rol-${role.toLowerCase().replace(/\s+/g, "-")}`,
          `equipo-${teamSize.toLowerCase().replace(/\s+/g, "-")}`
        ];

        await fetch("/api/systeme/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: session.user.email,
            firstName: session.user.name?.split(" ")[0] || "",
            lastName: session.user.name?.split(" ").slice(1).join(" ") || "",
            tags
          }),
        }).catch(() => {
          // Si systeme.io falla, continuar de todas formas
          console.log("Systeme.io sync failed, continuing...");
        });

        // Save locally for future UI usage
        try { localStorage.setItem("synth_onboarding", JSON.stringify(payload)); } catch {}
        
        if (res.ok) {
          router.push("/");
        } else {
          router.push("/");
        }
      } catch {
        try { localStorage.setItem("synth_onboarding", JSON.stringify(payload)); } catch {}
        router.push("/");
      } finally {
        setSubmitting(false);
      }
      return;
    }

    // If NO session, persist locally and redirect to external register
    try {
      localStorage.setItem("synth_onboarding", JSON.stringify(payload));
    } catch {}
    window.location.href = "https://app.synth-insights.com/register";
  };

  const back = () => setStep((s) => (Math.max(1, s - 1) as 1 | 2 | 3));

  const GoalCard = ({ label, emoji }: { label: string; emoji: string }) => (
    <button
      type="button"
      onClick={() => {
        setGoal(label);
        // Auto advance to next step
        if (step === 1) {
          setTimeout(() => setStep(2), 150);
        }
      }}
      className={`group flex items-center gap-4 w-full text-left p-5 rounded-2xl border transition-all duration-200 bg-[#1A1F2E] hover:border-[#FF6634]/60 ${
        goal === label ? "border-[#FF6634] ring-2 ring-[#FF6634]/30" : "border-[#2A3441]"
      }`}
    >
      <span className="text-2xl">{emoji}</span>
      <span className="text-base md:text-lg text-white">{label}</span>
      {goal === label && <Check className="ml-auto h-5 w-5 text-[#FF6634]" />}
    </button>
  );

  const RoleCard = ({ label, emoji }: { label: string; emoji: string }) => (
    <button
      type="button"
      onClick={() => {
        setRole(label);
        // If team size already selected and we're on step 2, advance
        if (step === 2 && teamSize) {
          setTimeout(() => setStep(3), 150);
        }
      }}
      className={`group flex items-center gap-4 w-full text-left p-4 rounded-xl border transition-all duration-200 bg-[#0B0E1A]/60 hover:border-[#FF6634]/60 ${
        role === label ? "border-[#FF6634] ring-2 ring-[#FF6634]/30" : "border-[#2A3441]"
      }`}
    >
      <span className="text-xl">{emoji}</span>
      <span className="text-sm md:text-base text-white">{label}</span>
      {role === label && <Check className="ml-auto h-4 w-4 text-[#FF6634]" />}
    </button>
  );

  const SizeChip = ({ label, emoji }: { label: string; emoji: string }) => (
    <button
      type="button"
      onClick={() => {
        setTeamSize(label);
        // If role already selected and we're on step 2, advance
        if (step === 2 && role) {
          setTimeout(() => setStep(3), 150);
        }
      }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm md:text-base transition-colors ${
        teamSize === label
          ? "bg-[#FF6634] border-[#FF6634] text-white"
          : "bg-transparent border-[#2A3441] text-[#E1E5EB] hover:border-[#FF6634]"
      }`}
    >
      <span className="text-base">{emoji}</span>
      {label}
    </button>
  );

  const MethodCard = ({ label, emoji }: { label: string; emoji: string }) => {
    const checked = methods.includes(label);
    return (
      <button
        type="button"
        onClick={() => {
          setMethods((prev) => {
            const next = prev.includes(label) ? prev.filter((m) => m !== label) : [...prev, label];
            // On selecting the first option in step 3, proceed automatically
            if (step === 3 && prev.length === 0 && next.length > 0 && !submitting) {
              setTimeout(() => {
                proceed();
              }, 150);
            }
            return next;
          });
        }}
        className={`flex items-center gap-4 w-full text-left p-4 rounded-xl border transition-all duration-200 bg-[#0B0E1A]/60 ${
          checked
            ? "border-[#FF6634] ring-2 ring-[#FF6634]/30"
            : "border-[#2A3441] hover:border-[#FF6634]/60"
        }`}
      >
        <span className="text-xl">{emoji}</span>
        <span className="text-sm md:text-base text-white">{label}</span>
        <span
          className={`ml-auto h-5 w-5 rounded-md border flex items-center justify-center ${
            checked ? "bg-[#FF6634] border-[#FF6634]" : "border-[#2A3441]"
          }`}
        >
          {checked && <Check className="h-4 w-4 text-white" />}
        </span>
      </button>
    );
  };

  return (
    <div className="min-h-svh bg-[#0B0E1A] text-white flex flex-col">
      {/* Top progress */}
      <div className="w-full border-b border-[#2A3441] bg-[#0B0E1A]/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://i.postimg.cc/bvqJBxD6/Logo-Synth-sin-fondo.png"
              alt="Synth"
              className="h-7 w-auto"
            />
            <span className="text-sm text-[#E1E5EB]">Onboarding</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#E1E5EB]">
            <span>
              Paso {step} de 3
            </span>
            <div className="w-28 h-1.5 bg-[#1A1F2E] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#FF6634] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-3xl">
          {step === 1 && (
            <div className="space-y-8 animate-fadeInUp">
              <div className="text-center space-y-3">
                <p className="text-2xl md:text-3xl font-bold">¡Qué bueno verte!</p>
                <p className="text-2xl md:text-3xl font-bold">Estás a punto de transformar cómo haces investigación.</p>
                <p className="text-base md:text-lg text-[#E1E5EB]">Para empezar, ¿cuál es tu objetivo principal hoy con Synth?</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <GoalCard label="Probar una nueva idea de producto o campaña" emoji="🧪" />
                <GoalCard label="Entender mejor a mis clientes actuales" emoji="👥" />
                <GoalCard label="Explorar un problema de negocio sin una hipótesis clara" emoji="💡" />
                <GoalCard label="Mejorar cómo preparo entrevistas o focus groups" emoji="🎤" />
                <GoalCard label="Solo estoy explorando" emoji="🤔" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-fadeInUp">
              <div className="text-center space-y-3">
                <p className="text-2xl md:text-3xl font-bold">Entendido. Configuremos tu espacio de trabajo ideal.</p>
                <p className="text-base md:text-lg text-[#E1E5EB]">¿Cuál de estos roles te describe mejor?</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <RoleCard label="Fundador/a / Emprendedor/a" emoji="🚀" />
                <RoleCard label="Marketing / Crecimiento" emoji="📈" />
                <RoleCard label="Diseño / UX / Producto" emoji="🎨" />
                <RoleCard label="Investigación / Estrategia" emoji="📊" />
                <RoleCard label="Agencia / Consultor/a" emoji="🏢" />
                <RoleCard label="Estudiante / Académico/a" emoji="👨‍🎓" />
              </div>

              <div className={`space-y-3 transition-all duration-300 ${role ? "opacity-100 translate-y-0" : "opacity-60"}`}>
                <p className="text-center text-base md:text-lg text-[#E1E5EB]">
                  ¿Y de qué tamaño es tu equipo?
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <SizeChip label="Solo yo" emoji="👤" />
                  <SizeChip label="2-10 personas" emoji="👥" />
                  <SizeChip label="11-50 personas" emoji="🏢" />
                  <SizeChip label="51+ personas" emoji="🏙️" />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-fadeInUp">
              <div className="text-center space-y-3">
                <p className="text-2xl md:text-3xl font-bold">Perfecto. Una última pregunta para entender tu contexto.</p>
                <p className="text-base md:text-lg text-[#E1E5EB]">
                  ¿Cómo investigas actualmente a tus clientes? <span className="text-[#9AA3AF]">(Selecciona todas las que apliquen)</span>
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <MethodCard label="Entrevistas y focus groups tradicionales" emoji="🗣️" />
                <MethodCard label="Encuestas (SurveyMonkey, Typeform, etc.)" emoji="📝" />
                <MethodCard label="Analítica de datos (Google Analytics, etc.)" emoji="📈" />
                <MethodCard label="Hablar directamente con ellos (sin proceso formal)" emoji="💬" />
                <MethodCard label="No lo hacemos mucho (o recién estamos empezando)" emoji="😔" />
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer actions */}
      <div className="w-full border-t border-[#2A3441] bg-[#0B0E1A]/80">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between gap-3">
          <Button variant="outline" className="border-[#2A3441] text-white hover:bg-[#1A1F2E]" onClick={back} disabled={step === 1 || submitting}>
            <ChevronLeft className="h-4 w-4 mr-1" /> Atrás
          </Button>
          <div className="text-sm text-[#E1E5EB]">Paso {step} de 3</div>
          <Button
            className={`px-6 ${canContinue ? "bg-[#FF6634] hover:bg-[#FF6634]/90" : "bg-[#2A3441] cursor-not-allowed"}`}
            onClick={proceed}
            disabled={!canContinue || submitting}
          >
            {step < 3 ? (
              <>
                Continuar <ChevronRight className="h-4 w-4 ml-1" />
              </>
            ) : (
              <>{submitting ? "Guardando..." : "Crear tu cuenta"}</>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};