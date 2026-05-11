"use client";

/**
 * Cinematic terminal header - macOS-style with futuristic title
 */
export function TerminalHeader() {
  return (
    <div
      className="flex items-center justify-between px-6 py-4 rounded-t-2xl"
      style={{
        backgroundColor: "rgba(6, 8, 22, 0.95)",
        borderBottom: "1px solid rgba(148, 163, 184, 0.1)",
      }}
    >
      {/* Window controls */}
      <div className="flex items-center gap-2">
        <div
          className="w-3 h-3 rounded-full transition-all duration-200 hover:opacity-80"
          style={{ backgroundColor: "#ff5f56" }}
        />
        <div
          className="w-3 h-3 rounded-full transition-all duration-200 hover:opacity-80"
          style={{ backgroundColor: "#ffbd2e" }}
        />
        <div
          className="w-3 h-3 rounded-full transition-all duration-200 hover:opacity-80"
          style={{ backgroundColor: "#27c93f" }}
        />
      </div>

      {/* Terminal title */}
      <div
        className="text-xs font-mono tracking-wider"
        style={{ color: "rgba(148, 163, 184, 0.6)" }}
      >
        secure-transmission.tsx
      </div>

      {/* Spacer for balance */}
      <div className="w-16" />
    </div>
  );
}
