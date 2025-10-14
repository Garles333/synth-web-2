"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Sparkles, CheckCircle2, XCircle } from 'lucide-react';

const comparisonData = [
  {
    category: 'Personalidad',
    chatbot: 'Responde de forma genérica, sin una identidad coherente que la sustente. Es un "eco" de sus datos.',
    synth: 'Construye y mantiene una personalidad profunda, con historia, valores y un carácter consistente.',
  },
  {
    category: 'Cosmovisión',
    chatbot: 'Carece de un marco de creencias; sus respuestas son un reflejo estadístico de la web, sin un punto de vista propio.',
    synth: 'Opera desde un sistema de valores definido, lo que da coherencia y profundidad a todas sus interacciones.',
  },
  {
    category: 'Granularidad',
    chatbot: 'Ofrece respuestas de "libro de texto", sin la riqueza, las anécdotas y los matices de la experiencia personal.',
    synth: 'Revela detalles y anécdotas únicas, basadas en su perfil psico-demográfico y su memoria contextual.',
  },
  {
    category: 'Sesgos Cognitivos',
    chatbot: 'Está diseñado para ser objetivo y neutral, eliminando las "imperfecciones" del juicio humano real.',
    synth: 'Incorpora deliberadamente sesgos para simular con alta fidelidad los atajos mentales del pensamiento humano.',
  },
  {
    category: 'Estado Anímico',
    chatbot: 'Es incapaz de sentir o simular emociones, lo que resulta en interacciones monótonas y predecibles.',
    synth: 'Simula un estado anímico dinámico (frustración, entusiasmo) que evoluciona de forma realista durante la charla.',
  },
  {
    category: 'Agenda Oculta',
    chatbot: 'No tiene metas propias más allá de responder. Es un interlocutor pasivo que espera la siguiente pregunta.',
    synth: 'Posee motivaciones subyacentes (ej. "quiere aparentar ser experto") que influyen sutilmente en la conversación.',
  },
];

export const DiferenciaFundamental = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <section ref={ref} className="py-32 px-4 bg-gradient-to-b from-[#0B0E1A] via-[#0F1119] to-[#0B0E1A] relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#FF6634]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-[#FF6634]/5 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#FF6634]/5 via-transparent to-transparent blur-3xl"></div>
        
        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FF6634] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#FF6634 1px, transparent 1px), linear-gradient(90deg, #FF6634 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        style={{ opacity, scale }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-[#FF6634]/20 to-[#FF8A5B]/20 border border-[#FF6634]/30 rounded-full backdrop-blur-sm"
          >
            <span className="text-[#FF6634] font-semibold text-sm tracking-wider uppercase">Comparativa Técnica</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
            La Diferencia es el{' '}
            <motion.span 
              className="bg-gradient-to-r from-[#FF6634] via-[#FF8A5B] to-[#FF6634] bg-clip-text text-transparent"
              style={{ backgroundSize: '200% 200%' }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              Insight
            </motion.span>
            ,<br className="hidden md:block" /> no la Respuesta
          </h2>
          <p className="text-xl md:text-2xl text-[#E1E5EB] max-w-4xl mx-auto leading-relaxed font-light">
            Un chatbot te da información genérica. Un participante sintético de Synth te revela{' '}
            <span className="text-white font-medium">motivaciones humanas</span>.
          </p>
        </motion.div>

        {/* VS Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
          viewport={{ once: true }}
          className="flex justify-center mb-12 relative z-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6634] to-[#FF8A5B] rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-[#FF6634] to-[#FF8A5B] text-white font-bold text-2xl px-8 py-4 rounded-full shadow-2xl">
              VS
            </div>
          </div>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Chatbot Genérico */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A2A]/50 to-[#1A1A1A]/50 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-[#2A2A2A]/60 via-[#252525]/60 to-[#1A1A1A]/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-[#3A3A3A] overflow-hidden">
              {/* Header */}
              <div className="flex flex-col items-center mb-10 relative">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#4A4A4A]/30 rounded-full blur-xl"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#4A4A4A] to-[#3A3A3A] rounded-full flex items-center justify-center shadow-2xl border border-[#5A5A5A]">
                    <Brain className="w-10 h-10 text-[#888888]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-[#CCCCCC] mb-2 font-mono">Chatbot Genérico</h3>
                <div className="flex items-center gap-2 text-[#888888] text-sm">
                  <XCircle className="w-4 h-4" />
                  <span>Respuestas sin profundidad</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-5">
                {comparisonData.map((item, index) => (
                  <motion.div
                    key={`chatbot-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative group/item"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2A2A2A]/0 via-[#3A3A3A]/20 to-[#2A2A2A]/0 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative bg-[#1F1F1F]/80 rounded-xl p-5 border border-[#3A3A3A]/50 hover:border-[#4A4A4A] transition-all duration-300">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 bg-[#2A2A2A] rounded-lg flex items-center justify-center flex-shrink-0 border border-[#3A3A3A]">
                          <span className="text-[#888888] font-mono text-xs font-bold">{index + 1}</span>
                        </div>
                        <h4 className="font-mono text-sm font-bold text-[#999999] uppercase tracking-wider">{item.category}</h4>
                      </div>
                      <p className="font-mono text-sm text-[#AAAAAA] leading-relaxed pl-11">{item.chatbot}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Synth */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6634]/20 to-[#FF8A5B]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>
            
            <div className="relative bg-gradient-to-br from-[#1A1F2E]/95 via-[#151925]/95 to-[#0F1218]/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 border-2 border-[#FF6634] overflow-hidden shadow-2xl">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Header */}
              <div className="flex flex-col items-center mb-10 relative z-10">
                <div className="relative mb-6">
                  <motion.div 
                    className="absolute inset-0 bg-[#FF6634]/30 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#FF6634] via-[#FF7A4D] to-[#FF8A5B] rounded-full flex items-center justify-center shadow-2xl">
                    <Sparkles className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
                  Participante Synth
                  <img
                    src="https://i.postimg.cc/bvqJBxD6/Logo-Synth-sin-fondo.png"
                    alt="Synth"
                    className="h-7 w-auto object-contain"
                  />
                </h3>
                <div className="flex items-center gap-2 text-[#FF6634] text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Insights auténticos y profundos</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-5 relative z-10">
                {comparisonData.map((item, index) => (
                  <motion.div
                    key={`synth-${index}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative group/item"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6634]/0 via-[#FF6634]/10 to-[#FF6634]/0 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-5 border border-[#FF6634]/30 hover:border-[#FF6634]/60 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#FF6634] to-[#FF8A5B] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                          <span className="text-white font-bold text-xs">{index + 1}</span>
                        </div>
                        <h4 className="text-sm font-bold text-[#FF6634] uppercase tracking-wider">{item.category}</h4>
                      </div>
                      <p className="text-sm text-white leading-relaxed pl-11 font-light">{item.synth}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};