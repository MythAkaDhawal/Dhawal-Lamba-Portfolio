"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ScrollProgress() {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  if (prefersReduced) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-highlight z-50 origin-left pointer-events-none"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
