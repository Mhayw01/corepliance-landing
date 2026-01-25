"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  viewportAmount?: number;
  viewportMargin?: string;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  y = 16,
  duration = 0.9,
  viewportAmount,
  viewportMargin,
  className,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const resolvedY = shouldReduceMotion ? 0 : y;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: resolvedY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: viewportAmount ?? 0.15,
        margin: viewportMargin ?? "-160px 0px -160px 0px",
      }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
