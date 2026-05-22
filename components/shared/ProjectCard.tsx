"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";
import { Github, ExternalLink } from "lucide-react";
import { cardTilt, fadeIn, cinematicEase } from "@/lib/animations";

interface ProjectCardProps {
  name: string;
  category: string;
  summary: string;
  architecture: string[];
  tech: string[];
  outcomes: string[];
  github?: string;
  live?: string;
  preview: "dashboard" | "terminal" | "metrics";
  index: number;
}

/**
 * Premium project showcase card
 * PHASE 3B: 3D tilt hover, cinematic scroll reveal
 * Engineering case study with architecture highlights
 */
export function ProjectCard({
  name,
  category,
  summary,
  architecture,
  tech,
  outcomes,
  github,
  live,
  preview,
  index,
}: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: cinematicEase, delay: index * 0.1 }}
      whileHover={{
        rotateX: 1.5,
        rotateY: -1.5,
        scale: 1.01,
        transition: { duration: 0.3, ease: cinematicEase },
      }}
    >
      <SpotlightCard glowColor={isEven ? "blue" : "purple"}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Content side */}
          <div className={`lg:col-span-7 p-6 md:p-8 ${!isEven ? "lg:order-2" : ""}`}>
            {/* Category badge */}
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                color: "rgba(59, 130, 246, 0.9)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
              }}
            >
              {category}
            </span>

            {/* Project name */}
            <h3
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: "#f8fafc" }}
            >
              {name}
            </h3>

            {/* Summary */}
            <p
              className="text-sm md:text-base leading-relaxed mb-6"
              style={{ color: "#94a3b8" }}
            >
              {summary}
            </p>

            {/* Architecture highlights */}
            <div className="mb-6">
              <h4
                className="text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ color: "#64748b" }}
              >
                Architecture
              </h4>
              <div className="space-y-2">
                {architecture.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div
                      className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "rgba(6, 182, 212, 0.8)" }}
                    />
                    <span className="text-sm" style={{ color: "#cbd5e1" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className="mb-6">
              <h4
                className="text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ color: "#64748b" }}
              >
                Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-medium"
                    style={{
                      backgroundColor: "rgba(148, 163, 184, 0.08)",
                      color: "#94a3b8",
                      border: "1px solid rgba(148, 163, 184, 0.1)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="mb-6">
              <h4
                className="text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ color: "#64748b" }}
              >
                Impact
              </h4>
              <ul className="space-y-2">
                {outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="text-sm flex items-start gap-2"
                    style={{ color: "#cbd5e1" }}
                  >
                    <span style={{ color: "rgba(6, 182, 212, 0.8)" }}>→</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex gap-3">
              {github && github !== "#" && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    backgroundColor: "rgba(var(--card), 0.8)",
                    color: "#f8fafc",
                    border: "1px solid rgba(148, 163, 184, 0.15)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.15)";
                  }}
                >
                  <Github size={16} />
                  Code
                </a>
              )}
              {live && live !== "#" && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-foreground transition-all duration-200"
                  style={{
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(168, 85, 247, 0.85))",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(59, 130, 246, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Preview side */}
          <div className={`lg:col-span-5 ${!isEven ? "lg:order-1" : ""}`}>
            <ProjectPreview type={preview} />
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

/**
 * Visual preview component for projects
 */
function ProjectPreview({ type }: { type: "dashboard" | "terminal" | "metrics" }) {
  if (type === "dashboard") {
    return (
      <div
        className="h-full min-h-[320px] p-6 flex flex-col justify-center"
        style={{
          backgroundColor: "rgba(6, 8, 22, 0.8)",
          borderLeft: "1px solid rgba(148, 163, 184, 0.08)",
        }}
      >
        {/* Mock dashboard UI */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "#ff5f56" }} />
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "#27c93f" }} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="h-16 rounded-lg" style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }} />
            <div className="h-16 rounded-lg" style={{ backgroundColor: "rgba(168, 85, 247, 0.1)" }} />
          </div>
          <div className="h-24 rounded-lg" style={{ backgroundColor: "rgba(6, 182, 212, 0.08)" }} />
          <div className="grid grid-cols-3 gap-2">
            <div className="h-12 rounded" style={{ backgroundColor: "rgba(148, 163, 184, 0.05)" }} />
            <div className="h-12 rounded" style={{ backgroundColor: "rgba(148, 163, 184, 0.05)" }} />
            <div className="h-12 rounded" style={{ backgroundColor: "rgba(148, 163, 184, 0.05)" }} />
          </div>
        </div>
      </div>
    );
  }

  if (type === "terminal") {
    return (
      <div
        className="h-full min-h-[320px] p-6 font-mono text-sm"
        style={{
          backgroundColor: "rgba(6, 8, 22, 0.8)",
          borderLeft: "1px solid rgba(148, 163, 184, 0.08)",
        }}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span style={{ color: "rgba(6, 182, 212, 0.8)" }}>❯</span>
            <span style={{ color: "rgba(148, 163, 184, 0.6)" }}>deploy --production</span>
          </div>
          <div style={{ color: "rgba(6, 182, 212, 0.6)" }}>✓ Build complete</div>
          <div style={{ color: "rgba(6, 182, 212, 0.6)" }}>✓ Tests passed (47/47)</div>
          <div style={{ color: "rgba(6, 182, 212, 0.6)" }}>✓ Deployed to edge</div>
          <div className="pt-2" style={{ color: "rgba(148, 163, 184, 0.5)" }}>
            → https://app.example.com
          </div>
        </div>
      </div>
    );
  }

  // Metrics preview
  return (
    <div
      className="h-full min-h-[320px] p-6 flex flex-col justify-center"
      style={{
        backgroundColor: "rgba(6, 8, 22, 0.8)",
        borderLeft: "1px solid rgba(148, 163, 184, 0.08)",
      }}
    >
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-4xl font-bold" style={{ color: "rgba(6, 182, 212, 0.9)" }}>
            &lt;200ms
          </div>
          <div className="text-xs mt-1" style={{ color: "#64748b" }}>
            Response Time
          </div>
        </div>
        <div className="h-px" style={{ backgroundColor: "rgba(148, 163, 184, 0.1)" }} />
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold" style={{ color: "rgba(59, 130, 246, 0.9)" }}>
              99.9%
            </div>
            <div className="text-xs mt-1" style={{ color: "#64748b" }}>
              Uptime
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold" style={{ color: "rgba(168, 85, 247, 0.9)" }}>
              10K+
            </div>
            <div className="text-xs mt-1" style={{ color: "#64748b" }}>
              Users
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
