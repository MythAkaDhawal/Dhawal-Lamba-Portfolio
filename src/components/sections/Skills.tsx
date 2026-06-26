"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillsData } from "@/data/skills";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren } from "@/components/motion/StaggerChildren";

export default function Skills() {
  const prefersReduced = useReducedMotion();

  const rowVariants = (index: number) => ({
    hidden: {
      opacity: 0,
      x: prefersReduced ? 0 : index % 2 === 0 ? -20 : 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        delay: index * 0.08
      }
    }

  });

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 bg-bg-secondary border-t border-border-subtle overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <StaggerChildren staggerDelay={0.1}>
          {/* Label & Heading */}
          <FadeUp>
            <SectionLabel className="mb-4">Capabilities</SectionLabel>
          </FadeUp>
          <FadeUp>
            <SectionHeading>
              Things I build with — and build on.
            </SectionHeading>
          </FadeUp>

          {/* Grid Layout */}
          <div className="mt-16 space-y-10">
            {skillsData.map((categoryData, idx) => (
              <motion.div
                key={categoryData.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={rowVariants(idx)}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start pb-8 border-b border-border-subtle/50 last:border-0"
              >
                {/* Category Label */}
                <div className="lg:col-span-3">
                  <h4 className="text-base font-semibold text-text-primary select-none font-sans">
                    {categoryData.category}
                  </h4>
                </div>

                {/* Skill Chips */}
                <div className="lg:col-span-9 flex flex-wrap gap-2">
                  {categoryData.items.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 rounded bg-bg-primary text-text-secondary border border-border-subtle select-none hover:text-highlight hover:border-highlight transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
