import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
  const baseClasses =
    "inline-flex items-center justify-center h-[44px] px-6 rounded-lg text-sm font-medium transition-colors duration-200 focus-ring select-none cursor-pointer";

  const variantClasses = {
    primary:
      "bg-accent text-accent-text hover:opacity-90 active:opacity-100",
    secondary:
      "border border-border-default text-text-primary hover:bg-bg-tertiary active:bg-border-subtle",
  };

  const combinedClasses = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          aria-label={`${typeof children === "string" ? children : "Link"} (opens in new tab)`}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
