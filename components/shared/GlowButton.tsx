import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { magneticButton, cinematicEase } from "@/lib/animations";

interface GlowButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  glow?: "blue" | "purple" | "cyan";
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Premium CTA button component
 * PHASE 3B: Magnetic hover behavior, cinematic easing
 * Variants: primary (gradient), secondary (glass), ghost (minimal)
 * Restrained glow effects for cinematic feel
 */
export function GlowButton({
  children,
  variant = "primary",
  glow = "blue",
  size = "md",
  className,
  ...props
}: GlowButtonProps) {
  const variantClasses = {
    primary: "text-foreground",
    secondary: "text-foreground border border-border-subtle hover:border-border-strong",
    ghost: "text-foreground-muted hover:text-foreground",
  };

  const variantStyles = {
    primary: {
      background: "linear-gradient(135deg, rgba(120, 130, 160, 0.7), rgba(100, 110, 140, 0.6))",
      boxShadow: "0 4px 20px rgba(120, 130, 160, 0.20)",
    },
    secondary: {
      backgroundColor: "rgba(var(--surface), 0.6)",
      backdropFilter: "blur(12px)",
    },
    ghost: {
      backgroundColor: "transparent",
    },
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-3.5 text-base",
  };

  return (
    <motion.button
      className={cn(
        "rounded-xl font-semibold transition-all duration-300",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B1A]",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      style={variantStyles[variant]}
      whileHover={{
        scale: 1.03,
        y: -2,
        boxShadow: variant === "primary"
          ? "0 8px 30px rgba(120, 130, 160, 0.30)"
          : "0 4px 20px rgba(0, 0, 0, 0.3)",
        transition: { duration: 0.3, ease: cinematicEase },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.15, ease: cinematicEase },
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
