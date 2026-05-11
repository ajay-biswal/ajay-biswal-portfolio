import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface FloatingBadgeProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  color?: "blue" | "purple" | "cyan" | "pink";
  className?: string;
}

/**
 * Floating badge component for tech labels and status indicators
 */
export function FloatingBadge({
  children,
  color = "blue",
  className,
  ...props
}: FloatingBadgeProps) {
  const colorClasses = {
    blue: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    purple: "border-purple-500/30 bg-purple-500/10 text-purple-400",
    cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
    pink: "border-pink-500/30 bg-pink-500/10 text-pink-400",
  };

  return (
    <motion.div
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full",
        "border text-xs font-medium backdrop-blur-sm",
        "transition-all duration-300",
        colorClasses[color],
        className
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
