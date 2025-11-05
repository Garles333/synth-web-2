import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, Target, Rocket, Sparkles, TrendingDown, AlertCircle } from "lucide-react";
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
    <div className="min-h-screen bg-[#0B0E1A] text-white relative overflow-hidden">
      {/* Global background effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#FF6634]/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-2/3 right-0 w-[500px] h-[500px] bg-[#FF6634]/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF6634]/3 rounded-full blur-[80px]"></div>
      </div>

      {/* Hero Section - Reduced padding */}
      <section className="relative pt-28 pb-12 px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal direction="up" distance={60}>
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6634]/20 to-[#FF6634]/10 border border-[#FF6634]/40 mb-6 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#FF6634]/20">
                <Zap className="w-4 h-4 text-[#FF6634] mr-2" />
                <span className="text-sm text-white font-semibold">Nuestro Manifiesto</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-[#FF6634] to-white bg-clip-text text-transparent animate-fadeInUp leading-tight">
                El Fin de la Espera
              </h1>
              
              <div className="relative inline-block">
                <h2 className="text-xl md:text-2xl lg:text-3xl text-[#E1E5EB] font-light max-w-3xl mx-auto leading-relaxed">
                  La lentitud es el enemigo de la oportunidad.
                  <br />
                  <span className="text-[#FF6634] font-semibold">El trabajo de campo tradicional está roto.</span>
                </h2>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#FF6634] to-transparent"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content wrapper - tighter spacing */}
      <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-16 pb-20">
        
        {/* Sección 1: La Declaración */}
        <ScrollReveal direction="up" distance={40}>
          <article className="relative">
            {/* Section number badge */}
            <div className="absolute -left-4 top-0 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6634] to-[#FF6634]/60 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#FF6634]/30">
                01
              </div>
              <div className="hidden md:block w-20 h-px bg-gradient-to-r from-[#FF6634] to-transparent"></div>
            </div>

            <div className="ml-16 md:ml-20">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-[#FF6634]" />
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-[#E1E5EB] bg-clip-text text-transparent">
                  La Declaración
                </h3>
              </div>

              <div className="space-y-5 text-base md:text-lg leading-relaxed">
                <p className="text-white font-semibold text-xl md:text-2xl border-l-4 border-[#FF6634] pl-6 py-2 bg-gradient-to-r from-[#FF6634]/10 to-transparent">
                  El modelo de investigación de mercados se construyó para un mundo que ya no existe.
                </p>
                
                <p className="text-[#E1E5EB]">
                  Un mundo donde las empresas podían permitirse esperar <span className="text-white font-semibold">6, 8 o 10 semanas</span> por un informe. Un mundo donde las decisiones se movían a la velocidad de las hojas de cálculo y las reuniones presenciales.
                </p>
                
                <div className="relative py-4 my-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF6634]/20 to-transparent"></div>
                  <p className="relative text-center font-bold text-white text-2xl md:text-3xl">
                    Ese mundo ha muerto.
                  </p>
                </div>
                
                <p className="text-[#E1E5EB]">
                  Hoy, <span className="text-[#FF6634] font-semibold">la velocidad es la única ventaja competitiva</span>. Sin embargo, seguimos atados a un proceso de fieldwork que nos obliga a esperar.
                </p>
                
                <div className="bg-[#1A1F2E]/60 border border-[#2A3441] rounded-xl p-6 space-y-2">
                  <p className="text-[#E1E5EB] flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#FF6634] mt-1 flex-shrink-0" />
                    <span>Esperar por el <strong className="text-white">reclutamiento</strong></span>
                  </p>
                  <p className="text-[#E1E5EB] flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#FF6634] mt-1 flex-shrink-0" />
                    <span>Esperar por la <strong className="text-white">logística</strong></span>
                  </p>
                  <p className="text-[#E1E5EB] flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#FF6634] mt-1 flex-shrink-0" />
                    <span>Esperar por las <strong className="text-white">transcripciones</strong></span>
                  </p>
                  <p className="text-[#E1E5EB] flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#FF6634] mt-1 flex-shrink-0" />
                    <span>Esperar por el <strong className="text-white">análisis</strong></span>
                  </p>
                </div>
                
                <p className="text-[#FF6634] font-semibold text-lg md:text-xl italic border-l-4 border-[#FF6634] pl-6 py-2">
                  Para cuando llega el "insight", la tendencia ha mutado, el competidor ha reaccionado y la oportunidad se ha evaporado.
                </p>
              </div>
            </div>
          </article>
        </ScrollReveal>

        {/* Sección 2: El Coste Real de la Espera */}
        <ScrollReveal direction="up" distance={40}>
          <article className="relative">
            <div className="absolute -left-4 top-0 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6634] to-[#FF6634]/60 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#FF6634]/30">
                02
              </div>
              <div className="hidden md:block w-20 h-px bg-gradient-to-r from-[#FF6634] to-transparent"></div>
            </div>

            <div className="ml-16 md:ml-20">
              <div className="flex items-center gap-3 mb-6">
                <TrendingDown className="w-6 h-6 text-[#FF6634]" />
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-[#E1E5EB] bg-clip-text text-transparent">
                  El Coste Real de la Espera
                </h3>
              </div>

              <div className="space-y-5 text-base md:text-lg leading-relaxed">
                <p className="text-white font-semibold text-lg">
                  Pero la lentitud es solo el síntoma. <span className="text-[#FF6634]">La verdadera enfermedad es la incertidumbre.</span>
                </p>
                
                <p className="text-[#E1E5EB]">
                  Como el trabajo de campo es caro y lento, te ves forzado a <span className="text-white font-semibold">limitar tus preguntas</span>.
                </p>

                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="bg-[#1A1F2E]/80 border border-[#FF6634]/30 rounded-lg p-4 text-center hover:border-[#FF6634] transition-colors">
                    <div className="text-3xl font-bold text-[#FF6634] mb-1">20 → 2</div>
                    <div className="text-sm text-[#E1E5EB]">Ideas testeadas</div>
                  </div>
                  <div className="bg-[#1A1F2E]/80 border border-[#FF6634]/30 rounded-lg p-4 text-center hover:border-[#FF6634] transition-colors">
                    <div className="text-3xl font-bold text-[#FF6634] mb-1">5 → 1</div>
                    <div className="text-sm text-[#E1E5EB]">Segmentos explorados</div>
                  </div>
                  <div className="bg-[#1A1F2E]/80 border border-[#FF6634]/30 rounded-lg p-4 text-center hover:border-[#FF6634] transition-colors">
                    <div className="text-3xl font-bold text-[#FF6634] mb-1">10 → 1</div>
                    <div className="text-sm text-[#E1E5EB]">Escenarios simulados</div>
                  </div>
                </div>
                
                <div className="relative bg-gradient-to-r from-[#FF6634]/10 via-[#FF6634]/5 to-transparent border-l-4 border-[#FF6634] rounded-r-lg p-6 my-6">
                  <p className="text-white font-bold text-xl md:text-2xl mb-3">
                    El mayor coste de la espera no es el tiempo perdido
                  </p>
                  <p className="text-[#E1E5EB] text-lg">
                    Es la <span className="text-[#FF6634] font-semibold">innovación que sacrificas</span>. Son las grandes ideas que mueren en una reunión porque <em>"no hay tiempo para validarlas"</em>.
                  </p>
                </div>
                
                <p className="text-white font-semibold text-lg bg-[#1A1F2E]/60 border border-[#2A3441] rounded-lg p-5">
                  Tomas decisiones de millones basándote en un fragmento de la realidad, o peor, en la intuición.
                </p>
              </div>
            </div>
          </article>
        </ScrollReveal>

        {/* Sección 3: Nuestra Declaración de Principios */}
        <ScrollReveal direction="up" distance={40}>
          <article className="relative">
            <div className="absolute -left-4 top-0 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6634] to-[#FF6634]/60 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#FF6634]/30">
                03
              </div>
              <div className="hidden md:block w-20 h-px bg-gradient-to-r from-[#FF6634] to-transparent"></div>
            </div>

            <div className="ml-16 md:ml-20">
              <div className="relative bg-gradient-to-br from-[#FF6634]/20 via-[#1A1F2E] to-[#0B0E1A] border-2 border-[#FF6634] rounded-2xl p-8 md:p-10 overflow-hidden">
                {/* Animated glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF6634]/10 to-transparent opacity-50 animate-pulse"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="w-7 h-7 text-[#FF6634]" />
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Nuestra Declaración de Principios
                    </h3>
                  </div>

                  <div className="space-y-5 text-base md:text-lg leading-relaxed">
                    <p className="text-white font-semibold text-2xl">
                      Creemos en un nuevo paradigma.
                    </p>
                    
                    <div className="space-y-3 my-6">
                      <div className="flex items-start gap-3 group">
                        <div className="w-2 h-2 rounded-full bg-[#FF6634] mt-2 group-hover:scale-150 transition-transform"></div>
                        <p className="text-[#E1E5EB] flex-1">Creemos que <strong className="text-white">la velocidad y la profundidad no son opuestas</strong>.</p>
                      </div>
                      <div className="flex items-start gap-3 group">
                        <div className="w-2 h-2 rounded-full bg-[#FF6634] mt-2 group-hover:scale-150 transition-transform"></div>
                        <p className="text-[#E1E5EB] flex-1">Creemos que <strong className="text-white">la curiosidad no debe ser castigada con demoras</strong>.</p>
                      </div>
                      <div className="flex items-start gap-3 group">
                        <div className="w-2 h-2 rounded-full bg-[#FF6634] mt-2 group-hover:scale-150 transition-transform"></div>
                        <p className="text-[#E1E5EB] flex-1">Creemos que <strong className="text-white">la incertidumbre es un problema de ingeniería</strong>, y lo hemos resuelto.</p>
                      </div>
                    </div>
                    
                    <div className="border-t-2 border-[#FF6634]/50 pt-6 mt-8 text-center space-y-3">
                      <p className="text-white font-bold text-2xl md:text-3xl">
                        Declaramos el fin de la espera.
                      </p>
                      <p className="text-[#FF6634] font-bold text-2xl md:text-3xl">
                        Declaramos el inicio de la simulación instantánea.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </ScrollReveal>

        {/* Sección 4: El Nuevo Modelo */}
        <ScrollReveal direction="up" distance={40}>
          <article className="relative">
            <div className="absolute -left-4 top-0 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6634] to-[#FF6634]/60 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#FF6634]/30">
                04
              </div>
              <div className="hidden md:block w-20 h-px bg-gradient-to-r from-[#FF6634] to-transparent"></div>
            </div>

            <div className="ml-16 md:ml-20">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-6 h-6 text-[#FF6634]" />
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-[#E1E5EB] bg-clip-text text-transparent">
                  El Nuevo Modelo
                </h3>
              </div>

              <div className="space-y-5 text-base md:text-lg leading-relaxed">
                <p className="text-white font-semibold text-xl md:text-2xl">
                  Por eso hemos construido el <span className="text-[#FF6634]">"Sandbox"</span> de la Experiencia Humana.
                </p>
                
                <p className="text-[#E1E5EB]">
                  No es una herramienta de investigación más rápida. Es un <strong className="text-white">laboratorio de comportamiento 24/7</strong>. Un campo de pruebas ilimitado donde puedes reducir la incertidumbre a cero, en cuestión de horas.
                </p>
                
                <div className="bg-gradient-to-r from-[#1A1F2E] to-[#0B0E1A] border border-[#FF6634]/30 rounded-xl p-6 my-6">
                  <p className="text-[#E1E5EB] mb-3">
                    Un lugar donde tú no eres el cliente pasivo esperando un informe.
                  </p>
                  <p className="text-white font-bold text-2xl">
                    Eres el <span className="text-[#FF6634]">Director de Simulación</span>.
                  </p>
                </div>

                <div className="grid gap-4 my-6">
                  <div className="bg-gradient-to-r from-[#1A1F2E]/80 to-transparent border-l-4 border-[#FF6634] rounded-r-xl p-5 hover:from-[#1A1F2E] transition-all">
                    <h4 className="text-[#FF6634] font-bold text-lg mb-2 flex items-center gap-2">
                      <span className="text-2xl">→</span> Tú diseñas los actores
                    </h4>
                    <p className="text-[#E1E5EB] text-base pl-7">
                      Creas perfiles humanos con una profundidad psicológica y cultural inquebrantable.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#1A1F2E]/80 to-transparent border-l-4 border-[#FF6634] rounded-r-xl p-5 hover:from-[#1A1F2E] transition-all">
                    <h4 className="text-[#FF6634] font-bold text-lg mb-2 flex items-center gap-2">
                      <span className="text-2xl">→</span> Tú diriges la escena
                    </h4>
                    <p className="text-[#E1E5EB] text-base pl-7">
                      Testeas tus ideas contra sesgos cognitivos, estados emocionales y contextos sociales.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#1A1F2E]/80 to-transparent border-l-4 border-[#FF6634] rounded-r-xl p-5 hover:from-[#1A1F2E] transition-all">
                    <h4 className="text-[#FF6634] font-bold text-lg mb-2 flex items-center gap-2">
                      <span className="text-2xl">→</span> Tú haces todas las pruebas necesarias
                    </h4>
                    <p className="text-[#E1E5EB] text-base pl-7">
                      Lanzas tus campañas, productos y guiones de venta en el 'sandbox' y obtienes respuestas profundas hoy.
                    </p>
                  </div>
                </div>

                <div className="relative mt-8 p-6 bg-gradient-to-br from-[#FF6634]/10 to-transparent border border-[#FF6634]/40 rounded-xl">
                  <p className="text-white font-bold text-lg md:text-xl text-center">
                    El fieldwork te da una respuesta <span className="text-[#FF6634]">(tarde y cara)</span>.
                    <br />
                    La simulación te da un <span className="text-[#FF6634]">campo de pruebas ilimitado (al instante)</span>.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </ScrollReveal>

        {/* Sección 5: El Próximo Paso - CTA Final */}
        <ScrollReveal direction="up" distance={40}>
          <div className="relative">
            <div className="absolute -left-4 top-8 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6634] to-[#FF6634]/60 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#FF6634]/30 animate-pulse">
                05
              </div>
              <div className="hidden md:block w-20 h-px bg-gradient-to-r from-[#FF6634] to-transparent"></div>
            </div>

            <div className="relative bg-gradient-to-br from-[#FF6634] via-[#FF6634]/90 to-[#FF6634]/80 rounded-2xl p-10 md:p-12 overflow-hidden shadow-2xl shadow-[#FF6634]/40">
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
                  <Rocket className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                  El Próximo Paso
                </h3>
                
                <div className="space-y-4 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                  <p className="text-white/90 font-medium">
                    El trabajo de campo, como lo conoces, ha muerto.
                  </p>
                  <p className="text-white font-bold text-2xl md:text-3xl">
                    La simulación acaba de empezar.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/onboarding">
                    <Button className="bg-white hover:bg-white/90 text-[#FF6634] px-8 py-6 text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                      Comienza Gratis
                      <Rocket className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  
                  <Link href="/#precios">
                    <Button variant="outline" className="border-2 border-white text-white bg-white/10 hover:bg-white/20 px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                      Explorar Precios
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer spacer */}
      <div className="h-16"></div>
    </div>
  );
}