"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const base = pathname === "/" ? "" : "/";
  const isBlog = pathname.startsWith("/blog");
  const isEN = pathname.startsWith("/en");
  const isCaseStudies = pathname.includes("/casos-de-exito") || pathname.includes("/case-studies");
  const isManifiesto = pathname === "/manifiesto";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = isCaseStudies
    ? (isEN 
      ? [
          { name: "Home", href: "/en" },
          { name: "What Makes Us Different", href: "/en#motor-realismo" },
          { name: "Case Studies", href: "/en/case-studies" },
          { name: "Pricing", href: "/en#precios" }
        ]
      : [
          { name: "Inicio", href: "/" },
          { name: "Qué nos diferencia", href: "/#motor-realismo" },
          { name: "Casos de Éxito", href: "/casos-de-exito" },
          { name: "Precios", href: "/#precios" }
        ])
    : isBlog || isManifiesto
    ? [
        { name: "Inicio", href: "/" },
        { name: "Lo que nos hace diferentes", href: "/#motor-realismo" },
        { name: "Casos de Éxito", href: "/casos-de-exito" },
        { name: "Precios", href: "/#precios" }
      ]
    : [
        { name: "Soluciones", href: "#soluciones" },
        { name: "Tecnología", href: "#tecnologia" },
        { name: "Equipo", href: "#equipo" },
        { name: "Precios", href: "#precios" }
      ];

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isBlog || isCaseStudies || isManifiesto
            ? 'bg-[#0B0E1A]/95 border-b border-white/10'
            : isScrolled 
              ? 'glass-effect border-b border-white/10' 
              : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo con proportiones corregidas - más largo */}
            <Link href={isEN ? "/en" : "/"} className="flex items-center">
              <Image
                src="https://i.postimg.cc/bvqJBxD6/Logo-Synth-sin-fondo.png"
                alt="Synth Logo"
                width={120}
                height={40}
                className="w-24 h-8 md:w-32 md:h-10 object-contain"
                priority
              />
            </Link>

            {/* Navigation Links - Conectados a secciones */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              {!isBlog && !isCaseStudies && !isManifiesto && (
                <>
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
                  <Link href="/manifiesto" className="text-gray-300 hover:text-[#FF6634] transition-colors font-medium">Manifiesto</Link>
                </>
              )}
            </div>
            
            {/* CTA + Language Switcher */}
            <div className="flex items-center gap-3">
              {/* Language toggle button - Single button for case studies */}
              {isCaseStudies ? (
                <Link
                  href={isEN ? "/casos-de-exito" : "/en/case-studies"}
                  className="hidden md:inline-flex items-center px-2 py-1 rounded-md border border-[#FF6634] text-white hover:bg-[#FF6634]/10 transition"
                  aria-label={isEN ? "Cambiar a Español" : "Switch to English"}
                >
                  <span role="img" aria-hidden>{isEN ? "🇪🇸" : "🇺🇸"}</span>
                </Link>
              ) : (
                <div className="hidden md:flex items-center gap-1 mr-1">
                  <Link
                    href="/"
                    className={`inline-flex items-center px-2 py-1 rounded-md border text-white/80 hover:text-white transition ${
                      !isEN ? 'border-[#FF6634] text-white' : 'border-[#2A3441] hover:border-[#FF6634]/50'
                    }`}
                    aria-label="Español"
                  >
                    <span role="img" aria-hidden>🇪🇸</span>
                  </Link>
                  <Link
                    href="/en"
                    className={`inline-flex items-center px-2 py-1 rounded-md border text-white/80 hover:text-white transition ${
                      isEN ? 'border-[#FF6634] text-white' : 'border-[#2A3441] hover:border-[#FF6634]/50'
                    }`}
                    aria-label="English (US)"
                  >
                    <span role="img" aria-hidden>🇺🇸</span>
                  </Link>
                </div>
              )}

              <Link href={isBlog || isCaseStudies || isManifiesto ? (isEN ? "/en/onboarding" : "/onboarding") : `${base}#precios`}>
                <Button className={`${isBlog || isCaseStudies || isManifiesto ? 'bg-[#FF6634] hover:bg-[#FF6634]/90' : 'bg-black hover:bg-gray-900'} text-white px-6 py-2 text-sm font-medium transition-all hover:scale-105`}>
                  {isBlog || isCaseStudies || isManifiesto ? (isEN ? 'Try it free' : 'Comenzar Gratis') : 'Comenzar'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};