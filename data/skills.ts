import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiMysql,
  SiFirebase,
  SiPython,
  SiOpenai,
  SiGit,
  SiGraphql,
  SiVercel,
  SiLinux,
} from "react-icons/si";
import {
  TbShieldLock,
  TbApi,
  TbBrain,
  TbBrandFramerMotion,
} from "react-icons/tb";

export interface Skill {
  name: string;
  icon: IconType;
  brandColor: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: SiReact, brandColor: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, brandColor: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, brandColor: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, brandColor: "#06B6D4" },
  { name: "Redux", icon: SiRedux, brandColor: "#764ABC" },
  { name: "Framer Motion", icon: TbBrandFramerMotion, brandColor: "#FFFFFF" },
  
  // Backend
  { name: "Node.js", icon: SiNodedotjs, brandColor: "#339933" },
  { name: "Express", icon: SiExpress, brandColor: "#FFFFFF" },
  { name: "Socket.IO", icon: SiSocketdotio, brandColor: "#010101" },
  { name: "JWT", icon: TbShieldLock, brandColor: "#06B6D4" },
  { name: "REST API", icon: TbApi, brandColor: "#FFFFFF" },
  { name: "GraphQL", icon: SiGraphql, brandColor: "#E10098" },
  
  // Infrastructure
  { name: "MongoDB", icon: SiMongodb, brandColor: "#47A248" },
  { name: "Redis", icon: SiRedis, brandColor: "#DC382D" },
  { name: "Docker", icon: SiDocker, brandColor: "#2496ED" },
  { name: "Firebase", icon: SiFirebase, brandColor: "#FFCA28" },
  { name: "MySQL", icon: SiMysql, brandColor: "#4479A1" },
  { name: "Vercel", icon: SiVercel, brandColor: "#FFFFFF" },
  
  // AI & Tooling
  { name: "Python", icon: SiPython, brandColor: "#3776AB" },
  { name: "LangChain", icon: TbBrain, brandColor: "#FFFFFF" },
  { name: "OpenAI", icon: SiOpenai, brandColor: "#10A37F" },
  { name: "Git", icon: SiGit, brandColor: "#F05032" },
  { name: "Linux", icon: SiLinux, brandColor: "#FCC624" },
];
