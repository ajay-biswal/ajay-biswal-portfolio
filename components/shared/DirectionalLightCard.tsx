"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

/**
 * DirectionalLightCard - Premium directional hover lighting
 * Card responds to cursor position with dynamic gradient interpolation
 */
interface DirectionalLightCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  glowColor?: string;
  glowIntensity?: number;
}

export function DirectionalLightCard({
  children,
  className = "",
  style = {},
  glowColor = "rgba(6, 182, 212, 0.15)",
  glowIntensity = 1,
}: DirectionalLightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setMousePosition({ x, y });
  };

  // Calculate gradient position based on mouse
  const gradientX = mousePosition.x * 100;
  const gradientY = mousePosition.y * 100;

  const enhancedStyle: CSSProperties = {
    ...style,
    position: "relative",
    overflow: "hidden",
  };

  const glowStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    opacity: isHovered ? glowIntensity : 0,
    background: `radial-gradient(600px circle at ${gradientX}% ${gradientY}%, ${glowColor}, transparent 40%)`,
    pointerEvents: "none",
    transition: "opacity 0.3s ease",
  };

  return (
    <motion.div
      ref={cardRef}
      className={className}
      style={enhancedStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Directional glow overlay */}
      <div style={glowStyle} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </motion.div>
  );
}
