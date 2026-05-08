"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { EASE_OUT } from "@/lib/motion";

/**
 * Brief curtain that fades out on first paint so the page "opens"
 * instead of arriving. Skipped entirely under reduced motion.
 */
export function Intro() {
  const reduced = useReducedMotion();
  const [show, setShow] = useState(!reduced);

  useEffect(() => {
    if (reduced) return;
    const t = window.setTimeout(() => setShow(false), 350);
    return () => window.clearTimeout(t);
  }, [reduced]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
          className="bg-background pointer-events-none fixed inset-0 z-[100]"
        >
          {/* Subtle hairline grows across as the curtain fades — a small
              editorial flourish during the open. */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
            className="bg-gold/70 absolute left-1/2 top-1/2 h-px w-32 origin-center -translate-x-1/2 -translate-y-1/2"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
