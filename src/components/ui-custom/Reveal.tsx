"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Editorial scroll reveal — small upward fade, once on viewport entry.
 * Honors prefers-reduced-motion by rendering without motion.
 */
export function Reveal({ children, className, delay = 0, y = 16 }: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Staggered container for hero-style sequences. */
export function RevealSequence({
  children,
  className,
  step = 0.09,
  initialDelay = 0.05,
}: {
  children: ReactNode[];
  className?: string;
  step?: number;
  initialDelay?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={className}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: EASE,
            delay: initialDelay + i * step,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
