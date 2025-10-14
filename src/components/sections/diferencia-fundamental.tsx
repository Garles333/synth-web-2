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
        style={{ opacity }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-8 px-8 py-3 bg-gradient-to-r from-[#FF6634]/25 via-[#FF8A5B]/20 to-[#FF6634]/25 border-2 border-[#FF6634]/40 rounded-full backdrop-blur-xl shadow-2xl shadow-[#FF6634]/20"
          >
            <Sparkles className="w-5 h-5 text-[#FF6634]" />
            <span className="text-[#FF6634] font-bold text-base tracking-widest uppercase">Comparativa Técnica</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
            La Diferencia es el{' '}
            <motion.span 
              className="bg-gradient-to-r from-[#FF6634] via-[#FF8A5B] to-[#FFAA7F] bg-clip-text text-transparent"
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
          transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12 relative z-20"
        >
          <div className="relative">
            {/* Multiple pulsing rings */}
            {[0, 1, 2].map((i) =>
              <motion.div
                key={i}
                className="absolute inset-0 bg-gradient-to-r from-[#FF6634] to-[#FF8A5B] rounded-full blur-xl"
                animate={{
                  scale: [1 + i * 0.3, 1.5 + i * 0.3],
                  opacity: [0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeOut"
                }}
              />
            )}
            <motion.div 
              className="relative bg-gradient-to-r from-[#FF6634] to-[#FF8A5B] text-white font-black text-2xl px-8 py-4 rounded-full shadow-2xl"
              animate={{
                boxShadow: [
                  '0 0 40px rgba(255, 102, 52, 0.4)',
                  '0 0 80px rgba(255, 102, 52, 0.8)',
                  '0 0 40px rgba(255, 102, 52, 0.4)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              VS
            </motion.div>
          </div>
        </motion.div>

        {/* Integrated Comparison Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative max-w-7xl mx-auto"
        >
          {/* Outer glow - enhanced */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6634]/30 via-[#FF8A5B]/20 to-transparent rounded-3xl blur-3xl opacity-80"></div>
          
          {/* Main container with border */}
          <div className="relative bg-gradient-to-br from-[#1A1F2E]/90 via-[#141824]/95 to-[#0F1218]/90 backdrop-blur-2xl border-2 border-[#FF6634]/40 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Headers Row */}
            <div className="grid lg:grid-cols-2 border-b-2 border-[#FF6634]/30">
              {/* Left Header - Generic Chatbot */}
              <div className="relative group border-r border-[#FF6634]/30">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8 flex flex-col items-center justify-center min-h-[200px]">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-[#4A4A4A]/30 rounded-full blur-xl"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-[#4A4A4A] to-[#3A3A3A] rounded-full flex items-center justify-center shadow-2xl border border-[#5A5A5A]">
                      <Brain className="w-8 h-8 text-[#888888]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-[#CCCCCC] mb-2">Chatbot Genérico</h3>
                  <div className="flex items-center gap-2 text-[#888888] text-sm">
                    <XCircle className="w-4 h-4" />
                    <span>Respuestas sin profundidad</span>
                  </div>
                </div>
              </div>

              {/* Right Header - Synth Participant */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6634]/10 to-[#FF8A5B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8 flex flex-col items-center justify-center min-h-[200px]">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#FF6634] blur-lg opacity-50 rounded-xl"></div>
                      <img
                        src="https://i.postimg.cc/bvqJBxD6/Logo-Synth-sin-fondo.png"
                        alt="Synth Logo"
                        className="h-16 w-16 object-contain relative z-10"
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Participante</h3>
                  </div>
                  <div className="flex items-center gap-2 text-[#FF6634] text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Insights profundos y humanos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Rows */}
            <div>
              {comparisonData.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`grid lg:grid-cols-2 ${index !== comparisonData.length - 1 ? 'border-b border-[#2A3441]' : ''}`}
                >
                  {/* Left Side - Chatbot */}
                  <div className="relative group border-r border-[#2A3441]">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 to-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative p-6 min-h-[140px] flex flex-col">
                      <h4 className="text-xs font-bold text-gray-500 mb-3 tracking-wider uppercase">{item.category}</h4>
                      <p className="text-gray-400 leading-relaxed text-sm font-light">{item.chatbot}</p>
                    </div>
                  </div>

                  {/* Right Side - Synth - Enhanced hover */}
                  <motion.div 
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6634]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative p-6 min-h-[140px] flex flex-col">
                      <h4 className="text-xs font-bold text-[#FF6634] mb-3 tracking-wider uppercase">{item.category}</h4>
                      <p className="text-white leading-relaxed text-sm font-light">{item.synth}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};