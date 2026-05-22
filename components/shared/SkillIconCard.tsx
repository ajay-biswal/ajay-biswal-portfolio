"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconType } from "react-icons";

interface SkillIconProps {
  name: string;
  icon: IconType;
  tooltip: string;
  level: "expert" | "advanced" | "intermediate";
  delay?: number;
}

/**
 * Premium skill icon card with hover interactions
 * Features: glass morphism, subtle glow, tooltip, spring animations
 */
export function SkillIconCard({ name, icon: Icon, tooltip, level, delay = 0 }: SkillIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  const levelColors = {
    expert: "rgba(6, 182, 212, 0.9)",
    advanced: "rgba(168, 85, 247, 0.9)",
    intermediate: "rgba(59, 130, 246, 0.9)",
  };

  const levelGlow = {
    expert: "rgba(6, 182, 212, 0.15)",
    advanced: "rgba(168, 85, 247, 0.15)",
    intermediate: "rgba(59, 130, 246, 0.15)",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      {/* Main card */}
      <motion.div
        animate={{
          y: isHovered ? -4 : 0,
          scale: isHovered ? 1.04 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
        className="relative w-[90px] h-[90px] flex flex-col items-center justify-center gap-2 rounded-xl bg-surface/[0.02] border border-border/[0.05] backdrop-blur-sm cursor-pointer overflow-hidden"
        style={{
          boxShadow: isHovered ? `0 0 30px ${levelGlow[level]}` : "none",
          borderColor: isHovered ? levelColors[level] : "rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Subtle gradient overlay on hover */}
        <motion.div
          initial={false}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] to-purple-500/[0.05]"
        />

        {/* Icon */}
        <motion.div
          animate={{
            color: isHovered ? levelColors[level] : "rgba(148, 163, 184, 0.8)",
          }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <Icon size={32} />
        </motion.div>

        {/* Skill name */}
        <span
          className="relative z-10 text-[10px] font-medium text-center leading-tight"
          style={{
            color: isHovered ? "rgba(248, 250, 252, 0.95)" : "rgba(148, 163, 184, 0.7)",
          }}
        >
          {name}
        </span>

        {/* Level indicator dot */}
        <motion.div
          className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: levelColors[level] }}
          animate={{
            opacity: isHovered ? 1 : 0.3,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{
              duration: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none"
          >
            <div className="relative px-3 py-2 rounded-lg bg-surface/[0.03] border border-border/[0.08] backdrop-blur-md shadow-xl">
              {/* Tooltip content */}
              <div className="flex flex-col gap-0.5 min-w-[140px]">
                <span className="text-xs font-semibold" style={{ color: levelColors[level] }}>
                  {name}
                </span>
                <span className="text-[10px] leading-tight" style={{ color: "rgba(148, 163, 184, 0.8)" }}>
                  {tooltip}
                </span>
              </div>

              {/* Tooltip arrow */}
              <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-surface/[0.03] border-r border-b border-border/[0.08] rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
