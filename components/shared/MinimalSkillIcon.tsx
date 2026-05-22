"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconType } from "react-icons";

interface MinimalSkillIconProps {
  name: string;
  icon: IconType;
  brandColor: string;
  delay?: number;
}

/**
 * Minimal floating skill icon with monochrome-first aesthetic
 * Restores brand color only on hover with subtle glow
 */
export function MinimalSkillIcon({ name, icon: Icon, brandColor, delay = 0 }: MinimalSkillIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative flex items-center justify-center cursor-pointer"
    >
      {/* Ambient radial glow on hover */}
      <motion.div
        initial={false}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${brandColor}15 0%, transparent 70%)`,
          filter: "blur(20px)",
        }}
      />

      {/* Icon */}
      <motion.div
        animate={{
          scale: isHovered ? 1.08 : 1,
          y: isHovered ? -3 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        style={{
          color: isHovered ? brandColor : "currentColor",
          opacity: isHovered ? 1 : 0.45,
          filter: isHovered ? "grayscale(0)" : "grayscale(1)",
        }}
        className="relative z-10"
      >
        <Icon size={46} />
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-50 pointer-events-none"
          >
            <div
              className="px-3 py-1.5 rounded-md backdrop-blur-xl border text-xs font-medium whitespace-nowrap"
              style={{
                backgroundColor: "rgba(11, 17, 32, 0.9)",
                borderColor: "rgba(6, 182, 212, 0.2)",
                color: brandColor,
              }}
            >
              {name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
