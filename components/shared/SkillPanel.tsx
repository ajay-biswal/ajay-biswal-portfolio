"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";

interface SkillPanelProps {
  name: string;
  philosophy: string;
  skills: string[];
  accent: "blue" | "purple" | "cyan";
  delay?: number;
}

/**
 * Premium skill capability panel
 * Engineering-focused category display with spotlight interaction
 */
export function SkillPanel({
  name,
  philosophy,
  skills,
  accent,
  delay = 0,
}: SkillPanelProps) {
  const accentColors = {
    blue: {
      border: "rgba(59, 130, 246, 0.3)",
      text: "rgba(59, 130, 246, 0.9)",
      bg: "rgba(59, 130, 246, 0.1)",
    },
    purple: {
      border: "rgba(168, 85, 247, 0.3)",
      text: "rgba(168, 85, 247, 0.9)",
      bg: "rgba(168, 85, 247, 0.1)",
    },
    cyan: {
      border: "rgba(6, 182, 212, 0.3)",
      text: "rgba(6, 182, 212, 0.9)",
      bg: "rgba(6, 182, 212, 0.1)",
    },
  };

  const colors = accentColors[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      <SpotlightCard glowColor={accent}>
        <div className="p-6 md:p-8">
          {/* Category header */}
          <div className="mb-4">
            <h3
              className="text-xl md:text-2xl font-bold mb-2"
              style={{ color: "#f8fafc" }}
            >
              {name}
            </h3>
            <div
              className="h-px w-16 mb-4"
              style={{ backgroundColor: colors.border }}
            />
            <p className="text-sm md:text-base" style={{ color: "#94a3b8" }}>
              {philosophy}
            </p>
          </div>

          {/* Skills grid */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay + index * 0.05, duration: 0.3 }}
                className="px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: colors.bg,
                  color: colors.text,
                  border: `1px solid ${colors.border}`,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
