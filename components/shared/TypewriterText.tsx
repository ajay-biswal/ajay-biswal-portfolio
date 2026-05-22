"use client";

import { useState, useEffect } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";

export function TypewriterText() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const text = useTypewriter(
    ["scalable,", "intelligent,", "AI-powered,"],
    120,
    1400,
    mounted
  );

  return (
    <span className="inline-flex items-baseline gap-1">
      <span className="text-foreground font-semibold">{text}</span>
      {/* caret */}
      <span className="h-6 w-[2px] translate-y-[3px] bg-foreground animate-pulse sm:h-7" />
    </span>
  );
}
