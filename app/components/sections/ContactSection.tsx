"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactTerminal } from "@/components/contact/ContactTerminal";

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="relative py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={fadeUp}
    >
      {/* Background atmosphere system */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cyan glow top-left */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        
        {/* Purple glow bottom-right */}
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        
        {/* Subtle center glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]"
          style={{
            background: "radial-gradient(ellipse, rgba(6, 182, 212, 0.05) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              backgroundColor: "rgba(11, 17, 32, 0.6)",
              border: "1px solid rgba(148, 163, 184, 0.1)",
            }}
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(6, 182, 212, 0.9)" }} />
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "rgba(148, 163, 184, 0.7)" }}>
              SECURE CHANNEL
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#f8fafc" }}
          >
            Get In Touch
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#94a3b8" }}>
            Ready to initiate a secure transmission? Let's connect.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT SIDE - 45% (5 columns) */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          {/* RIGHT SIDE - 55% (7 columns) */}
          <div className="lg:col-span-7">
            <ContactTerminal />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
