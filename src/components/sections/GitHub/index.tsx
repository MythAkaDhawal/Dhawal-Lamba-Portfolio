"use client";

import React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RepoCard } from "./RepoCard";
import { ContributionGraph } from "./ContributionGraph";
import { useGitHubData } from "@/hooks/useGitHubData";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren } from "@/components/motion/StaggerChildren";

const languageColors: { [key: string]: string } = {
  TypeScript: "bg-[#3178c6]",
  JavaScript: "bg-[#f1e05a]",
  Python: "bg-[#3572A5]",
  Kotlin: "bg-[#A97BFF]",
  HTML: "bg-[#e34c26]",
  CSS: "bg-[#563d7c]"
};

export default function GitHubSection() {
  const { data, loading, error } = useGitHubData();

  return (
    <section
      id="github"
      className="relative py-24 md:py-32 bg-bg-secondary border-t border-border-subtle overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <StaggerChildren staggerDelay={0.1}>
          {/* Label & Heading */}
          <FadeUp>
            <SectionLabel className="mb-4">GitHub Activity</SectionLabel>
          </FadeUp>
          <FadeUp>
            <SectionHeading>
              Code, Commits &amp; Contributions
            </SectionHeading>
          </FadeUp>

          {loading ? (
            <div className="py-12 space-y-6">
              <div className="h-28 w-full bg-bg-tertiary animate-pulse rounded-lg" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-36 bg-bg-tertiary animate-pulse rounded-lg" />
                ))}
              </div>
            </div>
          ) : error || !data ? (
            <FadeUp className="p-8 rounded-lg border border-border-default bg-bg-primary text-center max-w-lg mx-auto">
              <p className="text-text-secondary mb-4 font-sans">
                Could not load live GitHub statistics right now. You can check my projects directly on my profile.
              </p>
              <a
                href="https://github.com/MythAkaDhawal"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-highlight hover:underline inline-flex items-center space-x-1"
              >
                <span>github.com/MythAkaDhawal &rarr;</span>
              </a>
            </FadeUp>
          ) : (
            <div className="space-y-12 mt-12">
              {/* Graph and Language Stats Side-by-Side */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <FadeUp className="lg:col-span-8">
                  <ContributionGraph contributions={data.contributions} />
                </FadeUp>

                {/* Proportional Language Bar */}
                <FadeUp className="lg:col-span-4 p-6 rounded-lg bg-bg-secondary border border-border-subtle">
                  <h5 className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider mb-4">
                    Languages
                  </h5>

                  {/* Proportional strip bar */}
                  <div className="w-full h-3 rounded-full overflow-hidden bg-bg-tertiary flex mb-6">
                    {data.languageStats.map((stat, idx) => {
                      const colorClass = languageColors[stat.name] || "bg-text-tertiary";
                      return (
                        <div
                          key={stat.name}
                          style={{ width: `${stat.percentage}%` }}
                          className={`${colorClass} h-full transition-all duration-300`}
                          title={`${stat.name}: ${stat.percentage}%`}
                        />
                      );
                    })}
                  </div>

                  {/* Language Legend */}
                  <div className="space-y-3 font-mono text-xs text-text-secondary select-none">
                    {data.languageStats.map((stat) => {
                      const colorClass = languageColors[stat.name] || "bg-text-tertiary";
                      return (
                        <div key={stat.name} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className={`w-2.5 h-2.5 rounded-full ${colorClass}`} />
                            <span>{stat.name}</span>
                          </div>
                          <span>{stat.percentage}%</span>
                        </div>
                      );
                    })}
                  </div>
                </FadeUp>
              </div>

              {/* Repos Grid */}
              <div className="space-y-6">
                <h5 className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider pl-1">
                  Recently Updated Repositories
                </h5>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.repos.map((repo) => (
                    <FadeUp key={repo.name}>
                      <RepoCard repo={repo} />
                    </FadeUp>
                  ))}
                </div>
              </div>
            </div>
          )}
        </StaggerChildren>
      </div>
    </section>
  );
}
