// Shared Framer Motion presets for consistent section + element reveals.

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

export function fadeUp({ distance = 24, duration = 0.7, delay = 0 } = {}) {
  return {
    hidden: { opacity: 0, y: distance },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: EASE_OUT_EXPO },
    },
  };
}

export function fadeIn({ duration = 0.6, delay = 0 } = {}) {
  return {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration, delay, ease: EASE_OUT_EXPO } },
  };
}

export function staggerContainer({ stagger = 0.08, delayChildren = 0.05 } = {}) {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

export const VIEWPORT_ONCE = { once: true, amount: 0.2 };

export function scaleIn({ duration = 0.6, delay = 0, initialScale = 0.95 } = {}) {
  return {
    hidden: { opacity: 0, scale: initialScale },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration, delay, ease: EASE_OUT_EXPO },
    },
  };
}

export function slideIn({ direction = "left", distance = 40, duration = 0.8, delay = 0 } = {}) {
  const x = direction === "left" ? -distance : direction === "right" ? distance : 0;
  const y = direction === "up" ? distance : direction === "down" ? -distance : 0;
  
  return {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0, y: 0,
      transition: { duration, delay, ease: EASE_OUT_EXPO },
    },
  };
}

export function reveal({ duration = 0.8, delay = 0 } = {}) {
  return {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    show: {
      clipPath: "inset(0 0% 0 0)",
      transition: { duration, delay, ease: EASE_OUT_EXPO },
    },
  };
}

