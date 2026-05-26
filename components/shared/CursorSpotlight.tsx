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
      {/* Single subtle spotlight */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)",
          filter: "blur(60px)",
          left: position.x - 250,
          top: position.y - 250,
          transition: "left 0.3s ease-out, top 0.3s ease-out",
        }}
      />
    </div>
  );
}
