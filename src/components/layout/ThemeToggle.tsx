"use client";

/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeToggle } from "@/components/ui/ThemeViewTransition";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { isDark, toggleTheme } = useThemeToggle({
    variant: "circle",
    start: "top-right",
    blur: false,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-border-subtle bg-bg-secondary" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full border border-border-default flex items-center justify-center bg-bg-secondary text-text-primary hover:bg-bg-tertiary focus-ring cursor-pointer transition-colors duration-200 z-50"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--highlight)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ rotate: isDark ? 40 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <motion.path
          d={isDark 
            ? "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" 
            : "M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z"
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        
        <AnimatePresence>
          {!isDark && (
            <motion.g
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </motion.g>
          )}
        </AnimatePresence>
      </motion.svg>
    </button>
  );
}
