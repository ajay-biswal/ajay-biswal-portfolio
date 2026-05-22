"use client";

import { motion } from "framer-motion";

interface HUDCardProps {
  label: string;
  value?: string;
  position: "top-right" | "upper-mid" | "bottom-right" | "mid-left";
  delay: number;
}

/**
 * Floating HUD widget - futuristic OS-style metrics
 */
export function HUDCard({ label, value, position, delay }: HUDCardProps) {
  const positionStyles = {
    "top-right": "top-4 right-4 md:top-8 md:right-8",
    "upper-mid": "top-1/3 -right-4 md:-right-12",
    "bottom-right": "bottom-20 right-8 md:bottom-24 md:right-12",
    "mid-left": "top-1/2 -left-4 md:-left-16",
  };

  const floatAnimations = {
    "top-right": { y: [0, -6, 0], duration: 6 },
    "upper-mid": { y: [0, 8, 0], duration: 7 },
    "bottom-right": { y: [0, -5, 0], duration: 8 },
    "mid-left": { y: [0, 7, 0], duration: 7.5 },
  };

  const animation = floatAnimations[position];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: animation.y,
      }}
      transition={{
        opacity: { delay, duration: 0.6 },
        scale: { delay, duration: 0.6 },
        y: {
          delay: delay + 0.6,
          duration: animation.duration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`absolute ${positionStyles[position]} z-20`}
    >
      <div
        className="px-3 py-2 md:px-4 md:py-2.5 rounded-lg backdrop-blur-xl"
        style={{
          backgroundColor: "rgba(var(--surface), 0.7)",
          border: "1px solid rgba(148, 163, 184, 0.12)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        {value && (
          <div
            className="text-lg md:text-xl font-bold mb-0.5"
            style={{ color: "rgba(6, 182, 212, 0.9)" }}
          >
            {value}
          </div>
        )}
        <div
          className="text-xs md:text-sm font-medium"
          style={{ color: "#94a3b8" }}
        >
          {label}
        </div>
      </div>
    </motion.div>
  );
}
