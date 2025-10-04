import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedTextHighlight } from "@/components/ui/animated-text-highlight";
import { TypewriterModern } from "@/components/blocks/text-animations/TypewriterModern";
import {
  ArrowRight,
  ArrowDown,
  Shield,
  Zap,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Bot,
  Brain,
  Network,
  Database,
  Cpu,
  Globe,
  Star,
  Play,
  Users,
  Briefcase,
  Building,
  LineChart,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Search,
  Clock,
  FileText,
  Compass,
  Rocket,
  Lightbulb,
  BarChart3,
  UserCheck,
  MonitorSpeaker,
  Layers,
  Zap as Lightning,
  Lock,
  Server,
  Activity } from
"lucide-react";
import { AhorroSynthCalculator } from "@/components/sections/ahorro-synth-calculator";
import { NewsletterBanner } from "@/components/blocks/newsletter-sections/newsletter-banner";
import { NewsletterBannerHome } from "@/components/blocks/newsletter-sections/newsletter-banner-home";
// import { BlogPreviewSection } from "@/components/sections/blog-preview-section";
import { FaqSection } from "@/components/blocks/faqs/faq-section";
import { Testimonial3DRoulette } from "@/components/blocks/testimonials/testimonials-3d-roulette";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ConstellationBackground } from "@/components/blocks/backgrounds/constellation-background";
import { PuzzleTechGrid } from "@/components/blocks/bento-grids/puzzle-tech-grid";
import { ValidationCarousel } from "@/components/blocks/feature-sections/validation-carousel";
import { ArquitecturaTecnologica } from "@/components/sections/arquitectura-tecnologica";
import { Pricing } from "@/components/sections/pricing";
import { HeroMobileAnimated } from "@/components/blocks/heros/hero-mobile-animated";
import { RealismSynthLayers } from "@/components/sections/realism-synth-layers";
import Link from "next/link";
// import { fetchPosts } from "@/lib/contentful";

export const metadata = {
  title: 'Plataforma de simulación con datos sintéticos: Testea, valida y refina tus decisiones de negocio antes del impacto real.',
  description:
  'Plataforma de simulación con datos sintéticos: Testea, valida y refina tus decisiones de negocio antes del impacto real.',
  // hreflang alternates for Spain and Mexico
  alternates: {
    canonical: 'https://synth-insights.com/',
    languages: {
      'es-ES': 'https://synth-insights.com/',
      'es-MX': 'https://mx.synth-insights.com/',
      'en-US': 'https://synth-insights.com/en'
    }
  }
};

export const revalidate = 60;
export const dynamic = "force-dynamic";

export default async function HomePage() {
  // Cargar artículos reales desde Contentful y mostrar solo el primero
  // const posts = await fetchPosts();
  // const articles = posts.map((p) => ({
  //   title: p.title,
  //   excerpt: p.excerpt || "",
  //   image: p.coverImageUrl || p.imageUrl,
  //   slug: p.slug,
  // }));

  // Utilidad para envolver palabras importantes en <strong>, creando también <p> por cada bloque separado por "\n"
  function formatFaqHtml(raw) {
    // ... keep existing formatFaqHtml implementation ...
  }

  const faqs = [
    // ... keep existing faqs array ...
  ];

  return (
    <div className="min-h-screen bg-[#0B0E1A] text-white">
      {/* ... keep all existing JSX until Testimonial3DRoulette ... */}

      {/* Testimonials Section with 3D Roulette - MODERNO */}
      <Testimonial3DRoulette />

      {/* Section Blog Preview: blog debajo del FAQ y antes del footer */}
      {/* <BlogPreviewSection articles={articles.slice(0, 3)} /> */}

      {/* Newsletter Banner animada con ScrollReveal y submit funcional (Formspree por defecto) */}
      <ScrollReveal direction="left" distance={80}>
        {/* ... rest of code ... */}
      </ScrollReveal>
    </div>
  );
}