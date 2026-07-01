"use client";

import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";

interface MagneticWrapperProps {
  children: React.ReactElement;
  className?: string;
}

export function MagneticWrapper({ children, className }: MagneticWrapperProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced || !ref.current) return;

    const element = ref.current;

    // Create quickTo setter functions for high-performance 120FPS DOM translations
    const xTo = gsap.quickTo(element, "x", { duration: 0.6, ease: "power3.out" });
    const yTo = gsap.quickTo(element, "y", { duration: 0.6, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) * 0.35;
      const y = (e.clientY - top - height / 2) * 0.35;
      xTo(x);
      yTo(y);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [prefersReduced]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
