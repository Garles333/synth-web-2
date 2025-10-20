"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

// Localized content for Realism Engine layers
const layersContent = {
  es: [
    {
      id: 'identidad',
      title: 'Capa 1: La Capa de Identidad',
      description: 'La capa fundamental donde defines el ADN del participante. Esculpes su identidad observable: demografía, metas, frustraciones y rasgos de personalidad clave.',
      extraContent: '**Caso de Uso Práctico:** Al definir una persona como *tradicional y aversa al riesgo*, *tú* aseguras que su primera reacción a una idea disruptiva sea un escepticismo realista, preguntando *"¿Y esto para qué lo necesito?"*. Es tu primera prueba de fuego para ver si el concepto sobrevive al primer contacto.',
    },
    {
      id: 'cognitiva',
      title: 'Capa 2: La Capa Cognitiva',
      description: 'Aquí es donde escribes el guion de los "atajos" mentales del cerebro. Eliges entre *9 Sesgos Cognitivos* (como Aversión a la Pérdida o Prueba Social) para dictar cómo la persona toma decisiones de forma "irracionalmente" humana.',
      extraContent: '**Caso de Uso Práctico:** *Testear una campaña de captación*. Aunque tu oferta sea un 10% más barata, *tú* le das al participante el sesgo de "Aversión a la Pérdida". Observarás cómo la rechaza por miedo a un mal servicio, revelándote que tu mensaje no debe centrarse solo en el precio, sino en la *seguridad y la facilidad de la transición*.',
    },
    {
      id: 'cultural',
      title: 'Capa 3: La Capa Cultural',
      description: 'La capa más profunda de la identidad. Basándose en el perfil que *tú has creado*, nuestro motor le asigna una "Cosmovisión" cultural que define sus valores no escritos, su lenguaje y su forma de entender el mundo. El verdadero poder de la Capa Cultural reside en cómo transforma una respuesta predecible en un insight accionable, revelando el "porqué" cultural oculto detrás de una opinión.',
      extraContent: '**Caso de Uso Práctico:** Testear una nueva característica de "gamificación" en una app, un perfil cauto podría simplemente decir que "no le ve la utilidad", un feedback superficial; sin embargo, cuando nuestro motor le asigna automáticamente la cosmovisión, esa misma persona articula el verdadero rechazo cultural: la gamificación es "infantil" y "abarata la marca", chocando con sus códigos de estatus.',
    },
    {
      id: 'contextual',
      title: 'Capa 4: La Capa Contextual',
      description: 'Tus herramientas de control en vivo. Como director de Simulación, *tú modulas la "actuación"* del participante según el *Estado Emocional* (ej. ansioso), el *Contexto Social* (formal vs. informal) o una *Agenda Oculta* (su objetivo en la conversación).',
      extraContent: '**Caso de Uso Práctico:** *Simular el impacto de un evento de mercado*. ¿Hay una crisis? *Tú* asignas el estado *"Ansioso"* y observas cómo la sensibilidad al precio se convierte en el único factor de decisión. ¿Quieres la verdad sin filtros? Cambia el contexto a *"Amigo Cercano"* y mira cómo la cortesía se desvanece y emerge la opinión brutalmente honesta.',
    },
    {
      id: 'evolutiva',
      title: 'Capa 5: La Capa Evolutiva',
      description: 'Nuestra capacidad más revolucionaria. A diferencia de cualquier IA estática, los participantes que *tú diriges* pueden ser persuadidos, ya que nuestro sistema evalúa la fuerza de cada argumento en tiempo real.',
      extraContent: '**Caso de Uso Práctico:** *Validar el argumentario de tu equipo de ventas*. Presenta tu speech comercial a un focus group sintético. *Tú* no solo verás quiénes terminan convencidos, sino que nuestro análisis te mostrará *qué frase o argumento exacto* fue el que provocó el cambio de opinión en los escépticos. Optimizas tu discurso basándote en la evidencia de qué es lo que realmente persuade.',
      comingSoon: true,
    },
  ],
  en: [
    {
      id: 'identidad',
      title: 'Layer 1: Identity Layer',
      description: 'The foundational layer where you define the participant\'s DNA. You sculpt their observable identity: demographics, goals, frustrations, and key personality traits.',
      extraContent: '**Practical Use Case:** By defining a persona as *traditional and risk-averse*, *you* ensure their first reaction to a disruptive idea is realistic skepticism, asking *"Why would I need this?"*. It\'s your first stress test to see if the concept survives first contact.',
    },
    {
      id: 'cognitiva',
      title: 'Layer 2: Cognitive Layer',
      description: 'This is where you script the brain\'s mental shortcuts. Choose among *9 Cognitive Biases* (like Loss Aversion or Social Proof) to dictate how the person makes decisions in a humanly "irrational" way.',
      extraContent: '**Practical Use Case:** *Testing an acquisition campaign.* Even if your offer is 10% cheaper, *you* assign the participant the "Loss Aversion" bias. You\'ll observe them reject it for fear of poor service—revealing your message shouldn\'t focus only on price, but on *safety and ease of switching*.',
    },
    {
      id: 'cultural',
      title: 'Layer 3: Cultural Layer',
      description: 'The deepest layer of identity. Based on the profile *you created*, our engine assigns a cultural "Worldview" that defines unwritten values, language, and how they interpret the world. The real power lies in turning predictable responses into actionable insight by revealing the hidden cultural "why."',
      extraContent: '**Practical Use Case:** When testing a new "gamification" feature in an app, a cautious profile might simply say it "doesn\'t seem useful"—surface-level feedback. But once our engine assigns a worldview, that same person articulates the real cultural rejection: gamification is "childish" and "cheapens the brand," clashing with their status codes.',
    },
    {
      id: 'contextual',
      title: 'Layer 4: Contextual Layer',
      description: 'Your live control tools. As Simulation Director, *you modulate the participant\'s performance* via *Emotional State* (e.g., anxious), *Social Context* (formal vs. informal), or a *Hidden Agenda* (their goal in the conversation).',
      extraContent: '**Practical Use Case:** *Simulate the impact of a market event.* Crisis? *You* set the state to *"Anxious"* and watch how price sensitivity becomes the sole decision factor. Want the unfiltered truth? Switch context to *"Close Friend"* and watch courtesy fade as brutally honest opinions emerge.',
    },
    {
      id: 'evolutiva',
      title: 'Layer 5: Evolutionary Layer',
      description: 'Our most revolutionary capability. Unlike static AI, the participants *you direct* can be persuaded, as our system evaluates each argument\'s strength in real time.',
      extraContent: '**Practical Use Case:** *Validate your sales team\'s pitch.* Present your pitch to a synthetic focus group. *You* won\'t just see who ends up convinced—our analysis will show *which exact phrase or argument* triggered the change of opinion in skeptics, so you optimize based on what truly persuades.',
      comingSoon: true,
    },
  ],
} as const;

const formatTextWithBold = (text: string) => {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('*') && part.endsWith('*')) {
      return <strong key={index} className="text-[#FF6634]">{part.slice(1, -1)}</strong>;
    }
    return part;
  });
};

export const RealismSynthLayers = ({ locale = 'es' }: { locale?: 'es' | 'en' }) => {
  const [openLayer, setOpenLayer] = useState<string | null>(null);

  const toggleLayer = (id: string) => {
    setOpenLayer(openLayer === id ? null : id);
  };

  const headerTitle =
    locale === 'en'
      ? (<>
          The Synth Realism Engine<span className="text-[#FF6634]">™</span>:<br />The 5 Layers of Human Emulation
        </>)
      : (<>
          El Motor de Realismo Synth<span className="text-[#FF6634]">™</span>:<br />Las 5 Capas de la Emulación Humana
        </>);

  const headerSubtitle =
    locale === 'en'
      ? (
        <>Our realism engine is built on a <strong>five-layer, progressively deeper architecture</strong>. Each level adds a new dimension of humanity to ensure every insight you get is anchored in a <strong>psychological and cultural truth</strong>.</>
      ) : (
        <>Nuestro motor de realismo está construido sobre una arquitectura de <strong>cinco capas de profundidad creciente</strong>. Cada nivel añade una nueva dimensión de humanidad para asegurar que cada insight que obtengas esté anclado en una <strong>verdad psicológica y cultural</strong>.</>
      );

  const layers = layersContent[locale];

  return (
    <section id="motor-realismo" className="py-32 px-4 bg-gradient-to-b from-[#0B0E1A] via-[#0D0F16] to-[#0B0E1A] text-white overflow-hidden relative">
      {/* Enhanced Background Effects - Spark Style */}
      <div className="absolute inset-0 z-0">
        {/* Large gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[#FF6634]/15 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[900px] h-[900px] bg-[#FF8A5B]/10 rounded-full blur-[180px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#FF6634 1px, transparent 1px), linear-gradient(90deg, #FF6634 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        
        {/* Enhanced floating particles - 40 like Spark */}
        {Array.from({ length: 40 }).map((_, i) =>
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${Math.random() > 0.5 ? '#FF6634' : '#FF8A5B'} 0%, transparent 70%)`
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        )}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
          >
            {headerTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-xl text-[#E1E5EB] max-w-3xl mx-auto mb-12"
          >
            {headerSubtitle}
          </motion.p>
        </div>

        <div className="space-y-8 lg:space-y-6">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative group"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6634]/20 via-[#FF8A5B]/15 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative bg-gradient-to-br from-[#1A1F2E]/90 via-[#141824]/95 to-[#0F1218]/90 backdrop-blur-xl p-6 rounded-2xl border-2 border-[#2A3441] shadow-2xl hover:border-[#FF6634]/60 transition-all duration-700 hover:transform hover:scale-[1.02]">
                <div
                  className="flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer"
                  onClick={() => toggleLayer(layer.id)}
                >
                  <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold mb-2 text-[#FF6634]">{layer.title}</h3>
                    <p className="text-lg text-white">{formatTextWithBold(layer.description)}</p>
                  </div>
                  {layer.comingSoon && (
                    <Badge className="bg-gradient-to-r from-[#FF6634]/20 to-[#FF8A5B]/20 text-[#FF6634] border-[#FF6634]/40 px-3 py-1 text-sm absolute top-4 right-4">
                      {locale === 'en' ? 'Coming soon' : 'Próximamente'}
                    </Badge>
                  )}
                  <motion.div 
                    className="flex-shrink-0 ml-0 md:ml-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {openLayer === layer.id ? (
                      <ChevronUp className="w-6 h-6 text-[#FF6634]" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#FF6634]" />
                    )}
                  </motion.div>
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: openLayer === layer.id ? "auto" : 0, opacity: openLayer === layer.id ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden mt-4"
                >
                  <div className="bg-gradient-to-r from-[#FF6634]/10 to-transparent rounded-xl p-6 border-l-4 border-[#FF6634]">
                    <p className="text-base text-[#E1E5EB] leading-relaxed">
                      {formatTextWithBold(layer.extraContent)}
                    </p>
                  </div>
                </motion.div>

                {/* Enhanced layer indicator */}
                <motion.div 
                  className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-[#FF6634] to-[#FF8A5B] rounded-full shadow-2xl shadow-[#FF6634]/40 flex items-center justify-center"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-white text-lg font-black">{index + 1}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};