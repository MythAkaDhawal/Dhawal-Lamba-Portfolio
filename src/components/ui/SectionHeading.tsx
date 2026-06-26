import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "text-display text-text-primary text-[clamp(1.875rem,4vw,2.25rem)] mb-8",
        className
      )}
    >
      {children}
    </h2>
  );
}
