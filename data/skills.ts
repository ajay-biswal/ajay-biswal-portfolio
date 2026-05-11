export interface SkillCategory {
  name: string;
  philosophy: string;
  skills: string[];
  accent: "blue" | "purple" | "cyan";
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Engineering",
    philosophy: "Building performant, accessible interfaces with modern component architecture.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
    accent: "blue",
  },
  {
    name: "Backend & Architecture",
    philosophy: "Designing scalable APIs and microservices with clean separation of concerns.",
    skills: ["Node.js", "Express", "REST APIs", "WebSockets", "JWT Auth", "Docker"],
    accent: "purple",
  },
  {
    name: "AI & Automation",
    philosophy: "Integrating intelligent workflows to automate complex engineering challenges.",
    skills: ["LangChain", "OpenAI", "GenAI", "AI Agents", "Document Processing", "RAG Systems"],
    accent: "cyan",
  },
  {
    name: "Databases & Infrastructure",
    philosophy: "Managing data persistence and cloud infrastructure for production systems.",
    skills: ["MongoDB", "MySQL", "Firebase", "Redis", "MongoDB Atlas", "Cloud Deployment"],
    accent: "blue",
  },
  {
    name: "System Design",
    philosophy: "Architecting multi-tenant, distributed systems with scalability in mind.",
    skills: ["Multi-tenancy", "RBAC", "Microservices", "Caching", "Real-time Systems", "Stripe Integration"],
    accent: "purple",
  },
];
