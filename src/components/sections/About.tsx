"use client";

import React, { useEffect, useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "@/lib/gsap/ScrollTrigger";
import { SplitText } from "@/lib/gsap/SplitText";

export function About() {
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  const interests = [
    "AI Systems Design",
    "Developer Tooling",
    "Security Engineering",
    "Product Strategy",
    "Open Source"
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (prefersReduced || !section) return;

    gsap.registerPlugin(ScrollTrigger, SplitText);

    // 1. Reveal SectionLabel
    const label = section.querySelector(".reveal-label");
    const labelTween = gsap.fromTo(label,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: label,
          start: "top 92%",
          toggleActions: "play none none none"
        }
      }
    );

    // 2. Reveal H3 Opening Statement with SplitText
    const heading = section.querySelector(".reveal-heading");
    const splitHeading = new SplitText(heading, { type: "lines" });
    const headingTween = gsap.from(splitHeading.lines, {
      y: 24,
      opacity: 0,
      stagger: 0.05,
      duration: 0.75,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    });

    // 3. Reveal Grid Columns
    const cols = section.querySelectorAll(".reveal-col");
    const colTween = gsap.fromTo(cols,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cols[0],
          start: "top 88%",
          toggleActions: "play none none none"
        }
      }
    );

    // 4. Reveal Interest footer tags
    const footer = section.querySelector(".reveal-footer");
    const footerTween = gsap.fromTo(footer,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 92%",
          toggleActions: "play none none none"
        }
      }
    );

    return () => {
      labelTween.kill();
      splitHeading.revert();
      headingTween.kill();
      colTween.kill();
      footerTween.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (section.contains(st.trigger as Element)) st.kill();
      });
    };
  }, [prefersReduced]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-bg-secondary border-t border-border-subtle"
    >
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        {/* Label */}
        <div className="reveal-label">
          <SectionLabel className="mb-4">About</SectionLabel>
        </div>

        {/* Opening Statement */}
        <div className="max-w-3xl mb-12">
          <h3 className="reveal-heading text-display text-[clamp(1.75rem,5vw,2.5rem)] font-normal text-text-primary leading-tight select-none">
            I&apos;m a CS student specializing in AI and ML — building systems
            that work in the real world, not just in notebooks.
          </h3>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mb-16">
          {/* Left Column — Background */}
          <div className="reveal-col space-y-4">
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
          </div>

          {/* Right Column — Engineering Philosophy */}
          <div className="reveal-col space-y-4">
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
          </div>
        </div>

        {/* Interests Footer Tags */}
        <div className="reveal-footer border-t border-border-subtle pt-8">
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
        </div>
      </div>
    </section>
  );
}
