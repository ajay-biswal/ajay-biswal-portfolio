"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiRedis,
  SiSocketdotio,
  SiDocker,
  SiTailwindcss,
  SiPython,
  SiOpenai,
} from "react-icons/si";
import { TbBrandAws, TbBrandWebflow, TbTopologyRing } from "react-icons/tb";
import { IconType } from "react-icons";

interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

const techStack: TechItem[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: TbBrandAws, color: "#FF9900" },
  { name: "System Design", icon: TbTopologyRing, color: "#06B6D4" },
  { name: "WebSockets", icon: TbBrandWebflow, color: "#06B6D4" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "OpenAI", icon: SiOpenai, color: "#10A37F" },
];

function MarqueeRow({ reversed = false }: { reversed?: boolean }) {
  return (
    <motion.div
      className="flex gap-8"
      animate={{
        x: reversed ? ["-50%", "0%"] : ["0%", "-50%"],
      }}
      transition={{
        x: {
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        },
      }}
      style={{ willChange: "transform" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.animationPlayState = "running";
      }}
    >
      {[...techStack, ...techStack].map((tech, index) => (
        <TechItem key={`${tech.name}-${index}`} {...tech} />
      ))}
    </motion.div>
  );
}

function TechItem({ name, icon: Icon, color }: TechItem) {
  return (
    <div
      className="flex items-center gap-2 group cursor-default"
      style={{ color: "rgba(113, 113, 122, 0.6)" }}
    >
      {/* Icon */}
      <motion.div
        className="flex items-center justify-center"
        style={{
          color: "rgba(113, 113, 122, 0.5)",
          filter: "grayscale(1)",
          opacity: 0.5,
        }}
        whileHover={{
          color: color,
          filter: "grayscale(0)",
          opacity: 1,
          scale: 1.08,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Icon size={22} />
      </motion.div>

      {/* Label */}
      <span
        className="text-xs font-medium transition-colors duration-300 whitespace-nowrap"
        style={{
          color: "rgba(113, 113, 122, 0.6)",
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.color = color;
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.color = "rgba(113, 113, 122, 0.6)";
        }}
      >
        {name}
      </span>
    </div>
  );
}

/**
 * Hero Tech Marquee
 * Infinite scrolling tech stack ticker with hover interactions
 */
export function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-4 md:py-5">
      {/* Left fade mask */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgb(var(--background)) 0%, transparent 100%)",
        }}
      />

      {/* Marquee content */}
      <div className="relative z-0">
        <MarqueeRow />
      </div>

      {/* Right fade mask */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, rgb(var(--background)) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
