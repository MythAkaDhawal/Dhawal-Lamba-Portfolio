import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const username = "MythAkaDhawal";

  try {
    // Fetch repos (recently updated)
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        next: { revalidate: 3600 } // Cache on Vercel edge for 1 hour
      }
    );

    // Fetch events (recent activity)
    const eventsResponse = await fetch(
      `https://api.github.com/users/${username}/events?per_page=100`,
      {
        next: { revalidate: 3600 }
      }
    );

    if (!reposResponse.ok) {
      throw new Error(`GitHub Repos API error: ${reposResponse.status}`);
    }

    const reposData = await reposResponse.json();
    const eventsData = eventsResponse.ok ? await eventsResponse.json() : [];

    // Process events to extract daily contribution count (last 90 days)
    const contributionMap: { [dateStr: string]: number } = {};
    
    // Initialize dates for the last 90 days
    const today = new Date();
    for (let i = 0; i < 90; i++) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      contributionMap[dateStr] = 0;
    }

    // Parse event data
    if (Array.isArray(eventsData)) {
      eventsData.forEach((event: any) => {
        if (!event.created_at) return;
        const dateStr = event.created_at.split("T")[0];
        
        // If date is within our 90 days range
        if (contributionMap[dateStr] !== undefined) {
          let score = 0;
          if (event.type === "PushEvent" && event.payload?.commits) {
            score = event.payload.commits.length;
          } else if (
            event.type === "PullRequestEvent" ||
            event.type === "IssuesEvent" ||
            event.type === "CreateEvent"
          ) {
            score = 1;
          }
          contributionMap[dateStr] += score;
        }
      });
    }

    // Format contributions as array
    const contributions = Object.keys(contributionMap).map((date) => {
      const count = contributionMap[date];
      let level = 0;
      if (count >= 10) level = 4;
      else if (count >= 6) level = 3;
      else if (count >= 3) level = 2;
      else if (count >= 1) level = 1;

      return { date, count, level };
    }).reverse(); // chronological order

    // Extract language statistics from repos
    const languages: { [lang: string]: number } = {};
    let totalSize = 0;

    reposData.forEach((repo: any) => {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
        totalSize += 1;
      }
    });

    const languageStats = Object.keys(languages).map((name) => ({
      name,
      percentage: Math.round((languages[name] / totalSize) * 100)
    })).sort((a, b) => b.percentage - a.percentage);

    // Format repos for cards
    const repos = reposData.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      url: repo.html_url
    }));

    return NextResponse.json(
      { repos, contributions, languageStats },
      {
        headers: {
          "Cache-Control": "public, max-age=3600, s-maxage=3600"
        }
      }
    );
  } catch (error: any) {
    console.error("Error fetching GitHub data:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
