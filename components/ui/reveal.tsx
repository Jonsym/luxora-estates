"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { DURATION, EASE_OUT, REVEAL_VIEWPORT } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Distance the element travels in px on entrance. */
  y?: number;
  /** Whether to stagger children that are wrapped in `<RevealItem>`. */
  stagger?: boolean;
  /** Stagger gap in seconds. */
  staggerDelay?: number;
  /** When children spans full width (e.g. grids), keep wrapper as block. */
  as?: "div" | "section" | "ul" | "ol" | "header" | "footer" | "article";
  /** Animation duration in seconds. */
  duration?: number;
  /** Restart animation when re-entering the viewport. */
  replay?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  stagger = false,
  staggerDelay = 0.09,
  as = "div",
  duration = DURATION.base,
  replay = false,
}: RevealProps) {
  const reduced = useReducedMotion();
  const distance = reduced ? 0 : y;

  const parent: Variants = stagger
    ? {
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: EASE_OUT,
            delay,
            staggerChildren: staggerDelay,
            delayChildren: delay + 0.08,
          },
        },
      }
    : {
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: EASE_OUT, delay },
        },
      };

  const MotionTag = motion[as];
  const viewport = replay
    ? { once: false, margin: REVEAL_VIEWPORT.margin }
    : REVEAL_VIEWPORT;

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={parent}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  y = 22,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li" | "p" | "span" | "h1" | "h2" | "h3";
}) {
  const reduced = useReducedMotion();
  const distance = reduced ? 0 : y;

  const variants: Variants = {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.base, ease: EASE_OUT },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag variants={variants} className={cn(className)}>
      {children}
    </MotionTag>
  );
}
