"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? "border-b border-slate-200 bg-white/90 backdrop-blur-md py-2 shadow-sm" : "bg-transparent py-4"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <motion.div 
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              AJ
            </motion.div>
            <motion.span 
              className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              whileHover={{ color: "#334155" }}
              transition={{ duration: 0.2 }}
            >
              Ajay Kumar Biswal
            </motion.span>
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-10 text-base font-medium sm:flex">
          {NAV_ITEMS.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-slate-600 transition-all hover:text-slate-900 font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index + 0.2 }}
              whileHover={{ 
                y: -2,
                textDecoration: "underline",
                textUnderlineOffset: 4
              }}
              whileTap={{ y: 0 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
        
        <motion.button 
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 sm:hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>
    </motion.header>
  );
}