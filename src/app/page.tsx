import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedTextHighlight } from "@/components/blocks/text-animations/animated-text-highlight";
import { HeroMobileAnimated } from "@/components/blocks/heros/hero-mobile-animated";
import { HeroDesktopAnimated } from "@/components/blocks/heros/hero-desktop-animated";
import { TrackedCTAButton } from "@/components/ui/tracked-cta-button";
import { DemoDialogTrigger } from "@/components/ui/demo-dialog-trigger";
import { TypewriterModern } from "@/components/blocks/text-animations/typewriter-modern";
import {
  ArrowRight,
  Shield,
  Clock,
  Rocket,
  Lightbulb,
  MessageCircle,
  Users,
  Search,
  CheckCircle,
  Play,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Sparkles,
  Zap } from
"lucide-react";
import { AhorroSynthCalculator } from "@/components/sections/ahorro-synth-calculator";
import { NewsletterBannerHome } from "@/components/blocks/newsletter-sections/newsletter-banner-home";
import { BlogPreviewSection } from "@/components/sections/blog-preview-section";
import { FaqSection } from "@/components/blocks/faqs/faq-section";
import { Testimonial3DRoulette } from "@/components/blocks/testimonials/testimonials-3d-roulette";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArquitecturaTecnologica } from "@/components/sections/arquitectura-tecnologica";
import { Pricing } from "@/components/sections/pricing";
import { ValidationCarousel } from "@/components/blocks/feature-sections/validation-carousel";
import { RealismSynthLayers } from "@/components/sections/realism-synth-layers";
import { SparkSection } from "@/components/sections/spark-section";
import { DiferenciaFundamental } from "@/components/sections/diferencia-fundamental";
import { LaboratorioRealismo } from "@/components/sections/laboratorio-realismo";
import Link from "next/link";
import { fetchPosts } from "@/lib/contentful";

export const metadata = {
  title: 'Plataforma de simulación con datos sintéticos: Testea, valida y refina tus decisiones de negocio antes del impacto real.',
  description:
  'Plataforma de simulación con datos sintéticos: Testea, valida y refina tus decisiones de negocio antes del impacto real.',
  alternates: {
    canonical: 'https://synth.com.es/',
    languages: {
      'es-ES': 'https://synth.com.es/',
      'es-MX': 'https://mx.synth.com.es/',
      'en-US': 'https://synth.com.es/en'
    }
  }
};

export const revalidate = 60;
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await fetchPosts();
  const articles = posts.map((p) => ({
    title: p.title,
    excerpt: p.excerpt || "",
    image: p.coverImageUrl || p.imageUrl,
    slug: p.slug
  }));

  function formatFaqHtml(raw: string) {
    const keys = [
    'Motor de Insights Synth', 'Biblioteca de Conocimiento', 'insights contextuales', 'Perfiles Multi-capa de Personas', 'Consistencia impulsada por IA', 'Conocimiento específico de marca',
    'exploración rápida', 'validación direccional', 'descartar ideas', 'comparar múltiples conceptos', 'entender lenguaje del consumidor',
    'exportar', 'integraciones nativas', 'Metodologías', 'focus group', 'transcripciones', 'análisis generado por IA', 'JSON',
    'Preparación', 'Ejecución', 'Análisis', 'insights accionables',
    'personalizar', 'laboratorios de IA', 'control total', 'director de investigación',
    'ahorros', 'más del 90%', 'costos directos', 'Calculadora de Ahorros',
    'gratis', 'sin tarjeta de crédito'];


    let html = raw.
    split(/\n+/).
    map((p) => {
      let res = p;
      keys.forEach((c) => {
        res = res.replace(new RegExp(`(?<![\\w>])(${c.replace(/([.*+?^=!:${}()|\[\]\\])/g, "\\$1")})(?![\\w<])`, 'gi'), '<strong>$1</strong>');
      });
      return `<p>${res.trim()}</p>`;
    }).
    join('');

    html = html.replace(new RegExp('<p>- ([^<]+)</p>', 'g'), '<ul class="list-disc pl-8 my-2"><li>$1</li></ul>');
    return html;
  }

  const faqs = [
  {
    question: "¿Synth es solo otro chatbot avanzado?",
    answer: formatFaqHtml(`No. Mientras que un chatbot usa conocimiento genérico, cada participante Synth piensa y habla a través de las 5 capas de nuestro Motor de Realismo™: identidad, sesgos irracionales, cultura, emoción actual e intenciones. La diferencia es obtener una respuesta vs. entender a una persona.`)
  },
  {
    question: `¿Qué es exactamente el "Motor de Realismo™"?`,
    answer: formatFaqHtml(`Es nuestra arquitectura de 5 capas que asegura autenticidad. Como Director de Simulación, defines la <strong>Identidad</strong> (el ADN), inyectas <strong>Sesgos Cognitivos</strong> (el subconsciente), y modulas el <strong>Contexto</strong> (emoción, agenda). Nuestro motor añade la <strong>Capa Cultural</strong> (la tribu). ¿El resultado? Una réplica muy humana, no una máquina.`)
  },
  {
    question: `¿Qué son las "Cosmovisiones" y por qué importan?`,
    answer: formatFaqHtml(`Son los sistemas operativos culturales de tus clientes. Nuestro motor asigna automáticamente a cada participante un arquetipo cultural que define sus valores y lenguaje no escritos. Esto te permite validar si tu mensaje resuena con el <em>código</em> de la tribu. Ejecuta una simulación y ve si tu marca habla su idioma.`)
  },
  {
    question: `¿Por qué querría testear con participantes "irracionales" (con sesgos)?`,
    answer: formatFaqHtml(`Porque tus clientes son irracionales. Las personas reales no toman decisiones 100% lógicas; confían en atajos mentales. Al inyectar sesgos como "Aversión a la Pérdida", descubres las barreras emocionales reales hacia tu producto. Es la forma más rápida de pasar de idealizado a comportamiento real. Puedes elegir entre 9 sesgos.`)
  },
  {
    question: `Con tanto control, ¿cómo evito confirmar mis propios sesgos?`,
    answer: formatFaqHtml(`Atajamos el sesgo en dos frentes:
Antes de la simulación, con Spark: En lugar de que crees perfiles que confirmen tus propias ideas, Spark genera personas sintéticas realistas con matices y contradicciones inesperadas. Te obliga a empezar la investigación desde un punto de vista neutral y desafiante.
Durante la simulación, con tu rol de Director: Recuerda la regla de oro: Synth no es un oráculo para validar, es tu laboratorio de pruebas de estrés. La mejor práctica es aplicar el "triángulo de estrés": una simulación base (neutral), una con participantes escépticos y otra con defensores de la competencia.
Al final, no buscas saber si tu idea es buena en el vacío, sino descubrir bajo qué condiciones sobrevive y prospera.`)
  },
  {
    question: `¿Cuál es el valor real de cambiar la emoción o agenda de un participante?`,
    answer: formatFaqHtml(`Es la diferencia entre testear en el vacío y testear en el mundo real. Establece el estado a "Ansioso" para simular cómo reacciona tu cliente a un aumento de precio durante una crisis. Establece la agenda a "Defensor de Competidor" para ver cómo resiste tu propuesta de valor un ataque directo. <strong>Tienes control total sobre el contexto.</strong>`)
  },
  {
    question: `Con una herramienta tan poderosa, ¿significa que ya no necesito agencias de investigación?`,
    answer: formatFaqHtml(`Al contrario. Synth es el mayor aliado de las agencias de investigación. No reemplazamos su experiencia—les damos superpoderes. Permitimos que las agencias pasen menos tiempo en logística (reclutamiento, transcripción) y más en donde añaden valor único: análisis profundo y recomendaciones estratégicas. Synth convierte agencias buenas en socios estratégicos indispensables para sus clientes.`)
  },
  {
    question: `¿Cómo se compara el costo de Synth con la investigación tradicional?`,
    answer: formatFaqHtml(`Los ahorros son radicales: <strong>más del 90%</strong> comparado con un estudio cualitativo tradicional.\n\nEl verdadero cambio es estratégico: pasas de poder costear un estudio a poder <strong>lanzar diez por el costo de uno</strong>. Es la diferencia entre apostar por una idea y validarla continuamente.\n\n¿Cómo lo logramos? Eliminando costos de reclutamiento, incentivos, alquiler de salas y transcripción manual.\n\nCalcula tus ahorros exactos con nuestra <strong>Calculadora de Ahorros</strong>.`)
  },
  {
    question: `¿Necesito un equipo grande de investigación para usar Synth?`,
    answer: formatFaqHtml(`No. Synth democratiza el insight profundo. Un solo investigador o profesional de insights de mercado puede convertirse en Director de Simulación y lograr en horas la profundidad cualitativa que antes requería un equipo completo y semanas de trabajo. Es agilidad estratégica para equipos de cualquier tamaño.\nDesaconsejamos el uso por perfiles sin conocimiento fundamental de investigación.`)
  },
  {
    question: `Todo esto suena genial, pero… ¿puedo probar la plataforma antes de decidir?`,
    answer: formatFaqHtml(`Absolutamente. Creemos que el poder de Synth se entiende mejor experimentándolo. Por eso ofrecemos un modelo <strong>Freemium</strong> que te permite lanzar tus primeras simulaciones y ver la calidad de insights por ti mismo. No hay nada que perder y un nuevo universo de entendimiento que ganar. Empieza gratis y descubre el futuro de la investigación.`)
  }];


  return (
    <div className="min-h-screen bg-[#0B0E1A] text-white">
      <h1 className="sr-only">Investigación de mercado a velocidad IA</h1>
      <h2 className="sr-only">Valida tus ideas con Focus Groups Sintéticos</h2>
      <h2 className="sr-only">Una plataforma de insights para agencias y marcas</h2>
      <h2 className="sr-only">Cómo funciona nuestra IA modelo-agnóstica</h2>
      <h2 className="sr-only">Plataforma de investigación de mercado con IA, focus group sintético, software de insights del consumidor, investigación cualitativa online, herramienta de focus groups online, análisis de consumidor con IA, plataforma de validación de mercado</h2>

      <nav className="fixed top-0 w-full z-50 bg-[#0B0E1A]/80 backdrop-blur-md border-b border-[#2A3441]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://i.postimg.cc/bvqJBxD6/Logo-Synth-sin-fondo.png"
              alt="Synth"
              className="h-8 w-auto object-contain" />

          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="hover:text-[#FF6634] transition-colors">Inicio</a>
            <a href="#motor-realismo" className="hover:text-[#FF6634] transition-colors">Qué nos diferencia</a>
            <a href="/casos-de-exito" className="hover:text-[#FF6634] transition-colors">Casos de Éxito</a>
            <a href="#precios" className="hover:text-[#FF6634] transition-colors">Precios</a>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 mr-2">
              <Link href="/en" className="inline-flex items-center px-2 py-1 rounded-md border border-[#2A3441] text-white hover:border-[#FF6634] transition">
                <span role="img" aria-label="English (US)">🇺🇸</span>
              </Link>
            </div>
            <Button asChild className="bg-[#FF6634] hover:bg-[#FF6634]/90 text-white">
              <Link href="/onboarding">Pruébalo gratis</Link>
            </Button>
          </div>
        </div>
      </nav>

      <section id="inicio" className="pt-24 pb-16 px-4 max-w-6xl mx-auto text-center relative overflow-hidden">
        <div className="mb-12 relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1A1F2E] border border-[#2A3441] transform hover:scale-105 transition-all duration-300">
            <Shield className="w-4 h-4 text-[#FF6634] mr-2" />
            <span className="text-sm text-[#E1E5EB]">
              <strong className="text-white">Prueba la plataforma gratis, sin tarjeta de crédito</strong>
            </span>
          </div>
        </div>

        <div className="mb-6">
          <div className="block md:hidden">
            <div className="flex flex-col items-center justify-center min-h-[160px]">
              <HeroMobileAnimated />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex flex-col items-center justify-center min-h-[180px]">
              <HeroDesktopAnimated />
            </div>
          </div>
        </div>

        <p className="text-sm text-[#E1E5EB] mb-8 mx-auto leading-relaxed relative z-10 md:text-lg whitespace-pre-line w-full max-w-[460px] md:w-[788px] md:h-[103px] lg:w-[980px] lg:max-w-[980px] lg:h-auto">
          La plataforma de simulación construida para agencias, consultoras y equipos de investigación que necesitan validar hipótesis sin los tiempos y costes del trabajo de campo tradicional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 relative z-10">
          <TrackedCTAButton 
            ctaName="Pruébalo gratis - Hero"
            targetUrl="/onboarding"
            locale="es"
            page="homepage"
            className="bg-[#FF6634] hover:bg-[#FF6634]/90 text-white px-8 py-3 text-base md:text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6634]/25"
          >
            Pruébalo gratis
            <Play className="w-5 h-5 ml-2" />
          </TrackedCTAButton>
          <DemoDialogTrigger locale="es" ctaName="Ver Demo - Hero" page="homepage">
            <Button
              variant="outline"
              className="border-[#2A3441] text-white hover:bg-[#1A1F2E] px-8 py-3 text-base md:text-lg transform hover:scale-105 transition-all duration-300 hover:border-[#FF6634]/50"
            >
              Ver Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </DemoDialogTrigger>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative z-10">
          <div className="text-center p-6 bg-gradient-to-br from-[#1A1F2E]/60 to-[#0B0E1A]/60 rounded-2xl border border-[#2A3441] hover:border-[#FF6634]/50 transition-all duration-500 group transform hover:scale-105 backdrop-blur-sm">
            <div className="text-3xl font-bold text-[#FF6634] mb-2 group-hover:scale-110 transition-transform duration-300">85-90%</div>
            <p className="text-[#E1E5EB] text-sm font-medium">Precisión vs. real</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#1A1F2E]/60 to-[#0B0E1A]/60 rounded-2xl border border-[#2A3441] hover:border-[#FF6634]/50 transition-all duration-500 group transform hover:scale-105 backdrop-blur-sm">
            <div className="text-3xl font-bold text-[#FF6634] mb-2 group-hover:scale-110 transition-transform duration-300">100x</div>
            <p className="text-[#E1E5EB] text-sm font-medium">Más rápido</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#1A1F2E]/60 to-[#0B0E1A]/60 rounded-2xl border border-[#2A3441] hover:border-[#FF6634]/50 transition-all duration-500 group transform hover:scale-105 backdrop-blur-sm">
            <div className="text-3xl font-bold text-[#FF6634] mb-2 group-hover:scale-110 transition-transform duration-300">90%</div>
            <p className="text-[#E1E5EB] text-sm font-medium">Reducción de costos</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#1A1F2E]/60 to-[#0B0E1A]/60 rounded-2xl border border-[#2A3441] hover:border-[#FF6634]/50 transition-all duration-500 group transform hover:scale-105 backdrop-blur-sm">
            <div className="text-3xl font-bold text-[#FF6634] mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
            <p className="text-[#E1E5EB] text-sm font-medium">Agencias confían en nosotros</p>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-[#2A3441]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Algunas marcas ya confían en Synth</h2>
          <div className="relative overflow-hidden">
            <div className="flex animate-slide-continuous space-x-16 items-center">
              {Array.from({ length: 4 }, (_, setIndex) =>
              <div key={setIndex} className="flex space-x-16 items-center shrink-0">
                  {["Pulso App", "The Signal", "Tierras de Castilla", "Nexus Studio", "Echo Design"].map((brand, index) =>
                <div key={`${setIndex}-${index}`} className="flex items-center justify-center text-white/70 font-light text-xl whitespace-nowrap min-w-fit">
                      {brand}
                    </div>
                )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal direction="up" distance={90}>
        <div>
          <ValidationCarousel locale="es" />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="left" distance={80}>
        <section id="soluciones" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Metodologías que <AnimatedTextHighlight>Aceleras</AnimatedTextHighlight>
              </h2>
              <p className="text-xl text-[#E1E5EB] max-w-3xl mx-auto">
                Todas las metodologías de investigación cualitativa que conoces, pero con la velocidad y escalabilidad de la IA sintética.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-[#1A1F2E] border-[#2A3441] p-6 hover:border-[#FF6634]/50 transition-all duration-300">
                <div className="w-12 h-12 bg-[#FF6634]/20 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-[#FF6634]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Entrevistas en Profundidad</h3>
                <p className="text-[#E1E5EB] mb-4">
                  Conversaciones íntimas y profundas 1:1 que revelan motivaciones, frustraciones y deseos auténticos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Perfiles psicológicos complejos</li>
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Preguntas de seguimiento inteligentes</li>
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Análisis emocional profundo</li>
                </ul>
              </Card>

              <Card className="bg-[#1A1F2E] border-[#2A3441] p-6 hover:border-[#FF6634]/50 transition-all duration-300">
                <div className="w-12 h-12 bg-[#FF6634]/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#FF6634]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Focus Groups</h3>
                <p className="text-[#E1E5EB] mb-4">
                  Sesiones grupales inmersivas con hasta 12 participantes sintéticos diversos. Dinámicas de grupo reales en minutos. También puedes ejecutar focus groups sintéticos mixtos donde un participante humano se une a las IA.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Participantes demográficamente diversos</li>
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Dinámicas de grupo auténticas</li>
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Modo mixto (humanos + IA)</li>
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Transcripciones automáticas</li>
                </ul>
              </Card>

              <Card className="bg-[#1A1F2E] border-[#2A3441] p-6 hover:border-[#FF6634]/50 transition-all duration-300">
                <div className="w-12 h-12 bg-[#FF6634]/20 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-[#FF6634]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Encuestas</h3>
                <Badge className="bg-[#FF6634]/20 text-[#FF6634] border-[#FF6634]/30 text-lg font-medium mb-3 px-3 py-1">Próximamente</Badge>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Miles de respuestas en minutos</li>
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Análisis estadístico automático</li>
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Segmentación avanzada</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <AhorroSynthCalculator locale="es" />

      <section className="py-20 px-0 bg-[#1A1F2E] relative overflow-x-clip">
        <div className="absolute inset-0 z-0">
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753258326722-7ue1k3jh895.jpg"
            alt="Tech BG"
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(1.65) contrast(1.23) brightness(1.07)', objectPosition: 'center' }} />

          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom,rgba(11,14,26,0.60) 0%,rgba(11,14,26,0.70) 100%)' }} />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Arquitectura{' '}
              <span
                className="text-white transition-colors duration-300 hover:text-[#FF6634] cursor-pointer"
                style={{ WebkitTransition: 'color 0.3s', MozTransition: 'color 0.3s', OTransition: 'color 0.3s', transition: 'color 0.3s' }}>

                Tecnológica
              </span>
            </h2>
            <p className="text-xl text-[#E1E5EB] max-w-3xl mx-auto">
              Stack tecnológico avanzado con múltiples capas de procesamiento y una arquitectura modelo-agnóstica de última generación.
            </p>
          </div>

          <div className="relative mb-12">
            <div className="relative z-10">
              <ArquitecturaTecnologica locale="es" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#FF6634]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3">
            <Shield className="text-white !w-[39px] !h-full" />
            <span className="text-white font-bold text-lg">Toda la información está encriptada de extremo a extremo</span>
            <Shield className="text-white !w-[34px] !h-full" />
          </div>
          <p className="text-white/90 mt-2 !whitespace-pre-line">Cumplimiento GDPR, preparación SOC 2, y estándares de seguridad de nivel empresarial</p>
        </div>
      </section>

      <RealismSynthLayers locale="es" />

      <ScrollReveal direction="up" distance={60}>
        <LaboratorioRealismo />
      </ScrollReveal>

      <SparkSection locale="es" />

      <ScrollReveal direction="up" distance={60}>
        <DiferenciaFundamental />
      </ScrollReveal>

      <section id="equipo" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Equipo de <AnimatedTextHighlight>Investigación</AnimatedTextHighlight>
            </h2>
            <p className="text-xl text-[#E1E5EB] max-w-3xl mx-auto">
              Fundadores con experiencia en investigación cualitativa y tecnología que entienden tanto la metodología como la innovación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            <div className="animate-fadeInUpTeam" style={{ animationDelay: '0.04s', animationFillMode: 'both' }}>
              <Card className="bg-[#1A1F2E] border-[#2A3441] p-6 text-center h-[400px] flex flex-col hover:scale-[1.03] hover:shadow-lg transition-transform duration-400">
                <div className="mb-6 flex-shrink-0 relative flex items-center justify-center h-36">
                  <div className="relative mx-auto">
                    <img
                      src="https://i.postimg.cc/gcB1t8BG/Cd-P-de-Pie-removebg-preview.png"
                      alt="Carlos de Prado"
                      className="w-32 h-36 object-cover object-top mx-auto animate-glow-avatar rounded-lg relative z-10"
                      style={{ maskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)' }} />

                    <div className="absolute inset-0 w-32 h-36 mx-auto rounded-lg bg-gradient-to-br from-[#FF6634]/30 to-[#FF8A5B]/20 blur-md animate-pulse opacity-60 -z-10"></div>
                  </div>
                </div>
                <div className="mt-auto flex-grow flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2 relative team-name-glow">Carlos de Prado<span className="team-underline-glow"></span></h3>
                  <p className="text-[#FF6634] mb-3">CEO & Co-Fundador</p>
                  <p className="text-sm text-[#E1E5EB] leading-relaxed !whitespace-pre-line">Estratega con más de 20 años liderando equipos de alto rendimiento e impulsando crecimiento in startups competitivas y consultoras globales.</p>
                </div>
              </Card>
            </div>

            <div className="animate-fadeInUpTeam" style={{ animationDelay: '0.24s', animationFillMode: 'both' }}>
              <Card className="bg-[#1A1F2E] border-[#2A3441] p-6 text-center h-[400px] flex flex-col hover:scale-[1.03] hover:shadow-lg transition-transform duration-400">
                <div className="mb-6 flex-shrink-0 relative flex items-center justify-center h-36">
                  <div className="relative mx-auto" style={{ marginTop: '8px' }}>
                    <img
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755630595109-zlk2es9s96j.png"
                      alt="Jesús Rodríguez"
                      className="w-40 h-45 object-cover object-top mx-auto animate-glow-avatar rounded-lg relative z-10"
                      style={{ maskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)' }} />

                    <div className="absolute inset-0 w-40 h-45 mx-auto rounded-lg bg-gradient-to-br from-[#FF6634]/30 to-[#FF8A5B]/20 blur-md animate-pulse opacity-60 -z-10"></div>
                  </div>
                </div>
                <div className="mt-auto flex-grow flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2 relative team-name-glow">Jesús Rodríguez<span className="team-underline-glow"></span></h3>
                  <p className="text-[#FF6634] mb-3">CMO & Co-Fundador</p>
                  <p className="text-sm text-[#E1E5EB] leading-relaxed !whitespace-pre-line">Líder de marketing con más de 20 años en B2B. Especialista en construcción de marca, estrategias de crecimiento y posicionamiento de alto impacto.</p>
                </div>
              </Card>
            </div>

            <div className="animate-fadeInUpTeam" style={{ animationDelay: '0.44s', animationFillMode: 'both' }}>
              <Card className="bg-[#1A1F2E] border-[#2A3441] p-6 text-center h-[400px] flex flex-col hover:scale-[1.03] hover:shadow-lg transition-transform duration-400">
                <div className="mb-6 flex-shrink-0 relative flex items-center justify-center h-36">
                  <div className="relative mx-auto">
                    <img
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755630316605-etbjgew24x.png"
                      alt="Omar Hidalgo"
                      className="w-32 h-36 object-cover object-top mx-auto animate-glow-avatar rounded-lg relative z-10"
                      style={{ maskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)' }} />

                    <div className="absolute inset-0 w-32 h-36 mx-auto rounded-lg bg-gradient-to-br from-[#FF6634]/30 to-[#FF8A5B]/20 blur-md animate-pulse opacity-60 -z-10"></div>
                  </div>
                </div>
                <div className="mt-auto flex-grow flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2 relative team-name-glow">Omar Hidalgo<span className="team-underline-glow"></span></h3>
                  <p className="text-[#FF6634] mb-3 !whitespace-pre-line">Co-Fundador</p>
                  <p className="text-sm text-[#E1E5EB] leading-relaxed !whitespace-pre-line">Especialista en procesos e innovación con más de 20 años liderando equipos técnicos. Experto en optimizar modelos de negocio a través de arquitectura tecnológica y transformación.</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal direction="up" distance={60}>
        <section className="py-20 px-4 bg-gradient-to-b from-[#0B0E1A] to-[#1A1F2E]/30 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-[#FF6634]/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FF6634]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Facturación Simple y <span className="text-[#FF6634]">Transparente</span>
              </h2>
              <p className="text-xl text-[#E1E5EB] max-w-3xl mx-auto leading-relaxed">
                Paga por Interacción, no por Preparación
              </p>
              <p className="text-lg text-[#E1E5EB] max-w-3xl mx-auto mt-4 leading-relaxed">
                Nuestro modelo de precios está diseñado para ser justo y predecible. Queremos que inviertas tu tiempo en explorar ideas, no en preocuparte por costes ocultos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-[#1A1F2E]/90 to-[#0B0E1A]/70 border-[#2A3441] hover:border-[#FF6634]/50 transition-all duration-500 hover:transform hover:scale-105 p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6634]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#FF6634]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF6634]/30 transition-colors duration-300">
                    <DollarSign className="w-7 h-7 text-[#FF6634]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Pago por Participante, una Sola Vez</h3>
                  <p className="text-[#E1E5EB] leading-relaxed">
                    El coste se genera únicamente en el momento en que integras un participante sintético en una simulación (entrevista o focus group). Es un pago único por participante y simulación.
                  </p>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-[#1A1F2E]/90 to-[#0B0E1A]/70 border-[#2A3441] hover:border-[#FF6634]/50 transition-all duration-500 hover:transform hover:scale-105 p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6634]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#FF6634]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF6634]/30 transition-colors duration-300">
                    <Clock className="w-7 h-7 text-[#FF6634]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">24 Horas de Interacción Ilimitada</h3>
                  <p className="text-[#E1E5EB] leading-relaxed">
                    Una vez iniciada la simulación, se abre una ventana de 24 horas de diálogo sin límites. Durante este tiempo, puedes hacer todas las preguntas que necesites a los participantes de esa sesión sin ningún coste adicional.
                  </p>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-[#1A1F2E]/90 to-[#0B0E1A]/70 border-[#2A3441] hover:border-[#FF6634]/50 transition-all duration-500 hover:transform hover:scale-105 p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6634]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#FF6634]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF6634]/30 transition-colors duration-300">
                    <Sparkles className="w-7 h-7 text-[#FF6634]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Todo lo Demás es Gratis</h3>
                  <p className="text-[#E1E5EB] leading-relaxed mb-4">
                    Creemos que la creatividad no debe tener barreras. Por eso, todo el trabajo de preparación y análisis no tiene coste asociado. Puedes, de forma ilimitada:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm text-[#E1E5EB]">
                      <CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Crear y refinar Personas Sintéticas en tu biblioteca</span>
                    </li>
                    <li className="flex items-start text-sm text-[#E1E5EB]">
                      <CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Diseñar Guías de Moderación y Estímulos Visuales con IA</span>
                    </li>
                    <li className="flex items-start text-sm text-[#E1E5EB]">
                      <CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Generar resúmenes ejecutivos y análisis de hallazgos clave post-simulación</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            <div className="flex justify-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#FF6634]/20 to-[#FF8A5B]/20 border border-[#FF6634]/30">
                <Zap className="w-5 h-5 text-[#FF6634] mr-2" />
                <span className="text-white font-semibold">Modelo justo y predecible para explorar sin límites</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <section id="precios" className="py-20 px-4 bg-gradient-to-b from-[#171B28] to-[#0B0E1A] relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-20">
          <Pricing locale="es" />
        </div>
      </section>

      <Testimonial3DRoulette locale="es" />

      <BlogPreviewSection locale="es" articles={articles.slice(0, 3)} />

      <ScrollReveal direction="left" distance={80}>
        <div className="py-16 px-4 flex items-center justify-center bg-gradient-to-r from-[#1A1F2E]/80 to-[#0B0E1A]/90 border-y border-[#2A3441]">
          <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-10">
            <span className="flex-1 min-w-[270px] text-2xl md:text-3xl font-bold text-center sm:text-left text-white sm:pr-8 leading-tight whitespace-pre-line">
              Recibe insights sobre cómo la IA está <span className="text-[#FF6634]">transformando</span> la Investigación de Mercado
            </span>
            <div className="flex-1 w-full max-w-md min-w-[270px]">
              <NewsletterBannerHome locale="es" />
            </div>
          </div>
        </div>
      </ScrollReveal>

      <section id="faq" className="px-4 pt-20 -mt-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Preguntas Frecuentes</h2>
          <p className="text-xl text-[#E1E5EB] max-w-2xl mx-auto">Resuelve tus dudas sobre nuestra plataforma.</p>
        </div>
      </section>

      <FaqSection hideHeader faqs={faqs} />

      <footer className="bg-[#1A1F2E] border-t border-[#2A3441]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <img src="https://i.postimg.cc/bvqJBxD6/Logo-Synth-sin-fondo.png" alt="Synth" className="h-10 w-auto object-contain" />
              </div>
              <p className="text-[#E1E5EB] max-w-md mb-6 !whitespace-pre-line">
                El sandbox de la experiencia humana. Testea, valida y refina decisiones de negocio antes del impacto real.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contacto</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 text-[#FF6634] mr-3 flex-shrink-0" />
                  <a href="mailto:hola@synth-insights.com" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">hola@synth-insights.com</a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 text-[#FF6634] mr-3 flex-shrink-0" />
                  <a href="tel:+34620915003" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">+34 620915003</a>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 text-[#FF6634] mr-3 flex-shrink-0" />
                  <span className="text-[#E1E5EB]">Madrid, España</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Producto</h4>
              <ul className="space-y-2">
                <li><a href="#soluciones" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Metodologías</a></li>
                <li><a href="#precios" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Precios</a></li>
                <li><a href="#faq" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">FAQ</a></li>
                <li><a href="#" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Casos de Uso</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="/centro-confianza-seguridad" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Centro de Confianza y Seguridad</a></li>
                <li><a href="/blog" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Blog</a></li>
                <li><a href="mailto:hola@synth-insights.com" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Contacto</a></li>
                <li><a href="mailto:hola@synth-insights.com?subject=Soporte" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Soporte</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2A3441] pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
              <a href="/privacidad" className="text-[#E1E5EB] hover:text-[#FF6634] text-sm transition-colors">Política de Privacidad</a>
              <a href="/terminos-y-condiciones" className="text-[#E1E5EB] hover:text-[#FF6634] text-sm transition-colors">Términos y Condiciones</a>
              <a href="/en/refund-policy" className="text-[#E1E5EB] hover:text-[#FF6634] text-sm transition-colors">Refund Policy</a>
            </div>
            <p className="text-[#E1E5EB] text-sm">© 2025 Synth. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <div className="border-t border-[#2A3441] pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-[#E1E5EB] mb-4 md:mb-0">© 2025 Synth. Todos los derechos reservados.</p>
      </div>
    </div>);

}