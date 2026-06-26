import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "CiteRAG",
    type: "AI Document Intelligence Platform",
    tagline: "Citation-Grounded Document Question Answering via RAG",
    description: "Advanced AI-powered document intelligence platform that uses Retrieval-Augmented Generation to perform question answering over PDF documents while maintaining citation traceability and source grounding.",
    highlights: [
      "Multi-document ingestion",
      "Context retrieval",
      "Citation grounding",
      "Semantic search",
      "PDF intelligence"
    ],
    technologies: [
      "Python",
      "Google Gemini API",
      "LangChain",
      "Retrieval Augmented Generation",
      "Embeddings",
      "Semantic Search",
      "PDF Parsing",
      "Vectorization"
    ],
    github: "https://github.com/MythAkaDhawal/CiteRAG---Citation-Grounded-Document-Q-A-via-RAG"
  },
  {
    title: "Scamnet-ai",
    type: "AI Security Extension",
    description: "AI-driven browser extension using Natural Language Processing techniques to identify scams and phishing attempts in real time.",
    highlights: [
      "Scam detection",
      "Phishing analysis",
      "Threat awareness",
      "Real-time alerts"
    ],
    technologies: [
      "Python",
      "NLP Libraries",
      "Machine Learning",
      "Browser Extension APIs",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    github: "https://github.com/MythAkaDhawal/Scamnet-ai"
  },
  {
    title: "Lectra.ai",
    type: "AI Learning Companion",
    description: "AI-powered academic assistant that aggregates lecture material, creates summaries and transforms educational content into searchable and structured knowledge.",
    highlights: [
      "Learning assistance",
      "Summarization",
      "Knowledge organization",
      "Study guide generation"
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "NLP Processing"
    ],
    github: "https://github.com/MythAkaDhawal/Lectra.ai"
  },
  {
    title: "Student-OS",
    type: "Student Productivity Platform",
    description: "Comprehensive student life management platform designed to centralize academics, opportunities, deadlines, documents and career development workflows.",
    highlights: [
      "Academic tracking",
      "Deadline management",
      "Opportunity management",
      "Document repository",
      "Career organization"
    ],
    technologies: [
      "Kotlin",
      "Android SDK",
      "Jetpack",
      "MVVM Architecture",
      "Clean Architecture"
    ],
    github: "https://github.com/MythAkaDhawal/Student-OS"
  },
  {
    title: "AlumniConnect",
    type: "Alumni Network Platform",
    description: "Alumni management platform developed during a hackathon to strengthen institutional connections and enable mentorship opportunities.",
    highlights: [
      "Alumni networking",
      "Mentorship support",
      "Legacy preservation",
      "Community engagement"
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    github: "https://github.com/MythAkaDhawal/AlumniConnect"
  },
  {
    title: "Clothing E-Commerce",
    type: "Full Stack E-Commerce Platform",
    featured: true,
    description: "Modern full-stack clothing e-commerce platform focused on performance, smooth interactions and scalable architecture.",
    highlights: [
      "Product catalog",
      "Filtering and search",
      "Shopping cart",
      "State management",
      "Responsive design",
      "Modern UI interactions"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Framer Motion",
      "Radix UI",
      "Lucide React"
    ],
    github: "https://github.com/MythAkaDhawal/Clothing-E-Commerce",
    live_demo: "https://clothing-e-commerce-sigma.vercel.app"
  }
];
