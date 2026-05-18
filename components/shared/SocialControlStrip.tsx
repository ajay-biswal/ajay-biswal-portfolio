"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
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
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2 rounded-lg transition-all duration-200 group"
              style={{
                color: "#94a3b8",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(148, 163, 184, 0.1)";
                e.currentTarget.style.color = "#f8fafc";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#94a3b8";
              }}
            >
              <Icon size={25} />
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}
