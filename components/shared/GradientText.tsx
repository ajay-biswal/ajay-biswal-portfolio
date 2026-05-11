import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  variant?: "default" | "cyan" | "pink";
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
}

/**
 * Reusable gradient text component
 * Variants: default (blue-purple), cyan, pink
 */
export function GradientText({
  children,
  variant = "default",
  as: Component = "span",
  className,
}: GradientTextProps) {
  const variantClasses = {
    default: "text-gradient",
    cyan: "text-gradient-cyan",
    pink: "text-gradient-pink",
  };

  return (
    <Component className={cn(variantClasses[variant], className)}>
      {children}
    </Component>
  );
}
