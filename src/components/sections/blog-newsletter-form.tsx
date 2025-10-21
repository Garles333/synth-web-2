"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedTextHighlight } from "@/components/ui/animated-text-highlight";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

interface BlogNewsletterFormProps {
  locale?: "es" | "en";
}

const translations = {
  es: {
    heading: "Mantente",
    headingHighlight: "Actualizado",
    description: "Recibe los últimos insights sobre investigación sintética, casos de éxito y metodologías innovadoras directamente en tu inbox.",
    placeholder: "tu@email.com",
    button: "Suscribirse",
    buttonLoading: "Enviando...",
    disclaimer: "Sin spam. Cancela cuando quieras. Publicamos contenido cada semana.",
    errorInvalid: "Por favor, ingresa un email válido",
    errorGeneral: "Hubo un error al procesar tu suscripción. Intenta nuevamente.",
    success: "¡Gracias por suscribirte! Recibirás nuestros insights pronto."
  },
  en: {
    heading: "Stay",
    headingHighlight: "Updated",
    description: "Receive the latest insights on synthetic research, success stories, and innovative methodologies directly in your inbox.",
    placeholder: "your@email.com",
    button: "Subscribe",
    buttonLoading: "Sending...",
    disclaimer: "No spam. Cancel anytime. We publish content every week.",
    errorInvalid: "Please enter a valid email",
    errorGeneral: "There was an error processing your subscription. Please try again.",
    success: "Thank you for subscribing! You'll receive our insights soon."
  }
};

export const BlogNewsletterForm = ({ locale = "es" }: BlogNewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const t = translations[locale];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error(t.errorInvalid);
      return;
    }

    setIsLoading(true);
    setShowSuccess(false);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          locale,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t.errorGeneral);
      }

      setShowSuccess(true);
      setEmail("");
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error(t.errorGeneral);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1A1F2E] to-[#0B0E1A]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          {t.heading} <AnimatedTextHighlight>{t.headingHighlight}</AnimatedTextHighlight>
        </h2>
        <p className="text-xl text-[#E1E5EB] mb-8">
          {t.description}
        </p>

        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder={t.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="px-4 py-3 bg-[#1A1F2E] border border-[#2A3441] rounded-lg text-white placeholder-[#E1E5EB] focus:outline-none focus:border-[#FF6634] flex-1 disabled:opacity-50"
              required
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-[#FF6634] hover:bg-[#FF6634]/90 text-white px-8 py-3 disabled:opacity-50"
            >
              {isLoading ? t.buttonLoading : t.button}
            </Button>
          </form>

          {/* Success message inline */}
          {showSuccess && (
            <div className="mt-4 flex items-center justify-center gap-2 text-green-400 animate-fadeInUp">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm font-medium">{t.success}</span>
            </div>
          )}
        </div>

        <p className="text-sm text-[#E1E5EB] mt-4">
          {t.disclaimer}
        </p>
      </div>
    </section>
  );
};