"use client";

import { motion } from "framer-motion";
import { cinematicEase } from "@/lib/animations";
import { BanterSystemShowcase } from "./BanterSystemShowcase";

/**
 * ProjectsSection - Engineering Case Studies
 * Focused on Banter distributed systems deep dive
 */

/**
 * Main Projects Section
 */
export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-16 lg:py-24 scroll-mb-32">
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
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "rgba(var(--surface), 0.6)", border: "1px solid rgba(var(--border), 0.5)" }}>
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "rgba(148, 163, 184, 0.9)" }}>ENGINEERING PORTFOLIO</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-3" style={{ color: "rgb(var(--foreground))" }}>Engineering Case Studies</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgb(var(--muted))" }}>Deep dives into architecture decisions, system design, and engineering tradeoffs.</p>
        </motion.div>

        {/* Featured Banter Section */}
        <BanterSystemShowcase />
      </div>
    </section>
  );
}
