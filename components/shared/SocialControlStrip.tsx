"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, FileText } from "lucide-react";
import { siteConfig } from "@/data/site.config";

/**
 * Futuristic social control strip - grouped like workstation controls
 */
export function SocialControlStrip() {
  const socials = [
    { icon: Github, href: siteConfig.social.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
    { icon: FileText, href: "/resume/Ajay_Kumar_biswal.pdf", label: "Resume", external: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.7 }}
    >
      <div
        className="inline-flex items-center gap-3 px-2 py-2 rounded-xl"
        style={{
          // backgroundColor: "rgba(11, 17, 32, 0.6)",
          // border: "1px solid rgba(148, 163, 184, 0.1)",
          // backdropFilter: "blur(12px)",
        }}
      >
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target={social.external ? "_blank" : undefined}
              rel={social.external ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              className="p-2 rounded-lg transition-all duration-200 group relative"
              style={{
                color: "#94a3b8",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(148, 163, 184, 0.1)";
                e.currentTarget.style.color = "#f8fafc";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(6, 182, 212, 0.15)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#94a3b8";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Icon size={20} />
              {/* Tooltip */}
              <span
                className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                style={{
                  backgroundColor: "rgba(var(--surface), 0.9)",
                  color: "#f8fafc",
                  border: "1px solid rgba(148, 163, 184, 0.1)",
                }}
              >
                {social.label}
              </span>
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}
