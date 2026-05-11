"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { viewportConfig, viewportStrict, viewportLenient } from "@/lib/animations";

/**
 * FadeReveal - Premium fade-up entrance animation wrapper
 * Usage: Wrap any element that should fade in from below
 */
interface FadeRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  viewport?: "default" | "strict" | "lenient";
  className?: string;
}

export function FadeReveal({
  children,
  delay = 0,
  duration = 0.8,
  viewport = "default",
  className = "",
}: FadeRevealProps) {
  const viewportConfig =
    viewport === "strict"
      ? viewportStrict
      : viewport === "lenient"
      ? viewportLenient
      : { once: true, amount: 0.2 };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * SlideReveal - Horizontal slide entrance animation
 * Usage: Elements that should slide in from left or right
 */
interface SlideRevealProps {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  duration?: number;
  viewport?: "default" | "strict" | "lenient";
  className?: string;
}

export function SlideReveal({
  children,
  direction = "left",
  delay = 0,
  duration = 0.8,
  viewport = "default",
  className = "",
}: SlideRevealProps) {
  const viewportConfig =
    viewport === "strict"
      ? viewportStrict
      : viewport === "lenient"
      ? viewportLenient
      : { once: true, amount: 0.2 };

  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewportConfig}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScaleReveal - Scale-up entrance with fade
 * Usage: Cards, images, or important elements that should grow into view
 */
interface ScaleRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  viewport?: "default" | "strict" | "lenient";
  className?: string;
}

export function ScaleReveal({
  children,
  delay = 0,
  duration = 0.9,
  viewport = "default",
  className = "",
}: ScaleRevealProps) {
  const viewportConfig =
    viewport === "strict"
      ? viewportStrict
      : viewport === "lenient"
      ? viewportLenient
      : { once: true, amount: 0.2 };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewportConfig}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer - Container that staggers child animations
 * Usage: Grid layouts, card groups, lists
 */
interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  childDelay?: number;
  viewport?: "default" | "strict" | "lenient";
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  childDelay = 0.05,
  viewport = "default",
  className = "",
}: StaggerContainerProps) {
  const viewportConfig =
    viewport === "strict"
      ? viewportStrict
      : viewport === "lenient"
      ? viewportLenient
      : { once: true, amount: 0.2 };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: childDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * SectionReveal - Full section entrance with opacity + vertical motion
 * Usage: Major section containers
 */
interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function SectionReveal({
  children,
  delay = 0,
  className = "",
}: SectionRevealProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 1.0,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
