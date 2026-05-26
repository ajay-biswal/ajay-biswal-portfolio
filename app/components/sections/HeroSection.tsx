"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/lib/animations";
import { SiPython, SiDocker, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiNodedotjs, SiExpress, SiSocketdotio, SiMongodb, SiRedis, SiMysql, SiFirebase, SiOpenai, SiGit, SiGraphql, SiVercel, SiLinux } from "react-icons/si";
import { TbTopologyStar3, TbShieldLock, TbApi, TbBrain, TbBrandFramerMotion } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { Download, ArrowUpRight } from "lucide-react";
import { FiGithub, FiLinkedin, FiMail as FiMailIcon } from "react-icons/fi";
import { siteConfig } from "@/data/site.config";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const techStack = [
    // Frontend
    { name: "React", icon: SiReact, brandColor: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, brandColor: "#FFFFFF" },
    { name: "TypeScript", icon: SiTypescript, brandColor: "#3178C6" },
    { name: "Tailwind", icon: SiTailwindcss, brandColor: "#06B6D4" },
    { name: "Redux", icon: SiRedux, brandColor: "#764ABC" },
    { name: "Framer Motion", icon: TbBrandFramerMotion, brandColor: "#FFFFFF" },
    // Backend
    { name: "Node.js", icon: SiNodedotjs, brandColor: "#339933" },
    { name: "Express", icon: SiExpress, brandColor: "#FFFFFF" },
    { name: "Socket.IO", icon: SiSocketdotio, brandColor: "#010101" },
    { name: "JWT", icon: TbShieldLock, brandColor: "#06B6D4" },
    { name: "REST API", icon: TbApi, brandColor: "#FFFFFF" },
    { name: "GraphQL", icon: SiGraphql, brandColor: "#E10098" },
    // Infrastructure
    { name: "MongoDB", icon: SiMongodb, brandColor: "#47A248" },
    { name: "Redis", icon: SiRedis, brandColor: "#DC382D" },
    { name: "Docker", icon: SiDocker, brandColor: "#2496ED" },
    { name: "Firebase", icon: SiFirebase, brandColor: "#FFCA28" },
    { name: "MySQL", icon: SiMysql, brandColor: "#4479A1" },
    { name: "Vercel", icon: SiVercel, brandColor: "#FFFFFF" },
    // AI & Tooling
    { name: "Python", icon: SiPython, brandColor: "#3776AB" },
    { name: "LangChain", icon: TbBrain, brandColor: "#FFFFFF" },
    { name: "OpenAI", icon: SiOpenai, brandColor: "#10A37F" },
    { name: "Git", icon: SiGit, brandColor: "#F05032" },
    { name: "Linux", icon: SiLinux, brandColor: "#FCC624" },
  ];

  // Duplicate for infinite scroll effect
  const duplicatedTechStack = [...techStack, ...techStack, ...techStack];

  const socials = [
    { icon: FiGithub, href: siteConfig.social.github, label: "GitHub" },
    { icon: FiLinkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { icon: FiMailIcon, href: `mailto:${siteConfig.email}`, label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center mt-0 pt-14 lg:pt-20 overflow-hidden"
    >
      <div className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Top Badge */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center px-3 py-1.5 rounded-md"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <span className="text-xs font-mono" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
              &lt;/&gt; Full Stack Engineer
            </span>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <Image
              src="/ajaybiswal.png"
              alt="Ajay Kumar Biswal"
              width={140}
              height={140}
              className="rounded-full object-cover"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
              }}
              priority
              sizes="140px"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight" style={{ color: "#f8fafc" }}>
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Ajay Kumar Biswal
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
          >
            Full-stack engineer specializing in distributed architectures and realtime infrastructure — building production-grade systems that handle complex engineering challenges at scale.
          </motion.p>

          {/* Tech Stack Icons Row - Infinite Scroll */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="w-full overflow-hidden mt-2"
          >
            <div className="relative">
              {/* Gradient masks for smooth edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(to right, #050816, transparent)" }} />
              <div className="absolute right-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(to left, #050816, transparent)" }} />
              
              {/* Scrolling container */}
              <div 
                className="flex items-center gap-12 animate-marquee"
                style={{
                  width: "max-content",
                }}
              >
                {duplicatedTechStack.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={`${tech.name}-${index}`}
                      className="relative group transition-all duration-200"
                      style={{ 
                        opacity: 0.9,
                        color: tech.brandColor
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = "1";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = "0.9";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <Icon size={32} />
                      {/* Tooltip */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none whitespace-nowrap"
                        style={{
                          backgroundColor: "rgba(15, 23, 42, 0.95)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          fontSize: "11px",
                          color: "rgba(255, 255, 255, 0.8)",
                        }}
                      >
                        {tech.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <style jsx global>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-33.333%);
              }
            }
            .animate-marquee {
              animation: marquee 25s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-5 mt-7"
          >
            {/* Button 1: Download Resume */}
            <a
              href="/resume/AjayBiswal_FullStack_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-[52px] px-7 rounded-[4px] font-medium text-[15px] tracking-[0.01em] transition-all duration-200"
              style={{
                backgroundColor: "rgba(10, 10, 18, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#ffffff",
                backdropFilter: "blur(2px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.backgroundColor = "rgba(10, 10, 18, 0.7)";
              }}
            >
              <Download size={16} strokeWidth={2} />
              Download Resume
            </a>
            
            {/* Button 2: View Projects */}
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 h-[52px] px-7 rounded-[4px] font-medium text-[15px] tracking-[0.01em] transition-all duration-200"
              style={{
                backgroundColor: "rgba(17, 24, 39, 0.8)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                color: "rgba(147, 197, 253, 0.9)",
                backdropFilter: "blur(2px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.3)";
                e.currentTarget.style.backgroundColor = "#162033";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.2)";
                e.currentTarget.style.backgroundColor = "rgba(17, 24, 39, 0.8)";
              }}
            >
              View Projects
              <ArrowUpRight size={16} strokeWidth={2} />
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-6 mt-3"
          >
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label === "Email" ? undefined : "_blank"}
                  rel={social.label === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={social.label}
                  className="transition-opacity duration-200"
                  style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.9)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)";
                  }}
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
