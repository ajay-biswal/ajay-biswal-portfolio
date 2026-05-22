"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";
import {
  HiOutlineUser,
  HiOutlineCodeBracket,
  HiOutlineSquares2X2,
  HiOutlineBriefcase,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import { siteConfig } from "@/data/site.config";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll detection with navbar compression
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      // Detect scroll direction for mobile dock
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px", threshold: 0.2 }
    );

    siteConfig.navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(href);
    }
  };

  // Mobile nav items with icons
  const mobileNavItems = [
    { label: "About", href: "#hero", icon: HiOutlineUser },
    { label: "Skills", href: "#skills", icon: HiOutlineCodeBracket },
    { label: "Projects", href: "#projects", icon: HiOutlineSquares2X2 },
    { label: "Experience", href: "#experience", icon: HiOutlineBriefcase },
    { label: "Contact", href: "#contact", icon: HiOutlineEnvelope },
  ];

  // Close mobile menu on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ======================================== */}
      {/* DESKTOP NAVBAR (lg and above) */}
      {/* ======================================== */}
      <motion.nav
        className="hidden lg:block fixed top-4 lg:top-6 left-1/2 -translate-x-1/2 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{
            padding: isScrolled ? "0.625rem 1.25rem" : "0.75rem 1.5rem",
            backgroundColor: isScrolled ? "rgba(5, 8, 22, 0.92)" : "rgba(5, 8, 22, 0.85)",
            backdropFilter: isScrolled ? "blur(24px)" : "blur(20px)",
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between gap-8 rounded-xl border shadow-2xl"
          style={{
            maxWidth: "1280px",
            width: "calc(100vw - 2rem)",
            borderColor: "rgba(255, 255, 255, 0.05)",
            boxShadow: "0 10px 50px rgba(0, 0, 0, 0.45)",
            background: "linear-gradient(135deg, rgba(5, 8, 22, 0.85) 0%, rgba(5, 8, 22, 0.85) 100%)",
          }}
        >
          {/* Subtle ambient gradient overlay */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-30"
            style={{
              background: "linear-gradient(90deg, rgba(6, 182, 212, 0.03) 0%, transparent 50%, rgba(168, 85, 247, 0.03) 100%)",
            }}
          />

          {/* LEFT SECTION — Brand */}
          <div className="relative flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white relative"
              style={{
                backgroundColor: "rgba(11, 17, 32, 0.8)",
                boxShadow: "0 0 20px rgba(6, 182, 212, 0.15)",
              }}
            >
              {siteConfig.initials}
            </motion.div>
            <Link href="/" className="flex items-center gap-1.5">
              <span className="text-sm font-medium tracking-tight text-zinc-100">
                {siteConfig.name}
              </span>
              <span className="text-xs text-zinc-500 font-mono">&lt;/&gt;</span>
            </Link>
          </div>

          {/* CENTER SECTION — Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative text-sm font-medium transition-colors duration-300"
                  style={{
                    color: isActive ? "rgba(255, 255, 255, 0.95)" : "rgba(161, 161, 170, 0.8)",
                  }}
                  whileHover={{
                    color: "rgba(103, 232, 249, 0.9)",
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {item.label}
                  {/* Active indicator */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    initial={false}
                    animate={{
                      backgroundColor: isActive ? "rgba(6, 182, 212, 0.6)" : "transparent",
                      boxShadow: isActive ? "0 0 8px rgba(6, 182, 212, 0.4)" : "none",
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.a>
              );
            })}
          </div>

          {/* RIGHT SECTION — Utility Icons */}
          <div className="relative flex items-center gap-3">
            {/* GitHub */}
            <motion.a
              href="https://github.com/ajayofficial22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
              style={{ color: "rgba(161, 161, 170, 0.7)" }}
              whileHover={{
                color: "rgba(103, 232, 249, 0.9)",
                scale: 1.1,
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Github size={18} />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
              style={{ color: "rgba(161, 161, 170, 0.7)" }}
              whileHover={{
                color: "rgba(103, 232, 249, 0.9)",
                scale: 1.1,
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Linkedin size={18} />
            </motion.a>

            {/* Resume Download */}
            <motion.a
              href="/Ajay_Kumar_Biswal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
              style={{ color: "rgba(161, 161, 170, 0.7)" }}
              whileHover={{
                color: "rgba(103, 232, 249, 0.9)",
                scale: 1.1,
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <FileText size={18} />
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>

      {/* ======================================== */}
      {/* MOBILE TOP BAR (< lg) */}
      {/* ======================================== */}
      <motion.div
        className="lg:hidden fixed top-0 left-0 right-0 z-[9999]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="flex items-center justify-between px-4 py-2 backdrop-blur-xl"
          style={{
            height: "56px",
            backgroundColor: "rgba(5, 8, 22, 0.9)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* LEFT — Identity */}
          <div className="flex items-center gap-2">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-white flex-shrink-0"
              style={{
                backgroundColor: "rgba(11, 17, 32, 0.8)",
                boxShadow: "0 0 20px rgba(6, 182, 212, 0.15)",
              }}
            >
              {siteConfig.initials}
            </div>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <span className="text-sm font-medium text-zinc-100">
                {siteConfig.name}
              </span>
              <span className="text-xs text-zinc-500 font-mono opacity-50">&lt;/&gt;</span>
            </div>
          </div>

          {/* RIGHT — Quick Actions */}
          <div className="flex items-center gap-2">
            <motion.a
              href="https://github.com/ajayofficial22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-lg"
              style={{ color: "rgba(161, 161, 170, 0.7)" }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={18} />
            </motion.a>

            <motion.a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-lg"
              style={{ color: "rgba(161, 161, 170, 0.7)" }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={18} />
            </motion.a>

            <motion.a
              href="/Ajay_Kumar_Biswal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-lg"
              style={{ color: "rgba(161, 161, 170, 0.7)" }}
              whileTap={{ scale: 0.9 }}
            >
              <FileText size={18} />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* ======================================== */}
      {/* MOBILE BOTTOM DOCK NAVIGATION (< lg) */}
      {/* ======================================== */}
      <motion.div
        className="lg:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-[9999]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: scrollDirection === 'down' ? 0.95 : 1,
        }}
        transition={{ 
          duration: 0.6, 
          ease: [0.22, 1, 0.36, 1],
          scale: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
        }}
      >
        <div
          className="flex items-center justify-around gap-1 px-2 py-1 rounded-2xl border backdrop-blur-xl shadow-2xl"
          style={{
            width: "92%",
            maxWidth: "320px",
            height: "64px",
            backgroundColor: "rgba(5, 8, 22, 0.9)",
            borderColor: "rgba(255, 255, 255, 0.08)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
          }}
        >
          {mobileNavItems.map((item) => {
            const isActive = activeSection === item.href;
            const Icon = item.icon;

            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative flex flex-col items-center justify-center rounded-xl transition-all duration-300"
                style={{
                  minWidth: "52px",
                }}
                animate={{
                  scale: isActive ? 1.05 : 1,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Icon */}
                <motion.div
                  style={{
                    color: isActive ? "rgba(103, 232, 249, 0.9)" : "rgba(161, 161, 170, 0.6)",
                    fontSize: "16px",
                  }}
                  animate={{
                    boxShadow: isActive ? "0 0 12px rgba(6, 182, 212, 0.3)" : "none",
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Icon size={16} />
                </motion.div>

                {/* Label */}
                <span
                  className="text-[10px] mt-0.5 font-medium"
                  style={{
                    color: isActive ? "rgba(103, 232, 249, 0.9)" : "rgba(161, 161, 170, 0.5)",
                  }}
                >
                  {item.label}
                </span>

                {/* Active indicator (top dot) */}
                {isActive && (
                  <motion.div
                    className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(6, 182, 212, 0.8)",
                      boxShadow: "0 0 8px rgba(6, 182, 212, 0.6)",
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
