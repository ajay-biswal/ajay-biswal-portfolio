"use client";

import { useEffect, useState } from "react";

/**
 * Engineering Grid Background
 * Subtle blueprint-style gridlines for atmospheric structure
 * Layered grid system with slow drift animation
 */
export function EngineeringGrid() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        willChange: "transform",
        animation: "gridDrift 64s linear infinite",
      }}
    >
      {/* Layer 1: Medium grid (64px spacing) - Engineering blueprint */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(circle at 50% 50%, white 0%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, white 0%, transparent 95%)",
        }}
      />

      {/* Layer 2: Fine grid (20px spacing) - Technical detail */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.012) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(circle at 50% 50%, white 0%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, white 0%, transparent 90%)",
        }}
      />

      {/* CSS Animation */}
      <style jsx global>{`
        @keyframes gridDrift {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-64px);
          }
        }
      `}</style>
    </div>
  );
}
