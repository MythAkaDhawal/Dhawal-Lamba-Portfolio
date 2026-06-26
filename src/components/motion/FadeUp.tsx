"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  className
}: FadeUpProps) {
  const prefersReduced = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      y: prefersReduced ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{
        duration: prefersReduced ? 0.3 : duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      }}

      className={className}
    >
      {children}
    </motion.div>
  );
}
