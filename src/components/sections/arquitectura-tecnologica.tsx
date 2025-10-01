"use client";
import { Layers, Database, Network, Brain, Activity } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

// Variantes para animación tipo puzzle (suaves)
const puzzleVariants = [
  { x: -32, y: -18, rotate: -3 },
  { x: 32, y: 12, rotate: 3 },
  { x: 30, y: 24, rotate: -2 },
  { x: -24, y: 16, rotate: 3 },
  { x: 0, y: 38, rotate: 0 },
];

// Animación puzzle box wrapper
function PuzzleBox({ children, index, ...rest }: { children: React.ReactNode; index: number } & React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.21 });
  const variant = puzzleVariants[index] || { x: 0, y: 17, rotate: 0 };
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: variant.x,
        y: variant.y,
        rotate: variant.rotate,
        scale: 0.98,
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
      } : {}}
      transition={{
        duration: 0.64,
        delay: 0.12 + index * 0.06,
        ease: [0.71, 0.41, 0.49, 1.01],
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export const ArquitecturaTecnologica = ({ locale = 'es' }: { locale?: 'es' | 'en' }) => {
  // Helper texts per locale
  const t = {
    es: {
      modelAgnostic: 'Capa Agnóstica de Modelos',
      modelAgnosticDesc: 'Orquestación entre GPT-4o, Claude 3.5, Gemini, Llama y modelos propietarios. Auto-balanceado.',
      autoSwitch: 'Auto-cambio',
      balanced: 'Balanceado',
      rag: 'Motor RAG Vectorial',
      ragDesc: 'Recuperación avanzada con Pinecone, ChromaDB, embeddings multimodal y grafos de conocimiento.',
      multimodal: 'Multimodal',
      realtime: 'Tiempo Real',
      realtimeProc: 'Procesamiento en Tiempo Real',
      streamAnalytics: 'Analítica de Flujo',
      streamAnalyticsDesc: 'Kafka+Flink para análisis de sentimientos, detección de emociones y temas en tiempo real.',
      qualityControl: 'Control de Calidad',
      qualityControlDesc: 'Validación sobre datos reales. Pruebas A/B automáticas vs metodologías tradicionales.',
      autoscaling: 'Auto-escalado',
      autoscalingDesc: 'Kubernetes+KEDA para escalar según demanda. Edge computing para baja latencia global.',
      sla: 'SLA Disponibilidad',
      responseTime: 'Tiempo Respuesta',
      multiAgent: 'Framework Multi-Agente',
      multiAgentDesc: 'Coordinación de agentes, Apache Kafka, Redis Streams, eventos y colas distribuidas.',
      eventDriven: 'Por Eventos',
      distributed: 'Distribuido',
      personalityEngine: 'Motor de Personalidad',
      personalityEngineDesc: 'Modelado Big Five + HEXACO. Persistencia de memoria con grafos Neo4j.',
      persistent: 'Persistente',
    },
    en: {
      modelAgnostic: 'Model-Agnostic Layer',
      modelAgnosticDesc: 'Orchestration across GPT-4o, Claude 3.5, Gemini, Llama and proprietary models. Auto-balanced.',
      autoSwitch: 'Auto-switch',
      balanced: 'Balanced',
      rag: 'Vector RAG Engine',
      ragDesc: 'Advanced retrieval with Pinecone, ChromaDB, multimodal embeddings, and knowledge graphs.',
      multimodal: 'Multimodal',
      realtime: 'Real-time',
      realtimeProc: 'Real-time Processing',
      streamAnalytics: 'Stream Analytics',
      streamAnalyticsDesc: 'Kafka+Flink for real-time sentiment, emotion detection, and topic analysis.',
      qualityControl: 'Quality Control',
      qualityControlDesc: 'Validation against real data. Automatic A/B tests vs. traditional methodologies.',
      autoscaling: 'Auto-scaling',
      autoscalingDesc: 'Kubernetes+KEDA to scale on demand. Edge computing for global low latency.',
      sla: 'SLA Uptime',
      responseTime: 'Response Time',
      multiAgent: 'Multi-Agent Framework',
      multiAgentDesc: 'Agent coordination, Apache Kafka, Redis Streams, distributed events and queues.',
      eventDriven: 'Event-driven',
      distributed: 'Distributed',
      personalityEngine: 'Personality Engine',
      personalityEngineDesc: 'Big Five + HEXACO modeling. Memory persistence with Neo4j graphs.',
      persistent: 'Persistent',
    }
  }[locale];

  return (
    <section 
      id="arquitectura-tecnologica" 
      className="py-12 lg:py-16 relative"
      style={{
        backgroundImage: "url('/colmena-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="relative max-w-[1080px] mx-auto px-2 sm:px-4 lg:px-4">
        <div
          className="grid grid-cols-1 gap-5 w-full rounded-xl mt-[-4px] md:grid-cols-3 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2"
          style={{ minHeight: 364, maxWidth: 1080, margin: '0 auto' }}
        >
          {/* BLOQUE 1 */}
          <PuzzleBox index={0} className="bg-[#1A1F2E] border border-[#2A3441] rounded-xl px-6 py-6 flex flex-col items-start min-h-[160px] w-full overflow-hidden md:h-[182px] md:min-h-[182px] md:max-h-[182px]" style={{}}>
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-7 h-7 bg-[#FF6634]/20 rounded-xl flex items-center justify-center">
                <Layers className="w-5 h-5 text-[#FF6634]" />
              </div>
              <div className="text-sm font-bold text-white" style={{fontSize:'1.05rem'}}>
                {t.modelAgnostic}
              </div>
            </div>
            <div className="text-[#E1E5EB] text-[13px] mb-1 leading-tight">
              {t.modelAgnosticDesc}
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              <div className="bg-[#FF6634]/20 text-[#FF6634] px-2.5 py-1 rounded-full text-[12px] font-medium">{t.autoSwitch}</div>
              <div className="bg-[#FF6634]/20 text-[#FF6634] px-2.5 py-1 rounded-full text-[12px] font-medium">{t.balanced}</div>
            </div>
          </PuzzleBox>
          {/* BLOQUE 2 */}
          <PuzzleBox index={1} className="bg-[#1A1F2E] border border-[#2A3441] rounded-xl px-6 py-6 flex flex-col items-start min-h-[160px] w-full overflow-hidden md:h-[182px] md:min-h-[182px] md:max-h-[182px]" style={{}}>
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-7 h-7 bg-[#FF6634]/20 rounded-xl flex items-center justify-center">
                <Database className="w-5 h-5 text-[#FF6634]" />
              </div>
              <div className="text-sm font-bold text-white" style={{fontSize:'1.05rem'}}>
                {t.rag}
              </div>
            </div>
            <div className="text-[#E1E5EB] text-[13px] mb-1 leading-tight">
              {t.ragDesc}
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              <div className="bg-[#FF6634]/20 text-[#FF6634] px-2.5 py-1 rounded-full text-[12px] font-medium">{t.multimodal}</div>
              <div className="bg-[#FF6634]/20 text-[#FF6634] px-2.5 py-1 rounded-full text-[12px] font-medium">{t.realtime}</div>
            </div>
          </PuzzleBox>
          {/* BLOQUE VERTICAL (Procesamiento en Tiempo Real) */}
          <PuzzleBox
            index={4}
            className="bg-[#1A1F2E] border border-[#2A3441] rounded-xl px-6 py-6 flex flex-col justify-between min-h-[200px] w-full overflow-hidden md:h-[384px] md:min-h-[384px] md:max-h-[384px] md:row-span-2 md:row-start-1 md:col-start-3"
            style={{ minWidth: 0 }}
          >
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-7 h-7 bg-[#FF6634]/20 rounded-xl flex items-center justify-center">
                  <Activity className="w-5 h-5 text-[#FF6634]" />
                </div>
                <div className="text-sm font-bold text-white" style={{fontSize:'1.05rem'}}>
                  {t.realtimeProc}
                </div>
              </div>
              <div className="space-y-3 mt-2 text-[#E1E5EB] text-sm leading-[1.21] pl-[2.5px] break-words max-w-full">
                <div>
                  <div className="font-semibold text-white mb-0.5" style={{fontSize:'1.02rem'}}>{t.streamAnalytics}</div>
                  <div className="text-[#B8BFC9] text-[13px] leading-tight">{t.streamAnalyticsDesc}</div>
                </div>
                <div>
                  <div className="font-semibold text-white mb-0.5" style={{fontSize:'1.02rem'}}>{t.qualityControl}</div>
                  <div className="text-[#B8BFC9] text-[13px] leading-tight">{t.qualityControlDesc}</div>
                </div>
                <div>
                  <div className="font-semibold text-white mb-0.5" style={{fontSize:'1.02rem'}}>{t.autoscaling}</div>
                  <div className="text-[#B8BFC9] text-[13px] leading-tight">{t.autoscalingDesc}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between space-x-2 mt-3 pt-3 border-t border-[#2A3441]">
              <div className="text-center flex-1 min-w-0">
                <div className="text-lg font-bold text-[#FF6634] leading-none truncate">99.9%</div>
                <div className="text-[12px] text-gray-400 mt-0.5 truncate">{t.sla}</div>
              </div>
              <div className="text-center flex-1 min-w-0">
                <div className="text-lg font-bold text-[#FF6634] leading-none truncate">&lt;200ms</div>
                <div className="text-[12px] text-gray-400 mt-0.5 truncate">{t.responseTime}</div>
              </div>
            </div>
          </PuzzleBox>

          {/* BLOQUE 4 - Framework Multi-Agente */}
          <PuzzleBox index={2} className="bg-[#1A1F2E] border border-[#2A3441] rounded-xl px-6 py-6 flex flex-col items-start min-h-[160px] w-full overflow-hidden md:h-[182px] md:min-h-[182px] md:max-h-[182px] md:row-start-2 md:col-start-1" style={{}}>
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-7 h-7 bg-[#FF6634]/20 rounded-xl flex items-center justify-center">
                <Network className="w-5 h-5 text-[#FF6634]" />
              </div>
              <div className="text-sm font-bold text-white" style={{fontSize:'1.05rem'}}>
                {t.multiAgent}
              </div>
            </div>
            <div className="text-[#E1E5EB] text-[13px] mb-1 leading-tight">
              {t.multiAgentDesc}
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              <div className="bg-[#FF6634]/20 text-[#FF6634] px-2.5 py-1 rounded-full text-[12px] font-medium">{t.eventDriven}</div>
              <div className="bg-[#FF6634]/20 text-[#FF6634] px-2.5 py-1 rounded-full text-[12px] font-medium">{t.distributed}</div>
            </div>
          </PuzzleBox>
          {/* BLOQUE 5 - Motor de Personalidad */}
          <PuzzleBox index={3} className="bg-[#1A1F2E] border border-[#2A3441] rounded-xl px-6 py-6 flex flex-col items-start min-h-[160px] w-full overflow-hidden md:h-[182px] md:min-h-[182px] md:max-h-[182px] md:row-start-2 md:col-start-2" style={{}}>
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-7 h-7 bg-[#FF6634]/20 rounded-xl flex items-center justify-center">
                <Brain className="w-5 h-5 text-[#FF6634]" />
              </div>
              <div className="text-sm font-bold text-white" style={{fontSize:'1.05rem'}}>
                {t.personalityEngine}
              </div>
            </div>
            <div className="text-[#E1E5EB] text-[13px] mb-1 leading-tight">
              {t.personalityEngineDesc}
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              <div className="bg-[#FF6634]/20 text-[#FF6634] px-2.5 py-1 rounded-full text-[12px] font-medium">HEXACO</div>
              <div className="bg-[#FF6634]/20 text-[#FF6634] px-2.5 py-1 rounded-full text-[12px] font-medium">{t.persistent}</div>
            </div>
          </PuzzleBox>
        </div>
      </div>
    </section>
  );
};