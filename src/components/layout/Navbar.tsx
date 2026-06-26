"use client";

import React, { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "timeline", label: "Timeline" },
    { id: "github", label: "Activity" },
    { id: "contact", label: "Contact" }
  ];

  const sectionIds = sections.map((s) => s.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-35 bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle h-16 transition-colors duration-200">
        <div className="max-w-[1100px] h-full mx-auto px-6 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#hero"
            className="text-display text-xl tracking-tight text-text-primary hover:text-highlight transition-colors duration-200 select-none"
          >
            DHAWAL LAMBA
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-label transition-colors duration-200 hover:text-highlight ${
                  activeSection === section.id
                    ? "text-highlight font-semibold"
                    : "text-text-secondary"
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 rounded-full border border-border-default flex items-center justify-center text-text-primary hover:bg-bg-tertiary focus-ring cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Fullscreen Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sections={sections}
        activeSection={activeSection}
      />
    </>
  );
}
