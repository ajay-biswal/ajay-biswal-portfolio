import type { Variants, Transition } from "framer-motion";

/**
 * Reusable Framer Motion animation variants
 * Centralized animation architecture for consistency and maintainability
 * PHASE 3B: Premium cinematic motion system
 * - Apple + Linear + Vercel aesthetic
 * - Intelligent, atmospheric, reactive motion
 * - No over-animation, bouncing, or flashy effects
 */

// ============================================
// PREMIUM EASING CURVES
// ============================================

// Cinematic ease - smooth, expensive feel
export const cinematicEase = [0.22, 1, 0.36, 1] as const;

// Spring ease - controlled, mechanical
export const springEase = [0.34, 1.56, 0.64, 1] as const;

// Smooth ease - gentle, professional
export const smoothEase = [0.25, 0.1, 0.25, 1] as const;

// ============================================
// ENTRANCE ANIMATIONS
// ============================================

// Fade up animation (most common pattern)
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: cinematicEase,
    },
  },
};

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: cinematicEase },
  },
};

// Blur reveal - cinematic depth effect
export const blurReveal: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.0,
      ease: cinematicEase,
    },
  },
};

// Scale reveal - premium depth
export const scaleReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: cinematicEase,
    },
  },
};

// Terminal reveal - engineering aesthetic
export const terminalReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: cinematicEase,
    },
  },
};

// Scale in animation (legacy support)
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: cinematicEase,
    },
  },
};

// Slide from left
export const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: cinematicEase,
    },
  },
};

// Slide from right
export const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: cinematicEase,
    },
  },
};

// Slide from bottom
export const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: cinematicEase,
    },
  },
};

// ============================================
// STAGGER SYSTEMS
// ============================================

// Stagger container for child animations
export const staggerContainer = (
  staggerChildren: number = 0.08,
  delayChildren: number = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Stagger children variant - premium timing
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: cinematicEase,
    },
  },
};

// Hero stagger - sequential reveal
export const heroStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

// Card stagger - one-by-one reveal
export const cardStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// ============================================
// SPECIAL ANIMATIONS
// ============================================

// Navbar entrance - subtle slide
export const navSlideDown: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: cinematicEase,
    },
  },
};

// Floating motion - atmospheric, minimal
export const floatingMotion: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Glow pulse - subtle breathing effect
export const glowPulse: Variants = {
  initial: { opacity: 0.6 },
  animate: {
    opacity: [0.6, 0.9, 0.6],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Blinking cursor - terminal aesthetic
export const blinkCursor = {
  initial: { opacity: 1 },
  animate: {
    opacity: [1, 0, 1],
    transition: {
      duration: 1.06,
      repeat: Infinity,
      ease: "steps(1)",
    },
  },
};

// Page load fade - smooth entrance from black
export const pageLoadFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: cinematicEase,
    },
  },
};

// Reveal animation (for sections)
export const reveal: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0 0)",
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

// ============================================
// HOVER INTERACTIONS
// ============================================

// Magnetic button hover - premium feel
export const magneticButton = {
  whileHover: {
    scale: 1.02,
    y: -2,
    transition: { duration: 0.3, ease: cinematicEase },
  },
  whileTap: {
    scale: 0.98,
    transition: { duration: 0.15, ease: cinematicEase },
  },
};

// Hover lift - subtle elevation
export const hoverLift = {
  whileHover: {
    y: -4,
    transition: { duration: 0.3, ease: cinematicEase },
  },
  whileTap: {
    y: 0,
    transition: { duration: 0.15 },
  },
};

// Hover scale - gentle
export const hoverScale = {
  whileHover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: cinematicEase },
  },
  whileTap: {
    scale: 0.98,
    transition: { duration: 0.15 },
  },
};

// 3D card tilt - very subtle perspective
export const cardTilt = {
  whileHover: {
    rotateX: 1.5,
    rotateY: -1.5,
    scale: 1.01,
    transition: { duration: 0.3, ease: cinematicEase },
  },
};

// ============================================
// TRANSITION PRESETS
// ============================================

// Spring transitions
export const springTransition: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 22,
};

export const springTransitionSoft: Transition = {
  type: "spring",
  stiffness: 180,
  damping: 24,
};

// Cinematic transitions - expensive feel
export const cinematicTransition: Transition = {
  duration: 0.8,
  ease: cinematicEase,
};

export const cinematicTransitionSlow: Transition = {
  duration: 1.0,
  ease: cinematicEase,
};

// Smooth transitions
export const smoothTransition: Transition = {
  duration: 0.6,
  ease: smoothEase,
};

// ============================================
// VIEWPORT CONFIGS
// ============================================

// Section default viewport config
export const viewportConfig = {
  once: true,
  amount: 0.2,
} as const;

// Strict viewport (more visible before triggering)
export const viewportStrict = {
  once: true,
  amount: 0.4,
} as const;

// Lenient viewport (less visible before triggering)
export const viewportLenient = {
  once: true,
  amount: 0.1,
} as const;

// Animation delay base for staggered sections
export const ANIMATION_DELAY_BASE = 0.08;
