import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, Target, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'Manifiesto - El Fin de la Espera | Synth',
  description: 'La lentitud es el enemigo de la oportunidad. El trabajo de campo tradicional está roto. Declaramos el fin de la espera.',
  alternates: {
    canonical: 'https://synth.com.es/manifiesto',
  }
};

export default function ManifiestoPage() {
  return (
    <div className="min-h-screen bg-[#0B0E1A] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF6634]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FF6634]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal direction="up" distance={80}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1A1F2E] border border-[#FF6634]/30 mb-8 transform hover:scale-105 transition-all duration-300">
                <Zap className="w-4 h-4 text-[#FF6634] mr-2" />
                <span className="text-sm text-[#E1E5EB] font-medium">Nuestro Manifiesto</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[#FF6634] bg-clip-text text-transparent">
                El Fin de la Espera
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-[#E1E5EB] font-light max-w-3xl mx-auto leading-relaxed">
                La lentitud es el enemigo de la oportunidad. El trabajo de campo tradicional está roto.
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sección 1: La Declaración */}
      <ScrollReveal direction="left" distance={100}>
        <section className="py-20 px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-[#1A1F2E]/80 to-[#0B0E1A]/60 border border-[#2A3441] rounded-3xl p-12 md:p-16 overflow-hidden group hover:border-[#FF6634]/50 transition-all duration-500">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF6634]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#FF6634]/20 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#FF6634]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">La Declaración</h3>
              </div>

              <div className="space-y-6 text-lg md:text-xl text-[#E1E5EB] leading-relaxed">
                <p className="font-semibold text-white text-2xl">
                  El modelo de investigación de mercados se construyó para un mundo que ya no existe.
                </p>
                
                <p>
                  Un mundo donde las empresas podían permitirse esperar 6, 8 o 10 semanas por un informe. Un mundo donde las decisiones se movían a la velocidad de las hojas de cálculo y las reuniones presenciales.
                </p>
                
                <p className="font-bold text-white text-2xl">
                  Ese mundo ha muerto.
                </p>
                
                <p>
                  Hoy, la velocidad es la única ventaja competitiva. Sin embargo, seguimos atados a un proceso de fieldwork que nos obliga a esperar.
                </p>
                
                <p>
                  Esperar por el reclutamiento. Esperar por la logística. Esperar por las transcripciones. Esperar por el análisis.
                </p>
                
                <p className="text-[#FF6634] font-semibold text-xl">
                  Para cuando llega el "insight", la tendencia ha mutado, el competidor ha reaccionado y la oportunidad se ha evaporado.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Sección 2: El Coste Real de la Espera */}
      <ScrollReveal direction="right" distance={100}>
        <section className="py-20 px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-[#1A1F2E]/80 to-[#0B0E1A]/60 border border-[#2A3441] rounded-3xl p-12 md:p-16 overflow-hidden group hover:border-[#FF6634]/50 transition-all duration-500">
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#FF6634]/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#FF6634]/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#FF6634]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">El Coste Real de la Espera</h3>
              </div>

              <div className="space-y-6 text-lg md:text-xl text-[#E1E5EB] leading-relaxed">
                <p className="font-semibold text-white text-xl">
                  Pero la lentitud es solo el síntoma. La verdadera enfermedad es la incertidumbre.
                </p>
                
                <p>
                  Como el trabajo de campo es caro y lento, te ves forzado a limitar tus preguntas.
                </p>
                
                <p>
                  En lugar de testear 20 ideas, testeas 2. En lugar de explorar 5 segmentos culturales, exploras 1. En lugar de simular 10 escenarios de mercado, rezas por que el tuyo funcione.
                </p>
                
                <p className="text-[#FF6634] font-semibold text-2xl border-l-4 border-[#FF6634] pl-6">
                  El mayor coste de la espera no es el tiempo perdido; es la innovación que sacrificas. Son las grandes ideas que mueren en una reunión porque "no hay tiempo para validarlas".
                </p>
                
                <p className="font-semibold text-white text-xl">
                  Tomas decisiones de millones basándote en un fragmento de la realidad, o peor, en la intuición.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Sección 3: Nuestra Declaración de Principios */}
      <ScrollReveal direction="up" distance={80}>
        <section className="py-20 px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-[#FF6634]/10 via-[#1A1F2E] to-[#0B0E1A] border-2 border-[#FF6634]/50 rounded-3xl p-12 md:p-16 overflow-hidden">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6634]/0 via-[#FF6634]/10 to-[#FF6634]/0 opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="w-12 h-12 bg-[#FF6634]/30 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#FF6634]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">Nuestra Declaración de Principios</h3>
              </div>

              <div className="space-y-6 text-lg md:text-xl text-[#E1E5EB] leading-relaxed relative z-10">
                <p className="font-semibold text-white text-2xl">
                  Creemos en un nuevo paradigma.
                </p>
                
                <div className="space-y-4">
                  <p className="flex items-start gap-3">
                    <span className="text-[#FF6634] text-2xl">•</span>
                    <span>Creemos que la velocidad y la profundidad no son opuestas.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#FF6634] text-2xl">•</span>
                    <span>Creemos que la curiosidad no debe ser castigada con demoras.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#FF6634] text-2xl">•</span>
                    <span>Creemos que la incertidumbre es un problema de ingeniería, y lo hemos resuelto.</span>
                  </p>
                </div>
                
                <div className="pt-6 border-t border-[#FF6634]/30 mt-8">
                  <p className="text-white font-bold text-3xl mb-3">
                    Declaramos el fin de la espera.
                  </p>
                  <p className="text-[#FF6634] font-bold text-3xl">
                    Declaramos el inicio de la simulación instantánea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Sección 4: El Nuevo Modelo */}
      <ScrollReveal direction="left" distance={100}>
        <section className="py-20 px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-[#1A1F2E]/80 to-[#0B0E1A]/60 border border-[#2A3441] rounded-3xl p-12 md:p-16 overflow-hidden group hover:border-[#FF6634]/50 transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#FF6634]/20 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-[#FF6634]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">El Nuevo Modelo</h3>
              </div>

              <div className="space-y-6 text-lg md:text-xl text-[#E1E5EB] leading-relaxed">
                <p className="font-semibold text-white text-2xl">
                  Por eso hemos construido el "Sandbox" de la Experiencia Humana.
                </p>
                
                <p>
                  No es una herramienta de investigación más rápida. Es un laboratorio de comportamiento 24/7. Un campo de pruebas ilimitado donde puedes reducir la incertidumbre a cero, en cuestión de horas.
                </p>
                
                <p className="font-semibold text-white text-xl">
                  Un lugar donde tú no eres el cliente pasivo esperando un informe.
                </p>
                
                <p className="text-[#FF6634] font-bold text-2xl">
                  Eres el Director de Simulación.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-[#0B0E1A]/50 border border-[#FF6634]/20 rounded-xl p-6 hover:border-[#FF6634]/50 transition-all duration-300 transform hover:scale-105">
                    <h4 className="text-[#FF6634] font-bold text-lg mb-3">Tú diseñas los actores</h4>
                    <p className="text-base text-[#E1E5EB]">
                      Creas perfiles humanos con una profundidad psicológica y cultural inquebrantable.
                    </p>
                  </div>

                  <div className="bg-[#0B0E1A]/50 border border-[#FF6634]/20 rounded-xl p-6 hover:border-[#FF6634]/50 transition-all duration-300 transform hover:scale-105" style={{ animationDelay: '0.1s' }}>
                    <h4 className="text-[#FF6634] font-bold text-lg mb-3">Tú diriges la escena</h4>
                    <p className="text-base text-[#E1E5EB]">
                      Testeas tus ideas contra sesgos cognitivos, estados emocionales y contextos sociales.
                    </p>
                  </div>

                  <div className="bg-[#0B0E1A]/50 border border-[#FF6634]/20 rounded-xl p-6 hover:border-[#FF6634]/50 transition-all duration-300 transform hover:scale-105" style={{ animationDelay: '0.2s' }}>
                    <h4 className="text-[#FF6634] font-bold text-lg mb-3">Tú haces todas las pruebas necesarias</h4>
                    <p className="text-base text-[#E1E5EB]">
                      Lanzas tus campañas, productos y guiones de venta en el 'sandbox' y obtienes respuestas profundas hoy.
                    </p>
                  </div>
                </div>

                <p className="font-bold text-white text-xl pt-6 border-t border-[#2A3441] mt-8">
                  El fieldwork tradicional te da una foto borrosa del pasado. La simulación te da un mapa HD del futuro.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Sección 5: El Próximo Paso */}
      <ScrollReveal direction="up" distance={80}>
        <section className="py-20 px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-[#FF6634]/20 via-[#1A1F2E] to-[#0B0E1A] border-2 border-[#FF6634] rounded-3xl p-12 md:p-16 text-center overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF6634]/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#FF6634]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-bold mb-6">El Próximo Paso</h3>
                
                <div className="space-y-4 text-xl md:text-2xl text-[#E1E5EB] leading-relaxed mb-10">
                  <p className="font-semibold text-white">
                    El trabajo de campo, como lo conoces, ha muerto.
                  </p>
                  <p className="text-[#FF6634] font-bold text-3xl">
                    La simulación acaba de empezar.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/onboarding">
                    <Button className="bg-[#FF6634] hover:bg-[#FF6634]/90 text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6634]/50">
                      Comienza Gratis
                      <Rocket className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  
                  <Link href="/#precios">
                    <Button variant="outline" className="border-[#FF6634] text-white hover:bg-[#FF6634]/10 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300">
                      Explorar Precios
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer spacer */}
      <div className="h-20"></div>
    </div>
  );
}
