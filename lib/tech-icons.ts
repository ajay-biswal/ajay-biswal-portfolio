import {
  FaReact,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiSocketdotio,
  SiTypescript,
  SiJsonwebtokens,
  SiRedis,
  SiNextdotjs,
  SiExpress,
  SiStripe,
  SiGooglemaps,
} from "react-icons/si";
import { IconType } from "react-icons";

export interface TechIcon {
  icon: IconType;
  name: string;
  color: string;
}

export const techIconMap: Record<string, TechIcon> = {
  "React": {
    icon: FaReact,
    name: "React",
    color: "#61DAFB",
  },
  "Node.js": {
    icon: FaNodeJs,
    name: "Node.js",
    color: "#339933",
  },
  "MongoDB": {
    icon: SiMongodb,
    name: "MongoDB",
    color: "#47A248",
  },
  "Tailwind": {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    color: "#06B6D4",
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    color: "#06B6D4",
  },
  "Next.js": {
    icon: SiNextdotjs,
    name: "Next.js",
    color: "#FFFFFF",
  },
  "Socket.IO": {
    icon: SiSocketdotio,
    name: "Socket.IO",
    color: "#010101",
  },
  "TypeScript": {
    icon: SiTypescript,
    name: "TypeScript",
    color: "#3178C6",
  },
  "JWT": {
    icon: SiJsonwebtokens,
    name: "JSON Web Tokens",
    color: "#000000",
  },
  "Redis": {
    icon: SiRedis,
    name: "Redis",
    color: "#DC382D",
  },
  "Express": {
    icon: SiExpress,
    name: "Express",
    color: "#000000",
  },
  "Stripe": {
    icon: SiStripe,
    name: "Stripe",
    color: "#635BFF",
  },
  "Google Maps API": {
    icon: SiGooglemaps,
    name: "Google Maps",
    color: "#4285F4",
  },
  "Docker": {
    icon: FaDocker,
    name: "Docker",
    color: "#2496ED",
  },
  "WebSockets": {
    icon: SiSocketdotio,
    name: "WebSockets",
    color: "#010101",
  },
  "TMDB API": {
    icon: SiMongodb,
    name: "TMDB API",
    color: "#01D277",
  },
  "MERN Stack": {
    icon: FaReact,
    name: "MERN Stack",
    color: "#61DAFB",
  },
  "MERN": {
    icon: FaReact,
    name: "MERN",
    color: "#61DAFB",
  },
  "MongoDB Atlas": {
    icon: SiMongodb,
    name: "MongoDB Atlas",
    color: "#47A248",
  },
  "Atlas": {
    icon: SiMongodb,
    name: "MongoDB Atlas",
    color: "#47A248",
  },
};

export const getTechIcon = (techName: string): TechIcon => {
  return techIconMap[techName] || {
    icon: FaNodeJs,
    name: techName,
    color: "#94A3B8",
  };
};
