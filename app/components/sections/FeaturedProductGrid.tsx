"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { cinematicEase } from "@/lib/animations";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Banter",
    subtitle: "Real-Time Chat Application",
    description: "A realtime chat app with auth, rooms, typing indicators, media sharing, and end-to-end experience.",
    tech: ["Next.js", "Node.js", "Socket.IO"],
    image: "/projects/banter-cover.png",
    github: "https://github.com/ajay-biswal",
    live: "#",
  },
  {
    title: "WonderFest",
    subtitle: "Wedding Planner Platform",
    description: "End-to-end wedding planner platform with vendor discovery, budgeting, and user authentication.",
    tech: ["MERN", "JWT", "Atlas"],
    image: "/projects/wonderfest-cover.png",
    github: "https://github.com/ajayofficial22",
    live: "#",
  },
  {
    title: "Realtime Mobility Platform",
    subtitle: "Real-Time Ride Booking",
    description: "Ride booking app with maps, realtime tracking, payments, and wallet system.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/projects/mobility-platform-cover.jpg",
    github: "https://github.com/ajayofficial22",
    live: "#",
  },
  {
    title: "EMI Calculator",
    subtitle: "Financial Calculation Interface",
    description: "Interactive EMI and loan calculation system with responsive UI and realtime updates.",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "/projects/emi-calculator-cover.png",
    github: "https://github.com/ajayofficial22",
    live: "#",
  },
  {
    title: "Movieplex",
    subtitle: "Streaming Discovery Platform",
    description: "Movie browsing platform powered by TMDB APIs with filtering and cinematic UI.",
    tech: ["React", "TMDB API", "Tailwind"],
    image: "/projects/movieplex-cover.png",
    github: "https://github.com/ajayofficial22",
    live: "#",
  },
];

export function FeaturedProductGrid() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="featured" className="relative pt-12 pb-20">
      {/* Ultra-subtle atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(120, 130, 160, 0.04) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: cinematicEase }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4"
        >
          <div>

            <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "rgb(var(--foreground))" }}>
              Some things I've built
            </h2>
            <p className="text-base max-w-xl" style={{ color: "rgb(var(--muted))" }}>
              A collection of realtime systems, scalable platforms, and production-focused applications.
            </p>
          </div>

          {/* CTA */}
          <motion.button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer"
            style={{
              backgroundColor: "rgba(11, 17, 32, 0.6)",
              border: "1px solid rgba(148, 163, 184, 0.15)",
              color: "rgba(148, 163, 184, 0.8)",
            }}
            whileHover={{ y: -2, borderColor: "rgba(6, 182, 212, 0.3)", color: "rgba(6, 182, 212, 0.9)" }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <ArrowRight size={14} />
          </motion.button>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: cinematicEase, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "rgba(7, 11, 26, 0.8)",
        border: "1px solid rgba(6, 182, 212, 0.1)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Image container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} - ${project.subtitle}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, transparent 30%, transparent 70%, rgba(0, 0, 0, 0.6) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 space-y-3">
        {/* Title & subtitle */}
        <div>
          <h3 className="text-lg font-semibold mb-1" style={{ color: "rgb(var(--foreground))" }}>
            {project.title}
          </h3>
          <p className="text-sm" style={{ color: "rgba(6, 182, 212, 0.8)" }}>
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(148, 163, 184, 0.7)" }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "rgba(6, 182, 212, 0.05)",
                border: "1px solid rgba(6, 182, 212, 0.1)",
                color: "rgba(6, 182, 212, 0.8)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
              style={{
                backgroundColor: "rgba(148, 163, 184, 0.05)",
                border: "1px solid rgba(148, 163, 184, 0.1)",
                color: "rgba(148, 163, 184, 0.7)",
              }}
              aria-label={`View ${project.title} on GitHub`}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.3)";
                e.currentTarget.style.color = "rgba(6, 182, 212, 0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.1)";
                e.currentTarget.style.color = "rgba(148, 163, 184, 0.7)";
              }}
            >
              <Github size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
              style={{
                backgroundColor: "rgba(148, 163, 184, 0.05)",
                border: "1px solid rgba(148, 163, 184, 0.1)",
                color: "rgba(148, 163, 184, 0.7)",
              }}
              aria-label={`View ${project.title} live demo`}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.3)";
                e.currentTarget.style.color = "rgba(6, 182, 212, 0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.1)";
                e.currentTarget.style.color = "rgba(148, 163, 184, 0.7)";
              }}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
