"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { ScrambleTextPlugin } from "@/lib/gsap/ScrambleTextPlugin";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  external?: boolean;
}

export function Button({
  href,
  variant = "primary",
  children,
  className,
  external,
  ...props
}: ButtonProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const prefersReduced = useReducedMotion();

  const handleMouseEnter = () => {
    if (prefersReduced || !textRef.current || typeof children !== "string") return;

    gsap.registerPlugin(ScrambleTextPlugin);

    gsap.to(textRef.current, {
      duration: 0.45,
      scrambleText: {
        text: children,
        chars: "01X#$@&%",
        speed: 0.4,
      }
    });
  };

  const baseClasses =
    "inline-flex items-center justify-center h-[44px] px-6 rounded-lg text-sm font-medium transition-colors duration-200 focus-ring select-none cursor-pointer";

  const variantClasses = {
    primary:
      "bg-accent text-accent-text hover:opacity-90 active:opacity-100",
    secondary:
      "border border-border-default text-text-primary hover:bg-bg-tertiary active:bg-border-subtle",
  };

  const combinedClasses = cn(baseClasses, variantClasses[variant], className);

  const renderContent = () => {
    if (typeof children === "string") {
      return <span ref={textRef}>{children}</span>;
    }
    return children;
  };

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          aria-label={`${typeof children === "string" ? children : "Link"} (opens in new tab)`}
          onMouseEnter={handleMouseEnter}
        >
          {renderContent()}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} onMouseEnter={handleMouseEnter}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onMouseEnter={handleMouseEnter} {...props}>
      {renderContent()}
    </button>
  );
}
