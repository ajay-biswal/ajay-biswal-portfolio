"use client";

import { motion } from "framer-motion";
import { HeroStatusBadge } from "@/components/shared/HeroStatusBadge";
import { RoleRotator } from "@/components/shared/RoleRotator";
import { WorkstationScene } from "@/components/shared/WorkstationScene";
import { EngineeringStackStrip } from "@/components/shared/EngineeringStackStrip";
import { SocialControlStrip } from "@/components/shared/SocialControlStrip";
import { GlowButton } from "@/components/shared/GlowButton";
import { GradientText } from "@/components/shared/GradientText";
import { heroStagger, fadeIn, scaleReveal } from "@/lib/animations";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT SIDE - Identity Content (7 columns) */}
          <motion.div
            className="lg:col-span-7 space-y-8 relative z-10"
            variants={heroStagger}
            initial="hidden"
            animate="visible"
          >
            {/* Status Badge */}
            <motion.div variants={fadeIn}>
              <HeroStatusBadge />
            </motion.div>

            {/* Main Headline - Cinematic Typography */}
            <motion.div
              variants={fadeIn}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight" style={{ color: "#f8fafc" }}>
                Building{" "}
                <GradientText variant="cyan">intelligent</GradientText>
                <br />
                web experiences.
              </h1>
            </motion.div>

            {/* Engineering Identity Statement */}
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl leading-relaxed max-w-2xl"
              style={{ color: "#94a3b8" }}
            >
              I build scalable{" "}
              <span className="font-semibold" style={{ color: "#f8fafc" }}>AI-powered systems</span>
              {" "}and production-grade web architectures that transform complex challenges into elegant engineering solutions.
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
                  "Full Stack Developer",
                  "AI Systems Engineer",
                  "MERN Stack Engineer",
                  "Real-Time Architecture Enthusiast",
                ]}
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={1800}
              />
            </motion.div>

            {/* CTA System */}
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap items-center gap-4"
            >
              <GlowButton variant="primary" size="lg">
                View Projects
              </GlowButton>
              <GlowButton variant="secondary" size="lg">
                Contact Me
              </GlowButton>
            </motion.div>

            {/* Social Control Strip */}
            <SocialControlStrip />

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
