"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Settings, Database, Brain, CheckCircle } from 'lucide-react';

export const SparkSection = () => {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-[#0B0E1A] to-[#0D0F16] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#FF6634]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-[#FF8A5B]/8 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, #FF6634 0%, transparent 70%)`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-gradient-to-r from-[#FF6634]/20 to-[#FF8A5B]/20 border border-[#FF6634]/30 rounded-full backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-[#FF6634]" />
            <span className="text-[#FF6634] font-semibold text-sm tracking-wider uppercase">Motor de Creación</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            <span className="bg-gradient-to-r from-[#FF6634] via-[#FF8A5B] to-[#FFAA7F] bg-clip-text text-transparent">
              Así Nace
            </span>
            <br />
            una Persona Sintética en Segundos
          </h2>
          
          <p className="text-xl md:text-2xl text-[#E1E5EB] max-w-4xl mx-auto leading-relaxed font-light">
            Presentamos <span className="text-white font-semibold">Spark</span>, nuestro motor de creación probabilística.{' '}
            La herramienta definitiva para eliminar el sesgo del 'lienzo en blanco' y descubrir perfiles que no sabías que necesitabas.
          </p>
        </motion.div>

        {/* Problem Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-br from-[#1A1F2E]/90 via-[#141824]/90 to-[#0F1218]/90 backdrop-blur-xl border border-[#2A3441] rounded-3xl p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">El Problema que Resuelve</h3>
            <p className="text-lg text-[#E1E5EB] leading-relaxed">
              El mayor riesgo al inicio de una investigación es nuestro propio sesgo. Inconscientemente, diseñamos perfiles que confirman nuestras hipótesis. <span className="text-white font-semibold">Spark rompe este ciclo</span>. No es un generador aleatorio; es un catalizador de ideas que crea perfiles realistas y coherentes, introduciendo la variabilidad del mundo real en tu estudio.
            </p>
          </div>
        </motion.div>

        {/* 3-Step Process */}
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Step 1: El Ancla */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF6634] to-[#FF8A5B] rounded-full flex items-center justify-center shadow-2xl">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-[#FF6634] font-bold text-sm tracking-wider uppercase">Paso 1</span>
                    <h3 className="text-3xl font-bold text-white">El Ancla (Tu Control)</h3>
                  </div>
                </div>
                <p className="text-lg text-[#E1E5EB] leading-relaxed mb-6">
                  Tú defines los pilares no negociables. A través de una interfaz simple, proporcionas los anclajes demográficos: <span className="text-white font-semibold">Rango de Edad, NSE y País</span>. Esto asegura que cada 'chispa' sea siempre relevante para tu investigación.
                </p>
              </div>
              
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#1A1F2E] to-[#0F1218] border border-[#2A3441] rounded-2xl p-8"
                >
                  <div className="space-y-4">
                    {['Rango de Edad: 25-35', 'NSE: C+', 'País: España'].map((field, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-[#0B0E1A]/50 border border-[#FF6634]/30 rounded-lg px-4 py-3 text-white font-medium"
                      >
                        {field}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Step 2: La Lógica */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF6634] to-[#FF8A5B] rounded-full flex items-center justify-center shadow-2xl">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-[#FF6634] font-bold text-sm tracking-wider uppercase">Paso 2</span>
                    <h3 className="text-3xl font-bold text-white">La Lógica (El Sorteo Probabilístico)</h3>
                  </div>
                </div>
                <p className="text-lg text-[#E1E5EB] leading-relaxed mb-6">
                  Aquí ocurre la magia. Spark utiliza un motor de datos socioculturales para asignar las 5 capas de la emulación humana. Imagina que tiramos unos dados cargados basados en la realidad de esa demografía:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF6634] mt-0.5 flex-shrink-0" />
                    <span className="text-[#E1E5EB]"><span className="text-white font-semibold">Capa 1 (Perfil):</span> Sortear rasgos de personalidad (ej. aversión al riesgo) y sesgos cognitivos, con probabilidades que se ajustan entre sí para mayor coherencia.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF6634] mt-0.5 flex-shrink-0" />
                    <span className="text-[#E1E5EB]"><span className="text-white font-semibold">Capa 4 (Cosmovisión):</span> Selecciona automáticamente la Cosmovisión más apropiada de nuestro motor.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF6634] mt-0.5 flex-shrink-0" />
                    <span className="text-[#E1E5EB]"><span className="text-white font-semibold">Otras Capas:</span> Establece la estructura para la Memoria, Conocimiento y el Modelo de Lenguaje.</span>
                  </li>
                </ul>
              </div>
              
              <div className="md:order-1 relative">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {/* Central Spark Core */}
                  <div className="relative flex items-center justify-center">
                    <motion.div
                      className="w-32 h-32 bg-gradient-to-br from-[#FF6634] to-[#FF8A5B] rounded-full flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          '0 0 20px rgba(255, 102, 52, 0.3)',
                          '0 0 60px rgba(255, 102, 52, 0.6)',
                          '0 0 20px rgba(255, 102, 52, 0.3)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="w-16 h-16 text-white" />
                    </motion.div>

                    {/* Animated tags */}
                    {[
                      { text: 'Aversión al Riesgo: 75%', angle: 0, delay: 0 },
                      { text: 'Sesgo Status Quo: +20%', angle: 120, delay: 0.2 },
                      { text: 'Cosmovisión: Jóvenes Urbanos', angle: 240, delay: 0.4 },
                    ].map((tag, i) => {
                      const x = Math.cos((tag.angle * Math.PI) / 180) * 120;
                      const y = Math.sin((tag.angle * Math.PI) / 180) * 120;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 + tag.delay }}
                          viewport={{ once: true }}
                          className="absolute bg-[#1A1F2E] border border-[#FF6634]/50 rounded-lg px-3 py-2 text-xs text-white font-medium whitespace-nowrap"
                          style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}
                        >
                          {tag.text}
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Step 3: La Narrativa */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF6634] to-[#FF8A5B] rounded-full flex items-center justify-center shadow-2xl">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-[#FF6634] font-bold text-sm tracking-wider uppercase">Paso 3</span>
                    <h3 className="text-3xl font-bold text-white">La Narrativa (La Síntesis con IA)</h3>
                  </div>
                </div>
                <p className="text-lg text-[#E1E5EB] leading-relaxed">
                  Finalmente, la IA recibe esta ficha de datos estructurada y actúa como un psicólogo experto, sintetizando una narrativa humana y creíble. <span className="text-white font-semibold">No inventa; deduce lógicamente</span> las metas, miedos y motivaciones a partir de los rasgos sorteados.
                </p>
              </div>
              
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#1A1F2E] to-[#0F1218] border border-[#FF6634]/50 rounded-2xl p-6"
                >
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FF6634] to-[#FF8A5B] rounded-full mx-auto mb-3"></div>
                    <h4 className="text-xl font-bold text-white text-center">Ana García</h4>
                    <p className="text-sm text-[#FF6634] text-center">Mujer, 28 años, Madrid</p>
                  </div>
                  <div className="space-y-3 text-sm text-[#E1E5EB]">
                    <p><span className="text-white font-semibold">Bio:</span> Profesional del sector tecnológico, valora la estabilidad...</p>
                    <p><span className="text-white font-semibold">Metas:</span> Equilibrio vida-trabajo, seguridad financiera...</p>
                    <p><span className="text-white font-semibold">Frustraciones:</span> Incertidumbre laboral, cambios rápidos...</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-24 text-center"
        >
          <div className="relative inline-block max-w-5xl">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#FF6634]/20 via-[#FF8A5B]/30 to-[#FF6634]/20 rounded-3xl blur-2xl"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
            
            <div className="relative bg-gradient-to-br from-[#1A1F2E]/95 via-[#141824]/95 to-[#0F1218]/95 backdrop-blur-xl border-2 border-[#FF6634] rounded-3xl px-12 py-10 shadow-2xl">
              <p className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                No estás creando desde cero; estás{' '}
                <span className="bg-gradient-to-r from-[#FF6634] to-[#FF8A5B] bg-clip-text text-transparent">
                  dirigiendo la creación
                </span>.
              </p>
              
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FF6634] to-transparent mx-auto mb-4"></div>
              
              <p className="text-lg text-[#E1E5EB] leading-relaxed max-w-3xl mx-auto">
                Spark te permite generar un panel de participantes diversos y creíbles en segundos, listos para ser refinados en el Laboratorio o usados directamente en una simulación. Es la combinación perfecta de{' '}
                <span className="text-white font-medium">control estratégico y descubrimiento inspirado</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};