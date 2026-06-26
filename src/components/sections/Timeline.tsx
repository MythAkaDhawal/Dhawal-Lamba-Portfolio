"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timelineData } from "@/data/timeline";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren } from "@/components/motion/StaggerChildren";

export default function Timeline() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Scale progress line from 0 to 1 on scroll
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="timeline"
      className="relative py-24 md:py-32 bg-bg-primary overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <StaggerChildren staggerDelay={0.1}>
          {/* Label & Heading */}
          <FadeUp>
            <SectionLabel className="mb-4">Timeline</SectionLabel>
          </FadeUp>
          <FadeUp>
            <SectionHeading>
              My Academic &amp; Building Journey
            </SectionHeading>
          </FadeUp>

          {/* Timeline container */}
          <div ref={containerRef} className="relative mt-16 min-h-[250px] pl-8 md:pl-0">
            {/* Background Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-border-subtle -translate-x-1/2" />

            {/* Active Drawing Line */}
            {!prefersReduced && (
              <motion.div
                style={{ scaleY }}
                className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-highlight origin-top -translate-x-1/2"
              />
            )}

            {/* Timeline Entries */}
            <div className="space-y-16">
              {timelineData.map((event, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={event.title}
                    className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start"
                  >
                    {/* Left side (Desktop: Year) */}
                    <div
                      className={`hidden md:block text-right pr-8 ${
                        isEven ? "md:col-start-1" : "md:col-start-2 text-left pl-8 md:order-2"
                      }`}
                    >
                      <span className="font-mono text-lg font-semibold text-highlight">
                        {event.year}
                      </span>
                    </div>

                    {/* Timeline Node Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-bg-primary border-2 border-highlight -translate-x-1/2 translate-y-1 z-10 flex items-center justify-center">
                      {event.isCurrent && (
                        <div className="w-1.5 h-1.5 rounded-full bg-highlight animate-ping" />
                      )}
                    </div>

                    {/* Right side (Desktop: Content) */}
                    <div
                      className={`md:col-start-2 pl-4 md:pl-8 ${
                        isEven ? "" : "md:col-start-1 md:text-right md:pr-8 md:pl-0 md:order-1"
                      }`}
                    >
                      {/* Mobile Year Label */}
                      <span className="inline-block md:hidden font-mono text-sm font-semibold text-highlight mb-1">
                        {event.year}
                      </span>
                      
                      <div className="space-y-2">
                        <span className="text-label text-[10px] text-text-tertiary select-none">
                          {event.type}
                        </span>
                        <h4 className="text-display text-xl md:text-2xl text-text-primary select-none">
                          {event.title}
                        </h4>
                        <p className="text-text-secondary text-sm md:text-base leading-relaxed font-sans max-w-md md:ml-auto md:mr-0">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
