"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles } from 'lucide-react';

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
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0B0E1A] to-[#1A1F2E]/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#FF6634]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF6634]/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            La Diferencia es el <span className="text-[#FF6634]">Insight</span>, no la Respuesta
          </h2>
          <p className="text-xl text-[#E1E5EB] max-w-3xl mx-auto">
            Un chatbot te da información genérica. Un participante sintético de Synth te revela motivaciones humanas.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Chatbot Genérico */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-br from-[#3A3A3A]/40 to-[#2A2A2A]/40 rounded-3xl p-8 border border-[#4A4A4A]"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-[#4A4A4A] rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-[#888888]" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-2xl font-mono font-bold text-center mb-8 text-[#CCCCCC]">Chatbot Genérico</h3>
            
            <div className="space-y-6">
              {comparisonData.map((item, index) => (
                <motion.div
                  key={`chatbot-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-[#2A2A2A]/50 rounded-xl p-4 border border-[#4A4A4A]/50"
                >
                  <h4 className="font-mono text-sm font-bold text-[#888888] mb-2">{item.category}</h4>
                  <p className="font-mono text-sm text-[#AAAAAA] leading-relaxed">{item.chatbot}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Synth */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border-2 border-[#FF6634]"
          >
            <div className="flex items-center justify-center mb-8 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#FF6634]/20 rounded-full blur-xl animate-pulse"></div>
              </div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-[#FF6634] to-[#FF8A5B] rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-8 text-white flex items-center justify-center gap-2">
              Participante Synth
              <img
                src="https://i.postimg.cc/bvqJBxD6/Logo-Synth-sin-fondo.png"
                alt="Synth"
                className="h-6 w-auto object-contain inline-block"
              />
            </h3>
            
            <div className="space-y-6">
              {comparisonData.map((item, index) => (
                <motion.div
                  key={`synth-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white/5 rounded-xl p-4 border border-[#FF6634]/30 hover:border-[#FF6634]/60 hover:bg-white/10 transition-all duration-300"
                >
                  <h4 className="text-sm font-bold text-[#FF6634] mb-2">{item.category}</h4>
                  <p className="text-sm text-white leading-relaxed">{item.synth}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};