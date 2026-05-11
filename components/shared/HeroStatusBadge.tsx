"use client";

import { motion } from "framer-motion";

/**
 * Availability status badge with pulse animation
 */
export function HeroStatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle border border-blue-500/30"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
      </span>
      <span className="text-sm font-medium text-foreground-muted">
        Available for opportunities
      </span>
    </motion.div>
  );
}
