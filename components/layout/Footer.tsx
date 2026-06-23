"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/site.config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative "
      style={{
        background: "rgb(var(--background))",
        borderColor: "rgba(var(--border),0.15)",
      }}
    >
      {/* Back to top */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="absolute left-1/2 -translate-x-1/2 -top-5 flex h-10 w-10 items-center justify-center  transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        style={{
          background: "rgb(var(--surface))",
          borderColor: "rgba(var(--border),0.4)",
          color: "rgb(var(--foreground))",
        }}
      >
        <ArrowUp size={18} />
      </button>

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left */}
          <div className="space-y-4">
            <h3
              className="text-2xl font-bold"
              style={{
                color: "rgb(var(--foreground))",
              }}
            >
              &lt;/&gt; {siteConfig.name}
            </h3>

            <p
              className="text-sm"
              style={{
                color: "rgba(var(--muted),0.75)",
              }}
            >
              © {year} Built with ❤️ by {siteConfig.name}
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">

            {[
              {
                icon: Github,
                href: siteConfig.social.github,
              },
              {
                icon: Linkedin,
                href: siteConfig.social.linkedin,
              },
              {
                icon: Mail,
                href: `mailto:${siteConfig.email}`,
              },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                whileHover={{
                  y: -3,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex h-12 w-12 items-center justify-center  transition-all duration-300"
                style={{
                  borderColor: "rgba(var(--border),0.25)",
                  color: "rgba(var(--muted),0.75)",
                  background: "rgba(var(--surface),0.5)",
                }}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}