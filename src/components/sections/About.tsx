"use client";

import React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren } from "@/components/motion/StaggerChildren";

export function About() {
  const interests = [
    "AI Systems Design",
    "Developer Tooling",
    "Security Engineering",
    "Product Strategy",
    "Open Source"
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-bg-secondary border-t border-border-subtle"
    >
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <StaggerChildren staggerDelay={0.1}>
          {/* Label */}
          <FadeUp>
            <SectionLabel className="mb-4">About</SectionLabel>
          </FadeUp>

          {/* Opening Statement */}
          <FadeUp className="max-w-3xl">
            <h3 className="text-display text-[clamp(1.75rem,5vw,2.5rem)] font-normal text-text-primary leading-tight mb-12 select-none">
              I&apos;m a CS student specializing in AI and ML — building systems
              that work in the real world, not just in notebooks.
            </h3>
          </FadeUp>

          {/* Two Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mb-16">
            {/* Left Column — Background */}
            <FadeUp delay={0.1} className="space-y-4">
              <h4 className="text-sm font-semibold tracking-wider text-text-secondary uppercase select-none font-sans">
                Background
              </h4>
              <p className="text-text-secondary text-base leading-relaxed font-sans">
                Currently pursuing B.Tech Computer Science Engineering with a specialization in 
                Artificial Intelligence and Machine Learning at Parul University. My work spans the full 
                stack — from training models and building APIs to shipping mobile apps 
                and web platforms that people actually use.
              </p>
              <p className="text-text-secondary text-base leading-relaxed font-sans">
                I&apos;ve worked on systems that touch security, education, e-commerce, 
                and research — each one a different problem set, but the same underlying 
                discipline: understand the problem deeply, then build the simplest 
                thing that solves it well.
              </p>
            </FadeUp>

            {/* Right Column — Engineering Philosophy */}
            <FadeUp delay={0.2} className="space-y-4">
              <h4 className="text-sm font-semibold tracking-wider text-text-secondary uppercase select-none font-sans">
                How I Think
              </h4>
              <p className="text-text-secondary text-base leading-relaxed font-sans">
                I approach every build as a product problem first and an 
                engineering problem second. The best software isn&apos;t the most 
                architecturally sophisticated — it&apos;s the one that does what the 
                user needs without requiring them to think about how.
              </p>
              <p className="text-text-secondary text-base leading-relaxed font-sans">
                Curiosity is the constant. Whether I&apos;m integrating a RAG pipeline, 
                building a recommendation system, or designing a registration flow, 
                the question is always the same: what actually needs to be here?
              </p>
            </FadeUp>
          </div>

          {/* Interests Footer Tags */}
          <FadeUp delay={0.3} className="border-t border-border-subtle pt-8">
            <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-3">
              {interests.map((interest, idx) => (
                <React.Fragment key={interest}>
                  <span className="text-mono text-xs text-text-secondary tracking-wide uppercase">
                    {interest}
                  </span>
                  {idx < interests.length - 1 && (
                    <span className="text-text-tertiary select-none">&middot;</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </FadeUp>
        </StaggerChildren>
      </div>
    </section>
  );
}
