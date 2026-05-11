"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "cyan";
}

/**
 * Premium spotlight card with mouse-tracking illumination
 * Creates cinematic depth and interactive lighting
 */
export function SpotlightCard({
  children,
  className,
  glowColor = "blue",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const glowColors = {
    blue: "rgba(59, 130, 246, 0.15)",
    purple: "rgba(168, 85, 247, 0.12)",
    cyan: "rgba(6, 182, 212, 0.10)",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn("relative rounded-2xl overflow-hidden", className)}
      style={{
        backgroundColor: "rgba(11, 17, 32, 0.6)",
        border: "1px solid rgba(148, 163, 184, 0.1)",
        backdropFilter: "blur(16px)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: isHovering
          ? `0 8px 32px rgba(0, 0, 0, 0.4), 0 0 40px ${glowColors[glowColor]}`
          : "0 4px 24px rgba(0, 0, 0, 0.3)",
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Spotlight effect */}
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColors[glowColor]}, transparent)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
