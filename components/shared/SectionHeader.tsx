"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";

export function SectionHeader({ title, eyebrow }: { title: string; eyebrow: string }) {
  return (
    <div className="space-y-3 text-center">
      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeUp}
        className="inline-block rounded-full bg-card px-4 py-1.5 text-xs font-medium text-foreground"
      >
        {eyebrow}
      </motion.div> */}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto h-1 w-20 rounded-full bg-border"></div>
    </div>
  );
}
