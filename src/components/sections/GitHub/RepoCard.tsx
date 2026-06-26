import React from "react";
import { Star, GitFork, ArrowUpRight } from "lucide-react";

interface RepoCardProps {
  repo: {
    name: string;
    description: string;
    stars: number;
    forks: number;
    language: string;
    url: string;
  };
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-lg bg-bg-secondary border border-border-subtle hover:border-highlight hover:-translate-y-1 transition-all duration-200 focus-ring"
      aria-label={`${repo.name} repository (opens in new tab)`}
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-mono text-sm font-semibold text-text-primary group-hover:text-highlight transition-colors duration-200 truncate">
          {repo.name}
        </h4>
        <ArrowUpRight className="w-4 h-4 text-text-tertiary group-hover:text-highlight transition-colors duration-200" />
      </div>

      <p className="text-text-secondary text-xs line-clamp-2 min-h-[32px] mb-4 font-sans select-none">
        {repo.description || "No description provided."}
      </p>

      <div className="flex items-center justify-between text-[11px] text-text-tertiary select-none font-mono">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <Star className="w-3 h-3" />
            <span>{repo.stars}</span>
          </span>
          <span className="flex items-center space-x-1">
            <GitFork className="w-3 h-3" />
            <span>{repo.forks}</span>
          </span>
        </div>

        {repo.language && (
          <span className="px-2 py-0.5 rounded bg-bg-tertiary border border-border-subtle text-text-secondary">
            {repo.language}
          </span>
        )}
      </div>
    </a>
  );
}
