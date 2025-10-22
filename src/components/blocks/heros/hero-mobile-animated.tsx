"use client";

import { motion } from 'framer-motion';

export const HeroMobileAnimated = () => {
  return (
    <>
      <motion.span
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.74,
          delay: 0.18,
          ease: [0.39, 0.13, 0.38, 0.94]
        }}
        className="font-extrabold text-5xl leading-tight relative z-10 text-white block mb-2"
      >
        Insights Reales.
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.74,
          delay: 1.01,
          ease: [0.39, 0.13, 0.38, 0.94]
        }}
        className="font-extrabold text-5xl leading-tight relative z-10 block"
      >
        Resultados{' '}
        <span style={{ color: '#FF6634' }}>Inmediatos.</span>
      </motion.span>
    </>
  );
};