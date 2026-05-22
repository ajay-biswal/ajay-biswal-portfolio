"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FloatingBadge } from "./FloatingBadge";

interface EngineeringPanelProps {
  imageUrl: string;
  imageAlt: string;
}

/**
 * Cinematic engineering workstation panel
 * Premium OS-style dashboard with subtle HUD elements
 * Inspired by Linear, Vercel, Apple developer aesthetics
 */
export function EngineeringPanel({ imageUrl, imageAlt }: EngineeringPanelProps) {
  const hudItems = [
    { label: "System Online", color: "cyan" as const, delay: 0.9 },
    { label: "AI Ready", color: "purple" as const, delay: 1.0 },
    { label: "Next.js 16", color: "blue" as const, delay: 1.1 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
      className="relative max-w-lg mx-auto"
    >
      {/* Depth blur behind panel */}
      <div
        className="absolute -inset-8 rounded-3xl"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Main container with layered border */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          border: "1px solid rgba(148, 163, 184, 0.1)",
          boxShadow: `
            0 0 0 1px rgba(var(--border), 0.5),
            0 20px 60px rgba(0, 0, 0, 0.6),
            0 0 40px rgba(59, 130, 246, 0.08)
          `,
        }}
      >
        {/* Terminal header bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{
            backgroundColor: "rgba(var(--card), 0.95)",
            borderBottom: "1px solid rgba(148, 163, 184, 0.08)",
          }}
        >
          {/* Window controls */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f56" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27c93f" }} />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs font-mono" style={{ color: "rgba(148, 163, 184, 0.5)" }}>
              ~/workspace/portfolio
            </span>
          </div>
        </div>

        {/* Image container with cinematic treatment */}
        <div className="relative">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={500}
            height={375}
            className="w-full h-auto object-cover"
            priority
            style={{
              filter: "brightness(0.85) contrast(1.1)",
            }}
          />
          
          {/* Dark gradient overlay for depth */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(3,7,18,0.1) 0%, rgba(3,7,18,0.4) 100%)",
            }}
          />
          
          {/* HUD Overlays - minimal, premium */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {hudItems.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: item.delay, duration: 0.5, ease: "easeOut" }}
              >
                <FloatingBadge color={item.color}>
                  {item.label}
                </FloatingBadge>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Terminal Panel - Premium Engineering */}
        <div
          className="p-4 font-mono text-sm"
          style={{
            backgroundColor: "rgba(6, 8, 22, 0.95)",
            borderTop: "1px solid rgba(148, 163, 184, 0.08)",
          }}
        >
          {/* Scanline effect - ultra subtle */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6,182,212,0.015) 2px, rgba(6,182,212,0.015) 4px)",
            }}
          />
          
          <div className="space-y-2.5 relative">
            <div className="flex items-center gap-2">
              <span style={{ color: "rgba(6, 182, 212, 0.8)" }}>❯</span>
              <span style={{ color: "rgba(148, 163, 184, 0.7)" }}>whoami</span>
            </div>
            <div className="pl-4 font-semibold" style={{ color: "#f8fafc" }}>
              Ajay Kumar Biswal
            </div>
            
            <div className="flex items-center gap-2 pt-1">
              <span style={{ color: "rgba(6, 182, 212, 0.8)" }}>❯</span>
              <span style={{ color: "rgba(148, 163, 184, 0.7)" }}>stack</span>
            </div>
            <div className="pl-4" style={{ color: "rgba(248, 250, 252, 0.9)" }}>
              <span style={{ color: "rgba(6, 182, 212, 0.9)" }}>Next.js</span>
              <span style={{ color: "rgba(148, 163, 184, 0.5)" }}> | </span>
              <span style={{ color: "rgba(6, 182, 212, 0.9)" }}>GenAI</span>
              <span style={{ color: "rgba(148, 163, 184, 0.5)" }}> | </span>
              <span style={{ color: "rgba(6, 182, 212, 0.9)" }}>System Design</span>
            </div>
            
            <div className="flex items-center gap-2 pt-1">
              <span style={{ color: "rgba(6, 182, 212, 0.8)" }}>❯</span>
              <span style={{ color: "rgba(148, 163, 184, 0.7)" }}>status</span>
              <span className="inline-flex items-center ml-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "rgba(6, 182, 212, 0.8)" }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "rgba(6, 182, 212, 0.9)" }} />
                </span>
              </span>
              <span style={{ color: "rgba(6, 182, 212, 0.9)" }}>Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle hover motion */}
      <motion.div
        className="absolute -inset-1 rounded-2xl -z-10"
        style={{
          background: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(168,85,247,0.10))",
          filter: "blur(20px)",
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}
