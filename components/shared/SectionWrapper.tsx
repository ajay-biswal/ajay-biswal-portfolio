import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "mesh" | "grid" | "gradient";
}

/**
 * Section wrapper with consistent spacing and optional backgrounds
 */
export function SectionWrapper({
  children,
  className,
  id,
  background = "default",
}: SectionWrapperProps) {
  const backgroundClasses = {
    default: "",
    mesh: "bg-mesh",
    grid: "grid-overlay",
    gradient: "bg-gradient-to-b from-background via-background-secondary to-background",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-32",
        backgroundClasses[background],
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
