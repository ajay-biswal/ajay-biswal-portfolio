"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Cinematic ambient background system
 * Deep navy/black atmosphere with ultra-subtle lighting
 * PHASE 3B: Enhanced with animated grid, moving gradients, particles
 * Inspired by Vercel, Linear, premium SaaS interfaces
 */
export function AmbientBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; duration: number; delay: number }>>([]);

  // Generate random particles only on client to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
    const generatedParticles = Array.from({ length: 8 }, () => ({
      x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
      y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1080),
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 5,
    }));
    setParticles(generatedParticles);
  }, []);
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Deep space base */}
      <div className="absolute inset-0" style={{ backgroundColor: "#030712" }} />
      
      {/* Cinematic radial lighting - ultra subtle */}
      {/* Top-left blue ambient */}
      <motion.div
        className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Right-side purple glow */}
      <motion.div
        className="absolute top-1/4 -right-48 w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
        animate={{
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Bottom-center cyan blur */}
      <motion.div
        className="absolute -bottom-48 left-1/3 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 60%)",
          filter: "blur(90px)",
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Animated glow blobs - extremely subtle movement */}
      <motion.div
        className="absolute -top-96 -left-48 w-[900px] h-[900px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 60%)",
          filter: "blur(120px)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 -right-64 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 60%)",
          filter: "blur(120px)",
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Animated grid - opacity shift */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.015) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Ultra-subtle floating particles - only render on client */}
      {isMounted && particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: "2px",
            height: "2px",
            backgroundColor: "rgba(6, 182, 212, 0.3)",
          }}
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
      
      {/* Cinematic vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(3,7,18,0.5) 100%)",
        }}
      />
    </div>
  );
}
