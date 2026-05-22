"use client";

import { motion } from "framer-motion";

/**
 * Engineering stack strip - compact tech modules
 */
export function EngineeringStackStrip() {
  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Python"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.8 }}
    >
      <div>
        <div
          className="text-xs font-semibold uppercase tracking-wider mb-3"
          style={{ color: "#64748b" }}
        >
          Tech I work with
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
              className="px-3 py-1.5 rounded-md text-xs font-medium"
              style={{
                backgroundColor: "rgba(var(--card), 0.6)",
                color: "#94a3b8",
                border: "1px solid rgba(148, 163, 184, 0.1)",
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
