"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Zap, Server, Network, Users, Database, MessageSquare, ArrowRight } from "lucide-react";
import { GlowButton } from "@/components/shared/GlowButton";
import { fadeIn, cardStagger, cinematicEase } from "@/lib/animations";
import { ArchitectureVisualization } from "@/app/components/banter/ArchitectureVisualization";

/**
 * Banter - Distributed Real-Time Messaging Infrastructure
 * PHASE 4A: Cinematic engineering system showcase
 * Full-width architecture visualization with telemetry
 */

/**
 * Banter Intro Component
 */
function BanterIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: cinematicEase }}
      className="text-center max-w-4xl mx-auto mb-10"
    >
      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
        style={{
          backgroundColor: "rgba(var(--surface), 0.6)",
          border: "1px solid rgba(6, 182, 212, 0.2)",
        }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{
            backgroundColor: "rgba(6, 182, 212, 0.9)",
            boxShadow: "0 0 8px rgba(6, 182, 212, 0.6)",
          }}
        />
        <span
          className="text-xs font-semibold tracking-wider uppercase"
          style={{ color: "rgba(6, 182, 212, 0.9)" }}
        >
          REAL-TIME SYSTEM
        </span>
      </div>

      {/* Title */}
      <h2
        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
        style={{ color: "rgb(var(--foreground))" }}
      >
        Banter
      </h2>

      {/* Subtitle */}
      <h3
        className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6"
        style={{ color: "rgb(var(--muted))" }}
      >
        Distributed Real-Time Messaging Infrastructure
      </h3>

      {/* Description */}
      <p
        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        style={{ color: "rgb(var(--muted))" }}
      >
        Scalable websocket orchestration platform with event-driven architecture,
        Redis-backed horizontal scaling, and low-latency realtime synchronization.
        Engineered for production-grade distributed communication.
      </p>
    </motion.div>
  );
}
export function BanterSystemShowcase() {
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Real-time event simulation
  const events = [
    "[Socket] Connection Established: ws://client-7f8a9b",
    "[Redis] Pub/Sub Synced: channel:messages.global",
    "[Message] Persisted Successfully: msg_9x8c7v",
    "[Presence] User Online: user_4k2m9p",
    "[Event] Typing Indicator Sent: room_3j7h2n",
    "[Gateway] Realtime Broadcast Complete: 847 clients",
    "[Redis] Cache Hit: user_presence:89%",
    "[Socket] Room Joined: room_design_team",
    "[Message] Read Receipt Delivered: msg_2x4y6z",
    "[Gateway] Load Balanced: node-3 → 234 connections",
    "[Presence] User Status Changed: idle → active",
    "[Event] Message Delivered: <100ms latency",
    "[Redis] Pub/Sub Channel Active: 12 subscribers",
    "[Socket] Connection Health Check: OK",
    "[Message] Optimistic UI Update Applied",
    "[Gateway] Scaling Event: +2 WebSocket workers",
  ];

  // Terminal log simulation
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTerminalLogs((prev) => {
        const newLogs = [...prev, events[index % events.length]];
        return newLogs.slice(-8); // Keep last 8 logs
      });
      index++;
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLogs]);

  // Engineering highlights
  const highlights = [
    {
      title: "Redis Pub/Sub Scaling",
      description: "Horizontal message distribution across multiple Socket.IO instances",
      icon: Database,
    },
    {
      title: "Socket.IO Event Pipeline",
      description: "Optimized event flow with acknowledgment and retry mechanisms",
      icon: Network,
    },
    {
      title: "Presence Synchronization",
      description: "Real-time online/offline status with Redis-backed state management",
      icon: Users,
    },
    {
      title: "Read Receipt Orchestration",
      description: "Optimistic UI updates with eventual consistency guarantees",
      icon: MessageSquare,
    },
    {
      title: "Room-Based Communication",
      description: "Namespace isolation with dynamic channel subscription",
      icon: Server,
    },
    {
      title: "Optimistic UI Messaging",
      description: "Instant feedback with rollback on delivery failure",
      icon: Zap,
    },
  ];

  // Tech stack
  const techStack = [
    "Node.js",
    "Socket.IO",
    "Redis",
    "MongoDB",
    "TypeScript",
    "Express",
    "React",
    "Tailwind",
  ];

  return (
    <div className="relative mb-24">
      {/* Localized atmosphere with floating animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 65%)",
            filter: "blur(100px)",
          }}
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: cinematicEase }}
        >
          <BanterIntro />
        </motion.div>

        {/* Engineering Highlights Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px", amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: cinematicEase },
                  },
                }}
                className="group p-6 rounded-2xl"
                style={{
                  backgroundColor: "rgba(11, 17, 32, 0.5)",
                  border: "1px solid rgba(148, 163, 184, 0.08)",
                  backdropFilter: "blur(12px)",
                }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(6, 182, 212, 0.35)",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(6, 182, 212, 0.12)",
                  transition: { duration: 0.4, ease: cinematicEase },
                }}
              >
                {/* Gradient accent line */}
                <div
                  className="w-12 h-0.5 mb-4 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, rgba(6, 182, 212, 0.6), rgba(168, 85, 247, 0.6))",
                  }}
                />
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      backgroundColor: "rgba(6, 182, 212, 0.1)",
                    }}
                  >
                    <Icon size={20} style={{ color: "rgba(6, 182, 212, 0.9)" }} />
                  </div>
                  <div>
                    <h4
                      className="text-base font-semibold mb-2"
                      style={{ color: "rgb(var(--foreground))" }}
                    >
                      {highlight.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgb(var(--muted))" }}
                    >
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* FULL WIDTH DISTRIBUTED SYSTEM TOPOLOGY */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 1.2, ease: cinematicEase }}
          className="relative mt-4"
        >
          {/* Architecture Header */}
          <div className="text-center mb-4">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3"
              style={{
                backgroundColor: "rgba(var(--surface), 0.6)",
                border: "1px solid rgba(168, 85, 247, 0.2)",
              }}
            >
              <span
                className="text-xs font-semibold tracking-wider uppercase"
                style={{ color: "rgba(168, 85, 247, 0.9)" }}
              >
                DISTRIBUTED SYSTEM TOPOLOGY
              </span>
            </div>
            <h3
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{ color: "rgb(var(--foreground))" }}
            >
              Banter Realtime Infrastructure
            </h3>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "rgb(var(--muted))" }}
            >
              Production-grade websocket orchestration with Redis-backed scaling,
              distributed event pipelines, and realtime synchronization.
            </p>
          </div>

          {/* FULL IMMERSIVE FLOW - React Flow on page background */}
          <div
            className="relative w-full h-[850px] -mt-4"
          >
            {/* Background engineering grid */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  radial-gradient(circle, rgba(6, 182, 212, 0.02) 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px",
              }}
            />
            
            {/* Large radial cyan glow */}
            <div
              className="absolute top-1/4 left-1/3 w-[800px] h-[800px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)",
                filter: "blur(120px)",
              }}
            />
            
            {/* Large purple ambient glow */}
            <div
              className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 65%)",
                filter: "blur(100px)",
              }}
            />

            {/* React Flow Canvas - floating on background */}
            <ArchitectureVisualization />
          </div>
        </motion.div>

        {/* LIVE TELEMETRY */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: cinematicEase }}
          className="mb-12 mt-8"
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "rgba(6, 8, 22, 0.8)",
              border: "1px solid rgba(148, 163, 184, 0.1)",
              backdropFilter: "blur(16px)",
            }}
          >
            {/* Terminal header */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{
                backgroundColor: "rgba(6, 8, 22, 0.95)",
                borderBottom: "1px solid rgba(148, 163, 184, 0.1)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f56" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27c93f" }} />
              </div>
              
            </div>

            {/* Terminal content */}
            <div
              ref={terminalRef}
              className="p-6 font-mono text-sm space-y-3"
              style={{
                height: "300px",
                overflowY: "auto",
                color: "rgba(6, 182, 212, 0.9)",
              }}
            >
              {terminalLogs.map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="leading-relaxed"
                >
                  {log}
                </motion.div>
              ))}
              {/* Blinking cursor */}
              <span
                className="inline-block w-2.5 h-5"
                style={{
                  backgroundColor: "rgba(6, 182, 212, 0.9)",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* PERFORMANCE METRICS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { value: "<100ms", label: "Realtime Delivery", icon: Zap },
            { value: "99.9%", label: "Socket Uptime", icon: Network },
            { value: "10K+", label: "Concurrent Events", icon: Server },
          ].map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                variants={{
                  hidden: { opacity: 0, y: 25, scale: 0.97 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.7, ease: cinematicEase },
                  },
                }}
                className="p-8 rounded-2xl text-center group"
                style={{
                  backgroundColor: "rgba(var(--surface), 0.6)",
                  border: "1px solid rgba(148, 163, 184, 0.08)",
                  backdropFilter: "blur(12px)",
                }}
                whileHover={{
                  y: -8,
                  borderColor: "rgba(6, 182, 212, 0.4)",
                  boxShadow: "0 25px 70px rgba(0, 0, 0, 0.5), 0 0 50px rgba(6, 182, 212, 0.15)",
                  transition: { duration: 0.4, ease: cinematicEase },
                }}
              >
                <Icon
                  size={32}
                  className="mx-auto mb-4"
                  style={{ color: "rgba(6, 182, 212, 0.9)" }}
                />
                <div
                  className="text-5xl font-bold mb-2"
                  style={{
                    color: "#f8fafc",
                    textShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
                  }}
                >
                  {metric.value}
                </div>
                <div
                  className="text-base"
                  style={{ color: "rgb(var(--muted))" }}
                >
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* TECH STACK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: cinematicEase }}
          className="text-center"
        >
          <h3
            className="text-sm font-semibold uppercase tracking-wider mb-6"
            style={{ color: "rgba(148, 163, 184, 0.7)" }}
          >
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-5 py-2.5 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "rgba(6, 182, 212, 0.08)",
                  color: "rgba(6, 182, 212, 0.9)",
                  border: "1px solid rgba(6, 182, 212, 0.15)",
                }}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "rgba(6, 182, 212, 0.12)",
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.15)",
                  transition: { duration: 0.2 },
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {/* <GlowButton variant="primary" size="lg">
              View Architecture
            </GlowButton> */}
            <GlowButton variant="secondary" size="lg" className="border-none bg-none">
              <Github size={25} className="mr-2" />
              
            </GlowButton>
            <GlowButton variant="secondary" size="lg" className="border-none">
              <ExternalLink size={25} className="mr-2" />
              
            </GlowButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
