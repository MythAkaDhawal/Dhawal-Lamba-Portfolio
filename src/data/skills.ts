export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "AI & Machine Learning",
    items: [
      "Google Gemini API",
      "OpenAI API",
      "LangChain",
      "Retrieval Augmented Generation",
      "Embeddings",
      "Semantic Search",
      "NLTK",
      "spaCy",
      "scikit-learn"
    ]
  },
  {
    category: "Computer Vision",
    items: [
      "OpenCV",
      "Mediapipe",
      "Gesture Recognition"
    ]
  },
  {
    category: "Frontend Engineering",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Radix UI",
      "TypeScript",
      "JavaScript",
      "Zustand",
      "React Router",
      "Vite",
      "HTML5",
      "CSS3"
    ]
  },
  {
    category: "Backend Development",
    items: [
      "Node.js",
      "REST APIs",
      "API Integration",
      "Python"
    ]
  },
  {
    category: "Mobile Development",
    items: [
      "Android SDK",
      "Jetpack",
      "Kotlin",
      "MVVM",
      "Clean Architecture"
    ]
  },
  {
    category: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "npm",
      "ESLint",
      "Prettier",
      "PostCSS"
    ]
  },
  {
    category: "Deployment & Infrastructure",
    items: [
      "Vercel",
      "Streamlit"
    ]
  },
  {
    category: "Architecture & Patterns",
    items: [
      "Component Based Architecture",
      "Clean Architecture",
      "MVVM",
      "Full Stack Development"
    ]
  }
];
