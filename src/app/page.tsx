"use client";

import React, { Suspense, lazy } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { StrokePath } from "@/components/ui/StrokePath";

// Lazy load GitHub Activity section since it is below the fold and calls the API
const GitHubSection = lazy(() => import("@/components/sections/GitHub"));

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 w-full bg-bg-primary text-text-primary">
        {/* Continuous SVG Stroke wraps Hero and About */}
        <div className="relative w-full">
          <StrokePath />
          <Hero />
          <About />
        </div>
        <Projects />
        <Skills />
        <Timeline />
        <Suspense
          fallback={
            <section className="py-24 bg-bg-secondary border-t border-border-subtle flex items-center justify-center select-none">
              <div className="h-8 w-8 border-2 border-highlight border-t-transparent rounded-full animate-spin" />
            </section>
          }
        >
          <GitHubSection />
        </Suspense>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
