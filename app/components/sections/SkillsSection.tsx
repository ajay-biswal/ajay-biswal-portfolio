"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SkillPanel } from "@/components/shared/SkillPanel";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="relative">
      <div className="mb-10 md:mb-12">
        <SectionHeader
          title="Engineering Capabilities"
          eyebrow="Technical Expertise"
        />
        <p
          className="mt-3 text-center text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: "#94a3b8" }}
        >
          A comprehensive toolkit for building scalable, intelligent systems
          from frontend interfaces to backend architecture.
        </p>
      </div>

      {/* Capability panels grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {skillCategories.map((category, index) => (
          <SkillPanel
            key={category.name}
            {...category}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
