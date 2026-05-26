"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface EngineeringButtonProps {
  variant?: "neutral" | "accent" | "orange";
  children: React.ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

/**
 * Engineering-style button component
 * Terminal aesthetic with transparent surfaces and subtle borders
 * Inspired by aysh.me and infrastructure dashboard UI
 */
export function EngineeringButton({
  variant = "neutral",
  children,
  className,
  as = "button",
  href,
  onClick,
  target,
  rel,
  ...props
}: EngineeringButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-[4px] font-medium text-[15px] transition-all duration-200 backdrop-blur-[2px]";

  const variantStyles = {
    neutral: cn(
      "bg-white/[0.01] border border-white/10 text-white",
      "hover:border-white/20 hover:bg-white/[0.03]"
    ),
    accent: cn(
      "bg-blue-500/[0.04] border border-blue-400/20 text-blue-300",
      "hover:bg-blue-500/[0.08] hover:border-blue-300/30"
    ),
    orange: cn(
      "bg-orange-500/[0.04] border border-orange-400/20 text-orange-300",
      "hover:bg-orange-500/[0.08] hover:border-orange-300/30"
    ),
  };

  const combinedClassName = cn(baseStyles, variantStyles[variant], className);

  if (as === "a" && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClassName}
        onClick={onClick as any}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
