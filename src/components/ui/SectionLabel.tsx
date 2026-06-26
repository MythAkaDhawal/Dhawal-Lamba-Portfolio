import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionLabel({ children, className, id }: SectionLabelProps) {
  return (
    <span
      id={id}
      className={cn(
        "text-label text-text-tertiary block select-none",
        className
      )}
    >
      {children}
    </span>
  );
}
