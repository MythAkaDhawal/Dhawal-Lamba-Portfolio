"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";

const SPRING_CONFIG = {
  mass: 0.1,    // Controls inertia. Lower mass = snappier motion.
  damping: 12,  // Controls bouncing. Higher damping = less bounce.
  stiffness: 130 // Controls speed returning to mouse cursor.
};

export const SimpleMouseFollow = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    x.set(e.clientX - bounds.left - 10); // Offset by half of ball size (size-5)
    y.set(e.clientY - bounds.top - 10);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => opacity.set(1)}
      onPointerLeave={() => opacity.set(0)}
      className="relative rounded-3xl bg-bg-secondary w-full h-[300px] cursor-none overflow-hidden border border-border-subtle flex items-center justify-center select-none"
    >
      <span className="text-xs uppercase tracking-wider opacity-40 pointer-events-none">
        Hover here to move dot
      </span>
      <motion.div
        style={{
          x,
          y,
          opacity,
          position: "absolute",
          top: 0,
          left: 0,
        }}
        className="rounded-full size-5 bg-text-primary pointer-events-none"
      />
    </div>
  );
};

export const SpringMouseFollow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values to set raw coordinates
  const xVal = useMotionValue(0);
  const yVal = useMotionValue(0);
  const opacityVal = useMotionValue(0);
  const scaleVal = useMotionValue(0);

  // Springs wrapped around them for physics smoothing
  const xSpring = useSpring(xVal, SPRING_CONFIG);
  const ySpring = useSpring(yVal, SPRING_CONFIG);
  const opacitySpring = useSpring(opacityVal, SPRING_CONFIG);
  const scaleSpring = useSpring(scaleVal, SPRING_CONFIG);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    xVal.set(e.clientX - bounds.left - 20); // Offset by half of ball size (size-10)
    yVal.set(e.clientY - bounds.top - 20);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => {
        opacityVal.set(1);
        scaleVal.set(1);
      }}
      onPointerLeave={() => {
        opacityVal.set(0);
        scaleVal.set(0);
      }}
      className="relative rounded-3xl bg-bg-secondary w-full h-[300px] overflow-hidden border border-border-subtle flex items-center justify-center select-none"
    >
      <span className="text-xs uppercase tracking-wider opacity-40 pointer-events-none">
        Hover here for spring trail
      </span>
      <motion.div
        style={{
          x: xSpring,
          y: ySpring,
          opacity: opacitySpring,
          scale: scaleSpring,
          position: "absolute",
          top: 0,
          left: 0,
        }}
        className="rounded-full size-10 bg-orange-500 pointer-events-none"
      />
    </div>
  );
};

export const MouseFollowShowcase = () => {
  return (
    <section className="flex flex-col md:flex-row gap-6 w-full items-center justify-center p-6 border border-border-subtle rounded-3xl bg-bg-primary">
      <div className="flex flex-col items-center gap-3 w-full">
        <span className="text-xs uppercase tracking-wider opacity-60">
          Simple Follower
        </span>
        <SimpleMouseFollow />
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <span className="text-xs uppercase tracking-wider opacity-60">
          Spring Physics Follower
        </span>
        <SpringMouseFollow />
      </div>
    </section>
  );
};
