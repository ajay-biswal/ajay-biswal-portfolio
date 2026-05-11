import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: "default" | "strong" | "subtle";
  glow?: "none" | "blue" | "purple" | "cyan";
  hover?: boolean;
  className?: string;
}

/**
 * Reusable glassmorphic card component
 * Variants: default, strong, subtle
 * Glow options: none, blue, purple, cyan
 */
export function GlassCard({
  children,
  variant = "default",
  glow = "none",
  hover = false,
  className,
  ...props
}: GlassCardProps) {
  const variantClasses = {
    default: "glass",
    strong: "glass-strong",
    subtle: "glass-subtle",
  };

  const glowClasses = {
    none: "",
    blue: "glow-border-blue",
    purple: "glow-border-purple",
    cyan: "glow-border-cyan",
  };

  const hoverClass = hover ? "hover-lift hover-glow-blue" : "";

  return (
    <motion.div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        variantClasses[variant],
        glowClasses[glow],
        hoverClass,
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
