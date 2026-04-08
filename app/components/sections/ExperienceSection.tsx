"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../../components/SectionHeader";

function ExperienceCard({
  company,
  role,
  period,
  points,
}: {
  company: string;
  role: string;
  period: string;
  points: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{role}</h3>
          <p className="text-base font-semibold text-slate-700" style={{ fontFamily: "'Inter', sans-serif" }}>{company}</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700" style={{ fontFamily: "'Inter', sans-serif" }}>
          {period}
        </span>
      </div>
      <ul className="mt-5 space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex gap-3">
            <div className="mt-1.5 h-2 w-2 rounded-full bg-slate-900"></div>
            <span className="text-slate-700" style={{ fontFamily: "'Inter', sans-serif" }}>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function EducationCard({
  institute,
  degree,
  detail,
}: {
  institute: string;
  degree: string;
  detail: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="mt-6 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
          <span className="text-lg">🎓</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{degree}</h3>
          <p className="text-base font-semibold text-slate-700" style={{ fontFamily: "'Inter', sans-serif" }}>{institute}</p>
        </div>
      </div>
      <p className="mt-4 text-slate-700" style={{ fontFamily: "'Inter', sans-serif" }}>{detail}</p>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="space-y-6 pb-14"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * 3, duration: 0.6, ease: "easeOut" }}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <SectionHeader title="Experience" eyebrow="Where I've worked" />

      <div className="space-y-4">
        <ExperienceCard
          company="Dvika"
          role="Full Stack Developer (MERN & AI)"
          period="Sept 2025 – Present"
          points={[
            "Building features across the stack using Next.js, Node.js and MongoDB.",
            "Integrating AI using LangChain & OpenAI to automate document-heavy workflows.",
            "Improving performance, reliability and developer experience using best practices.",
          ]}
        />

        <EducationCard
          institute="Indira Gandhi Institute of Technology"
          degree="Master of Computer Applications (MCA)"
          detail="Strong foundation in computer science, software engineering and algorithms."
        />
      </div>
    </motion.section>
  );
}