"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Settings, Database, Brain, CheckCircle, Zap, ArrowRight } from 'lucide-react';

const contentByLocale = {
  es: {
    badge: 'Motor de Creación Spark',
    title1: 'Así Nace',
    title2: 'una Persona Sintética en Segundos',
    subtitle1: 'Presentamos',
    sparkLabel: 'Spark',
    subtitle2: ', nuestro motor de creación probabilística.',
    subtitle3: 'La herramienta definitiva para eliminar el sesgo del \'lienzo en blanco\' y descubrir perfiles que no sabías que necesitabas.',
    problemTitle: 'El Problema que Resuelve',
    problemText: 'El mayor riesgo al inicio de una investigación es nuestro propio sesgo. Inconscientemente, diseñamos perfiles que confirman nuestras hipótesis.',
    problemHighlight: 'Spark rompe este ciclo',
    problemText2: '. No es un generador aleatorio; es un catalizador de ideas que crea perfiles realistas y coherentes, introduciendo la variabilidad del mundo real en tu estudio.',
    step1Badge: 'Paso 1',
    step1Title: 'El Ancla',
    step1Subtitle: '(Tu Control)',
    step1Text: 'Tú defines los pilares no negociables. A través de una interfaz simple, proporcionas los anclajes demográficos:',
    step1Bold: 'Rango de Edad, NSE y País',
    step1Text2: '. Esto asegura que cada \'chispa\' sea siempre relevante para tu investigación.',
    step1Field1: 'Rango de Edad',
    step1Value1: '25-35',
    step1Field2: 'NSE',
    step1Value2: 'Medio-alto',
    step1Field3: 'Ubicación',
    step1Value3: 'Madrid (España)',
    step2Badge: 'Paso 2',
    step2Title: 'La Lógica',
    step2Subtitle: '(El Sorteo Probabilístico)',
    step2Text: 'Aquí ocurre la magia. Spark utiliza un motor de datos socioculturales para asignar las 5 capas de la emulación humana. Imagina que tiramos unos dados cargados basados en la realidad de esa demografía:',
    step2Item1Title: 'Capa 1 (Perfil)',
    step2Item1Desc: 'Sortear rasgos de personalidad (ej. aversión al riesgo) y sesgos cognitivos, con probabilidades que se ajustan entre sí para mayor coherencia.',
    step2Item2Title: 'Capa 4 (Cosmovisión)',
    step2Item2Desc: 'Selecciona automáticamente la Cosmovisión más apropiada de nuestro motor.',
    step2Item3Title: 'Otras Capas',
    step2Item3Desc: 'Establece la estructura para la Memoria, Conocimiento y el Modelo de Lenguaje.',
    step2Tag1: 'Aversión al Riesgo: 25%',
    step2Tag2: 'Sesgo Status Quo: +20%',
    step2Tag3: 'Cosmovisión: Jóvenes Urbanos',
    step3Badge: 'Paso 3',
    step3Title: 'La Narrativa',
    step3Subtitle: '(La Síntesis con IA)',
    step3Text: 'Finalmente, la IA recibe esta ficha de datos estructurada y actúa como un psicólogo experto, sintetizando una narrativa humana y creíble.',
    step3Bold: 'No inventa; deduce lógicamente',
    step3Text2: ' las metas, miedos y motivaciones a partir de los rasgos sorteados.',
    step3Name: 'Ana García',
    step3Gender: 'Mujer',
    step3Age: '28 años',
    step3Location: 'Madrid',
    step3BioLabel: 'Bio',
    step3BioText: 'Profesional del sector tecnológico, valora la estabilidad...',
    step3GoalsLabel: 'Metas',
    step3GoalsText: 'Equilibrio vida-trabajo, seguridad financiera...',
    step3FrustLabel: 'Frustraciones',
    step3FrustText: 'Incertidumbre laboral, cambios rápidos...',
    conclusionText1: 'No estás creando desde cero;',
    conclusionHighlight: 'dirigiendo la creación',
    conclusionText2: 'Genera participantes diversos y creíbles en segundos, listos para el Laboratorio o simulación directa. La combinación perfecta de',
    conclusionBold1: 'control estratégico',
    conclusionBold2: 'descubrimiento inspirado'
  },
  en: {
    badge: 'Spark Creation Engine',
    title1: 'How a Synthetic Person',
    title2: 'is Born in Seconds',
    subtitle1: 'Introducing',
    sparkLabel: 'Spark',
    subtitle2: ', our probabilistic creation engine.',
    subtitle3: 'The ultimate tool to eliminate \'blank canvas\' bias and discover profiles you didn\'t know you needed.',
    problemTitle: 'The Problem It Solves',
    problemText: 'The biggest risk at the start of research is our own bias. Unconsciously, we design profiles that confirm our hypotheses.',
    problemHighlight: 'Spark breaks this cycle',
    problemText2: '. It\'s not a random generator; it\'s an idea catalyst that creates realistic and coherent profiles, introducing real-world variability into your study.',
    step1Badge: 'Step 1',
    step1Title: 'The Anchor',
    step1Subtitle: '(Your Control)',
    step1Text: 'You define the non-negotiable pillars. Through a simple interface, you provide demographic anchors:',
    step1Bold: 'Age Range, Socioeconomic Status, and Country',
    step1Text2: '. This ensures every \'spark\' is always relevant to your research.',
    step1Field1: 'Age Range',
    step1Value1: '25-35',
    step1Field2: 'SES',
    step1Value2: 'Upper-middle',
    step1Field3: 'Location',
    step1Value3: 'Madrid (Spain)',
    step2Badge: 'Step 2',
    step2Title: 'The Logic',
    step2Subtitle: '(The Probabilistic Draw)',
    step2Text: 'Here\'s where the magic happens. Spark uses a sociocultural data engine to assign the 5 layers of human emulation. Imagine rolling loaded dice based on that demographic\'s reality:',
    step2Item1Title: 'Layer 1 (Profile)',
    step2Item1Desc: 'Draw personality traits (e.g., risk aversion) and cognitive biases, with probabilities that adjust to each other for greater coherence.',
    step2Item2Title: 'Layer 4 (Worldview)',
    step2Item2Desc: 'Automatically selects the most appropriate Worldview from our engine.',
    step2Item3Title: 'Other Layers',
    step2Item3Desc: 'Establishes the structure for Memory, Knowledge, and the Language Model.',
    step2Tag1: 'Risk Aversion: 25%',
    step2Tag2: 'Status Quo Bias: +20%',
    step2Tag3: 'Worldview: Urban Youth',
    step3Badge: 'Step 3',
    step3Title: 'The Narrative',
    step3Subtitle: '(AI Synthesis)',
    step3Text: 'Finally, the AI receives this structured data sheet and acts like an expert psychologist, synthesizing a credible human narrative.',
    step3Bold: 'It doesn\'t invent; it logically deduces',
    step3Text2: ' goals, fears, and motivations from the drawn traits.',
    step3Name: 'Ana García',
    step3Gender: 'Woman',
    step3Age: '28 years old',
    step3Location: 'Madrid',
    step3BioLabel: 'Bio',
    step3BioText: 'Tech sector professional, values stability...',
    step3GoalsLabel: 'Goals',
    step3GoalsText: 'Work-life balance, financial security...',
    step3FrustLabel: 'Frustrations',
    step3FrustText: 'Job uncertainty, rapid changes...',
    conclusionText1: 'You\'re not creating from scratch;',
    conclusionHighlight: 'directing creation',
    conclusionText2: 'Generate diverse and credible participants in seconds, ready for the Laboratory or direct simulation. The perfect combination of',
    conclusionBold1: 'strategic control',
    conclusionBold2: 'inspired discovery'
  }
} as const;

export const SparkSection = ({ locale = 'es' }: { locale?: 'es' | 'en' }) => {
  const content = contentByLocale[locale];

  return (
    <section className="py-40 px-4 bg-gradient-to-b from-[#0B0E1A] via-[#0D0F16] to-[#0B0E1A] relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Large gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[#FF6634]/15 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[900px] h-[900px] bg-[#FF8A5B]/10 rounded-full blur-[180px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#FF6634 1px, transparent 1px), linear-gradient(90deg, #FF6634 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        
        {/* Enhanced floating particles */}
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
          }} />

        )}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-24">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-8 px-8 py-3 bg-gradient-to-r from-[#FF6634]/25 via-[#FF8A5B]/20 to-[#FF6634]/25 border-2 border-[#FF6634]/40 rounded-full backdrop-blur-xl shadow-2xl shadow-[#FF6634]/20">

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>

              <Sparkles className="w-5 h-5 text-[#FF6634]" />
            </motion.div>
            <span className="text-[#FF6634] font-bold text-base tracking-widest uppercase">{content.badge}</span>
            <Zap className="w-5 h-5 text-[#FF8A5B]" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <motion.span
              className="inline-block bg-gradient-to-r from-[#FF6634] via-[#FF8A5B] to-[#FFAA7F] bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>

              {content.title1}
            </motion.span>
            <br />
            <motion.span
              className="inline-block text-white"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}>

              {content.title2}
            </motion.span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-4xl mx-auto">

            <p className="text-xl text-[#E1E5EB] leading-relaxed font-light mb-4">
              {content.subtitle1} <span className="text-white font-bold bg-gradient-to-r from-[#FF6634]/20 to-transparent px-3 py-1 rounded">{content.sparkLabel}</span>{content.subtitle2}
            </p>
            <p className="text-base md:text-lg text-[#E1E5EB]/80 leading-relaxed">
              {content.subtitle3}
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Problem Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl mx-auto mb-32">

          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6634]/20 via-[#FF8A5B]/30 to-[#FF6634]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-gradient-to-br from-[#1A1F2E]/95 via-[#141824]/98 to-[#0F1218]/95 backdrop-blur-2xl border-2 border-[#2A3441] rounded-3xl p-12 shadow-2xl hover:border-[#FF6634]/50 transition-all duration-700">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6634] to-[#FF8A5B] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#FF6634]/30 flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3">{content.problemTitle}</h3>
                  <div className="w-32 h-1 bg-gradient-to-r from-[#FF6634] to-transparent rounded-full" />
                </div>
              </div>
              <p className="text-xl text-[#E1E5EB] leading-relaxed">
                {content.problemText} <span className="text-white font-bold bg-gradient-to-r from-[#FF6634]/20 to-transparent px-2 py-1 rounded">{content.problemHighlight}</span>{content.problemText2}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Enhanced 3-Step Process with connecting lines */}
        <div className="max-w-6xl mx-auto space-y-20 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF6634] via-[#FF8A5B] to-[#FF6634] opacity-20 hidden md:block transform -translate-x-1/2" />

          {/* Step 1: El Ancla */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative">

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                {/* Step number */}
                <motion.div
                  className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#FF6634] to-[#FF8A5B] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#FF6634]/40 transform -rotate-6"
                  whileHover={{ rotate: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}>

                  <span className="text-5xl font-black text-white">1</span>
                </motion.div>

                <div className="relative mt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FF6634] to-[#FF8A5B] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#FF6634]/40">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-[#FF6634] font-bold text-sm tracking-widest uppercase block mb-1">{content.step1Badge}</span>
                      <h3 className="text-4xl font-black text-white">{content.step1Title}</h3>
                      <p className="text-[#FF8A5B] text-sm font-semibold">{content.step1Subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xl text-[#E1E5EB] leading-relaxed mb-6">
                    {content.step1Text} <span className="text-white font-bold">{content.step1Bold}</span>{content.step1Text2}
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, rotateY: 10 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative group"
                  style={{ transformStyle: 'preserve-3d' }}>

                  {/* Card glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6634]/30 to-[#FF8A5B]/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative bg-gradient-to-br from-[#1A1F2E] via-[#141824] to-[#0F1218] border-2 border-[#2A3441] rounded-3xl p-10 backdrop-blur-xl hover:border-[#FF6634]/60 transition-all duration-700 shadow-2xl">
                    <div className="space-y-5">
                      {[
                      { label: content.step1Field1, value: content.step1Value1, icon: '👤' },
                      { label: content.step1Field2, value: content.step1Value2, icon: '💼' },
                      { label: content.step1Field3, value: content.step1Value3, icon: '🌍' }].
                      map((field, i) =>
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, x: 10 }}
                        className="relative group/item">

                          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6634]/20 to-transparent rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                          <div className="relative flex items-center gap-4 bg-[#0B0E1A]/80 border-2 border-[#FF6634]/40 rounded-xl px-6 py-4 backdrop-blur-sm hover:border-[#FF6634] transition-all duration-300">
                            <span className="text-3xl">{field.icon}</span>
                            <div className="flex-1">
                              <div className="text-xs text-[#FF8A5B] font-bold uppercase tracking-wider mb-1">{field.label}</div>
                              <div className="text-xl text-white font-bold !whitespace-pre-line">{field.value}</div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-[#FF6634] opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Step 2: La Lógica */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative">

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="md:order-2 relative">
                {/* Step number */}
                <motion.div
                  className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#FF8A5B] to-[#FF6634] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#FF8A5B]/40 transform rotate-6"
                  whileHover={{ rotate: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}>

                  <span className="text-5xl font-black text-white">2</span>
                </motion.div>

                <div className="relative mt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FF8A5B] to-[#FF6634] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#FF8A5B]/40">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-[#FF8A5B] font-bold text-sm tracking-widest uppercase block mb-1">{content.step2Badge}</span>
                      <h3 className="text-4xl font-black text-white">{content.step2Title}</h3>
                      <p className="text-[#FF8A5B] text-sm font-semibold">{content.step2Subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xl text-[#E1E5EB] leading-relaxed mb-8">
                    {content.step2Text}
                  </p>
                  <ul className="space-y-4">
                    {[
                    { title: content.step2Item1Title, desc: content.step2Item1Desc },
                    { title: content.step2Item2Title, desc: content.step2Item2Desc },
                    { title: content.step2Item3Title, desc: content.step2Item3Desc }].
                    map((item, i) =>
                    <motion.li
                      key={i}
                      className="flex items-start gap-4 group/li"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      whileHover={{ x: 10 }}>

                        <div className="w-6 h-6 bg-gradient-to-br from-[#FF6634] to-[#FF8A5B] rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover/li:shadow-[#FF6634]/50 transition-shadow duration-300">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[#E1E5EB] text-lg"><span className="text-white font-bold">{item.title}:</span> {item.desc}</span>
                      </motion.li>
                    )}
                  </ul>
                </div>
              </div>
              
              <div className="md:order-1 relative">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}>

                  {/* Central Spark Core with enhanced effects */}
                  <div className="relative flex items-center justify-center h-[400px]">
                    {/* Pulsing rings */}
                    {[0, 1, 2].map((i) =>
                    <motion.div
                      key={i}
                      className="absolute w-32 h-32 border-2 border-[#FF6634]/30 rounded-full"
                      animate={{
                        scale: [1 + i * 0.8, 2 + i * 0.8],
                        opacity: [0.6, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "easeOut"
                      }} />

                    )}

                    <motion.div
                      className="relative w-40 h-40 bg-gradient-to-br from-[#FF6634] via-[#FF8A5B] to-[#FFAA7F] rounded-full flex items-center justify-center shadow-2xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360],
                        boxShadow: [
                        '0 0 40px rgba(255, 102, 52, 0.4)',
                        '0 0 80px rgba(255, 102, 52, 0.8)',
                        '0 0 40px rgba(255, 102, 52, 0.4)']

                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>

                      <Sparkles className="w-20 h-20 text-white" />
                    </motion.div>

                    {/* Enhanced animated tags with better positioning */}
                    {[
                    { text: content.step2Tag1, angle: 210, delay: 0, icon: '⚠️' },
                    { text: content.step2Tag2, angle: 120, delay: 0.3, icon: '🔄' },
                    { text: content.step2Tag3, angle: 240, delay: 0.6, icon: '🌆' }].
                    map((tag, i) => {
                      const radius = 170;
                      const x = Math.cos(tag.angle * Math.PI / 180) * radius;
                      const y = Math.sin(tag.angle * Math.PI / 180) * radius;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 1 + tag.delay,
                            type: "spring",
                            stiffness: 200
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.15, zIndex: 10 }}
                          className="absolute bg-gradient-to-br from-[#1A1F2E] to-[#0F1218] border-2 border-[#FF6634]/60 rounded-xl px-4 py-3 text-sm text-white font-bold whitespace-nowrap shadow-2xl backdrop-blur-xl hover:border-[#FF6634] transition-all duration-300 cursor-pointer"
                          style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: 'translate(-50%, -50%)'
                          }}>

                          <div className="flex items-center gap-2">
                            <span className="text-xl">{tag.icon}</span>
                            <span>{tag.text}</span>
                          </div>
                        </motion.div>);

                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Step 3: La Narrativa */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative">

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                {/* Step number */}
                <motion.div
                  className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#FFAA7F] to-[#FF6634] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#FFAA7F]/40 transform -rotate-6"
                  whileHover={{ rotate: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}>

                  <span className="text-5xl font-black text-white">3</span>
                </motion.div>

                <div className="relative mt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FFAA7F] to-[#FF6634] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#FFAA7F]/40">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-[#FFAA7F] font-bold text-sm tracking-widest uppercase block mb-1">{content.step3Badge}</span>
                      <h3 className="text-4xl font-black text-white">{content.step3Title}</h3>
                      <p className="text-[#FFAA7F] text-sm font-semibold">{content.step3Subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xl text-[#E1E5EB] leading-relaxed">
                    {content.step3Text} <span className="text-white font-bold bg-gradient-to-r from-[#FF6634]/20 to-transparent px-2 py-1 rounded">{content.step3Bold}</span>{content.step3Text2}
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, rotateY: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative group"
                  style={{ transformStyle: 'preserve-3d' }}>

                  {/* Card glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFAA7F]/30 to-[#FF6634]/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative bg-gradient-to-br from-[#1A1F2E] via-[#141824] to-[#0F1218] border-2 border-[#FF6634]/60 rounded-3xl p-8 backdrop-blur-xl hover:border-[#FFAA7F] transition-all duration-700 shadow-2xl">
                    <div className="mb-6 text-center">
                      <motion.div
                        className="w-24 h-24 bg-gradient-to-br from-[#FF6634] to-[#FFAA7F] rounded-full mx-auto mb-4 shadow-2xl shadow-[#FF6634]/40 flex items-center justify-center text-5xl"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}>

                        👩
                      </motion.div>
                      <h4 className="text-3xl font-black text-white mb-2">{content.step3Name}</h4>
                      <div className="flex items-center justify-center gap-2 text-[#FF6634] font-semibold">
                        <span>{content.step3Gender}</span>
                        <span className="w-1 h-1 bg-[#FF6634] rounded-full" />
                        <span>{content.step3Age}</span>
                        <span className="w-1 h-1 bg-[#FF6634] rounded-full" />
                        <span>{content.step3Location}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                      { label: content.step3BioLabel, text: content.step3BioText, icon: '📝' },
                      { label: content.step3GoalsLabel, text: content.step3GoalsText, icon: '🎯' },
                      { label: content.step3FrustLabel, text: content.step3FrustText, icon: '😓' }].
                      map((item, i) =>
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                        whileHover={{ x: 5 }}
                        className="bg-[#0B0E1A]/60 border border-[#2A3441] rounded-xl p-4 hover:border-[#FF6634]/50 transition-all duration-300">

                          <div className="flex items-start gap-3">
                            <span className="text-2xl">{item.icon}</span>
                            <div className="flex-1">
                              <span className="text-[#FF6634] font-bold text-sm uppercase tracking-wider block mb-1">{item.label}</span>
                              <p className="text-[#E1E5EB] text-base">{item.text}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-32 text-center">

          <div className="relative inline-block max-w-5xl">
            {/* Multiple glow layers */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FF6634]/30 via-[#FF8A5B]/40 to-[#FF6634]/30 rounded-[2.5rem] blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity }} />

            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#FFAA7F]/20 to-[#FF6634]/20 rounded-[2.5rem] blur-2xl"
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }} />

            
            <div className="relative bg-gradient-to-br from-[#1A1F2E] via-[#141824] to-[#0F1218] backdrop-blur-2xl border-4 border-[#FF6634] rounded-[2rem] px-16 py-14 shadow-[0_0_80px_rgba(255,102,52,0.3)]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}>

                <p className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  {content.conclusionText1}{' '}
                  <br className="hidden md:block" />
                  {locale === 'es' ? 'estás' : 'you\'re'}{' '}
                  <span className="inline-block bg-gradient-to-r from-[#FF6634] via-[#FF8A5B] to-[#FFAA7F] bg-clip-text text-transparent">
                    {content.conclusionHighlight}
                  </span>.
                </p>
                
                <motion.div
                  className="w-40 h-1.5 bg-gradient-to-r from-transparent via-[#FF6634] to-transparent mx-auto mb-8 rounded-full"
                  animate={{ scaleX: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity }} />

                
                <p className="text-base md:text-lg text-[#E1E5EB] leading-relaxed max-w-3xl mx-auto">
                  {content.conclusionText2}{' '}
                  <span className="text-white font-bold bg-gradient-to-r from-[#FF6634]/20 to-transparent px-2 py-1 rounded">{content.conclusionBold1}</span>
                  {' '}{locale === 'es' ? 'y' : 'and'}{' '}
                  <span className="text-white font-bold bg-gradient-to-r from-[#FF8A5B]/20 to-transparent px-2 py-1 rounded">{content.conclusionBold2}</span>.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};