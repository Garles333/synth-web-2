"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Users, Target, Globe } from 'lucide-react';

const modules = [
  {
    id: 1,
    icon: Heart,
    title: 'El Estado Anímico Inicial',
    description: 'Define el punto de partida emocional. ¿Tu participante llega a la sesión optimista, estresado o neutral? Un mismo perfil reaccionará de forma muy distinta a tu concepto según su estado anímico. Este simple ajuste desbloquea una nueva dimensión de realismo.',
    delay: 0.2,
    position: 'top',
  },
  {
    id: 2,
    icon: Users,
    title: 'El Contexto Social',
    description: 'Controla la dinámica de poder. No hablamos igual a una figura de autoridad que a un amigo. Define si el moderador actúa como un "Entrevistador Formal" o un "Amigo Cercano" y observa cómo la formalidad o la cercanía alteran la sinceridad y el detalle de las respuestas.',
    delay: 0.4,
    position: 'left',
  },
  {
    id: 3,
    icon: Target,
    title: 'La Agenda Oculta',
    description: '¿Y si un participante "quiere aparentar ser un experto" o "es secretamente leal a la competencia"? Asigna una agenda oculta y observa cómo estas motivaciones influyen sutilmente en la conversación, revelando tensiones que las encuestas jamás capturarían.',
    delay: 0.6,
    position: 'right',
  },
  {
    id: 4,
    icon: Globe,
    title: 'Spark y Cosmovisiones',
    description: 'Con nuestro motor de Cosmovisiones y la creación de perfiles con Spark, nos aseguramos de que cada participante piense y hable de acuerdo a su realidad. Un joven de 22 años en Madrid no usa las mismas referencias que uno de 55 en Lima. Garantizamos un realismo regional inigualable.',
    delay: 0.8,
    position: 'bottom',
  },
];

export const LaboratorioRealismo = () => {
  return (
    <section className="py-20 px-4 bg-[#0B0E1A] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6634]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6634]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
            Tu <span className="text-[#FF6634]">Laboratorio</span> de Comportamiento Humano
          </h2>
          <p className="text-xl text-[#E1E5EB] max-w-3xl mx-auto">
            No solo ejecutes una simulación. Diseña un experimento. Te damos las herramientas para controlar cada variable del realismo.
          </p>
        </motion.div>

        {/* Central Visualization */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Silhouette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center justify-center mb-16 relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-[#FF6634]/20 rounded-full blur-3xl animate-pulse"></div>
              </div>
              
              {/* Person silhouette icon */}
              <div className="relative w-48 h-48 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Head */}
                  <circle cx="100" cy="60" r="30" fill="url(#gradient1)" />
                  {/* Body */}
                  <path
                    d="M 70 90 Q 70 110 70 130 L 70 160 L 80 180 M 130 90 Q 130 110 130 130 L 130 160 L 120 180 M 70 90 Q 100 100 130 90 M 100 90 L 100 140 M 70 160 L 60 190 M 130 160 L 140 190"
                    stroke="url(#gradient2)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF6634" />
                      <stop offset="100%" stopColor="#FF8A5B" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FF6634" />
                      <stop offset="100%" stopColor="#FF8A5B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ width: '200%', height: '200%', left: '-50%', top: '-50%' }}>
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="20%"
                  stroke="#FF6634"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  viewport={{ once: true }}
                  x1="50%"
                  y1="50%"
                  x2="20%"
                  y2="50%"
                  stroke="#FF6634"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  viewport={{ once: true }}
                  x1="50%"
                  y1="50%"
                  x2="80%"
                  y2="50%"
                  stroke="#FF6634"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 1, delay: 1.1 }}
                  viewport={{ once: true }}
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="80%"
                  stroke="#FF6634"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>
          </motion.div>

          {/* Control Modules Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-20">
            {modules.map((module) => {
              const IconComponent = module.icon;
              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: module.delay }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-gradient-to-br from-[#1A1F2E]/80 to-[#0B0E1A]/60 backdrop-blur-sm border border-[#2A3441] rounded-2xl p-8 hover:border-[#FF6634]/50 transition-all duration-500 group relative overflow-hidden"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6634]/0 to-[#FF6634]/0 group-hover:from-[#FF6634]/5 group-hover:to-[#FF6634]/10 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-[#FF6634]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6634]/30 transition-colors duration-300">
                        <IconComponent className="w-7 h-7 text-[#FF6634]" strokeWidth={2} />
                      </div>
                      <div>
                        <span className="text-[#FF6634] font-bold text-sm mb-2 block">Módulo {module.id}</span>
                        <h3 className="text-xl font-bold text-white mb-3">{module.title}</h3>
                      </div>
                    </div>
                    <p className="text-[#E1E5EB] leading-relaxed">{module.description}</p>
                  </div>

                  {/* Number indicator */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-[#FF6634]/10 rounded-full flex items-center justify-center border border-[#FF6634]/30">
                    <span className="text-[#FF6634] font-bold text-lg">{module.id}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-br from-[#1A1F2E]/90 to-[#0B0E1A]/70 border-2 border-[#FF6634] rounded-2xl px-10 py-8 backdrop-blur-lg max-w-4xl">
              <p className="text-2xl font-bold text-white mb-4">
                No estás ejecutando una encuesta. Estás dirigiendo un <span className="text-[#FF6634]">experimento de comportamiento humano</span>.
              </p>
              <p className="text-lg text-[#E1E5EB] leading-relaxed">
                La granularidad de Synth te da el control para hacerlo con una precisión sin precedentes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};