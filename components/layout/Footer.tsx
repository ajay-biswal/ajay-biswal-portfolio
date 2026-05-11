"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site.config";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t"
      style={{
        backgroundColor: "rgba(3, 7, 18, 0.6)",
        borderColor: "rgba(148, 163, 184, 0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main content area */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
          {/* LEFT: Engineering identity */}
          <div className="max-w-md">
            <p className="text-sm leading-relaxed" style={{ color: "rgba(148, 163, 184, 0.7)" }}>
              Full-stack engineer focused on{" "}
              <span style={{ color: "rgba(248, 250, 252, 0.9)" }}>realtime infrastructure</span> and{" "}
              <span style={{ color: "rgba(248, 250, 252, 0.9)" }}>scalable product systems</span>.
              Built with Next.js, TypeScript, and a focus on production-grade engineering.
            </p>
          </div>

          {/* CENTER: Specialization */}
          <div className="hidden lg:flex items-center gap-3 text-xs font-medium" style={{ color: "rgba(148, 163, 184, 0.5)" }}>
            <span>Realtime Systems</span>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "rgba(148, 163, 184, 0.3)" }} />
            <span>Distributed Architecture</span>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "rgba(148, 163, 184, 0.3)" }} />
            <span>AI Workflows</span>
          </div>

          {/* RIGHT: Availability status */}
          <div className="flex items-center gap-2">
            <motion.span
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-xs font-medium" style={{ color: "rgba(148, 163, 184, 0.6)" }}>
              Available for opportunities
            </span>
          </div>
        </div>

        {/* Social links & copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t" style={{ borderColor: "rgba(148, 163, 184, 0.06)" }}>
          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs transition-colors hover:text-cyan-400"
              style={{ color: "rgba(148, 163, 184, 0.6)" }}
              aria-label="GitHub Profile"
            >
              <Github size={14} />
              <span>GitHub</span>
              <ExternalLink size={10} className="opacity-50" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs transition-colors hover:text-cyan-400"
              style={{ color: "rgba(148, 163, 184, 0.6)" }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
              <ExternalLink size={10} className="opacity-50" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-xs transition-colors hover:text-cyan-400"
              style={{ color: "rgba(148, 163, 184, 0.6)" }}
              aria-label="Send Email"
            >
              <Mail size={14} />
              <span>Email</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs" style={{ color: "rgba(148, 163, 184, 0.4)" }}>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
