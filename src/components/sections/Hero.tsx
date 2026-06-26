"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { socialLinks } from "@/data/social";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Inline SVG components replacing removed brand icons from lucide-react
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Hero() {
  const prefersReduced = useReducedMotion();

  // Mouse Parallax on Desktop
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  // Parallax shifts up to 6px
  const moveX = useTransform(dx, [-0.5, 0.5], [-6, 6]);
  const moveY = useTransform(dy, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReduced || window.innerWidth < 768) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    x.set((clientX / innerWidth) - 0.5);
    y.set((clientY / innerHeight) - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.12,
      },
    },
  };

  const fadeInUpItem = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };


  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-svh w-full flex flex-col justify-center bg-bg-primary text-text-primary px-6 overflow-hidden select-none"
    >
      {/* Subtle background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-highlight-dim rounded-full filter blur-[120px] pointer-events-none z-0 opacity-40 dark:opacity-20" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-[1100px] w-full mx-auto relative z-10 flex flex-col justify-center h-full pt-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-10 flex flex-col space-y-6">
            <motion.div variants={fadeInUpItem}>
              <SectionLabel>
                Building at the intersection of AI and modern software
              </SectionLabel>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeInUpItem}
              className="text-display text-[clamp(2.5rem,8vw,4.5rem)] font-normal text-text-primary uppercase tracking-tighter leading-none flex flex-col"
              style={{ x: moveX, y: moveY }}
            >
              <span>DHAWAL</span>
              <span>LAMBA</span>
            </motion.h1>

            {/* Role & Value Prop */}
            <motion.div variants={fadeInUpItem} className="space-y-2 max-w-xl">
              <h2 className="text-xl md:text-2xl text-text-secondary font-medium font-sans">
                AI Engineer. Full Stack Builder. Product Thinker.
              </h2>
              <p className="text-base text-text-tertiary font-sans">
                Building systems that think, scale, and ship.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeInUpItem} className="flex flex-wrap gap-4 pt-2">
              <Button href="#projects" variant="primary">
                View Projects &darr;
              </Button>
              {socialLinks.linkedin && (
                <Button href={socialLinks.linkedin} variant="secondary" external>
                  LinkedIn Profile ↗
                </Button>
              )}
            </motion.div>
          </div>

          {/* Social Links Sidebar */}
          <div className="lg:col-span-2 flex lg:justify-end items-center">
            <motion.div
              variants={fadeInUpItem}
              className="flex lg:flex-col items-center gap-6 lg:border-l lg:border-border-subtle lg:pl-6 py-2"
            >
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-tertiary hover:text-highlight transition-all hover:scale-110 duration-200"
                  aria-label="GitHub Profile (opens in new tab)"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-tertiary hover:text-highlight transition-all hover:scale-110 duration-200"
                  aria-label="LinkedIn Profile (opens in new tab)"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

