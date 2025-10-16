"use client";

import { useState } from "react";
import { Shield, X } from "lucide-react";

export const GuaranteeBar = ({ locale = 'es' }: { locale?: 'es' | 'en' }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const text = locale === 'en' 
    ? "The #1 AI Agent now comes with a $1M guarantee. Learn more"
    : "El Agente IA #1 ahora viene con una garantía de $1M. Aprende más";

  return (
    <div className="relative w-full bg-[var(--color-accent-orange)] overflow-hidden">
      <div className="h-10 flex items-center justify-center relative">
        {/* Scrolling text container */}
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <div className="flex animate-slideX whitespace-nowrap">
            {/* Repeat text multiple times for seamless loop */}
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="inline-flex items-center px-8 text-sm font-medium text-white">
                <Shield className="w-4 h-4 mr-2" />
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 z-10 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};