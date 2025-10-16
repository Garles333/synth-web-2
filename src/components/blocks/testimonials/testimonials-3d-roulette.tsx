"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonialsEs = [
  {
    id: 1,
    name: "Sarah Johnson",
    quote:
      "Synth transformó nuestro proceso de toma de decisiones. La precisión de los insights es increíble y nos ha ahorrado incontables horas de análisis manual.",
    position: "Directora de Operaciones, TechCorp",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    quote:
      "La analítica en tiempo real y los reportes automáticos han revolucionado la forma en que medimos el rendimiento y detectamos oportunidades de crecimiento.",
    position: "Director de Datos, InnovateLabs",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&q=80",
  },
  {
    id: 3,
    name: "Emily Rodríguez",
    quote:
      "La capacidad de Synth para predecir tendencias de mercado y comportamiento del cliente nos ha dado una ventaja competitiva enorme.",
    position: "CEO, FutureVision",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
  },
  {
    id: 4,
    name: "Sofía Martínez",
    quote:
      "La automatización y profundidad analítica de Synth nos ha llevado a otro nivel. Ahora tomamos decisiones en horas, no semanas.",
    position: "Líder de Insights, FutureBrand",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80",
  },
];

const testimonialsEn = [
  {
    id: 1,
    name: "Sarah Johnson",
    quote:
      "Synth transformed our decision-making. The accuracy of the insights is incredible and has saved us countless hours of manual analysis.",
    position: "Chief Operations Officer, TechCorp",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    quote:
      "Real-time analytics and automated reporting have revolutionized how we measure performance and spot growth opportunities.",
    position: "Head of Data, InnovateLabs",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&q=80",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    quote:
      "Synth's ability to anticipate market trends and customer behavior has given us a huge competitive advantage.",
    position: "CEO, FutureVision",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
  },
  {
    id: 4,
    name: "Sofia Martinez",
    quote:
      "Synth's automation and analytical depth took us to the next level. We now make decisions in hours, not weeks.",
    position: "Insights Lead, FutureBrand",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80",
  },
];

interface Testimonial3DRouletteProps {
  locale?: "en" | "es";
}

export const Testimonial3DRoulette = ({ locale = "es" }: Testimonial3DRouletteProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const testimonials = locale === "en" ? testimonialsEn : testimonialsEs;
  const testimonialCount = testimonials.length;

  // Inject styles safely on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const styleId = 'testimonial-roulette-styles';
    if (document.getElementById(styleId)) return;
    
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      .clientes-highlight:hover {
        text-shadow: 0 0 18px #FF6634, 0 0 32px #FF663491;
        color: #FF6634 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) existingStyle.remove();
    };
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialCount);
    }, 6500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialCount]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonialCount);
    setTimeout(() => setIsAutoPlaying(true), 7000);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonialCount) % testimonialCount);
    setTimeout(() => setIsAutoPlaying(true), 7000);
  };

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 7000);
  };

  // Helpers for visible indices in the carousel: left, center, right
  const getIndices = (current: number) => {
    const left = (current - 1 + testimonialCount) % testimonialCount;
    const center = current;
    const right = (current + 1) % testimonialCount;
    return { left, center, right };
  };

  const indices = getIndices(currentIndex);

  const t = {
    title:
      locale === "en" ? (
        <>
          What our <span className="clientes-highlight relative" style={{ color: "#FF6634" }}>Customers</span> say
        </>
      ) : (
        <>
          Lo que dicen nuestros {" "}
          <span className="clientes-highlight relative" style={{ color: "#FF6634" }}>Clientes</span>
        </>
      ),
    subtitle:
      locale === "en"
        ? "Discover how industry leaders transform their business with Synth"
        : "Descubre cómo líderes de la industria transforman su negocio con Synth",
    ariaPrev: locale === "en" ? "Previous testimonial" : "Testimonio anterior",
    ariaNext: locale === "en" ? "Next testimonial" : "Siguiente testimonio",
    ariaRegion:
      locale === "en" ? "Customer testimonials carousel" : "Carrusel de testimonios de clientes",
    srOnly:
      locale === "en"
        ? `Showing testimonial ${currentIndex + 1} of ${testimonials.length}: ${
            testimonials[currentIndex].name
          } from ${testimonials[currentIndex].position}`
        : `Mostrando testimonio ${currentIndex + 1} de ${testimonials.length}: ${
            testimonials[currentIndex].name
          } de ${testimonials[currentIndex].position}`,
    altProfilePrefix: locale === "en" ? "Profile photo of" : "Foto de perfil de",
    ariaArticlePrefix: locale === "en" ? "Testimonial from" : "Testimonio de",
  };

  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{ backgroundColor: "#0B0E1A" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">{t.title}</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "#E1E5EB" }}>
            {t.subtitle}
          </p>
        </motion.div>

        <div className="relative flex items-center justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 z-20 p-3 rounded-full transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center"
            style={{ backgroundColor: "#1A1F2E", borderColor: "#2A3441" }}
            aria-label={t.ariaPrev}
            tabIndex={0}
          >
            <ChevronLeft size={24} style={{ color: "#E1E5EB" }} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 z-20 p-3 rounded-full transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center"
            style={{ backgroundColor: "#1A1F2E", borderColor: "#2A3441" }}
            aria-label={t.ariaNext}
            tabIndex={0}
          >
            <ChevronRight size={24} style={{ color: "#E1E5EB" }} />
          </button>

          {/* Testimonial Cards Container */}
          <div
            className="relative w-full max-w-xl mx-auto min-h-[480px] flex items-center justify-center"
            style={{ height: "500px", minWidth: 360 }}
            role="region"
            aria-label={t.ariaRegion}
          >
            {/* Left Card */}
            <motion.div
              key={testimonials[indices.left].id}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[240px] z-10"
              initial={false}
              animate={{
                scale: 0.78,
                opacity: 0.68,
                x: -135,
                zIndex: 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ pointerEvents: "none", filter: "grayscale(70%) blur(1.5px)" }}
            >
              <div
                className="testimonial-card rounded-xl p-6 border flex flex-col justify-between max-w-sm mx-auto h-[370px] shadow-sm relative overflow-hidden"
                style={{
                  backgroundColor: "#1A1F2E",
                  borderColor: "#2A3441",
                }}
              >
                <div className="mb-4 flex items-center justify-center relative">
                  <img
                    src={testimonials[indices.left].image}
                    alt={`${t.altProfilePrefix} ${testimonials[indices.left].name}`}
                    className="w-14 h-14 rounded-full object-cover border border-[#FF6634] shadow-xl bg-[#14182B]"
                    style={{ opacity: 0.65 }}
                  />
                </div>
                <div className="flex-1 mb-3 flex flex-col justify-between relative">
                  <div className="text-5xl mb-1 text-[#FF6634] leading-none font-bold">"</div>
                  <blockquote
                    className="text-base md:text-lg italic leading-relaxed text-center"
                    style={{ color: "#E1E5EB", opacity: 0.7 }}
                  >
                    {testimonials[indices.left].quote}
                  </blockquote>
                </div>
                <div className="flex flex-col items-center mt-2 relative">
                  <span className="font-semibold text-base" style={{ color: "#FFF", opacity: 0.75 }}>
                    {testimonials[indices.left].name}
                  </span>
                  <span className="text-xs mt-1" style={{ color: "#FF6634", opacity: 0.7 }}>
                    {testimonials[indices.left].position}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Center (Main) Card */}
            <motion.div
              key={testimonials[indices.center].id}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] z-20"
              initial={false}
              animate={{ scale: 1, opacity: 1, zIndex: 3, x: 0 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              style={{ pointerEvents: "auto", boxShadow: "0 8px 32px 0 #FF6634AA, 0 1.5px 8px 0 #FF6634CC inset" }}
            >
              <div
                className="testimonial-card rounded-xl p-8 border flex flex-col justify-between max-w-md mx-auto min-h-[480px] shadow-lg relative overflow-visible"
                style={{
                  backgroundColor: "#1A1F2E",
                  borderColor: "#FF6634",
                }}
                role="article"
                aria-label={`${t.ariaArticlePrefix} ${testimonials[indices.center].name}`}
                tabIndex={0}
              >
                <div className="mb-7 flex items-center justify-center relative">
                  <img
                    src={testimonials[indices.center].image}
                    alt={`${t.altProfilePrefix} ${testimonials[indices.center].name}`}
                    className="w-20 h-20 rounded-full object-cover border border-[#FF6634] shadow-xl bg-[#14182B]"
                  />
                </div>
                <div className="flex-1 mb-8 flex flex-col justify-between relative">
                  <div className="text-6xl mb-3 text-[#FF6634] leading-none font-bold">"</div>
                  <blockquote
                    className="text-xl md:text-lg italic leading-relaxed text-center"
                    style={{ color: "#E1E5EB", lineHeight: 1.38 }}
                  >
                    {testimonials[indices.center].quote}
                  </blockquote>
                </div>
                <div className="flex flex-col items-center mt-6 pb-2 relative">
                  <span className="font-semibold text-lg leading-tight" style={{ color: "#FFF", lineHeight: 1.25 }}>
                    {testimonials[indices.center].name}
                  </span>
                  <span className="text-sm mt-1 leading-snug" style={{ color: "#FF6634", lineHeight: 1.3 }}>
                    {testimonials[indices.center].position}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              key={testimonials[indices.right].id}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[240px] z-10"
              initial={false}
              animate={{
                scale: 0.78,
                opacity: 0.68,
                x: 135,
                zIndex: 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ pointerEvents: "none", filter: "grayscale(70%) blur(1.5px)" }}
            >
              <div
                className="testimonial-card rounded-xl p-6 border flex flex-col justify-between max-w-sm mx-auto h-[370px] shadow-sm relative overflow-hidden"
                style={{
                  backgroundColor: "#1A1F2E",
                  borderColor: "#2A3441",
                }}
              >
                <div className="mb-4 flex items-center justify-center relative">
                  <img
                    src={testimonials[indices.right].image}
                    alt={`${t.altProfilePrefix} ${testimonials[indices.right].name}`}
                    className="w-14 h-14 rounded-full object-cover border border-[#FF6634] shadow-xl bg-[#14182B]"
                    style={{ opacity: 0.65 }}
                  />
                </div>
                <div className="flex-1 mb-3 flex flex-col justify-between relative">
                  <div className="text-5xl mb-1 text-[#FF6634] leading-none font-bold">"</div>
                  <blockquote
                    className="text-base md:text-lg italic leading-relaxed text-center"
                    style={{ color: "#E1E5EB", opacity: 0.7 }}
                  >
                    {testimonials[indices.right].quote}
                  </blockquote>
                </div>
                <div className="flex flex-col items-center mt-2 relative">
                  <span className="font-semibold text-base" style={{ color: "#FFF", opacity: 0.75 }}>
                    {testimonials[indices.right].name}
                  </span>
                  <span className="text-xs mt-1" style={{ color: "#FF6634", opacity: 0.7 }}>
                    {testimonials[indices.right].position}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "scale-110" : "hover:scale-105"
              }`}
              style={{
                backgroundColor: index === currentIndex ? "#FF6634" : "#2A3441",
              }}
              aria-label={`${locale === "en" ? "Go to testimonial" : "Ir al testimonio"} ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
        {/* Screen Reader Only Current Testimonial Info */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {t.srOnly}
        </div>
      </div>
    </section>
  );
};