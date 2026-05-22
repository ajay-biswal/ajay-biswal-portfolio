import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",

        surface: "rgb(var(--surface) / <alpha-value>)",
        elevated: "rgb(var(--surface-elevated) / <alpha-value>)",
        glass: "rgb(var(--surface-glass) / <alpha-value>)",

        border: "rgb(var(--border) / <alpha-value>)",

        muted: "rgb(var(--muted) / <alpha-value>)",
        mutedForeground: "rgb(var(--muted-foreground) / <alpha-value>)",

        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
      },
    },
  },

  plugins: [],
};

export default config;

