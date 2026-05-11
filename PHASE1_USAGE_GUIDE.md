# Phase 1 — Futuristic Design System
## Complete Usage Guide

---

## 🎨 DESIGN TOKEN SYSTEM

### Color Palette (OKLCH Color Space)

The design system uses OKLCH for perceptually uniform colors:

```css
/* Background Colors */
--background: oklch(0.08 0.01 260)          /* Deep navy space */
--background-secondary: oklch(0.10 0.015 260)
--surface: oklch(0.12 0.02 260)              /* Card backgrounds */
--surface-elevated: oklch(0.15 0.025 260)    /* Elevated panels */
--glass: oklch(0.12 0.02 260 / 0.6)         /* Glassmorphism */
--glass-strong: oklch(0.15 0.025 260 / 0.8)

/* Glow Accent Colors */
--glow-blue: oklch(0.70 0.20 240)           /* Primary accent */
--glow-cyan: oklch(0.75 0.18 195)           /* Secondary accent */
--glow-purple: oklch(0.65 0.25 290)         /* Tertiary accent */
--glow-pink: oklch(0.70 0.25 340)           /* Highlight accent */
```

### Usage in Components

```tsx
// Using CSS variables via Tailwind
<div className="bg-background text-foreground">
  <div className="glass">Glass panel</div>
  <div className="text-gradient">Gradient text</div>
</div>
```

---

## 🔧 COMPONENT LIBRARY

### 1. GlassCard

Glassmorphic card with glow variants.

```tsx
import { GlassCard } from "@/components/shared/GlassCard";

// Basic usage
<GlassCard>
  <h3>Card Title</h3>
  <p>Card content here</p>
</GlassCard>

// With strong glass + blue glow
<GlassCard variant="strong" glow="blue">
  <p>Strong glass with blue glow</p>
</GlassCard>

// With hover lift effect
<GlassCard variant="subtle" glow="purple" hover>
  <p>Hover to see lift + glow</p>
</GlassCard>

// Custom styling
<GlassCard 
  variant="default" 
  glow="cyan"
  className="p-8 max-w-lg"
>
  <p>Custom styled card</p>
</GlassCard>
```

**Props:**
- `variant`: "default" | "strong" | "subtle"
- `glow`: "none" | "blue" | "purple" | "cyan"
- `hover`: boolean (enables lift + glow on hover)
- `className`: string

---

### 2. SpotlightCard

Interactive card with mouse-tracking spotlight effect.

```tsx
import { SpotlightCard } from "@/components/shared/SpotlightCard";

// Basic usage
<SpotlightCard>
  <h3>Interactive Card</h3>
  <p>Move your mouse over this card</p>
</SpotlightCard>

// With purple glow
<SpotlightCard glowColor="purple">
  <p>Purple spotlight effect</p>
</SpotlightCard>

// Custom styling
<SpotlightCard 
  glowColor="cyan"
  className="p-8 h-64"
>
  <h3>Project Card</h3>
  <p>Description here</p>
</SpotlightCard>
```

**Props:**
- `glowColor`: "blue" | "purple" | "cyan"
- `className`: string
- `children`: ReactNode

**Best For:**
- Project cards
- Feature showcases
- Interactive testimonials

---

### 3. GlowButton

Futuristic button with glow effects.

```tsx
import { GlowButton } from "@/components/shared/GlowButton";

// Primary button (gradient)
<GlowButton variant="primary">
  Get Started
</GlowButton>

// Secondary glass button with glow
<GlowButton variant="secondary" glow="blue">
  Learn More
</GlowButton>

// Ghost button
<GlowButton variant="ghost" glow="purple">
  View Details
</GlowButton>

// Sizes
<GlowButton size="sm">Small</GlowButton>
<GlowButton size="md">Medium</GlowButton>
<GlowButton size="lg">Large</GlowButton>

// Custom glow colors
<GlowButton glow="blue">Blue Glow</GlowButton>
<GlowButton glow="purple">Purple Glow</GlowButton>
<GlowButton glow="cyan">Cyan Glow</GlowButton>
```

**Props:**
- `variant`: "primary" | "secondary" | "ghost"
- `glow`: "blue" | "purple" | "cyan"
- `size`: "sm" | "md" | "lg"
- All standard button props

---

### 4. GradientText

Text with gradient coloring.

```tsx
import { GradientText } from "@/components/shared/GradientText";

// Default gradient (blue → purple)
<GradientText>
  Futuristic Portfolio
</GradientText>

// As heading
<GradientText as="h1" className="text-5xl font-bold">
  Building the Future
</GradientText>

// Cyan gradient
<GradientText variant="cyan">
  Cyan Gradient Text
</GradientText>

// Pink gradient
<GradientText variant="pink">
  Pink Gradient Text
</GradientText>
```

**Props:**
- `variant`: "default" | "cyan" | "pink"
- `as`: "h1" | "h2" | "h3" | "p" | "span"
- `className`: string

---

### 5. FloatingBadge

Tech labels and status indicators.

```tsx
import { FloatingBadge } from "@/components/shared/FloatingBadge";

// Default blue badge
<FloatingBadge>
  React
</FloatingBadge>

// Different colors
<FloatingBadge color="blue">Next.js</FloatingBadge>
<FloatingBadge color="purple">TypeScript</FloatingBadge>
<FloatingBadge color="cyan">Tailwind</FloatingBadge>
<FloatingBadge color="pink">Framer Motion</FloatingBadge>

// In a list
<div className="flex flex-wrap gap-2">
  <FloatingBadge color="blue">MERN Stack</FloatingBadge>
  <FloatingBadge color="purple">AI/ML</FloatingBadge>
  <FloatingBadge color="cyan">Cloud</FloatingBadge>
</div>
```

**Props:**
- `color`: "blue" | "purple" | "cyan" | "pink"
- `className`: string

---

### 6. AnimatedContainer

Wrapper for consistent entrance animations.

```tsx
import { AnimatedContainer } from "@/components/shared/AnimatedContainer";

// Default fade up
<AnimatedContainer>
  <p>This fades up on mount</p>
</AnimatedContainer>

// Different animations
<AnimatedContainer animation="fadeIn">Fade in</AnimatedContainer>
<AnimatedContainer animation="scaleIn">Scale in</AnimatedContainer>
<AnimatedContainer animation="slideLeft">Slide from left</AnimatedContainer>
<AnimatedContainer animation="slideRight">Slide from right</AnimatedContainer>

// With delay
<AnimatedContainer delay={0.2}>
  <p>Appears after 200ms</p>
</AnimatedContainer>

// Staggered children
<div className="space-y-4">
  <AnimatedContainer delay={0}>Item 1</AnimatedContainer>
  <AnimatedContainer delay={0.1}>Item 2</AnimatedContainer>
  <AnimatedContainer delay={0.2}>Item 3</AnimatedContainer>
</div>
```

**Props:**
- `animation`: "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight"
- `delay`: number (seconds)
- `className`: string

---

### 7. SectionWrapper

Consistent section spacing with background options.

```tsx
import { SectionWrapper } from "@/components/shared/SectionWrapper";

// Default section
<SectionWrapper id="projects">
  <h2>Projects</h2>
  <p>Content here</p>
</SectionWrapper>

// With mesh gradient background
<SectionWrapper background="mesh">
  <h2>Skills</h2>
  <p>Skills content</p>
</SectionWrapper>

// With grid overlay
<SectionWrapper background="grid">
  <h2>Experience</h2>
</SectionWrapper>

// Gradient background
<SectionWrapper background="gradient">
  <h2>Contact</h2>
</SectionWrapper>

// Custom styling
<SectionWrapper 
  id="about" 
  background="mesh"
  className="py-40"
>
  <div className="max-w-4xl mx-auto">
    <h1>About Me</h1>
  </div>
</SectionWrapper>
```

**Props:**
- `background`: "default" | "mesh" | "grid" | "gradient"
- `id`: string (section ID for navigation)
- `className`: string

---

### 8. GlowBorder

Animated or static glow borders.

```tsx
import { GlowBorder } from "@/components/shared/GlowBorder";

// Static blue glow
<GlowBorder color="blue">
  <p>Content with blue glow border</p>
</GlowBorder>

// Animated rotating gradient border
<GlowBorder animated>
  <p>Animated gradient border</p>
</GlowBorder>

// Different colors
<GlowBorder color="purple">Purple glow</GlowBorder>
<GlowBorder color="cyan">Cyan glow</GlowBorder>
```

**Props:**
- `color`: "blue" | "purple" | "cyan"
- `animated`: boolean (enables rotating gradient)
- `className`: string

---

## 🎨 CSS UTILITIES

### Background Utilities

```tsx
// Mesh gradient background
<div className="bg-mesh">
  {/* Multi-color radial gradients */}
</div>

// Grid overlay
<div className="grid-overlay">
  {/* 60px grid pattern */}
</div>

// Glow blobs (position absolutely)
<div className="relative">
  <div className="glow-blob glow-blob--blue w-96 h-96 top-0 left-0" />
  <div className="glow-blob glow-blob--purple w-80 h-80 bottom-0 right-0" />
  <div className="glow-blob glow-blob--cyan w-72 h-72 top-1/2 left-1/2" />
</div>

// Noise texture
<div className="noise">
  {/* Subtle film grain overlay */}
</div>
```

### Glass Utilities

```tsx
// Default glass
<div className="glass">
  {/* backdrop-filter: blur(16px) */}
</div>

// Strong glass (more opaque)
<div className="glass-strong">
  {/* backdrop-filter: blur(24px) */}
</div>

// Subtle glass (more transparent)
<div className="glass-subtle">
  {/* backdrop-filter: blur(12px) */}
</div>
```

### Glow Utilities

```tsx
// Glow borders
<div className="glow-border-blue">Blue glow border</div>
<div className="glow-border-purple">Purple glow border</div>
<div className="glow-border-cyan">Cyan glow border</div>

// Glow shadows
<div className="glow-shadow-blue">Blue glow shadow</div>
<div className="glow-shadow-purple">Purple glow shadow</div>
<div className="glow-shadow-cyan">Cyan glow shadow</div>

// Pulsing glow
<div className="glow-pulse">Animated pulse</div>

// Animated gradient
<div className="glow-gradient">Moving gradient</div>
```

### Typography Utilities

```tsx
// Gradient text
<h1 className="text-gradient">Blue-purple gradient</h1>
<h1 className="text-gradient-cyan">Cyan gradient</h1>
<h1 className="text-gradient-pink">Pink gradient</h1>

// Glow text
<h1 className="text-glow-blue">Blue text glow</h1>
<h1 className="text-glow-purple">Purple text glow</h1>
<h1 className="text-glow-cyan">Cyan text glow</h1>

// Technical label
<span className="text-tech">v1.0.0</span>
```

### Interaction Utilities

```tsx
// Hover lift effect
<div className="hover-lift">
  {/* Lifts on hover with shadow */}
</div>

// Hover glow effects
<div className="hover-glow-blue">Blue glow on hover</div>
<div className="hover-glow-purple">Purple glow on hover</div>
<div className="hover-glow-cyan">Cyan glow on hover</div>

// Animated rotating border
<div className="animated-border">
  {/* Rotating gradient border */}
</div>
```

---

## 🎬 ANIMATION SYSTEM

### Entrance Animations

```tsx
import { 
  fadeUp, 
  fadeIn, 
  scaleIn, 
  slideLeft, 
  slideRight,
  slideUp,
  viewportConfig 
} from "@/lib/animations";

// Using variants directly
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={viewportConfig}
  variants={fadeUp}
>
  Content
</motion.div>
```

### Stagger Animations

```tsx
import { staggerContainer, staggerChild } from "@/lib/animations";

// Container with staggered children
<motion.div
  initial="hidden"
  whileInView="visible"
  variants={staggerContainer(0.1)}
>
  <motion.div variants={staggerChild}>Item 1</motion.div>
  <motion.div variants={staggerChild}>Item 2</motion.div>
  <motion.div variants={staggerChild}>Item 3</motion.div>
</motion.div>
```

### Hover Interactions

```tsx
import { hoverLift, hoverScale, springTransition } from "@/lib/animations";

// Lift on hover
<motion.div
  whileHover={hoverLift.whileHover}
  whileTap={hoverLift.whileTap}
>
  Hover me
</motion.div>

// Scale on hover with spring
<motion.div
  whileHover={{ scale: 1.02 }}
  transition={springTransition}
>
  Scale me
</motion.div>
```

### Special Animations

```tsx
import { float, pulse, reveal } from "@/lib/animations";

// Floating element
<motion.div
  initial="initial"
  animate="animate"
  variants={float}
>
  Floats up and down
</motion.div>

// Pulse animation
<motion.div variants={pulse}>
  Subtle pulse effect
</motion.div>

// Reveal animation
<motion.div
  initial="hidden"
  animate="visible"
  variants={reveal}
>
  Reveals with clip-path
</motion.div>
```

---

## 📐 LAYOUT PATTERNS

### Section with Mesh Background

```tsx
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { GlassCard } from "@/components/shared/GlassCard";

<SectionWrapper id="projects" background="mesh">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <GlassCard glow="blue" hover>
      <h3>Project 1</h3>
      <p>Description</p>
    </GlassCard>
    <GlassCard glow="purple" hover>
      <h3>Project 2</h3>
      <p>Description</p>
    </GlassCard>
  </div>
</SectionWrapper>
```

### Feature Grid with Spotlight

```tsx
import { SpotlightCard } from "@/components/shared/SpotlightCard";

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <SpotlightCard glowColor="blue">
    <h3>Fast</h3>
    <p>Lightning performance</p>
  </SpotlightCard>
  <SpotlightCard glowColor="purple">
    <h3>Secure</h3>
    <p>Enterprise security</p>
  </SpotlightCard>
  <SpotlightCard glowColor="cyan">
    <h3>Scalable</h3>
    <p>Grow infinitely</p>
  </SpotlightCard>
</div>
```

### Hero with Gradient Text

```tsx
import { GradientText } from "@/components/shared/GradientText";
import { GlowButton } from "@/components/shared/GlowButton";
import { FloatingBadge } from "@/components/shared/FloatingBadge";

<section className="py-32">
  <div className="flex flex-wrap gap-3 mb-6">
    <FloatingBadge color="blue">Next.js 16</FloatingBadge>
    <FloatingBadge color="purple">TypeScript</FloatingBadge>
    <FloatingBadge color="cyan">AI-Powered</FloatingBadge>
  </div>
  
  <h1 className="text-6xl font-bold mb-6">
    Building <GradientText>Futuristic</GradientText> Experiences
  </h1>
  
  <p className="text-foreground-muted text-xl max-w-2xl mb-8">
    Crafting premium digital experiences with modern technologies
  </p>
  
  <div className="flex gap-4">
    <GlowButton variant="primary" size="lg">
      Get Started
    </GlowButton>
    <GlowButton variant="secondary" glow="purple" size="lg">
      Learn More
    </GlowButton>
  </div>
</section>
```

---

## 🎯 PERFORMANCE CONSIDERATIONS

### GPU-Accelerated Animations

All animations use `transform` and `opacity` properties:
```tsx
// ✅ Good - GPU accelerated
<motion.div animate={{ y: -10, opacity: 0.8 }} />

// ❌ Bad - Triggers layout
<motion.div animate={{ height: 200 }} />
```

### Reduced Motion Support

System respects `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  animation-duration: 0.01ms !important;
  transition-duration: 0.01ms !important;
}
```

### Blur Performance

Use blur sparingly on large elements:
```tsx
// ✅ Good - Small elements
<div className="glass">Small card</div>

// ⚠️ Caution - Large backgrounds
<div className="backdrop-blur-xl">Large section</div>
```

### Image Optimization

When adding images later:
```tsx
<Image 
  src="/image.jpg" 
  width={800} 
  height={600}
  sizes="(max-width: 768px) 100vw, 800px"
  placeholder="blur"
/>
```

---

## 🔮 FUTURE SCALABILITY

### Adding New Glow Colors

1. Add CSS variable to `@theme` in `globals.css`:
```css
--glow-orange: oklch(0.75 0.25 50);
```

2. Add utility class:
```css
.glow-border-orange {
  box-shadow: 0 0 30px oklch(0.75 0.25 50 / 0.4);
  border: 1px solid oklch(0.75 0.25 50 / 0.5);
}
```

3. Update component types:
```tsx
glow?: "blue" | "purple" | "cyan" | "orange"
```

### Adding New Animations

1. Add to `lib/animations.ts`:
```tsx
export const customAnimation: Variants = {
  hidden: { ... },
  visible: { ... }
};
```

2. Use in components:
```tsx
<motion.div variants={customAnimation} />
```

### Theme Support

Light mode ready (currently dark-first):
```tsx
// Toggle in ThemeContext
document.documentElement.classList.toggle("dark");
```

Override light theme variables:
```css
:root {
  --background: oklch(0.98 0 0);
  --foreground: oklch(0.10 0.01 260);
  /* ... */
}
```

---

## 📊 COMPONENT DECISION MATRIX

| Component | Use Case | Performance | Complexity |
|-----------|----------|-------------|------------|
| GlassCard | Content containers, panels | ⭐⭐⭐⭐ | Low |
| SpotlightCard | Interactive cards, projects | ⭐⭐⭐ | Medium |
| GlowButton | CTAs, navigation | ⭐⭐⭐⭐⭐ | Low |
| GradientText | Headings, highlights | ⭐⭐⭐⭐⭐ | Low |
| FloatingBadge | Tech stacks, labels | ⭐⭐⭐⭐⭐ | Low |
| AnimatedContainer | Section entrances | ⭐⭐⭐⭐ | Low |
| SectionWrapper | Page sections | ⭐⭐⭐⭐⭐ | Low |
| GlowBorder | Special highlights | ⭐⭐⭐⭐ | Medium |

---

## 🎨 DESIGN PRINCIPLES

1. **Dark-First**: Optimized for dark mode, light mode secondary
2. **Subtle Glow**: Premium feel without excessive bloom
3. **Consistent Spacing**: 120px sections, 24px containers
4. **Cinematic Motion**: Smooth, physics-inspired animations
5. **Accessible**: WCAG 2.1 AA compliant, reduced motion support
6. **Performance**: GPU-accelerated, minimal layout thrashing
7. **Scalable**: Easy to extend with new colors, animations, components

---

## ✅ NEXT STEPS (Phase 2+)

Now that the design system is complete:

1. **Phase 2**: Redesign Hero section using new components
2. **Phase 3**: Redesign Projects section with SpotlightCards
3. **Phase 4**: Add particle backgrounds with tsparticles
4. **Phase 5**: Implement GSAP scroll animations
5. **Phase 6**: Add Lenis smooth scrolling
6. **Phase 7**: Implement advanced interactions (magnetic hover, etc.)

**The foundation is production-ready and looks futuristic immediately.**
