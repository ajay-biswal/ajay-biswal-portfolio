"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ExperienceTimelineItem } from "@/components/shared/ExperienceTimelineItem";
import { experiences, education } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative scroll-mb-32">
      <div className="mb-10 md:mb-12">
        <SectionHeader
          title="Engineering Journey"
          eyebrow="Experience & Education"
        />
        <p
          className="mt-3 text-center text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: "#94a3b8" }}
        >
          Building scalable systems and continuously advancing technical expertise.
        </p>
      </div>

      {/* Timeline with glowing beam */}
      <div className="relative">
        {/* Vertical timeline beam */}
        <div
          className="absolute left-2 top-0 bottom-0 w-px md:left-6"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.4) 10%, rgba(6, 182, 212, 0.4) 90%, transparent)",
          }}
        />

        {/* Experience items */}
        <div className="space-y-6 md:space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceTimelineItem
              key={exp.company}
              {...exp}
              index={index}
            />
          ))}

          {/* Education */}
          {education.map((edu, index) => (
            <motion.div
              key={edu.institute}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: (experiences.length + index) * 0.15,
              }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline node */}
              <div
                className="absolute left-0 top-2 h-4 w-4 rounded-full md:left-1 md:top-3 md:h-5 md:w-5"
                style={{
                  backgroundColor: "rgba(168, 85, 247, 0.9)",
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)",
                }}
              />

              {/* Education card */}
              <div
                className="rounded-2xl p-6 md:p-8"
                style={{
                  backgroundColor: "rgba(11, 17, 32, 0.6)",
                  border: "1px solid rgba(148, 163, 184, 0.1)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                    style={{
                      backgroundColor: "rgba(168, 85, 247, 0.1)",
                      border: "1px solid rgba(168, 85, 247, 0.2)",
                    }}
                  >
                    🎓
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                      <div>
                        <h3
                          className="text-xl md:text-2xl font-bold mb-1"
                          style={{ color: "#f8fafc" }}
                        >
                          {edu.degree}
                        </h3>
                        <p
                          className="text-base md:text-lg"
                          style={{ color: "rgba(168, 85, 247, 0.9)" }}
                        >
                          {edu.institute}
                        </p>
                      </div>
                      {/* <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          backgroundColor: "rgba(148, 163, 184, 0.08)",
                          color: "#94a3b8",
                          border: "1px solid rgba(148, 163, 184, 0.1)",
                        }}
                      >
                        {edu.period}
                      </span> */}
                    </div>
                    <p
                      className="text-sm md:text-base mt-3"
                      style={{ color: "#94a3b8" }}
                    >
                      {edu.detail}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
