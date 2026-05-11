"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Cinematic cursor-reactive lighting system
 * Creates subtle radial spotlight that follows cursor
 * Ultra-low opacity, large blur radius - "alive but invisible"
 */
export function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle updates for performance
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Don't render on server or during initial mount
  if (!isMounted) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: "screen" }}
    >
      {/* Primary cyan spotlight */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
          left: position.x - 300,
          top: position.y - 300,
          transition: "left 0.3s ease-out, top 0.3s ease-out",
        }}
      />

      {/* Secondary purple accent */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
          left: position.x - 200,
          top: position.y - 200,
          transition: "left 0.4s ease-out, top 0.4s ease-out",
        }}
      />
    </div>
  );
}
