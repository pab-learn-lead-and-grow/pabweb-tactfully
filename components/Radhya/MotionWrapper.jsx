"use client";

import { motion } from "framer-motion";

export default function MotionWrapper({
  children,
  initial,
  whileInView,
  animate,
  transition,
  className,
  as = "div" // ✅ default
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      initial={initial}
      whileInView={whileInView}
      animate={animate}
      transition={transition}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}