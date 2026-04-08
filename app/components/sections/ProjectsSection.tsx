"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../../components/SectionHeader";

interface ProjectCardProps {
  name: string;
  role: string;
  description: string;
  tech: string[];
  highlight: string;
  github?: string;
  live?: string;
}

function ProjectCard({
  name,
  role,
  description,
  tech,
  highlight,
  github,
  live,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{name}</h3>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700" style={{ fontFamily: "'Inter', sans-serif" }}>
            {role}
          </span>
        </div>
        <p className="text-sm text-slate-600" style={{ fontFamily: "'Inter', sans-serif" }}>{description}</p>
        <p className="text-sm">
          <span className="font-semibold text-slate-900" style={{ fontFamily: "'Inter', sans-serif" }}>Focus:</span> <span className="text-slate-700" style={{ fontFamily: "'Inter', sans-serif" }}>{highlight}</span>
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-slate-50"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          {github && github !== "#" && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-slate-900 transition hover:text-slate-700"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              GitHub →
            </a>
          )}
          {live && live !== "#" && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-slate-900 transition hover:text-slate-700"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="space-y-6 pb-14"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * 2, duration: 0.6, ease: "easeOut" }}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <SectionHeader title="Projects" eyebrow="Selected work" />

      <div className="grid gap-5 md:grid-cols-2">
        <ProjectCard
          name="Dvika – LawTech SaaS Platform"
          role="Full Stack · MERN & AI"
          description="Multi-tenant lawtech platform with secure auth, subscription billing and AI-powered document summarization using LangChain and OpenAI."
          tech={["Next.js", "Node.js", "MongoDB", "LangChain", "Stripe"]}
          highlight="AI workflows, billing, role-based access."
          github="#"
          live="#"
        />
        <ProjectCard
          name="Voltrax – Multi-Tenant eCRM"
          role="Full Stack · Multi-tenant"
          description="Customer relationship management system with tenant-based routing, dashboards and AI insights for lead prioritization."
          tech={["React", "Node.js", "MongoDB", "JWT"]}
          highlight="Tenant isolation, dashboards, API design."
          github="#"
          live="#"
        />
        <ProjectCard
          name="WonderFest – Wedding Planner"
          role="Full Stack · MERN"
          description="End-to-end wedding planning platform with vendor discovery, budgeting, and user authentication."
          tech={["MERN", "JWT", "MongoDB Atlas"]}
          highlight="Real world app with clean UX and auth."
          github="#"
          live="#"
        />
        <ProjectCard
          name="Uber Clone · Real-Time Rides"
          role="Full Stack · Realtime"
          description="Ride booking app inspired by Uber with real-time ride status, maps and payments."
          tech={["React", "Node.js", "MongoDB", "WebSockets", "Stripe"]}
          highlight="Realtime communication and payment integration."
          github="#"
          live="#"
        />
      </div>
    </motion.section>
  );
}