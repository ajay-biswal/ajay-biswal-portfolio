"use client";

import { motion } from "framer-motion";

import { RoleRotator } from "@/components/shared/RoleRotator";
import { WorkstationScene } from "@/components/shared/WorkstationScene";
import { EngineeringStackStrip } from "@/components/shared/EngineeringStackStrip";
import { SocialControlStrip } from "@/components/shared/SocialControlStrip";
import { GlowButton } from "@/components/shared/GlowButton";
import { GradientText } from "@/components/shared/GradientText";
import { TechMarquee } from "@/components/hero/TechMarquee";
import { heroStagger, fadeIn, scaleReveal } from "@/lib/animations";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use native scrollIntoView with smooth behavior
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] lg:min-h-screen flex items-center mt-0 lg:mt-0 pt-14 md:pt-16 lg:pt-20 overflow-hidden scroll-mb-32"
    >
      <div className="mx-auto max-w-full px-5 sm:px-6 md:px-8 w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT SIDE - Identity Content (7 columns) */}
          <motion.div
            className="lg:col-span-7 space-y-8 relative z-10"
            variants={heroStagger}
            initial="hidden"
            animate="visible"
          >
            {/* Status Badge */}
            {/* <motion.div variants={fadeIn}>
              <HeroStatusBadge />
            </motion.div> */}

            {/* Main Headline - Cinematic Typography */}
            <motion.div
              variants={fadeIn}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight break-words" style={{ color: "#f8fafc" }}>
                Architecting{" "}
                <GradientText variant="cyan">scalable systems</GradientText>
                <br />
                that scale.
              </h1>
            </motion.div>

            {/* Engineering Identity Statement */}
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl leading-relaxed max-w-2xl break-words"
              style={{ color: "#94a3b8" }}
            >
              Full-stack engineer specializing in{" "}
              <span className="font-semibold" style={{ color: "#f8fafc" }}>distributed architectures</span>
              {" "}and{" "}
              <span className="font-semibold" style={{ color: "#f8fafc" }}>realtime infrastructure</span>
              {" "}— building production-grade systems that handle complex engineering challenges at scale.
            </motion.p>

            {/* Terminal-Style Role Rotator */}
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-3 px-4 py-3 rounded-lg"
              style={{
                backgroundColor: "rgba(11, 17, 32, 0.6)",
                border: "1px solid rgba(148, 163, 184, 0.1)",
                fontFamily: "monospace",
              }}
            >
              <span style={{ color: "rgba(6, 182, 212, 0.8)" }}>❯</span>
              <RoleRotator
                roles={[
                  "Distributed Systems Engineer",
                  "Realtime Infrastructure Architect",
                  "Full-Stack Systems Engineer",
                  "AI-Powered Platform Developer",
                ]}
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={1800}
              />
            </motion.div>

            {/* CTA System */}
            {/* CTA System */}
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap items-center gap-4"
            >
              <GlowButton 
                variant="primary" 
                size="lg" 
                onClick={() => scrollToSection("skills")}
                aria-label="Navigate to engineering skills and capabilities"
              >
                Explore Architecture
              </GlowButton>
              <GlowButton 
                variant="secondary" 
                size="lg" 
                onClick={() => scrollToSection("projects")}
                aria-label="Navigate to engineering case studies and projects"
              >
                View Engineering Case Studies
              </GlowButton>
            </motion.div>

            {/* Social Control Strip */}
            <SocialControlStrip />

            {/* Tech Marquee - Infinite scrolling tech stack */}
            <TechMarquee />

            {/* Engineering Stack Strip */}
            <EngineeringStackStrip />
          </motion.div>

          {/* RIGHT SIDE - Immersive Workstation Scene (5 columns) */}
          <motion.div
            className="lg:col-span-5 relative"
            variants={scaleReveal}
            initial="hidden"
            animate="visible"
          >
            <WorkstationScene
              imageUrl="/images/computer.png"
              imageAlt="Engineering workstation - Modern development setup"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
