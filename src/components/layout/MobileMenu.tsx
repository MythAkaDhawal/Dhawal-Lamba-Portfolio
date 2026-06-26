"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  sections: { id: string; label: string }[];
  activeSection: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  sections,
  activeSection
}: MobileMenuProps) {
  const prefersReduced = useReducedMotion();

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: prefersReduced ? (0 as string | number) : "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut" as const,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: prefersReduced ? 0 : 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: prefersReduced ? 0 : i * 0.05 + 0.1,
        duration: 0.3,
        ease: "easeOut" as const,
      },
    }),
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-40 bg-bg-primary flex flex-col justify-center px-8 md:hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-border-default flex items-center justify-center text-text-primary hover:bg-bg-tertiary focus-ring cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>

          <nav className="flex flex-col space-y-6">
            {sections.map((section, idx) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                onClick={onClose}
                custom={idx}
                variants={linkVariants}
                className={`text-display text-4xl hover:text-highlight transition-colors duration-200 select-none ${
                  activeSection === section.id ? "text-highlight" : "text-text-primary"
                }`}
              >
                {section.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
