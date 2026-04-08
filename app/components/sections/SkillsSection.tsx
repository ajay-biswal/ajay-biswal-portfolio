"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "../../components/SectionHeader";

interface Skill {
  name: string;
  image: string;
  alt: string;
}

const skills: Skill[] = [
  { name: "React", image: "/react.png", alt: "React logo" },
  { name: "Next.js", image: "/next.png", alt: "Next.js logo" },
  { name: "TypeScript", image: "/typescript.png", alt: "TypeScript logo" },
  { name: "Node.js", image: "/node.png", alt: "Node.js logo" },
  { name: "MongoDB", image: "/download (13).png", alt: "MongoDB logo" },
  { name: "Docker", image: "/docker.png", alt: "Docker logo" },
  { name: "VS Code", image: "/download (18).png", alt: "VS Code logo" },
  { name: "Git", image: "/download (13).png", alt: "Git logo" },
  { name: "GitHub", image: "/download (15).png", alt: "GitHub logo" },
  { name: "NPM", image: "/npm.png", alt: "NPM logo" },
  { name: "Express", image: "/express.png", alt: "Express logo" },
  { name: "MySQL", image: "/download (8).png", alt: "MySQL logo" },
  { name: "Firebase", image: "/firebase.png", alt: "Firebase logo" },
  { name: "Tailwind CSS", image: "/tailwind.png", alt: "Tailwind CSS logo" },
  { name: "Redux", image: "/download.png", alt: "Redux logo" },
  { name: "Postman", image: "/postman.png", alt: "Postman logo" },
];

const SkillIcon = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
        borderColor: "#333333",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="group relative flex items-center justify-center"
    >
      <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden  transition-all duration-300 ease-out ">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Image 
          src={skill.image} 
          alt={skill.alt} 
          width={50} 
          height={50} 
          className="z-10 object-contain transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.parentElement?.querySelector('.fallback-icon');
            if (fallback) fallback.setAttribute('style', 'display: block !important');
          }}
        />
        <div className="fallback-icon hidden absolute flex items-center justify-center text-gray-400 text-lg">
          ⚙️
        </div>
      </div>
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-slate-800 text-white text-xs font-medium px-2 py-1 rounded whitespace-nowrap">
          {skill.name}
        </div>
      </div>
    </motion.div>
  );
};

export function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="relative space-y-6 overflow-hidden pb-14"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * 1, duration: 0.6, ease: "easeOut" }}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* <SectionHeader title="Skills & Stack" eyebrow="What I work with" /> */}

      <div className="py-8">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
              }}
            >
              <SkillIcon skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}