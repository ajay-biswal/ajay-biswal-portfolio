"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/lib/animations";
import { SiPython, SiDocker, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiNodedotjs, SiExpress, SiSocketdotio, SiMongodb, SiRedis, SiMysql, SiFirebase, SiOpenai, SiGit, SiGraphql, SiVercel, SiLinux } from "react-icons/si";
import { TbTopologyStar3, TbShieldLock, TbApi, TbBrain, TbBrandFramerMotion } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { Download, ArrowUpRight, FileText, BriefcaseBusiness } from "lucide-react";
import { FiGithub, FiLinkedin, FiMail as FiMailIcon } from "react-icons/fi";
import { siteConfig } from "@/data/site.config";
import { EngineeringButton } from "@/components/ui/engineering-button";

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
      className="relative min-h-screen flex items-center justify-center mt-0 pt-24 lg:pt-32 overflow-hidden"
    >
      <div className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Top Badge */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center px-3 py-2.5 rounded-md"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <span className="font-mono-ui" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
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
            className="space-y-4 sm:space-y-5"
          >
            <h1 className="font-heading" style={{ letterSpacing: "-0.04em", lineHeight: "0.95" }}>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold" style={{ color: "rgba(248, 250, 252, 0.7)" }}>
                Hi, I'm
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-1">
                <span className="bg-gradient-to-r from-blue-200 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
                  Ajay Biswal
                </span>
              </div>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-sm sm:text-base md:text-lg leading-relaxed max-w-[90%] mx-auto"
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
            <EngineeringButton
              as="a"
              href="/resume/AjayBiswal_FullStack_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="neutral"
            >
              <FileText size={16} strokeWidth={2} />
              Resume
            </EngineeringButton>
            
            {/* Button 2: View Projects */}
            <EngineeringButton
              onClick={() => scrollToSection("projects")}
              variant="orange"
            >
              <BriefcaseBusiness size={16} strokeWidth={2} />
              Projects
              
            </EngineeringButton>
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
