"use client";

import { motion } from "framer-motion";
import { FloatingBadge } from "./FloatingBadge";

interface TechStackPillsProps {
  technologies: string[];
  delay?: number;
}

/**
 * Floating tech stack badges with stagger animation
 */
export function TechStackPills({ technologies, delay = 0.8 }: TechStackPillsProps) {
  const colorMap: Record<string, "blue" | "purple" | "cyan" | "pink"> = {
    "Next.js": "blue",
    "TypeScript": "purple",
    "Node.js": "cyan",
    "MongoDB": "pink",
    "GenAI": "purple",
    "Redis": "cyan",
    "LangChain": "blue",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-wrap gap-2"
    >
      {technologies.map((tech, index) => {
        const color = colorMap[tech] || "blue";
        return (
          <motion.div
            key={tech}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: delay + index * 0.08,
              duration: 0.4,
              ease: "easeOut",
            }}
            whileHover={{ y: -2 }}
          >
            <FloatingBadge color={color}>{tech}</FloatingBadge>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
