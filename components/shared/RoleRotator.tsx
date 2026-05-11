"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface RoleRotatorProps {
  roles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

/**
 * Animated role rotator with typing effect
 * Cycles through multiple roles with smooth typing/deleting
 */
export function RoleRotator({
  roles,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: RoleRotatorProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === currentRole) {
      // Pause at end of word
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && currentText === "") {
      // Move to next role
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      // Type or delete character
      timeout = setTimeout(
        () => {
          setCurrentText(
            isDeleting
              ? currentText.slice(0, -1)
              : currentRole.slice(0, currentText.length + 1)
          );
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center">
      <span className="text-gradient-cyan">{currentText}</span>
      <motion.span
        className="inline-block w-0.5 h-8 ml-1 bg-cyan-400"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
}
