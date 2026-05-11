"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, Linkedin, Github, Phone, ArrowRight, Terminal } from "lucide-react";
import { cinematicEase } from "@/lib/animations";

const dockItems = [
  { icon: Mail, label: "Email", value: "ajaykrbiswal@gmail.com", href: "mailto:ajaykrbiswal@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ajaykumarbiswal", href: "https://linkedin.com/in/ajaykumarbiswal" },
  { icon: Github, label: "GitHub", value: "github.com/ajay-biswal", href: "https://github.com/ajay-biswal" },
  { icon: Phone, label: "Phone", value: "+91 89176 15941", href: "tel:+918917615941" },
];

export function ContactSection() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use native scrollIntoView with smooth behavior
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const commandPills = [
    { label: "about", icon: ArrowRight, section: "about" },
    { label: "skills", icon: ArrowRight, section: "skills" },
    { label: "projects", icon: ArrowRight, section: "projects" },
    { label: "contact", icon: ArrowRight, section: "contact" },
  ];

  const dockItemsRef = dockItems; // Make available in scope

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial glows */}
        <div
          className="absolute top-0 left-1/4 w-[800px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[700px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: cinematicEase }}
          className="text-center mb-10"
        >
          {/* Small label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 font-mono text-xs tracking-widest uppercase" style={{ color: "rgba(6, 182, 212, 0.8)" }}>
            <Terminal size={14} />
            Let's Connect
          </div>

          {/* Main heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-mono" style={{ color: "#f8fafc" }}>
            Quick Terminal
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block ml-1"
              style={{ color: "rgba(6, 182, 212, 0.8)" }}
            >
              _
            </motion.span>
          </h2>

          {/* Command suggestion pills */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-sm font-mono mr-2" style={{ color: "rgba(148, 163, 184, 0.6)" }}>
              Try:
            </span>
            {commandPills.map((pill, index) => (
              <motion.button
                key={pill.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: cinematicEase, delay: index * 0.08 }}
                whileHover={{ y: -2, borderColor: "rgba(6, 182, 212, 0.3)" }}
                onClick={() => scrollToSection(pill.section)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-colors cursor-pointer"
                style={{
                  backgroundColor: "rgba(11, 17, 32, 0.6)",
                  border: "1px solid rgba(148, 163, 184, 0.1)",
                  color: "rgba(148, 163, 184, 0.8)",
                }}
              >
                {pill.label}
                <pill.icon size={12} />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Terminal container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: cinematicEase, delay: 0.2 }}
          className="relative mb-8"
        >
          <TerminalPanel isTouchDevice={isTouchDevice} />
        </motion.div>

        {/* Contact dock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: cinematicEase, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8"
        >
          {dockItemsRef.map((item, index) => (
            <DockCard key={item.label} item={item} index={index} />
          ))}
        </motion.div>

        {/* System status footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: cinematicEase, delay: 0.6 }}
          className="text-center font-mono text-sm"
          style={{ color: "rgba(148, 163, 184, 0.5)" }}
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            System ready. Let's build something amazing together.
          </span>
        </motion.div>
      </div>
    </section>
  );
}

// Terminal Panel Component
function TerminalPanel({ isTouchDevice }: { isTouchDevice: boolean }) {
  const [typedLines, setTypedLines] = useState<number>(0);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines = [
    { command: "whoami", output: ["Full Stack Engineer", "Distributed Systems Specialist", "Realtime Infrastructure Architect"] },
    { command: "tech", output: ["Node.js | TypeScript | Redis | Socket.IO", "MongoDB | React | Next.js | LangChain", "Distributed Systems | Event Architecture"] },
    { command: "mission", output: ['"Architecting scalable systems with production-grade engineering."'] },
  ];

  useEffect(() => {
    const lineDelay = 800;
    const outputDelay = 300;

    let lineIndex = 0;
    let outputIndex = 0;

    const typeLine = () => {
      if (lineIndex < terminalLines.length) {
        const line = terminalLines[lineIndex];
        
        // Show command
        setTimeout(() => {
          setTypedLines(prev => prev + 1);
          
          // Show outputs for this command
          line.output.forEach((_, idx) => {
            setTimeout(() => {
              setTypedLines(prev => prev + 1);
            }, (idx + 1) * outputDelay);
          });
          
          lineIndex++;
          if (lineIndex < terminalLines.length) {
            setTimeout(typeLine, lineDelay);
          }
        }, lineDelay);
      }
    };

    typeLine();
  }, []);

  // Blink cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "rgba(6, 8, 22, 0.8)",
        border: "1px solid rgba(168, 85, 247, 0.2)",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(148, 163, 184, 0.05)",
      }}
    >
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.03) 2px, rgba(0, 0, 0, 0.03) 4px)",
        }}
      />

      {/* Terminal bar */}
      <div
        className="relative flex items-center gap-3 px-6 py-4"
        style={{
          backgroundColor: "rgba(11, 17, 32, 0.9)",
          borderBottom: "1px solid rgba(148, 163, 184, 0.08)",
        }}
      >
        {/* macOS traffic lights */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f56" }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27c93f" }} />
        </div>
        <span className="font-mono text-sm" style={{ color: "rgba(148, 163, 184, 0.6)" }}>
          realtime-terminal.sh
        </span>
      </div>

      {/* Terminal body */}
      <div className="relative p-8 font-mono text-sm md:text-base min-h-[400px] md:min-h-[520px]">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Terminal content */}
        <div className="relative z-10 space-y-4">
          {terminalLines.map((line, lineIdx) => {
            const commandIdx = lineIdx * (1 + line.output.length);
            const hasCommand = typedLines > commandIdx;
            const outputIndices = line.output.map((_, idx) => commandIdx + 1 + idx);
            const visibleOutputs = outputIndices.filter(idx => typedLines > idx);

            return (
              <div key={line.command} className="space-y-2">
                {/* Command */}
                <div className="flex items-center gap-2" style={{ color: "rgba(6, 182, 212, 0.8)" }}>
                  <span>ajay@portfolio:~$</span>
                  {hasCommand && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {line.command}
                    </motion.span>
                  )}
                </div>

                {/* Outputs */}
                <div className="pl-4 space-y-1">
                  {visibleOutputs.map((_, outIdx) => (
                    <motion.div
                      key={outIdx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, ease: cinematicEase }}
                      style={{ color: "rgba(248, 250, 252, 0.85)" }}
                    >
                      &gt; {line.output[outIdx]}
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Final prompt with blinking cursor */}
          {typedLines > 0 && (
            <div className="flex items-center gap-2 pt-4" style={{ color: "rgba(6, 182, 212, 0.8)" }}>
              <span>ajay@portfolio:~$</span>
              <motion.span
                animate={{ opacity: showCursor ? 1 : 0 }}
                className="inline-block w-2 h-5"
                style={{ backgroundColor: "rgba(6, 182, 212, 0.6)" }}
              />
            </div>
          )}
        </div>

        {/* Right side engineering visual - disabled on touch */}
        {!isTouchDevice && (
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
            <motion.div
              className="w-32 h-32 rounded-full flex items-center justify-center"
              style={{
                background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
              animate={{
                opacity: [0.6, 0.9, 0.6],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-6xl font-bold" style={{ color: "rgba(6, 182, 212, 0.3)" }}>
                &lt;/&gt;
              </span>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

// Dock Card Component
function DockCard({ item, index }: { item: { icon: any; label: string; value: string; href: string }; index: number }) {
  const Icon = item.icon;
  const isExternal = item.href.startsWith("http");

  return (
    <motion.a
      href={item.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: cinematicEase, delay: index * 0.1 }}
      whileHover={{ y: -3, borderColor: "rgba(6, 182, 212, 0.25)" }}
      className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors"
      style={{
        backgroundColor: "rgba(11, 17, 32, 0.5)",
        border: "1px solid rgba(148, 163, 184, 0.08)",
        textDecoration: "none",
      }}
    >
      <div
        className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0"
        style={{
          backgroundColor: "rgba(6, 182, 212, 0.08)",
          color: "rgba(6, 182, 212, 0.7)",
        }}
      >
        <Icon size={16} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] font-mono uppercase tracking-wider mb-0.5" style={{ color: "rgba(148, 163, 184, 0.5)" }}>
          {item.label}
        </div>
        <div className="text-xs font-medium truncate" style={{ color: "rgba(248, 250, 252, 0.85)" }}>
          {item.value}
        </div>
      </div>
    </motion.a>
  );
}
