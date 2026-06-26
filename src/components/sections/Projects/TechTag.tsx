import React from "react";
import { cn } from "@/lib/utils";

interface TechTagProps {
  children: React.ReactNode;
  className?: string;
}

export function TechTag({ children, className }: TechTagProps) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] px-[8px] py-[3px] rounded bg-bg-tertiary text-text-secondary border border-border-subtle select-none inline-block",
        className
      )}
    >
      {children}
    </span>
  );
}
