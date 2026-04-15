import React from "react";
import { motion } from "framer-motion";
import { VIEWPORT_ONCE, staggerContainer } from "./presets";

export default function MotionSection({
  as: Tag = "section",
  className,
  id,
  children,
  stagger = 0.08,
  delayChildren = 0.05,
  viewport = VIEWPORT_ONCE,
}) {
  const Comp = motion.create(Tag);

  return (
    <Comp
      id={id}
      className={className}
      variants={staggerContainer({ stagger, delayChildren })}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </Comp>
  );
}

