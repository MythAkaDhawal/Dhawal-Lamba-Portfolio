export interface Project {
  title: string;
  type: string;
  tagline?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  github: string;
  live_demo?: string;
  featured?: boolean;
}
