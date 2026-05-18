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
    company: "Dvika Next-Gen Tech Solutions",
    role: "Full Stack Developer (MERN & AI)",
    period: "Sept 2025 – April 2026",
    summary: "Building scalable legal technology solutions with AI integration and modern full-stack architecture.",
    achievements: [
      "Architected multi-tenant RBAC system supporting 5+ user roles with secure access controls",
      "Implemented Stripe subscription billing with webhook-based payment reconciliation",
      "Optimized API response times by 40% through query optimization and caching strategies",
      "Established CI/CD pipelines and developer experience best practices across the team",
    ],
    technologies: ["Typescript","Next.js", "React.js", "Node.js", "MongoDB", "Postgresql", "Redis", "RabbitMQ", "Docker", "Linux"],
  },
];

export const education: Education[] = [
  {
    institute: "Indira Gandhi Institute of Technology",
    degree: "Master of Computer Applications (MCA)",
    detail: "Advanced studies in software engineering, algorithms, and system design.",
    period: "0000-0000",
  },
];
