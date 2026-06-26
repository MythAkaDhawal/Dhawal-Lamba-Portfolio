"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function StrokePath() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // A predetermined length for the custom curve path.
  const pathLength = 1200;
  
  // Animate offset from fully hidden (pathLength) to fully visible (0) 
  // as scroll goes from 0% to 75% through the hero -> about region.
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 0.75],
    [pathLength, 0]
  );

  if (prefersReduced) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 1600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 1100 450 C 1300 750, 150 700, 100 1150 C 50 1400, 600 1350, 120 1520"
          stroke="var(--stroke-color)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDasharray: pathLength,
            strokeDashoffset,
          }}
        />
      </svg>
    </div>
  );
}
