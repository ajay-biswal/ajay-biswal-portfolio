import { useState, useEffect } from "react";

/**
 * Custom hook for typewriter effect
 * Separated from UI component for reusability and testability
 */
export function useTypewriter(
  words: string[],
  typingSpeed = 120,
  pauseTime = 1400,
  enabled = true
) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(
    words[0]?.length ?? 0 // show first word fully on initial render
  );
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
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
