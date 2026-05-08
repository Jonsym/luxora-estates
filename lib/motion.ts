/**
 * Shared motion vocabulary so every section uses the same
 * easing curve and timing scale.
 */

import type { Transition, Variants } from "framer-motion";

/** Long-tail ease used throughout — calm, expensive, never abrupt. */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

/** Speeds — apply via transition.duration or as CSS class durations. */
export const DURATION = {
  /** Hover, focus, color shifts. */
  quick: 0.45,
  /** Reveals, surface changes. */
  base: 0.8,
  /** Crossfades, larger transitions. */
  slow: 1.1,
  /** Image zooms, hero entrances. */
  cinematic: 1.4,
} as const;

/** Where reveals trigger relative to the viewport. */
export const REVEAL_VIEWPORT = {
  once: true,
  margin: "0px 0px -10% 0px",
} as const;

export const transition = (overrides: Transition = {}): Transition => ({
  duration: DURATION.base,
  ease: EASE_OUT,
  ...overrides,
});

/** Standard fade-up reveal variants. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: transition() },
};
