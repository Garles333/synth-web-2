"use client";
import { Button } from "@/components/ui/button"
import { Check, Globe, Loader2, RefreshCw, GraduationCap, Sparkles } from "lucide-react"
import { useCurrency } from "@/lib/currency"
import Link from "next/link"
import { currencies, formatConvertedPrice } from "@/lib/currency"

export const Pricing = ({ locale = 'es' }: { locale?: 'es' | 'en' }) => {
  const { currentCountry, formatFromEUR, isLoading, detectionMethod } = useCurrency();
  
  // Force USD display for English locale
  const forceUSD = locale === 'en'
  const formatFromEURDisplay = (eurAmount: number) =>
    forceUSD
      ? formatConvertedPrice(eurAmount, currencies.EUR, currencies.USD, 'en-US')
      : formatFromEUR(eurAmount)
  
  // i18n helper
  const t = locale === 'en' ? {
    detecting: 'Detecting your location to show local prices...',
    headerTitle: 'A plan for every need',
    headerDesc: 'Transparent, scalable plans designed to grow with you.',
    pricesShownIn: 'Prices shown in',
    perMonth: '/ month',
    free: 'Free',
    mostPopular: 'MOST POPULAR',
    bottomTitle: 'Need a custom Enterprise plan?',
    bottomDesc: 'We design a tailored plan with the volume, security (SSO, SOC 2), and strategic support your organization needs. Let\'s talk. Email us at',
    vpnNote: 'Using a VPN? If you are in Colombia or Peru, open the console and run',
    testCo: 'testColombia()',
    testPe: 'testPeru()',
    loadingCta: '',
    debugDetecting: (method: string) => method,
    plans: [
      {
        name: "Free",
        price: 0,
        period: "/ month",
        description: "Perfect to get started and discover the power of synthetic research with zero commitment.",
        features: [
          "2 Synth Participants / month for your first sessions.",
          "Save up to 2 Synthetic Personas in your library.",
          "1 User Seat.",
          "Basic AI Analysis (Session summary)."
        ],
        cta: "Try it free",
        popular: false,
        prevPrice: null as number | null,
        promoMsg: null as string | null
      },
      {
        name: "Essential",
        price: 950,
        period: "/ month",
        description: "The perfect solution for small teams and one-off projects seeking agility and fast insights.",
        features: [
          "50 Synth Participants / month.",
          `Additional Synth Participant: ${formatFromEURDisplay(39)}/unit.`,
          "Unlimited Synthetic Personas.",
          "2 User Seats.",
          "Focus Groups up to 8 participants.",
          "Basic AI Analysis (Session summary).",
          "Transcript export.",
          "GDPR compliance.",
          "Email support."
        ],
        cta: "Get Essential",
        popular: false,
        prevPrice: 1950,
        promoMsg: "Save over 50% for a limited time!"
      },
      {
        name: "Pro",
        price: 2850,
        period: "/ month",
        description: "The complete solution for growing agencies that want to differentiate with deeper, brand-specific insights.",
        features: [
          "150 Synth Participants / month.",
          `Additional Synth Participant: ${formatFromEURDisplay(39)}/unit.`,
          "Unlimited Synthetic Personas.",
          "Knowledge Library (RAG): Train your synthetics with your own documents for unmatched brand realism.",
          "5 User Seats.",
          "Focus Groups up to 12 participants.",
          "Advanced AI Analysis (Theme detection, sentiment analysis).",
          "Automatic executive reports.",
          "Priority chat support."
        ],
        cta: "Choose Pro",
        popular: true,
        prevPrice: 5850,
        promoMsg: "Save over 50% for a limited time"
      }
    ]
  } : {
    detecting: 'Detectando tu ubicación para mostrar precios locales...',
    headerTitle: 'Un plan para cada Necesidad',
    headerDesc: 'Planes transparentes y escalables diseñados para crecer contigo.',
    pricesShownIn: 'Precios mostrados en',
    perMonth: '/ mes',
    free: 'Gratis',
    mostPopular: 'MÁS POPULAR',
    bottomTitle: '¿Necesitas un Plan Enterprise a tu Medida?',
    bottomDesc: 'Diseñamos un plan a tu medida con el volumen, la seguridad (SSO, SOC 2) y el soporte estratégico que tu organización necesita. Hablemos. Escríbenos a',
    vpnNote: '¿Usas VPN? Si estás en Colombia o Perú, abre la consola y ejecuta',
    testCo: 'testColombia()',
    testPe: 'testPeru()',
    loadingCta: '',
    debugDetecting: (method: string) => method,
    plans: [] as any
  };

  // If ES locale, build plans in Spanish using current currency formatting
  const plansES = [
    {
      name: "Gratuito",
      price: 0,
      period: "/ mes",
      description: "Ideal para dar los primeros pasos y descubrir el potencial de la investigación sintética sin ningún compromiso.",
      features: [
        "2 Participantes Synth / mes para tus primeras sesiones.",
        "Guarda hasta 2 Personas Sintéticas en tu biblioteca.",
        "1 Asiento de Usuario.",
        "Análisis Básico con IA (Resumen de sesión)."
      ],
      cta: "Comenzar Gratis",
      popular: false,
      prevPrice: null as number | null,
      promoMsg: null as string | null
    },
    {
      name: "Esencial",
      price: 950,
      period: "/ mes",
      description: "La solución perfecta para equipos pequeños y proyectos puntuales que buscan agilidad e insights rápidos.",
      features: [
        "50 Participantes Synth / mes.",
        `Partipante Synth adicional: ${formatFromEUR(39)}/unidad.`,
        "Personas Sintéticas ilimitadas.",
        "2 Asientos de Usuario.",
        "Focus Groups de hasta 8 participantes.",
        "Análisis Básico con IA (Resumen de sesión).",
        "Exportación de transcripciones.",
        "Cumplimiento GDPR.",
        "Soporte por email."
      ],
      cta: "Empezar con Esencial",
      popular: false,
      prevPrice: 1950,
      promoMsg: "¡Ahorra más de 50% por tiempo limitado!"
    },
    {
      name: "Pro",
      price: 2850,
      period: "/ mes",
      description: "La solución completa para agencias en crecimiento que buscan diferenciarse con insights más profundos y específicos de marca.",
      features: [
        "150 Participantes Synth / mes.",
        `Partipante Synth adicional: ${formatFromEUR(39)}/unidad.`,
        "Personas Sintéticas ilimitadas.",
        "Biblioteca de Conocimiento (RAG): Entrena a tus sintéticos con tus propios documentos para un realismo de marca inigualable.",
        "5 Asientos de Usuario.",
        "Focus Groups de hasta 12 participantes.",
        "Análisis Avanzado con IA (Identificación de temas, análisis de sentimiento).",
        "Reportes ejecutivos automáticos.",
        "Soporte prioritario por chat."
      ],
      cta: "Quiero Pro",
      popular: true,
      prevPrice: 5850,
      promoMsg: "¡Ahorra más de 50% por tiempo limitado"
    }
  ];

  const plans = locale === 'en' ? t.plans : plansES;
  
  // Show loading state while detecting currency
  if (isLoading) {
    return (
      <section className="py-24 px-8 bg-[var(--color-primary-background)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Loader2 className="w-8 h-8 text-[#FF6634] animate-spin mx-auto mb-4" />
            <p className="text-[#E1E5EB]">{t.detecting}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-8 bg-[var(--color-primary-background)] relative overflow-hidden">
      {/* Enhanced Currency indicator with VPN detection info */}
      <div className="absolute top-6 right-6 z-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#1A1F2E]/80 backdrop-blur-sm rounded-full border border-[#2A3441]">
            <Globe className="w-3 h-3 text-[#FF6634]" />
            <span className="text-xs text-[#E1E5EB]">{currentCountry.flag} {forceUSD ? 'USD' : currentCountry.currency.code}</span>
          </div>
          {/* Debug info for localhost */}
          {typeof window !== 'undefined' && window.location.hostname === 'localhost' && detectionMethod && (
            <div className="text-xs text-[#E1E5EB] bg-[#1A1F2E]/60 px-2 py-1 rounded text-center">
              {t.debugDetecting(detectionMethod)}
            </div>
          )}
        </div>
      </div>

      {/* VPN Test Helper for localhost */}
      {typeof window !== 'undefined' && window.location.hostname === 'localhost' && (
        <div className="absolute top-6 left-6 z-10">
          <div className="flex gap-2">
            <button 
              onClick={() => (window as any).testColombia?.()}
              className="text-xs bg-[#1A1F2E]/80 text-[#E1E5EB] px-2 py-1 rounded hover:bg-[#FF6634]/20 transition-colors"
            >
              Test CO
            </button>
            <button 
              onClick={() => (window as any).testPeru?.()}
              className="text-xs bg-[#1A1F2E]/80 text-[#E1E5EB] px-2 py-1 rounded hover:bg-[#FF6634]/20 transition-colors"
            >
              Test PE
            </button>
            <button 
              onClick={() => (window as any).debugCurrencyDetection?.()}
              className="text-xs bg-[#1A1F2E]/80 text-[#E1E5EB] px-2 py-1 rounded hover:bg-[#FF6634]/20 transition-colors"
            >
              Debug
            </button>
          </div>
        </div>
      )}

      {/* Fondo elegante: sutil degradado oscuro (menos color y formas) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="w-full h-full"
             style={{
               background: 'linear-gradient(120deg, #111625 0%, #232944 100%)',
               opacity: 0.7
             }}> </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header with currency notice */}
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t.headerTitle}
          </h2>
          <p className="text-lg text-[var(--color-light-text)] max-w-3xl mx-auto">
            {t.headerDesc}
          </p>
          {/* Currency confirmation message */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1F2E]/60 rounded-full border border-[#2A3441]">
            <Globe className="w-4 h-4 text-[#FF6634]" />
            <span className="text-sm text-[#E1E5EB]">
              {locale === 'en' ? 'Prices shown in ' : 'Precios mostrados en '}<strong className="text-white">{forceUSD ? 'US Dollar (USD)' : `${currentCountry.currency.name} (${currentCountry.currency.code})`}</strong>
            </span>
          </div>
        </div>

        {/* Pricing Cards: solo 3 columnas en desktop, con animación */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={`${plan.name}-${currentCountry.code}`}
              className={`relative bg-[var(--color-card-background)] rounded-xl border p-8 shadow-card-lg pricing-card transition-all duration-400 will-change-transform select-none group
                ${plan.popular
                  ? "border-[var(--color-accent-orange)] ring-2 ring-[var(--color-accent-orange)]/20"
                  : "border-[var(--color-border)]"
                }
                animate-fadeInRightPricing`}
              style={{
                animationDelay: `${0.12 + index * 0.09}s`,
                animationDuration: "1.07s"
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[var(--color-accent-orange)] text-white px-4 py-1 rounded-full text-sm font-medium shadow-card-banner">
                    {t.mostPopular}
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Plan Header */}
                <div>
                  <h3 className="text-center text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2 tracking-tight">{plan.name}</h3>
                  <p className="text-[var(--color-light-text)] mt-2 text-center text-base">{plan.description}</p>
                </div>

                {/* Price con tachado si aplica, conversión de moneda */}
                <div className="text-center">
                  {plan.prevPrice && (
                    <div className="mb-1 text-base">
                      <span className="line-through text-[#6b7280]">{formatFromEURDisplay(plan.prevPrice)} {locale === 'en' ? t.perMonth : '/ mes'}</span>
                    </div>
                  )}
                  <div className="flex items-baseline justify-center gap-1">
                    {plan.price === 0 ? (
                      <span className="text-4xl md:text-5xl font-bold text-white tracking-tight animate-fadeInPrice">
                        {t.free}
                      </span>
                    ) : (
                      <span className="text-4xl md:text-5xl font-bold text-white tracking-tight animate-fadeInPrice">
                        {formatFromEURDisplay(plan.price)}
                      </span>
                    )}
                    {plan.price !== 0 && (
                      <span className="text-[var(--color-light-text)] ml-1">{locale === 'en' ? t.perMonth : '/ mes'}</span>
                    )}
                  </div>
                  {plan.promoMsg && (
                    <div className="text-sm text-[var(--color-accent-orange)] font-medium mt-1 animate-pulse">{plan.promoMsg}</div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-[var(--color-accent-orange)] mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-[var(--color-light-text)] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 mt-4
                    group-hover:scale-[1.04] group-hover:shadow-card-elevated
                    ${plan.popular
                      ? "bg-[var(--color-accent-orange)] hover:bg-[var(--color-accent-orange)]/90 text-white shadow-card-banner"
                      : "bg-transparent border-2 border-[var(--color-border)] text-white hover:bg-white/5"
                    }`}
                >
                  <Link href={locale === 'en' ? "/en/onboarding" : "/onboarding"}>{plan.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <h4 className="text-white text-lg font-semibold mb-2">
            {t.bottomTitle}
          </h4>
          <p className="text-[var(--color-light-text)] text-sm max-w-2xl mx-auto">
            {t.bottomDesc} <a href="mailto:hola@synth-insights.com" className="text-[var(--color-accent-orange)] underline hover:opacity-80 transition">hola@synth-insights.com</a>.
          </p>
        </div>

        {/* Plan Académico Banner - Professional Version - NOW BELOW ENTERPRISE */}
        <div className="relative max-w-4xl mx-auto mt-12 mb-8">
          {/* Subtle glow effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6634]/10 via-[#FF8A5B]/10 to-[#FF6634]/10 blur-xl opacity-40"></div>
          
          <div className="relative bg-gradient-to-br from-[#1A1F2E] to-[#0B0E1A] rounded-xl border border-[#FF6634]/40 p-8 shadow-lg hover:border-[#FF6634]/60 transition-all duration-300 group">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Icon & Title Section */}
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6634]/20 to-[#FF8A5B]/20 rounded-xl flex items-center justify-center border border-[#FF6634]/30 group-hover:scale-105 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6 text-[#FF6634]" />
                </div>
                
                <div className="text-left flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {locale === 'en' ? 'Educational Institutions' : 'Instituciones Educativas'}
                  </h3>
                  <p className="text-[#E1E5EB] text-sm md:text-base">
                    {locale === 'en' 
                      ? 'Access exclusive discounts of up to 60% on all our plans. Contact us to learn more.' 
                      : 'Accede a descuentos exclusivos de hasta 60% en todos nuestros planes. Contáctanos para conocer más.'}
                  </p>
                </div>
              </div>

              {/* CTA Button with mailto */}
              <Button 
                asChild
                className="bg-[#FF6634] hover:bg-[#FF8A5B] text-white px-6 py-3 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <a href="mailto:hola@synth-insights.com?subject=Consulta%20Plan%20Académico">
                  {locale === 'en' ? 'Contact Us' : 'Solicitar Información'}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* VPN Help Notice - only show if using default currency after some time */}
        {currentCountry.code === 'ES' && detectionMethod === 'default-fallback' && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-3 bg-[#FF6634]/10 border border-[#FF6634]/30 rounded-lg">
              <RefreshCw className="w-4 h-4 text-[#FF6634]" />
              <span className="text-sm text-[#E1E5EB]">
                {locale === 'en' ? (
                  <>
                    {t.vpnNote} <code className="bg-black/30 px-1 py-0.5 rounded text-[#FF6634]">{t.testCo}</code> {locale === 'en' ? 'or' : 'o'} <code className="bg-black/30 px-1 py-0.5 rounded text-[#FF6634]">{t.testPe}</code>
                  </>
                ) : (
                  <>
                    ¿Usas VPN? Si estás en Colombia o Perú, abre la consola y ejecuta <code className="bg-black/30 px-1 py-0.5 rounded text-[#FF6634]">testColombia()</code> o <code className="bg-black/30 px-1 py-0.5 rounded text-[#FF6634]">testPeru()</code>
                  </>
                )}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}