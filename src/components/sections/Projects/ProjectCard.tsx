"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { TechTag } from "./TechTag";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Project } from "@/types/project";

// Inline SVG Github component replacing lucide-react version
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
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

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const prefersReduced = useReducedMotion();
  const displayIndex = String(index + 1).padStart(2, "0");
  const isFlagship = project.featured;

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };


  const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };


  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
      className={`relative w-full transition-all duration-300 ${
        isFlagship
          ? "bg-bg-secondary p-8 md:p-12 rounded-xl border border-border-subtle"
          : "bg-transparent py-8 md:py-12 border-b border-border-subtle"
      }`}
    >
      {/* Left accent line drawing itself on scroll */}
      <motion.div
        variants={lineVariants}
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-highlight"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pl-6 md:pl-8">
        {/* Index counter */}
        <div className="lg:col-span-1 flex items-center justify-start select-none">
          <span
            className={`font-mono text-text-tertiary ${
              isFlagship ? "text-xl md:text-2xl font-semibold" : "text-sm"
            }`}
          >
            {displayIndex}
          </span>
        </div>

        {/* Project Content */}
        <div className="lg:col-span-11 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-label text-[10px] text-highlight tracking-widest block select-none">
                {project.type}
              </span>
              <h3 className={`text-display text-text-primary ${
                isFlagship ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
              }`}>
                {project.title}
              </h3>
            </div>

            {/* Links */}
            <div className="flex items-center space-x-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border-default flex items-center justify-center text-text-secondary hover:text-highlight hover:bg-bg-tertiary transition-all duration-200"
                  aria-label={`${project.title} GitHub repository (opens in new tab)`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {project.live_demo && (
                <a
                  href={project.live_demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border-default flex items-center justify-center text-text-secondary hover:text-highlight hover:bg-bg-tertiary transition-all duration-200"
                  aria-label={`${project.title} live demo (opens in new tab)`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {project.tagline && (
            <p className="text-mono text-sm text-text-secondary select-none italic font-medium">
              {project.tagline}
            </p>
          )}

          <p className="text-text-secondary text-base leading-relaxed font-sans max-w-3xl">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-1 text-sm text-text-secondary max-w-3xl list-disc pl-4 select-none font-sans">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

