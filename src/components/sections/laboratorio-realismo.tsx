"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Heart, Users, Target, Globe, Zap, User } from 'lucide-react';

const modules = [
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
  description: "Nuestro motor calibra el modelo de pensamiento usando marcos cient\xEDficos como las Dimensiones Culturales de Hofstede. Ajustamos las variables que rigen la toma de decisiones, como la percepci\xF3n de la autoridad, para garantizar un realismo regional basado en la ciencia del comportamiento.",
  delay: 0.8,
  color: 'from-emerald-500 to-teal-600',
  bgGlow: 'emerald-500'
}];


export const LaboratorioRealismo = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <section ref={ref} className="py-32 px-4 bg-gradient-to-b from-[#0B0E1A] via-[#0D0F16] to-[#0B0E1A] relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] bg-[#FF6634]/10 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[800px] h-[800px] bg-[#FF8A5B]/8 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-[#FF6634]/8 via-transparent to-transparent"></div>
        
        {/* Animated grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#FF6634 1px, transparent 1px), linear-gradient(90deg, #FF6634 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
          animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
        </motion.div>

        {/* Floating orbs */}
        {Array.from({ length: 20 }).map((_, i) =>
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, #FF6634 0%, transparent 70%)`
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }} />

        )}
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        style={{ opacity }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-24">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-gradient-to-r from-[#FF6634]/20 to-[#FF8A5B]/20 border border-[#FF6634]/30 rounded-full backdrop-blur-sm">

            <Zap className="w-4 h-4 text-[#FF6634]" />
            <span className="text-[#FF6634] font-semibold text-sm tracking-wider uppercase">Control Total</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
            Tu{' '}
            <span className="bg-gradient-to-r from-[#FF6634] via-[#FF8A5B] to-[#FFAA7F] bg-clip-text text-transparent">
              Laboratorio
            </span>
            {' '}de<br className="hidden md:block" />
            Comportamiento Humano
          </h2>
          <p className="text-xl md:text-2xl text-[#E1E5EB] max-w-4xl mx-auto leading-relaxed font-light">
            No solo ejecutes una simulación.{' '}
            <span className="text-white font-medium">Diseña un experimento</span>.
            <br className="hidden md:block" />
            Te damos las herramientas para controlar cada variable del realismo.
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
              {/* Rotating rings */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>

                <div className="w-80 h-80 border-2 border-[#FF6634]/20 rounded-full"></div>
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>

                <div className="w-96 h-96 border border-[#FF6634]/10 rounded-full"></div>
              </motion.div>

              {/* Main glow */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 3, repeat: Infinity }}>

                <div className="w-72 h-72 bg-gradient-radial from-[#FF6634]/30 via-[#FF6634]/10 to-transparent rounded-full blur-2xl"></div>
              </motion.div>
              
              {/* Person silhouette - IMPROVED */}
              <div className="relative w-56 h-56 flex items-center justify-center z-10">
                <motion.div
                  className="relative"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>

                  {/* Outer glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#FF6634] to-[#FF8A5B] rounded-full blur-3xl opacity-60"></div>
                  </div>
                  
                  {/* User icon */}
                  <div className="relative bg-gradient-to-br from-[#FF6634] to-[#FF8A5B] rounded-full p-12 shadow-2xl">
                    <User className="w-20 h-20 text-white" strokeWidth={2.5} />
                  </div>
                  
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-[#FF6634] rounded-full"
                    animate={{
                      scale: [1, 1.3, 1.3],
                      opacity: [0.8, 0, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }} />

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
                      whileInView={{ pathLength: 1, opacity: 0.4 }}
                      transition={{ duration: 1.2, delay: 0.6 + i * 0.15, ease: "easeOut" }}
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
                  duration: 0.7,
                  delay: module.delay,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative group">

                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${module.bgGlow}/20 to-${module.bgGlow}/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative bg-gradient-to-br from-[#1A1F2E]/90 via-[#141824]/90 to-[#0F1218]/90 backdrop-blur-xl border border-[#2A3441] rounded-3xl p-8 overflow-hidden hover:border-[#FF6634]/50 transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
                  {/* Shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-5 mb-6">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl relative`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}>

                        <div className={`absolute inset-0 bg-gradient-to-br ${module.color} rounded-2xl blur-lg opacity-50`}></div>
                        <IconComponent className="w-8 h-8 text-white relative z-10" strokeWidth={2} />
                      </motion.div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[#FF6634] font-bold text-xs tracking-wider uppercase">Módulo {module.id}</span>
                          <div className="flex-1 h-px bg-gradient-to-r from-[#FF6634]/50 to-transparent"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-white leading-tight !whitespace-pre-line">{module.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-[#E1E5EB] leading-relaxed text-[15px] font-light !whitespace-pre-line !whitespace-pre-line">{module.description}</p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF6634]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>);

          })}
        </div>
      </motion.div>
    </section>);

};