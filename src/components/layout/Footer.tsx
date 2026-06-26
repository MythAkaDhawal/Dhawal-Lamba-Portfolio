import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-border-subtle bg-bg-secondary select-none">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left text-text-tertiary text-xs space-y-2 md:space-y-0 text-mono">
        <div>
          Designed and built by Dhawal Lamba &copy; {currentYear}
        </div>
        <div>
          Built with Next.js, TypeScript, &amp; Framer Motion
        </div>
      </div>
    </footer>
  );
}
