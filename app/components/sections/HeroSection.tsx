"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypewriterText } from "../TypewriterText";

export function HeroSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-12 pb-16 pt-4"
    >
      <div className="space-y-8 text-center">
        <h1 className="text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Building <TypewriterText /> web experiences.
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-slate-600 sm:text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
          I&apos;m{" "}
          <span className="font-semibold text-slate-900">
            Ajay Kumar Biswal
          </span>
          , a full stack developer based in Bengaluru. I design and build
          production-ready web apps with{" "}
          <span className="font-semibold text-slate-900">
            Next.js, Node.js, MongoDB
          </span>{" "}
          and integrate AI using{" "}
          <span className="font-semibold text-slate-900">
            LangChain & OpenAI
          </span>{" "}
          to turn complex workflows into smooth, automated systems.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-slate-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-800 shadow-sm transition-all hover:bg-slate-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Contact Me
          </a>
          <a
            href="/Ajay_Kumar_Biswal_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-slate-900 px-6 py-3 text-base font-medium text-slate-50 shadow-lg transition-all hover:bg-slate-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Download Resume
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-6">
          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            MERN Stack
          </span>
          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            Next.js & TypeScript
          </span>
          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            LangChain & OpenAI
          </span>
          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            Clean Architecture
          </span>
        </div>
      </div>

      {/* HERO ILLUSTRATION */}
      <motion.div
        className="relative mx-auto w-full max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="relative overflow-hidden rounded-3xl bg-white">
          <Image
            src="/undraw_dev-productivity_5wps.svg"
            alt="Developer productivity illustration"
            width={800}
            height={600}
            className="h-auto w-full"
            priority
          />
        </div>
      </motion.div>
    </motion.section>
  );
}