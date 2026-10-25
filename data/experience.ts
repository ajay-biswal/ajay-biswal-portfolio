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
    company: "Marax Technologies pvt ltd",
    role: "Full Stack Developer",
    period: "July 2024 – Present",
    summary: "Worked on full-stack applications involving backend APIs, real-time communication systems, frontend interfaces, and deployment workflows using Node.js, React.js, Redux Toolkit, Next.js, Redis, and MongoDB.",
    achievements: [
      "Built tenant-based access control and RBAC workflows for multi-tenant applications",
      "Developed responsive frontend interfaces using React.js and Next.js and integrated them with backend APIs",
      "Implemented real-time communication features using Socket.IO and Redis Pub/Sub",
      "Improved API performance through query optimization and Redis caching",
    ],
    technologies: ["Typescript","Next.js", "React.js", "Redux", "Node.js","Express.js", "MongoDB", "Postgresql", "Redis", "RabbitMQ", "Docker", "Linux"],
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
