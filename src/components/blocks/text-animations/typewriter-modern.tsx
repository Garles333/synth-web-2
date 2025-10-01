"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface TypewriterModernProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  highlightClassName?: string;
}

export const TypewriterModern = ({
  lines,
  className,
  lineClassName,
  highlightClassName,
}: TypewriterModernProps) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentLine = lines[currentLineIndex];

    if (isTyping) {
      if (typedText.length < currentLine.length) {
        timeout = setTimeout(() => {
          setTypedText(currentLine.slice(0, typedText.length + 1));
        }, 100); // Typing speed
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500); // Pause at end of line
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(currentLine.slice(0, typedText.length - 1));
        }, 50); // Erasing speed
      } else {
        setCurrentLineIndex((prev) => (prev + 1) % lines.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isTyping, currentLineIndex, lines]);

  const highlightWords = ["human expertise", "proprietary AI"];

  const getRenderedText = () => {
    const text = typedText;
    let components: React.ReactNode[] = [];
    let lastIndex = 0;

    highlightWords.forEach((word) => {
      const startIndex = text.toLowerCase().indexOf(word.toLowerCase());
      if (startIndex !== -1) {
        const endIndex = startIndex + word.length;
        if (startIndex > lastIndex) {
          components.push(text.substring(lastIndex, startIndex));
        }
        components.push(
          <span key={startIndex} className={cn("text-accent-orange", highlightClassName)}>
            {text.substring(startIndex, endIndex)}
          </span>
        );
        lastIndex = endIndex;
        // Adjust for overlapping highlights if needed, though unlikely with these words
      }
    });

    if (lastIndex < text.length) {
      components.push(text.substring(lastIndex));
    }

    if (components.length === 0 && text.length > 0) {
      components.push(text);
    }

    return components;
  };

  return (
    <div className={cn("relative h-[48px] overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.p
          key={currentLineIndex}
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={cn(
            "text-2xl font-bold text-white whitespace-nowrap",
            lineClassName
          )}
        >
          {getRenderedText()}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block w-[2px] h-full bg-accent-orange ml-1"
          />
        </motion.p>
      </AnimatePresence>
    </div>
  );
};