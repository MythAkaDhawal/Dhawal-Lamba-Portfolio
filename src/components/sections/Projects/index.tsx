"use client";

import React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren } from "@/components/motion/StaggerChildren";

export default function Projects() {
  // Sort or arrange them: we keep the order defined in static projects data:
  // CiteRAG, Scamnet-AI, Lectra.ai, Student-OS, AlumniConnect, Clothing E-Commerce
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-bg-primary"
    >
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <StaggerChildren staggerDelay={0.1}>
          {/* Label & Heading */}
          <FadeUp>
            <SectionLabel className="mb-4">Selected Work</SectionLabel>
          </FadeUp>
          <FadeUp>
            <SectionHeading>
              Things I build with intention.
            </SectionHeading>
          </FadeUp>

          {/* Projects vertical list */}
          <div className="mt-12 flex flex-col">
            {projects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
