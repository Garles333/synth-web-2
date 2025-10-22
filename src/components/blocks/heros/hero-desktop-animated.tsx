"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HeroDesktopAnimatedProps {
  locale?: "es" | "en";
}

export const HeroDesktopAnimated = ({ locale = "es" }: HeroDesktopAnimatedProps) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>(["", ""]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const lines = locale === "es" 
    ? ["Insights Reales.", "Resultados Inmediatos."]
    : ["Real Insights.", "Immediate Results."];

  useEffect(() => {
    // Si ya completamos, esperamos antes de reiniciar
    if (isComplete) {
      const timeout = setTimeout(() => {
        setDisplayedLines(["", ""]);
        setCurrentLineIndex(0);
        setCharIndex(0);
        setIsComplete(false);
      }, 3000); // Pausa de 3 segundos cuando está completo

      return () => clearTimeout(timeout);
    }

    if (currentLineIndex >= lines.length) {
      setIsComplete(true);
      return;
    }

    const currentLine = lines[currentLineIndex];
    
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          newLines[currentLineIndex] = currentLine.slice(0, charIndex + 1);
          return newLines;
        });
        setCharIndex(charIndex + 1);
      }, 50); // Velocidad de escritura

      return () => clearTimeout(timeout);
    } else if (currentLineIndex < lines.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1);
        setCharIndex(0);
      }, 300); // Pausa entre líneas

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [charIndex, currentLineIndex, lines, isComplete]);

  const renderLineWithHighlight = (text: string, lineIndex: number) => {
    const words = text.split(" ");
    const lastWord = words[words.length - 1];
    const restOfText = words.slice(0, -1).join(" ");

    return (
      <span className="font-extrabold text-7xl leading-tight relative z-10 block">
        {restOfText && <span className="text-white">{restOfText} </span>}
        <span style={{ color: "#FF6634" }}>{lastWord}</span>
      </span>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[180px]">
      {displayedLines[0] && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {renderLineWithHighlight(displayedLines[0], 0)}
        </motion.div>
      )}
      {displayedLines[1] && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {renderLineWithHighlight(displayedLines[1], 1)}
        </motion.div>
      )}
    </div>
  );
};