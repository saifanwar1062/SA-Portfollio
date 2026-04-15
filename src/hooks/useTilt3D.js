import { useRef } from "react";
import { useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Enhanced 3D tilt effect with physics
 * @param {Object} options 
 * @param {number} options.max - Maximum rotation in degrees
 * @param {Object} options.spring - Spring configuration
 * @param {number} options.scale - Scale on hover
 */
export function useTilt3D({
  max = 8,
  spring = { stiffness: 220, damping: 18 },
  scale = 1.05
} = {}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const rX = useMotionValue(0);
  const rY = useMotionValue(0);
  const scaleVal = useMotionValue(1);

  const rotateX = useSpring(rX, spring);
  const rotateY = useSpring(rY, spring);
  const scaleSpring = useSpring(scaleVal, spring);

  const onPointerMove = (e) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    rX.set(-py * max);
    rY.set(px * max);
    scaleVal.set(scale);
  };

  const onPointerLeave = () => {
    rX.set(0);
    rY.set(0);
    scaleVal.set(1);
  };

  return {
    ref,
    rotateX,
    rotateY,
    scale: scaleSpring,
    style: {
      rotateX,
      rotateY,
      scale: scaleSpring,
      willChange: "transform",
      transformStyle: "preserve-3d",
    },
    onPointerMove,
    onPointerLeave,
    reduce,
  };
}
