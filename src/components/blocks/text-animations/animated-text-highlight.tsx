"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface AnimatedTextHighlightProps {
  children: ReactNode;
}

export const AnimatedTextHighlight = ({
  children,
}: AnimatedTextHighlightProps) => {
  return (
    <motion.span
      whileHover="highlight"
      className="relative inline-block whitespace-nowrap"
    >
      {children}
      <motion.span
        variants={{
          highlight: {
            scaleX: 1,
            transition: { type: "spring", stiffness: 400, damping: 20 },
          },
          initial: {
            scaleX: 0,
            transition: { duration: 0.3, ease: "easeInOut" },
          },
        }}
        initial="initial"
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left rounded-full bg-gradient-to-r from-orange-400 to-orange-600"
      />
    </motion.span>
  );
};