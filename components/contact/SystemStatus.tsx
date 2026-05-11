"use client";

import { useEffect, useState } from "react";

/**
 * System status block - terminal-style info rows
 */
export function SystemStatus() {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const statusRows = [
    { label: "SYSTEM STATUS", value: "ONLINE", color: "rgba(6, 182, 212, 0.9)" },
    { label: "ENCRYPTION", value: "ENABLED", color: "rgba(6, 182, 212, 0.9)" },
    { label: "RESPONSE TIME", value: "< 24H", color: "rgba(6, 182, 212, 0.9)" },
  ];

  return (
    <div
      className="px-6 py-4 font-mono text-xs space-y-2"
      style={{
        backgroundColor: "rgba(6, 8, 22, 0.6)",
        borderBottom: "1px solid rgba(148, 163, 184, 0.08)",
      }}
    >
      {statusRows.map((row) => (
        <div key={row.label} className="flex items-center gap-3">
          <span style={{ color: "rgba(148, 163, 184, 0.6)" }}>{row.label}:</span>
          <span style={{ color: row.color }}>{row.value}</span>
        </div>
      ))}
      <div className="flex items-center gap-2 pt-1">
        <span style={{ color: "rgba(6, 182, 212, 0.8)" }}>❯</span>
        <span
          className="w-2 h-4"
          style={{
            backgroundColor: cursorVisible ? "rgba(6, 182, 212, 0.8)" : "transparent",
            transition: "background-color 0.1s",
          }}
        />
      </div>
    </div>
  );
}
