"use client";

import { motion } from "framer-motion";

interface ExperienceTimelineProps {
  company: string;
  role: string;
  period: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  index: number;
}

/**
 * Cinematic experience timeline item
 * Premium engineering journey aesthetic
 */
export function ExperienceTimelineItem({
  company,
  role,
  period,
  summary,
  achievements,
  technologies,
  index,
}: ExperienceTimelineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.15 }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline node */}
      <div
        className="absolute left-0 top-2 h-4 w-4 rounded-full md:left-1 md:top-3 md:h-5 md:w-5"
        style={{
          backgroundColor: "rgba(6, 182, 212, 0.9)",
          boxShadow: "0 0 20px rgba(6, 182, 212, 0.6)",
        }}
      />

      {/* Content card */}
      <div
        className="rounded-2xl p-6 md:p-8"
        style={{
          backgroundColor: "rgba(var(--surface), 0.6)",
          border: "1px solid rgba(148, 163, 184, 0.1)",
          backdropFilter: "blur(16px)",
        }}
      >
        {/* Header */}
        <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
          <div>
            <h3
              className="text-xl md:text-2xl font-bold mb-1"
              style={{ color: "#f8fafc" }}
            >
              {role}
            </h3>
            <p className="text-base md:text-lg" style={{ color: "rgba(59, 130, 246, 0.9)" }}>
              {company}
            </p>
          </div>
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: "rgba(148, 163, 184, 0.08)",
              color: "#94a3b8",
              border: "1px solid rgba(148, 163, 184, 0.1)",
            }}
          >
            {period}
          </span>
        </div>

        {/* Summary */}
        <p
          className="text-sm md:text-base mb-6 leading-relaxed"
          style={{ color: "#94a3b8" }}
        >
          {summary}
        </p>

        {/* Achievements */}
        <div className="mb-6">
          <h4
            className="text-xs font-semibold uppercase tracking-wider mb-3"
            style={{ color: "#64748b" }}
          >
            Key Achievements
          </h4>
          <ul className="space-y-3">
            {achievements.map((achievement) => (
              <li
                key={achievement}
                className="text-sm md:text-base flex items-start gap-3"
                style={{ color: "#cbd5e1" }}
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "rgba(6, 182, 212, 0.8)" }}
                />
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4
            className="text-xs font-semibold uppercase tracking-wider mb-3"
            style={{ color: "#64748b" }}
          >
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-medium"
                style={{
                  backgroundColor: "rgba(6, 182, 212, 0.1)",
                  color: "rgba(6, 182, 212, 0.9)",
                  border: "1px solid rgba(6, 182, 212, 0.2)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
