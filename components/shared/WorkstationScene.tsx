"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { HUDCard } from "./HUDCard";

interface WorkstationSceneProps {
  imageUrl: string;
  imageAlt: string;
}

/**
 * Cinematic engineering workstation environment
 * Image bleeds into page atmosphere with layered lighting
 */
export function WorkstationScene({ imageUrl, imageAlt }: WorkstationSceneProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useTransform(mouseX, [-1, 1], [-10, 10]);
  const parallaxY = useTransform(mouseY, [-1, 1], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
      className="relative h-full min-h-[600px] lg:min-h-[700px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient glow behind workstation */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(168, 85, 247, 0.12) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 40% 60%, rgba(59, 130, 246, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 60% 40%, rgba(6, 182, 212, 0.06) 0%, transparent 50%)
          `,
          filter: "blur(60px)",
        }}
      />

      {/* Main workstation image container */}
      <motion.div
        className="absolute inset-8 md:inset-12 lg:inset-16"
        style={{
          x: parallaxX,
          y: parallaxY,
        }}
      >
        {/* Image with cinematic treatment */}
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            style={{
              filter: "brightness(0.75) contrast(1.15) saturate(0.9)",
            }}
          />

          {/* Dark cinematic overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(3, 7, 18, 0.3) 0%, rgba(3, 7, 18, 0.6) 100%)",
            }}
          />

          {/* Purple monitor lighting bleed */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 50% 40% at 50% 45%, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
            }}
          />

          {/* Cyan atmospheric glow */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 40% 30% at 45% 55%, rgba(6, 182, 212, 0.10) 0%, transparent 60%)",
            }}
          />

          {/* Edge fading - merge into background */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to right, #030712 0%, transparent 15%, transparent 85%, #030712 100%),
                linear-gradient(to bottom, #030712 0%, transparent 10%, transparent 90%, #030712 100%)
              `,
            }}
          />

          {/* Vignette masking */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center, transparent 40%, rgba(3, 7, 18, 0.5) 100%)",
            }}
          />
        </div>
      </motion.div>

      {/* Floating HUD Cards */}
      <HUDCard
        label="Projects Delivered"
        value="15+"
        position="top-right"
        delay={0.9}
      />
      <HUDCard
        label="Years Building Systems"
        value="2+"
        position="upper-mid"
        delay={1.0}
      />
      <HUDCard
        label="Focus Area"
        value="AI + Full Stack"
        position="mid-left"
        delay={1.1}
      />
      <HUDCard
        label="Architecture"
        value="Real-Time"
        position="bottom-right"
        delay={1.2}
      />
    </motion.div>
  );
}
