"use client";

import { motion } from "framer-motion";
import { MinimalSkillIcon } from "@/components/shared/MinimalSkillIcon";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-16 md:py-20 scroll-mb-32">
      {/* Background atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, rgba(168, 85, 247, 0.02) 40%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Section header - tighter spacing */}
        <div className="text-center mb-10 md:mb-12 space-y-3">
          {/* Tiny label */}
          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-2.5 py-1 rounded-full border border-border/30 backdrop-blur-sm"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
          >
            
          </motion.div> */}

          {/* Large title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: "rgb(var(--foreground))" }}
          >
            Skills
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm md:text-base max-w-lg mx-auto"
            style={{ color: "rgb(var(--muted))" }}
          >
            The technologies I build with.
          </motion.p>
        </div>

        {/* Floating icon matrix - optimized density */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-x-8 gap-y-6 md:gap-x-10 md:gap-y-8 mb-8">
          {skills.map((skill, index) => (
            <MinimalSkillIcon
              key={skill.name}
              {...skill}
              delay={index * 0.03}
            />
          ))}
        </div>

        {/* Bottom status pill - closer to grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-6 md:mt-8"
        >
          <div
            className="px-3.5 py-1.5 rounded-full border backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              borderColor: "rgba(255, 255, 255, 0.06)",
            }}
          >
            <span
              className="text-[11px] font-mono"
              style={{ color: "rgb(var(--muted))" }}
            >
              &lt;&gt; {skills.length}+ technologies in daily workflow
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
