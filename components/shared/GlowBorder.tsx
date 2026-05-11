import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlowBorderProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  color?: "blue" | "purple" | "cyan";
  animated?: boolean;
  className?: string;
}

/**
 * Glow border wrapper with optional animation
 */
export function GlowBorder({
  children,
  color = "blue",
  animated = false,
  className,
  ...props
}: GlowBorderProps) {
  const colorClasses = {
    blue: "glow-border-blue",
    purple: "glow-border-purple",
    cyan: "glow-border-cyan",
  };

  return (
    <motion.div
      className={cn(
        "rounded-2xl p-[2px] relative",
        animated ? "animated-border" : colorClasses[color],
        className
      )}
      {...props}
    >
      <div className="rounded-2xl bg-surface h-full w-full p-6">
        {children}
      </div>
    </motion.div>
  );
}
