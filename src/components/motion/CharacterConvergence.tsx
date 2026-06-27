"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
};

export const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0],
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0],
  );

  return (
    <motion.span
      className={cn("inline-block text-orange-500", isSpace && "w-4")}
      style={{
        x,
        rotateX,
      }}
    >
      {char}
    </motion.span>
  );
};

export const CharacterV2 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0],
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [Math.abs(distanceFromCenter) * 50, 0],
  );

  return (
    <motion.img
      src={char}
      alt="tech-stack-icon"
      className={cn("inline-block size-12 object-contain", isSpace && "w-4")}
      style={{
        x,
        scale,
        y,
        transformOrigin: "center",
      }}
    />
  );
};

export const CharacterV3 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 90, 0],
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0],
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-Math.abs(distanceFromCenter) * 20, 0],
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  return (
    <motion.img
      src={char}
      alt="tech-stack-icon"
      className={cn("inline-block size-12 object-contain", isSpace && "w-4")}
      style={{
        x,
        rotate,
        y,
        scale,
        transformOrigin: "center",
      }}
    />
  );
};

export const Bracket = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 78"
      className={className}
    >
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      />
    </svg>
  );
};

export const CharacterConvergenceShowcase = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);
  const targetRef3 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: targetRef,
    offset: ["start end", "end start"]
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    container: scrollContainerRef,
    target: targetRef2,
    offset: ["start end", "end start"]
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    container: scrollContainerRef,
    target: targetRef3,
    offset: ["start end", "end start"]
  });

  const text = "see more from gxuri";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  // Using public next/vercel icons as placeholders since we don't have macIcon path assets.
  const macIcon = [
    "/next.svg",
    "/vercel.svg",
    "/file.svg",
    "/globe.svg",
    "/window.svg",
    "/next.svg",
    "/vercel.svg",
    "/file.svg",
    "/globe.svg",
  ];
  const iconCenterIndex = Math.floor(macIcon.length / 2);

  return (
    <ReactLenis root={false}>
      <main className="w-full bg-bg-primary text-text-primary rounded-3xl overflow-hidden border border-border-subtle">
        <div className="py-8 text-center border-b border-border-subtle">
          <span className="text-xs uppercase tracking-wider opacity-60">
            Scroll inside container to see convergence
          </span>
        </div>

        <div ref={scrollContainerRef} className="h-[400px] overflow-y-auto scrollbar-thin">
          <div
            ref={targetRef}
            className="flex h-[300px] items-center justify-center bg-bg-secondary p-8"
          >
            <div
              className="w-full max-w-4xl text-center text-4xl font-bold uppercase tracking-tighter"
              style={{ perspective: "500px" }}
            >
              {characters.map((char, index) => (
                <CharacterV1
                  key={index}
                  char={char}
                  index={index}
                  centerIndex={centerIndex}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>

          <div
            ref={targetRef2}
            className="flex h-[300px] flex-col items-center justify-center gap-4 bg-bg-primary p-8"
          >
            <p className="flex items-center justify-center gap-3 text-lg font-medium tracking-tight">
              <Bracket className="h-6 text-text-primary" />
              <span>Integrate with your fav tech stack</span>
              <Bracket className="h-6 scale-x-[-1] text-text-primary" />
            </p>
            <div className="w-full max-w-4xl text-center">
              {macIcon.map((char, index) => (
                <CharacterV2
                  key={index}
                  char={char}
                  index={index}
                  centerIndex={iconCenterIndex}
                  scrollYProgress={scrollYProgress2}
                />
              ))}
            </div>
          </div>

          <div
            ref={targetRef3}
            className="flex h-[300px] flex-col items-center justify-center gap-4 bg-bg-secondary p-8"
          >
            <p className="flex items-center justify-center gap-3 text-lg font-medium tracking-tight">
              <Bracket className="h-6 text-text-primary" />
              <span>Integrate with your fav tech stack</span>
              <Bracket className="h-6 scale-x-[-1] text-text-primary" />
            </p>
            <div
              className="w-full max-w-4xl text-center"
              style={{ perspective: "500px" }}
            >
              {macIcon.map((char, index) => (
                <CharacterV3
                  key={index}
                  char={char}
                  index={index}
                  centerIndex={iconCenterIndex}
                  scrollYProgress={scrollYProgress3}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </ReactLenis>
  );
};
