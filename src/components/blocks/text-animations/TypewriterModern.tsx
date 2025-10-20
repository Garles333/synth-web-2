"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterModernProps {
  lines: string[];
  onDone?: () => void;
  className?: string;
  lineClassName?: string;
  highlightClassName?: string;
  highlightWords?: string[]; // Make highlight words configurable
}

export const TypewriterModern: React.FC<TypewriterModernProps> = ({
  lines,
  onDone,
  className = "",
  lineClassName = "",
  highlightClassName = "text-[#FF6634] font-medium",
  highlightWords = ["Reales", "Inmediatos"] // Default to Spanish
}) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Safe fallback for SSR
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !lines.length) return;

    let timeoutId: NodeJS.Timeout;

    try {
      if (currentLineIndex >= lines.length) {
        setIsComplete(true);
        onDone?.();
        return;
      }

      const currentLine = lines[currentLineIndex] || "";
      const targetText = currentLine;

      if (currentText.length < targetText.length) {
        // Type next character
        timeoutId = setTimeout(() => {
          setCurrentText(targetText.substring(0, currentText.length + 1));
        }, Math.random() * 35 + 70); // 70-105ms por carácter (más lento)
      } else {
        // Line complete, pause then move to next
        timeoutId = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentText("");
        }, 850); // Pausa más larga entre líneas
      }
    } catch (error) {
      // Graceful fallback on any error
      setIsComplete(true);
      console.warn("TypewriterModern error:", error);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentText, currentLineIndex, lines, onDone, isMounted]);

  const processTextWithHighlights = (text: string): React.ReactNode => {
    if (!text) return "";

    try {
      let processedText = text;

      highlightWords.forEach((word) => {
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        processedText = processedText.replace(
          regex,
          `<span class="${highlightClassName}">${word}</span>`
        );
      });

      return <span dangerouslySetInnerHTML={{ __html: processedText }} className="inline" />;
    } catch (error) {
      return text;
    }
  };

  // SSR/loading fallback - show all text immediately
  if (!isMounted) {
    return (
      <div className={className}>
        {lines.map((line, index) =>
        <div key={index} className={lineClassName}>
            {processTextWithHighlights(line)}
          </div>
        )}
      </div>);

  }

  return (
    <div className={className}>
      {/* Completed lines */}
      {lines.slice(0, currentLineIndex).map((line, index) =>
      <motion.div
        key={`completed-${index}`}
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}>

          {processTextWithHighlights(line)}
        </motion.div>
      )}
      
      {/* Current typing line */}
      {currentLineIndex < lines.length &&
      <div className={lineClassName}>
          {processTextWithHighlights(currentText)}
        </div>
      }
    </div>);

};