"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Zap, Database, Users, MessageSquare, MapPin, CreditCard } from "lucide-react";
import { GlowButton } from "@/components/shared/GlowButton";
import { fadeIn, cardStagger, cinematicEase } from "@/lib/animations";
import { projects } from "@/data/projects";
import { BanterSystemShowcase } from "./BanterSystemShowcase";

/**
 * ProjectsSection - Engineering Case Studies
 * PHASE 4B: Banter featured + compact project cards
 */

/**
 * Compact Project Card (for WonderFest, Uber)
 */
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const iconMap = [
    Zap, Database, Users, MessageSquare, MapPin, CreditCard
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: cinematicEase, delay: index * 0.1 }}
      className="p-8 rounded-2xl"
      style={{
        backgroundColor: "rgba(11, 17, 32, 0.5)",
        border: "1px solid rgba(148, 163, 184, 0.08)",
        backdropFilter: "blur(12px)",
      }}
      whileHover={{
        y: -4,
        borderColor: "rgba(168, 85, 247, 0.3)",
        boxShadow: "0 0 30px rgba(168, 85, 247, 0.1)",
        transition: { duration: 0.3, ease: cinematicEase },
      }}
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-3xl font-bold mb-3" style={{ color: "#f8fafc" }}>
          {project.name}
        </h3>
        <h4 className="text-lg font-semibold mb-3" style={{ color: "#94a3b8" }}>
          {project.category}
        </h4>
        <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
          {project.subtitle}
        </p>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {project.challenges.map((challenge, i) => {
          const Icon = iconMap[i % iconMap.length];
          return (
            <div key={challenge.title} className="flex items-start gap-3">
              <div className="p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: "rgba(168, 85, 247, 0.1)" }}>
                <Icon size={16} style={{ color: "rgba(168, 85, 247, 0.9)" }} />
              </div>
              <div>
                <h5 className="text-sm font-semibold mb-1" style={{ color: "#f8fafc" }}>{challenge.title}</h5>
                <p className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>{challenge.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 mb-6 pb-6" style={{ borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>
        {project.metrics.map((metric) => (
          <div key={metric.label} className="text-center">
            <div className="text-2xl font-bold mb-1" style={{ color: "#f8fafc" }}>{metric.value}</div>
            <div className="text-xs" style={{ color: "#94a3b8" }}>{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.slice(0, 6).map((tech) => (
          <span key={tech} className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ backgroundColor: "rgba(168, 85, 247, 0.08)", color: "rgba(168, 85, 247, 0.9)", border: "1px solid rgba(168, 85, 247, 0.15)" }}>
            {tech}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3">
        <GlowButton variant="secondary" size="sm">
          <Github size={14} className="mr-2" /> GitHub
        </GlowButton>
        <GlowButton variant="secondary" size="sm">
          <ExternalLink size={14} className="mr-2" /> Live Demo
        </GlowButton>
      </div>
    </motion.div>
  );
}

/**
 * Main Projects Section
 */
export function ProjectsSection() {
  const banter = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section id="projects" className="relative py-24">
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%)", filter: "blur(100px)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(168, 85, 247, 0.04) 0%, transparent 65%)", filter: "blur(90px)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: cinematicEase }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(11, 17, 32, 0.6)", border: "1px solid rgba(148, 163, 184, 0.1)" }}>
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "rgba(148, 163, 184, 0.9)" }}>ENGINEERING PORTFOLIO</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: "#f8fafc" }}>Engineering Case Studies</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748b" }}>Deep dives into architecture decisions, system design, and engineering tradeoffs.</p>
        </motion.div>

        {/* Featured Banter Section (ONLY ONCE) */}
        <BanterSystemShowcase />

        {/* Divider */}
        <div className="h-px mb-12" style={{ background: "linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.2), transparent)" }} />

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
