"use client";

import React from "react";
import { motion } from "framer-motion";

export function SectionHeader({ title, eyebrow }: { title: string; eyebrow: string }) {
  return (
    <div className="space-y-3 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="inline-block rounded-full bg-slate-900 px-4 py-1.5 text-xs font-medium text-white"
      >
        {eyebrow}
      </motion.div>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {title}
      </h2>
      <div className="mx-auto h-1 w-20 rounded-full bg-slate-900"></div>
    </div>
  );
}