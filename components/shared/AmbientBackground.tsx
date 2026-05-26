"use client";

/**
 * Plain deep navy background with subtle grid
 * Minimal, calm, engineering-focused
 */
export function AmbientBackground() {
  return (
    <div 
      className="fixed inset-0 -z-10"
      style={{ 
        backgroundColor: "#050816",
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
      }}
    />
  );
}
