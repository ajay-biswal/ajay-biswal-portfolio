'use client';

import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '@/src/store/theme-store';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center h-9 w-9 rounded-md overflow-hidden"
      style={{
        backgroundColor: 'rgba(var(--card), 0.6)',
        border: '1px solid rgba(var(--border), 0.5)',
      }}
      whileHover={{
        boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
        borderColor: 'rgba(6, 182, 212, 0.4)',
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon with rotation animation */}
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="relative z-10"
      >
        {theme === 'dark' ? (
          <Moon className="h-4 w-4 text-cyan-400" />
        ) : (
          <Sun className="h-4 w-4 text-blue-500" />
        )}
      </motion.div>
    </motion.button>
  );
}
