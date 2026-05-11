"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site.config";
import { navSlideDown, staggerContainer } from "@/lib/animations";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  // Scroll detection with blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#hero");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    siteConfig.navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      observer.disconnect();
    };
  }, []);

  // Close mobile menu on navigation
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      className="sticky top-0 z-40 transition-all duration-500"
      style={{
        backgroundColor: isScrolled ? "rgba(3, 7, 18, 0.85)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(148, 163, 184, 0.08)" : "1px solid transparent",
      }}
      initial="hidden"
      animate="visible"
      variants={navSlideDown}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <motion.div variants={staggerContainer(0.1, 0.1)}>
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white"
              style={{ backgroundColor: "rgba(11, 17, 32, 0.8)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {siteConfig.initials}
            </motion.div>
            <motion.span
              className="text-lg font-bold tracking-tight sm:text-xl"
              style={{ color: "#f8fafc" }}
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              {siteConfig.name}
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-base font-medium sm:flex">
          {siteConfig.navItems.map((item, index) => {
            const isActive = activeSection === item.href;
            return (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative transition-colors duration-300"
                style={{
                  color: isActive ? "rgba(6, 182, 212, 0.9)" : "#94a3b8",
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 * index + 0.2 }}
                whileHover={{
                  y: -1,
                  color: "rgba(6, 182, 212, 0.9)",
                }}
                whileTap={{ y: 0 }}
              >
                {item.label}
                {/* Animated underline */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-px"
                  style={{
                    backgroundColor: "rgba(6, 182, 212, 0.6)",
                    boxShadow: "0 0 8px rgba(6, 182, 212, 0.4)",
                  }}
                  initial={{ width: isActive ? "100%" : "0%" }}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="rounded-lg p-2 sm:hidden"
          style={{ color: "#94a3b8" }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="sm:hidden"
            style={{
              backgroundColor: "rgba(3, 7, 18, 0.95)",
              borderTop: "1px solid rgba(148, 163, 184, 0.08)",
              backdropFilter: "blur(20px)",
            }}
          >
            <nav className="flex flex-col px-4 py-4 space-y-2">
              {siteConfig.navItems.map((item, index) => {
                const isActive = activeSection === item.href;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className="rounded-lg px-4 py-3 text-base font-medium transition-colors"
                    style={{
                      color: isActive ? "rgba(6, 182, 212, 0.9)" : "#94a3b8",
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{
                      backgroundColor: "rgba(6, 182, 212, 0.05)",
                    }}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
