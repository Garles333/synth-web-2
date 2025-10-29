"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

export const OnboardingFlowEn = () => {
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
        
        // 1. Save onboarding responses to database
        const res = await fetch("/api/onboarding-responses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token || ""}`,
          },
          body: JSON.stringify(payload),
        });

        // 2. Send to systeme.io with tags based on responses
        const tags = [
          "onboarding-completed",
          `goal-${goal.toLowerCase().replace(/\s+/g, "-")}`,
          `role-${role.toLowerCase().replace(/\s+/g, "-")}`,
          `team-${teamSize.toLowerCase().replace(/\s+/g, "-")}`
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
          // If systeme.io fails, continue anyway
          console.log("Systeme.io sync failed, continuing...");
        });

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
              Step {step} of 3
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
                <p className="text-2xl md:text-3xl font-bold">Great to see you!</p>
                <p className="text-2xl md:text-3xl font-bold">You're about to transform how you do research.</p>
                <p className="text-base md:text-lg text-[#E1E5EB]">To begin, what's your main goal today with Synth?</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <GoalCard label="Test a new product or campaign idea" emoji="🧪" />
                <GoalCard label="Understand my current customers better" emoji="👥" />
                <GoalCard label="Explore a business problem without a clear hypothesis" emoji="💡" />
                <GoalCard label="Improve how I prepare interviews or focus groups" emoji="🎤" />
                <GoalCard label="I'm just exploring" emoji="🤔" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-fadeInUp">
              <div className="text-center space-y-3">
                <p className="text-2xl md:text-3xl font-bold">Got it. Let's set up your ideal workspace.</p>
                <p className="text-base md:text-lg text-[#E1E5EB]">Which of these roles describes you best?</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <RoleCard label="Founder / Entrepreneur" emoji="🚀" />
                <RoleCard label="Marketing / Growth" emoji="📈" />
                <RoleCard label="Design / UX / Product" emoji="🎨" />
                <RoleCard label="Researcher / Strategist" emoji="📊" />
                <RoleCard label="Agency / Consultant" emoji="🏢" />
                <RoleCard label="Student / Academic" emoji="👨‍🎓" />
              </div>

              <div className={`space-y-3 transition-all duration-300 ${role ? "opacity-100 translate-y-0" : "opacity-60"}`}>
                <p className="text-center text-base md:text-lg text-[#E1E5EB]">
                  And what's your team size?
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <SizeChip label="Just me" emoji="👤" />
                  <SizeChip label="2-10 people" emoji="👥" />
                  <SizeChip label="11-50 people" emoji="🏢" />
                  <SizeChip label="51+ people" emoji="🏙️" />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-fadeInUp">
              <div className="text-center space-y-3">
                <p className="text-2xl md:text-3xl font-bold">Perfect. One last question to understand your context.</p>
                <p className="text-base md:text-lg text-[#E1E5EB]">
                  How do you currently research your customers? <span className="text-[#9AA3AF]">(Select all that apply)</span>
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <MethodCard label="Traditional interviews and focus groups" emoji="🗣️" />
                <MethodCard label="Surveys (SurveyMonkey, Typeform, etc.)" emoji="📝" />
                <MethodCard label="Data analytics (Google Analytics, etc.)" emoji="📈" />
                <MethodCard label="Talking directly with them (no formal process)" emoji="💬" />
                <MethodCard label="We don't do it much (or we're just starting)" emoji="😔" />
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer actions */}
      <div className="w-full border-t border-[#2A3441] bg-[#0B0E1A]/80">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between gap-3">
          <Button variant="outline" className="border-[#2A3441] text-white hover:bg-[#1A1F2E]" onClick={back} disabled={step === 1 || submitting}>
            <ChevronLeft className="h-4 w-4 mr-1" /> Back
          </Button>
          <div className="text-sm text-[#E1E5EB]">Step {step} of 3</div>
          <Button
            className={`px-6 ${canContinue ? "bg-[#FF6634] hover:bg-[#FF6634]/90" : "bg-[#2A3441] cursor-not-allowed"}`}
            onClick={proceed}
            disabled={!canContinue || submitting}
          >
            {step < 3 ? (
              <>
                Continue <ChevronRight className="h-4 w-4 ml-1" />
              </>
            ) : (
              <>{submitting ? "Saving..." : "Create your account"}</>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};