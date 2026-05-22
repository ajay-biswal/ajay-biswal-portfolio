"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/src/store/theme-store";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="group h-10 w-10 flex items-center justify-center border border-border bg-card/60 backdrop-blur-md hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.25)] transition-all duration-300"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-500 group-hover:-rotate-12" />
      )}
    </button>
  );
}
