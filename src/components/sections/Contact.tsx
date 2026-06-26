"use client";

import React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticWrapper } from "@/components/motion/MagneticWrapper";
import { Button } from "@/components/ui/Button";
import { socialLinks } from "@/data/social";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren } from "@/components/motion/StaggerChildren";

export function Contact() {
  // Since email is not provided, we will route "Say hello" to LinkedIn!
  // It is the most direct and functional channel available.
  const contactLink = socialLinks.linkedin || "#";

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-bg-primary text-center select-none"
    >
      <div className="max-w-[1100px] mx-auto px-6 relative z-10 flex flex-col items-center">
        <StaggerChildren staggerDelay={0.1}>
          {/* Label */}
          <FadeUp>
            <SectionLabel className="mb-4">Contact</SectionLabel>
          </FadeUp>

          {/* Heading */}
          <FadeUp>
            <SectionHeading className="mb-4">
              Let's build something.
            </SectionHeading>
          </FadeUp>

          {/* Tagline */}
          <FadeUp className="max-w-md mx-auto mb-10">
            <p className="text-text-secondary text-base leading-relaxed font-sans">
              Whether it's a role, a collaboration, or just a conversation &mdash; reach out.
            </p>
          </FadeUp>

          {/* Magnetic CTA Button */}
          <FadeUp className="inline-block mb-16">
            <MagneticWrapper>
              <Button
                href={contactLink}
                variant="primary"
                external={Boolean(socialLinks.linkedin)}
                className="h-14 px-8 text-base tracking-wide font-sans rounded-xl font-semibold shadow-lg shadow-highlight-dim"
              >
                Say hello &rarr;
              </Button>
            </MagneticWrapper>
          </FadeUp>

          {/* Contact Links */}
          <FadeUp className="w-full border-t border-border-subtle pt-8 flex items-center justify-center space-x-6 font-mono text-xs">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-highlight transition-colors duration-200"
                aria-label="GitHub Profile (opens in new tab)"
              >
                GitHub
              </a>
            )}
            {socialLinks.github && socialLinks.linkedin && (
              <span className="text-text-tertiary select-none">&middot;</span>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-highlight transition-colors duration-200"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                LinkedIn
              </a>
            )}
          </FadeUp>
        </StaggerChildren>
      </div>
    </section>
  );
}
export default Contact;
