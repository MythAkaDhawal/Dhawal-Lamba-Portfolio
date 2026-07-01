"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Import local GSAP
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "@/lib/gsap/ScrollTrigger";
import { ScrollSmoother } from "@/lib/gsap/ScrollSmoother";

interface ScrollSmootherProviderProps {
  children: React.ReactNode;
}

export function ScrollSmootherProvider({ children }: ScrollSmootherProviderProps) {
  const prefersReduced = useReducedMotion();
  const pathname = usePathname();
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    // If reduced motion is preferred, don't initialize ScrollSmoother
    if (prefersReduced) return;

    // Register plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Create smoother instance
    const smoother = ScrollSmoother.create({
      smooth: 1.15, // Time in seconds for smoothing
      effects: true, // Enables data-speed / data-lag attributes
      normalizeScroll: false, // Don't force scroll normalization to keep keyboard scroll happy
      ignoreMobileResize: true,
    });

    smootherRef.current = smoother;

    // Trigger ScrollTrigger refresh on mount
    ScrollTrigger.refresh();

    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, [prefersReduced, pathname]);

  return (
    <div id="smooth-wrapper" className="w-full min-h-screen">
      <div id="smooth-content" className="w-full">
        {children}
      </div>
    </div>
  );
}
