"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface StaggerChildrenProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delay?: number;
  className?: string;
}

export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  delay = 0,
  className
}: StaggerChildrenProps) {
  const prefersReduced = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReduced ? 0 : staggerDelay,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
