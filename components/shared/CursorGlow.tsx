"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CursorGlow - Premium atmospheric cursor illumination
 * Soft radial glow that follows cursor with smooth interpolation
 */
export function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);

  // Smooth spring interpolation for cursor tracking
  const springConfig = { damping: 35, stiffness: 150, mass: 0.8 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check for reduced motion preference and touch devices
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    
    // Disable cursor glow on touch devices or reduced motion
    if (prefersReducedMotion || isTouchDevice) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 150); // Center glow (300px width / 2)
      cursorY.set(e.clientY - 150); // Center glow (300px height / 2)

      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <>
      {/* Primary cyan glow */}
      <motion.div
        className="pointer-events-none fixed z-[9999]"
        style={{
          left: smoothX,
          top: smoothY,
          width: 300,
          height: 300,
          opacity: isVisible ? 1 : 0,
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(6, 182, 212, 0.05) 30%, transparent 70%)",
          filter: "blur(40px)",
          willChange: "transform, opacity",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Secondary purple glow (offset) */}
      <motion.div
        className="pointer-events-none fixed z-[9998]"
        style={{
          left: smoothX,
          top: smoothY,
          width: 250,
          height: 250,
          opacity: isVisible ? 0.7 : 0,
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0.03) 35%, transparent 70%)",
          filter: "blur(50px)",
          willChange: "transform, opacity",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </>
  );
}
