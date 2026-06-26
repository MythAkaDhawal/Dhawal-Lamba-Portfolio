export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "education" | "project" | "hackathon" | "milestone";
  isCurrent?: boolean;
}

export const timelineData: TimelineEvent[] = [
  {
    year: "2025 - Present",
    title: "B.Tech Computer Science Engineering",
    description: "Specializing in Artificial Intelligence and Machine Learning at Parul University, Vadodara, Gujarat.",
    type: "education",
    isCurrent: true,
  }
];
