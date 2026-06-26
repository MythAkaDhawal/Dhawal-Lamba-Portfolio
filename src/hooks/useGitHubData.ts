import { useEffect, useState } from "react";

interface Repo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
}

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface LanguageStat {
  name: string;
  percentage: number;
}

interface GitHubData {
  repos: Repo[];
  contributions: ContributionDay[];
  languageStats: LanguageStat[];
}

const CACHE_KEY = "dhawal-github-data";
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export function useGitHubData() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Check cache first
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const { parsedData, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION) {
            setData(parsedData);
            setLoading(false);
            return;
          }
        }

        // Cache miss or expired -> fetch from API
        const response = await fetch("/api/github");
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub data");
        }

        const freshData = await response.json();
        
        // Save to cache
        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ parsedData: freshData, timestamp: Date.now() })
        );

        setData(freshData);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}
