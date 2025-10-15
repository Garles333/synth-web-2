"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Heart, Users, Target, Globe, Zap, User } from 'lucide-react';

const modulesContent = {
  es: [
    {
      id: 1,
      icon: Heart,
      title: 'El Estado Anímico Inicial',
      description: 'Define el punto de partida emocional. ¿Tu participante llega a la sesión optimista, estresado o neutral? Un mismo perfil reaccionará de forma muy distinta a tu concepto según su estado anímico. Este simple ajuste desbloquea una nueva dimensión de realismo.',
      delay: 0.2,
      color: 'from-rose-500 to-pink-600',
      bgGlow: 'rose-500'
    },
    {
      id: 2,
      icon: Users,
      title: 'El Contexto Social',
      description: 'Controla la dinámica de poder. No hablamos igual a una figura de autoridad que a un amigo. Define si el moderador actúa como un "Entrevistador Formal" o un "Amigo Cercano" y observa cómo la formalidad o la cercanía alteran la sinceridad y el detalle de las respuestas.',
      delay: 0.4,
      color: 'from-blue-500 to-cyan-600',
      bgGlow: 'blue-500'
    },
    {
      id: 3,
      icon: Target,
      title: 'La Agenda Oculta',
      description: '¿Y si un participante "quiere aparentar ser un experto" o "es secretamente leal a la competencia"? Asigna una agenda oculta y observa cómo estas motivaciones influyen sutilmente en la conversación, revelando tensiones que las encuestas jamás capturarían.',
      delay: 0.6,
      color: 'from-purple-500 to-violet-600',
      bgGlow: 'purple-500'
    },
    {
      id: 4,
      icon: Globe,
      title: "Las Cosmovisiones Culturales",
      description: "Nuestro motor calibra el modelo de pensamiento usando marcos científicos como las Dimensiones Culturales de Hofstede. Ajustamos las variables que rigen la toma de decisiones, como la percepción de la autoridad, para garantizar un realismo regional basado en la ciencia del comportamiento.",
      delay: 0.8,
      color: 'from-emerald-500 to-teal-600',
      bgGlow: 'emerald-500'
    }
  ],
  en: [
    {
      id: 1,
      icon: Heart,
      title: 'The Initial Mood State',
      description: 'Define the emotional starting point. Does your participant arrive at the session optimistic, stressed, or neutral? The same profile will react very differently to your concept depending on their mood state. This simple adjustment unlocks a new dimension of realism.',
      delay: 0.2,
      color: 'from-rose-500 to-pink-600',
      bgGlow: 'rose-500'
    },
    {
      id: 2,
      icon: Users,
      title: 'The Social Context',
      description: 'Control the power dynamics. We don\'t speak the same way to an authority figure as to a friend. Define whether the moderator acts as a "Formal Interviewer" or a "Close Friend" and observe how formality or closeness alter the sincerity and detail of responses.',
      delay: 0.4,
      color: 'from-blue-500 to-cyan-600',
      bgGlow: 'blue-500'
    },
    {
      id: 3,
      icon: Target,
      title: 'The Hidden Agenda',
      description: 'What if a participant "wants to appear as an expert" or "is secretly loyal to the competition"? Assign a hidden agenda and watch how these motivations subtly influence the conversation, revealing tensions that surveys would never capture.',
      delay: 0.6,
      color: 'from-purple-500 to-violet-600',
      bgGlow: 'purple-500'
    },
    {
      id: 4,
      icon: Globe,
      title: "Cultural Worldviews",
      description: "Our engine calibrates the thinking model using scientific frameworks like Hofstede's Cultural Dimensions. We adjust the variables that govern decision-making, such as perception of authority, to guarantee regional realism based on behavioral science.",
      delay: 0.8,
      color: 'from-emerald-500 to-teal-600',
      bgGlow: 'emerald-500'
    }
  ]
} as const;

export const LaboratorioRealismo = ({ locale = 'es' }: { locale?: 'es' | 'en' }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const modules = modulesContent[locale];

  const headerTitle = locale === 'en' 
    ? (<>
        Your{' '}
        <span className="bg-gradient-to-r from-[#FF6634] via-[#FF8A5B] to-[#FFAA7F] bg-clip-text text-transparent">
          Laboratory
        </span>
        {' '}of<br className="hidden md:block" />
        Human Behavior
      </>)
    : (<>
        Tu{' '}
        <span className="bg-gradient-to-r from-[#FF6634] via-[#FF8A5B] to-[#FFAA7F] bg-clip-text text-transparent">
          Laboratorio
        </span>
        {' '}de<br className="hidden md:block" />
        Comportamiento Humano
      </>);

  const headerSubtitle = locale === 'en'
    ? (<>
        Don't just run a simulation.{' '}
        <span className="text-white font-medium">Design an experiment</span>.
        <br className="hidden md:block" />
        We give you the tools to control every variable of realism.
      </>)
    : (<>
        No solo ejecutes una simulación.{' '}
        <span className="text-white font-medium">Diseña un experimento</span>.
        <br className="hidden md:block" />
        Te damos las herramientas para controlar cada variable del realismo.
      </>);

  const controlTotalLabel = locale === 'en' ? 'Full Control' : 'Control Total';
  const moduleLabel = locale === 'en' ? 'Module' : 'Módulo';

  return (
    <section ref={ref} className="py-40 px-4 bg-gradient-to-b from-[#0B0E1A] via-[#0D0F16] to-[#0B0E1A] relative overflow-hidden">
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

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        style={{ opacity }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-24">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-8 px-8 py-3 bg-gradient-to-r from-[#FF6634]/25 via-[#FF8A5B]/20 to-[#FF6634]/25 border-2 border-[#FF6634]/40 rounded-full backdrop-blur-xl shadow-2xl shadow-[#FF6634]/20">

            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
              <Zap className="w-5 h-5 text-[#FF6634]" />
            </motion.div>
            <span className="text-[#FF6634] font-bold text-base tracking-widest uppercase">{controlTotalLabel}</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
            {headerTitle}
          </h2>
          <p className="text-xl md:text-2xl text-[#E1E5EB] max-w-4xl mx-auto leading-relaxed font-light">
            {headerSubtitle}
          </p>
        </motion.div>

        {/* Central Visualization */}
        <div className="relative max-w-6xl mx-auto mb-24">
          {/* Central Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center justify-center relative">

            <div className="relative">
              {/* Rotating rings - like Spark */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                <div className="w-80 h-80 border-2 border-[#FF6634]/30 rounded-full"></div>
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
                <div className="w-96 h-96 border border-[#FF6634]/20 rounded-full"></div>
              </motion.div>

              {/* Pulsing rings - like Spark */}
              {[0, 1, 2].map((i) =>
                <motion.div
                  key={i}
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    scale: [1 + i * 0.3, 1.5 + i * 0.3],
                    opacity: [0.4, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeOut"
                  }}>
                  <div className="w-64 h-64 border-2 border-[#FF6634]/30 rounded-full"></div>
                </motion.div>
              )}

              {/* Main glow - enhanced */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0.7, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity }}>
                <div className="w-72 h-72 bg-gradient-radial from-[#FF6634]/40 via-[#FF6634]/20 to-transparent rounded-full blur-3xl"></div>
              </motion.div>
              
              {/* Person silhouette - enhanced */}
              <div className="relative w-56 h-56 flex items-center justify-center z-10">
                <motion.div
                  className="relative"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}>

                  {/* Outer glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-gradient-to-br from-[#FF6634] to-[#FF8A5B] rounded-full blur-3xl opacity-70"></div>
                  </div>
                  
                  {/* User icon with gradient */}
                  <div className="relative bg-gradient-to-br from-[#FF6634] via-[#FF8A5B] to-[#FFAA7F] rounded-full p-12 shadow-2xl">
                    <User className="w-20 h-20 text-white" strokeWidth={2.5} />
                  </div>
                  
                  {/* Multiple pulse rings */}
                  {[0, 1].map((i) =>
                    <motion.div
                      key={i}
                      className="absolute inset-0 border-2 border-[#FF6634] rounded-full"
                      animate={{
                        scale: [1, 1.4, 1.4],
                        opacity: [0.8, 0, 0]
                      }}
                      transition={{ 
                        duration: 2.5, 
                        repeat: Infinity,
                        delay: i * 1.25 
                      }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Connection lines to modules */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ width: '300%', height: '300%', left: '-100%', top: '-100%' }}>
                {modules.map((module, i) => {
                  const angle = (i * 90 - 45) * (Math.PI / 180);
                  const distance = 280;
                  const x1 = 50;
                  const y1 = 50;
                  const x2 = 50 + Math.cos(angle) * (distance / 3);
                  const y2 = 50 + Math.sin(angle) * (distance / 3);

                  return (
                    <motion.line
                      key={i}
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.5 }}
                      transition={{ duration: 1.5, delay: 0.6 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                      viewport={{ once: true }}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="#FF6634"
                      strokeWidth="2"
                      strokeDasharray="6,4" />);


                })}
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Control Modules Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {modules.map((module) => {
            const IconComponent = module.icon;
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: module.delay,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative group">

                {/* Glow effect - enhanced */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6634]/30 via-[#FF8A5B]/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative bg-gradient-to-br from-[#1A1F2E]/90 via-[#141824]/95 to-[#0F1218]/90 backdrop-blur-2xl border-2 border-[#2A3441] rounded-3xl p-8 overflow-hidden hover:border-[#FF6634]/60 transition-all duration-700 shadow-2xl hover:transform hover:scale-[1.02]">
                  {/* Shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-5 mb-6">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl relative`}
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${module.color} rounded-2xl blur-xl opacity-60`}></div>
                        <IconComponent className="w-8 h-8 text-white relative z-10" strokeWidth={2} />
                      </motion.div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[#FF6634] font-bold text-xs tracking-wider uppercase">{moduleLabel} {module.id}</span>
                          <div className="flex-1 h-px bg-gradient-to-r from-[#FF6634]/50 to-transparent"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-white leading-tight !whitespace-pre-line">{module.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-[#E1E5EB] leading-relaxed text-[15px] font-light !whitespace-pre-line">{module.description}</p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF6634]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};