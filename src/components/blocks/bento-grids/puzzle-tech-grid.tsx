"use client";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Database, Network, Brain, Activity } from "lucide-react";

const techCards = [
  {
    icon: Layers,
    title: "Capa Agnóstica de Modelos",
    description:
      "Orquestación inteligente entre GPT-4o, Claude 3.5, Gemini Pro, Llama 3.2, y modelos propietarios. Auto-balanceado para rendimiento y costos.",
    badges: ["Auto-cambio", "Balanceado"],
  },
  {
    icon: Database,
    title: "Motor RAG Vectorial",
    description:
      "Generación Aumentada por Recuperación avanzada con Pinecone, ChromaDB y embeddings multimodal. Grafos de conocimiento para contexto específico.",
    badges: ["Multimodal", "Tiempo Real"],
  },
  {
    icon: Network,
    title: "Framework Multi-Agente",
    description:
      "Coordinación de agentes especializados con Apache Kafka, Redis Streams. Arquitectura basada en eventos con colas de mensajes distribuidas.",
    badges: ["Por Eventos", "Distribuido"],
  },
  {
    icon: Brain,
    title: "Motor de Personalidad",
    description:
      "Modelado de personalidad Big Five + HEXACO con consistencia comportamental. Persistencia de memoria entre sesiones con base de datos de grafos Neo4j.",
    badges: ["HEXACO", "Persistente"],
  },
  {
    icon: Activity,
    title: "Procesamiento en Tiempo Real",
    description: (
      <div className="space-y-4 text-xs pl-1">
        <div>
          <span className="font-semibold text-white block mb-0.5">Analítica de Flujo</span>
          <span className="text-[#B8BFC9]">Apache Kafka + Flink para análisis de sentimientos, detección de emociones, y modelado de temas en tiempo real.</span>
        </div>
        <div>
          <span className="font-semibold text-white block mb-0.5">Control de Calidad</span>
          <span className="text-[#B8BFC9]">Validación continua contra conjuntos de datos reales. Pruebas A/B automáticas vs metodologías tradicionales.</span>
        </div>
        <div>
          <span className="font-semibold text-white block mb-0.5">Auto-escalado</span>
          <span className="text-[#B8BFC9]">Kubernetes con KEDA para auto-escalado basado en demanda. Edge computing para baja latencia global.</span>
        </div>
        <div>
          <span className="font-semibold text-white block mb-0.5">Pipeline de ML</span>
          <span className="text-[#B8BFC9]">MLOps con Kubeflow, almacenes de características, y entrenamiento continuo para mejora constante de modelos.</span>
        </div>
        {/* KPIs destacados, ajustados */}
        <div className="flex justify-between pt-2 mt-3 border-t border-[#2A3441] gap-2 px-1 max-w-full">
          <div className="text-center flex-1 min-w-0">
            <div className="text-sm md:text-base font-bold text-[#FF6634] leading-tight break-words truncate">99.9%</div>
            <div className="text-[11px] text-gray-400 mt-0.5 break-words leading-tight truncate">SLA Disponibilidad</div>
          </div>
          <div className="text-center flex-1 min-w-0">
            <div className="text-sm md:text-base font-bold text-[#FF6634] leading-tight break-words truncate">&lt;200ms</div>
            <div className="text-[11px] text-gray-400 mt-0.5 break-words leading-tight truncate">Tiempo Respuesta</div>
          </div>
        </div>
      </div>
    ),
    badges: [],
  }
];

export const PuzzleTechGrid = () => {
  return (
    <div
      className="
        w-full
        mx-auto
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2 sm:grid-rows-3
        lg:grid-cols-3 lg:grid-rows-2
        max-w-4xl
        "
    >
      {/* Primer fila: 3 columnas, 2 filas. Los primeros 4 serán cuadrados. El último es vertical y ocupa 2 filas en la tercera col */}
      {/* Cuadro 1 */}
      <SquareTechCard card={techCards[0]} />
      {/* Cuadro 2 */}
      <SquareTechCard card={techCards[1]} />
      {/* Cuadro 3 */}
      <SquareTechCard card={techCards[2]} />
      {/* Cuadro 4 */}
      <SquareTechCard card={techCards[3]} />
      {/* Cuadro grande vertical (Procesamiento en Tiempo Real) */}
      <VerticalTechCard card={techCards[4]} />
    </div>
  );
};

// Pequeño, aspect ratio cuadrado, fuente pequeña\compacta
const SquareTechCard = ({ card }) => {
  const Icon = card.icon;
  return (
    <Card
      className="relative bg-[#1A1F2E] border border-[#2A3441] rounded-lg p-5 flex flex-col aspect-[1/1] min-h-[186px] max-h-[230px] max-w-[270px] w-full h-full shadow-none select-none mx-auto"
      style={{boxShadow:'0 2px 16px 0 #10162736'}}
    >
      <div className="flex items-center mb-2 h-10">
        <span className="w-8 h-8 bg-[#FF6634]/15 rounded-lg flex items-center justify-center mr-2 flex-shrink-0">
          <Icon className="w-4 h-4 text-[#FF6634]" />
        </span>
        <span className="font-bold text-[15px] text-white leading-tight tracking-tight">
          {card.title}
        </span>
      </div>
      <div className="text-xs text-[#E1E5EB] mb-2 flex-grow leading-snug pr-1">
        {card.description}
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {card.badges.map((badge) => (
          <Badge key={badge} className="bg-[#FF6634]/20 text-[#FF6634] border-[#FF6634]/30 text-[11px] px-[10px] py-[2px] font-medium">
            {badge}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

// Cuadro alto vertical, ocupa grid-row 1/3 y col-start-3 en desktop
const VerticalTechCard = ({ card }) => {
  const Icon = card.icon;
  return (
    <Card
      className="relative bg-[#1A1F2E] border border-[#2A3441] rounded-lg lg:row-span-2 lg:col-start-3 lg:row-start-1 p-7 flex flex-col aspect-[1/2] min-h-[230px] max-h-[480px] max-w-[320px] w-full h-full shadow-none select-none mx-auto row-span-2"
      style={{boxShadow:'0 2px 18px 0 #10162736'}}
    >
      <div className="flex items-center mb-3 h-10">
        <span className="w-8 h-8 bg-[#FF6634]/15 rounded-lg flex items-center justify-center mr-2 flex-shrink-0">
          <Icon className="w-4 h-4 text-[#FF6634]" />
        </span>
        <span className="font-bold text-[15px] text-white leading-tight tracking-tight">
          {card.title}
        </span>
      </div>
      {/* Si description es JSX, lo renderiza directamente (Procesamiento en Tiempo Real), si es string, lo muestra normal */}
      <div className="text-xs text-[#E1E5EB] mb-2 flex-grow leading-snug pr-1">
        {typeof card.description === 'string' ? card.description : card.description}
      </div>
      {/* Si hay badges, muéstralos, si no, no */}
      {card.badges?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {card.badges.map((badge) => (
            <Badge key={badge} className="bg-[#FF6634]/20 text-[#FF6634] border-[#FF6634]/30 text-[11px] px-[10px] py-[2px] font-medium">
              {badge}
            </Badge>
          ))}
        </div>
      )}
    </Card>
  );
};