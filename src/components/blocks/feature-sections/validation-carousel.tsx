"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";

// Titulares en orden exacto, solo titulares
const validationTitlesES = [
  "Entrevistar a lo inalcanzable: CEOs, médicos especialistas…",
  "Validar un nuevo producto antes de invertir un euro en su desarrollo.",
  "Descubrir qué concepto creativo ganará el corazón (y la cartera) del consumidor.",
  "Elegir el packaging que grita \"cómprame\" desde el lineal.",
  "Definir el posicionamiento de marca que te convierte en la única opción.",
  "Diseñar experiencias de usuario que la gente ame de forma intuitiva.",
  "Encontrar el nombre perfecto para tu próxima gran idea.",
  "Navegar una crisis de comunicación con la respuesta correcta.",
  "Explorar la viabilidad de un nuevo mercado internacional desde tu oficina.",
  "Crear una cultura de empatía real con el cliente en toda tu organización.",
  "Afinar tu mensaje hasta dar en el centro de la diana.",
  "Encontrar el precio que tu mercado está dispuesto a pagar con gusto.",
  "Entrenar a tus equipos con simulacros de cliente realistas.",
  "Crear una estrategia de contenidos que tu audiencia realmente quiera consumir.",
  "Asegurar que tus encuestas cuantitativas midan lo que de verdad importa.",
  "Descubrir la próxima gran oportunidad de innovación en tu sector.",
  "Mapear el viaje de tu cliente y eliminar cada punto de fricción.",
  "Entender cómo te perciben tus clientes frente a tu competencia.",
  "Atraer al mejor talento con mensajes que realmente conectan.",
  "Neutralizar una posible crisis de RRPP antes de que ocurra."
];

const validationTitlesEN = [
  "Interview the unreachable: CEOs, specialist doctors…",
  "Validate a new product before investing a dollar in development.",
  "Discover which creative concept will win the consumer's heart (and wallet).",
  "Choose the packaging that shouts 'buy me' on the shelf.",
  "Define the brand positioning that makes you the only choice.",
  "Design user experiences people intuitively love.",
  "Find the perfect name for your next big idea.",
  "Navigate a PR crisis with the right response.",
  "Explore the viability of a new international market from your desk.",
  "Build a culture of real customer empathy across your organization.",
  "Sharpen your message until it hits the bullseye.",
  "Find the price your market is happy to pay.",
  "Train your teams with realistic customer simulations.",
  "Create a content strategy your audience actually wants to consume.",
  "Ensure your quant surveys measure what truly matters.",
  "Uncover the next big innovation opportunity in your sector.",
  "Map your customer journey and remove every friction point.",
  "Understand how customers perceive you versus competitors.",
  "Attract top talent with messages that truly connect.",
  "Defuse a potential PR crisis before it happens."
];

export const ValidationCarousel = ({ locale = "es" }: { locale?: "es" | "en" }) => {
  const titles = locale === "en" ? validationTitlesEN : validationTitlesES;
  const scrollXRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect visible slide index for dots/pagination
  useEffect(() => {
    const updateActiveIndex = () => {
      if (!scrollXRef.current) return;
      const scrollLeft = scrollXRef.current.scrollLeft;
      const slideWidth = scrollXRef.current.firstChild instanceof HTMLElement ? scrollXRef.current.firstChild.offsetWidth + 28 /*gap-7*/ : 320; // aprox + gap
      // Only consider first validationTitles.length slides
      const index = Math.round(scrollLeft / slideWidth) % titles.length;
      setActiveIndex(index);
    };
    // Listen scroll on the carousel
    const el = scrollXRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => {
      el.removeEventListener("scroll", updateActiveIndex);
    };
  }, [scrollXRef, containerWidth, titles.length]);

  // Animation: endless scroll (de izquierda a derecha)
  useEffect(() => {
    let req: number;
    let lastTimestamp = 0;
    let scrollPos = 0;
    const VELOCITY = 72; // px/s (doble de rápido)
    function animate(ts: number) {
      if (!scrollXRef.current) return;
      if (!lastTimestamp) lastTimestamp = ts;
      const dt = (ts - lastTimestamp) / 1000;
      lastTimestamp = ts;

      scrollPos += VELOCITY * dt;
      const maxScroll = contentWidth - containerWidth;
      if (maxScroll > 0 && scrollPos > maxScroll + 60) {
        scrollPos = 0;
      }
      scrollXRef.current.scrollLeft = scrollPos;
      req = requestAnimationFrame(animate);
    }
    function handleResize() {
      if (!scrollXRef.current) return;
      setContainerWidth(scrollXRef.current.offsetWidth);
      setContentWidth(scrollXRef.current.scrollWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    req = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(req);
      window.removeEventListener("resize", handleResize);
    };
  }, [contentWidth, containerWidth]);

  return (
    <section 
      id="validacion-instantanea" 
      className="w-full bg-[#1A1F2E] py-20 lg:py-28 border-t border-[#232B3D] relative z-0 overflow-hidden"
    >
      {/* Orange Mesh background decorative layer */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        {/* SVG mesh pattern, elegant/modern, orange and semi-transparent. Responsive. */}
        <svg width="100%" height="100%" viewBox="0 0 1440 560" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:0}}>
          <defs>
            <linearGradient id="orangeMeshGrad" x1="0" y1="0" x2="1440" y2="560" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF6634" stopOpacity="0.21"/>
              <stop offset="0.7" stopColor="#FF8A5B" stopOpacity="0.11"/>
              <stop offset="1" stopColor="#FF6634" stopOpacity="0.13"/>
            </linearGradient>
            <pattern id="meshPattern" width="140" height="85" patternUnits="userSpaceOnUse">
              <path d="M0,35 Q35,0 70,35 Q105,70 140,35" stroke="url(#orangeMeshGrad)" strokeWidth="2.1" fill="none" />
              <path d="M0,65 Q35,100 70,65 Q105,30 140,65" stroke="url(#orangeMeshGrad)" strokeWidth="1.8" fill="none" />
              <path d="M0,0 Q70,85 140,0" stroke="url(#orangeMeshGrad)" strokeWidth="1.5" fill="none" />
              <path d="M0,85 Q70,0 140,85" stroke="url(#orangeMeshGrad)" strokeWidth="1.5" fill="none" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="1440" height="560" fill="url(#meshPattern)" opacity="0.68"/>
        </svg>
      </div>
      <div className="mx-auto max-w-6xl px-4 relative z-10">
        {/* TITULAR con imagen logo en vez de texto Synth */}
        <div className="flex flex-col items-center justify-center mb-12 relative">
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-white mt-1 drop-shadow-[0_3px_22px_#FF663468] flex flex-col xs:flex-row items-center gap-2" 
          >
            <span className="inline-block align-middle font-bold text-[#FF6634] mr-1 select-none whitespace-nowrap">
              Synth
            </span>
            {/* SOLO DOS LÍNEAS EN MOBILE: Alinear mejor y break-point para forzar dos líneas sin corte raro */}
            <span className={
              `block whitespace-pre-line leading-snug xs:leading-tight text-balance `+
              `xs:inline xs:ml-2`
            }>
              {locale === 'en' ? (
                <>
                  <span className="block xs:inline">is your instant validation</span>
                  <span className="block xs:inline"> engine for…</span>
                </>
              ) : (
                <>
                  <span className="block xs:inline">
                    es tu motor de validación
                  </span>
                  <span className="block xs:inline"> instantánea para…</span>
                </>
              )}
            </span>
          </h2>
        </div>
        <div className="relative">
          {/* Carousel Container con endless scroll */}
          <div 
            ref={scrollXRef}
            className="flex gap-7 lg:gap-8 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-3"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {titles.concat(titles).map((title, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ delay: 0.02 + (index % titles.length) * 0.045, duration: 0.6, ease: [0.41,1.11,0.42,1] }}
                className="flex-none group min-w-[320px] max-w-[370px] w-full snap-start"
                style={{ padding:'2.4rem 1.5rem', marginBottom:0 }}
              >
                {/* Elegante recuadro con marco duotono + glow y fondo moderno, hover destacado*/}
                <div
                  className="w-full h-full relative rounded-xl transition-all duration-300 border-[1.5px]"
                  style={{
                    background:
                      'linear-gradient(110deg,rgba(26,31,46,0.99) 92%,rgba(21,24,34,1) 100%)',
                    border: '1.5px solid #2A3441',
                    boxShadow:
                      '0 5px 22px 0 #0B0E1A70, 0 0px 0 0 #232B3D33 inset, 0 10px 22px 0 #FF663416',
                    borderRadius: '1.06rem',
                    overflow: 'visible',
                    position: 'relative',
                    padding: '2.7rem 2.1rem 2.4rem 2.1rem',
                    minHeight: '136px',
                    opacity: 0.98,
                  }}
                >
                  {/* Inner orange glow border (pseudo double frame) */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-[14px] z-5"
                    style={{
                      border: '1.7px solid',
                      borderImage: 'linear-gradient(99deg,#FF6634 85%,#FF8A5B 100%) 1',
                      opacity: 0.37,
                      filter: 'blur(0.9px)',
                      transition: 'opacity .32s cubic-bezier(.56,1.48,.45,1)',
                      boxShadow: '0 0 0 2.5px #FF663418, 0 2.5px 18px 0 #FF663421',
                    }}
                  />
                  {/* Card content */}
                  <h3 className="text-white font-bold text-[1.18rem] md:text-[1.32rem] xl:text-[1.52rem] mb-0 leading-snug drop-shadow-[0_2px_12px_rgba(255,102,52,0.07)] tracking-tight group-hover:text-[#FF6634] transition-colors duration-300 group-hover:drop-shadow-[0_2px_13px_rgba(255,102,52,0.18)] text-left w-full relative z-10">
                    {title}
                  </h3>
                  {/* Hover border accent effect */}
                  <div
                    className="absolute inset-0 rounded-[14px] pointer-events-none z-10"
                    style={{
                      border: '1.6px solid #FF6634',
                      opacity: 0,
                      boxShadow: '0 0 30px 7px #FF663445',
                      transition: 'opacity .3s cubic-bezier(.36,1.05,.41,1)',
                    }}
                  />
                </div>
                <style>{`
                  .group:hover > div + h3 {
                    color: #FF6634 !important;
                  }
                  .group:hover > div:nth-child(2) {
                    opacity:0.7 !important;
                  }
                  .group:hover > div:nth-child(3) {
                    opacity:1 !important;
                  }
                `}</style>
              </motion.div>
            ))}
            {/* Card invisible para padding al final, asegura visibilidad del card derecho */}
            <div className="flex-none" style={{ minWidth: '8px', width: '8px', pointerEvents: 'none' }} aria-hidden="true" />
          </div>

          {/* Dots Slider Pagination */}
          <div className="flex items-center justify-center mt-5 gap-2">
            {titles.map((_, idx) => (
              <span
                key={idx}
                className={`block rounded-full transition-all h-2.5 w-2.5 ${
                  activeIndex === idx ? 'bg-[#FF6634] scale-[1.22] shadow-[0_1px_7px_0_#FF663444]' : 'bg-[#E1E5EB]/30'
                }`}
                style={{ transition: 'background 0.25s, transform 0.25s' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};