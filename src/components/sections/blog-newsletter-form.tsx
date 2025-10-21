"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedTextHighlight } from "@/components/ui/animated-text-highlight";
import { toast } from "sonner";

export const BlogNewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Por favor, ingresa un email válido");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          locale: "es",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al suscribirse");
      }

      toast.success("¡Gracias por suscribirte! Recibirás nuestros insights pronto.");
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error("Hubo un error al procesar tu suscripción. Intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1A1F2E] to-[#0B0E1A]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Mantente <AnimatedTextHighlight>Actualizado</AnimatedTextHighlight>
        </h2>
        <p className="text-xl text-[#E1E5EB] mb-8">
          Recibe los últimos insights sobre investigación sintética, casos de éxito y
          metodologías innovadoras directamente en tu inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="tu@email.com"
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
            {isLoading ? "Enviando..." : "Suscribirse"}
          </Button>
        </form>

        <p className="text-sm text-[#E1E5EB] mt-4">
          Sin spam. Cancela cuando quieras. Publicamos contenido cada semana.
        </p>
      </div>
    </section>
  );
};
