"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { ScrambleTextPlugin } from "@/lib/gsap/ScrambleTextPlugin";

interface TechTagProps {
  children: React.ReactNode;
  className?: string;
}

export function TechTag({ children, className }: TechTagProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const prefersReduced = useReducedMotion();

  const handleMouseEnter = () => {
    if (prefersReduced || !textRef.current || typeof children !== "string") return;

    gsap.registerPlugin(ScrambleTextPlugin);

    gsap.to(textRef.current, {
      duration: 0.4,
      scrambleText: {
        text: children,
        chars: "01-X#_",
        speed: 0.45,
      }
    });
  };

  return (
    <span
      className={cn(
        "font-mono text-[11px] px-[8px] py-[3px] rounded bg-bg-tertiary text-text-secondary border border-border-subtle select-none inline-block cursor-default",
        className
      )}
      onMouseEnter={handleMouseEnter}
    >
      <span ref={textRef}>
        {children}
      </span>
    </span>
  );
}
