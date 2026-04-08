"use client";

import React from "react";

function useTypewriter(
  words: string[],
  typingSpeed = 120,
  pauseTime = 1400,
  enabled = true
) {
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(
    words[0]?.length ?? 0 // show first word fully on initial render
  );
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    if (!enabled || words.length === 0) return;

    const currentWord = words[index];

    if (!deleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? typingSpeed / 2 : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, typingSpeed, pauseTime, enabled]);

  return words[index]?.substring(0, subIndex) ?? "";
}

export function TypewriterText() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const text = useTypewriter(
    ["scalable,", "intelligent,", "AI-powered,"],
    120,
    1400,
    mounted
  );

  return (
    <span className="inline-flex items-baseline gap-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <span className="text-slate-900 font-semibold">{text}</span>
      {/* caret */}
      <span className="h-6 w-[2px] translate-y-[3px] bg-slate-900 animate-pulse sm:h-7" />
    </span>
  );
}