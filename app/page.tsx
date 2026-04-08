"use client";

import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ContactSection } from "./components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Enhanced background with gradient */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 to-slate-100"
      />

      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        
        <footer className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-600" style={{ fontFamily: "'Inter', sans-serif" }}>
          <p className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-1">
            <span>© {new Date().getFullYear()} Ajay Kumar Biswal.</span>
            <span>Built with</span>
            <a 
              href="https://nextjs.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-slate-900 hover:underline"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Next.js
            </a>
            <span>,</span>
            <a 
              href="https://tailwindcss.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-slate-900 hover:underline"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Tailwind CSS
            </a>
            <span>and a bit of</span>
            <span className="font-semibold text-slate-900" style={{ fontFamily: "'Inter', sans-serif" }}>caffeine</span>
            <span>☕</span>
          </p>
        </footer>
      </main>
    </div>
  );
}