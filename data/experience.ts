export interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  institute: string;
  degree: string;
  detail: string;
  period: string;
}

export const experiences: Experience[] = [
  {
    company: "Dvika",
    role: "Full Stack Developer (MERN & AI)",
    period: "Sept 2025 – Present",
    summary: "Building scalable legal technology solutions with AI integration and modern full-stack architecture.",
    achievements: [
      "Architected multi-tenant RBAC system supporting 5+ user roles with secure access controls",
      "Integrated LangChain & OpenAI to automate 80% of manual document review workflows",
      "Implemented Stripe subscription billing with webhook-based payment reconciliation",
      "Optimized API response times by 40% through query optimization and caching strategies",
      "Established CI/CD pipelines and developer experience best practices across the team",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "LangChain", "OpenAI", "Stripe", "Docker"],
  },
];

export const education: Education[] = [
  {
    institute: "Indira Gandhi Institute of Technology",
    degree: "Master of Computer Applications (MCA)",
    detail: "Advanced studies in software engineering, algorithms, and system design.",
    period: "2023 – 2025",
  },
];
