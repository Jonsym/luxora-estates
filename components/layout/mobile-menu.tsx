"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";

import { DURATION, EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { navCta, navLinks } from "./nav-config";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const overlayVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { duration: DURATION.quick, ease: EASE_OUT },
  },
};

const panelVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: {
      duration: DURATION.base,
      ease: EASE_OUT,
      staggerChildren: 0.07,
      delayChildren: 0.14,
    },
  },
};

const itemVariants = {
  closed: { y: 28, opacity: 0 },
  open: {
    y: 0,
    opacity: 1,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};

const ruleVariants = {
  closed: { scaleX: 0 },
  open: {
    scaleX: 1,
    transition: { duration: 0.9, ease: EASE_OUT, delay: 0.05 },
  },
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Lock body scroll while open and close on ESC.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navegación principal"
          initial="closed"
          animate="open"
          exit="closed"
          variants={overlayVariants}
          className="bg-background/95 supports-[backdrop-filter]:bg-background/85 fixed inset-0 z-[60] supports-[backdrop-filter]:backdrop-blur-2xl supports-[backdrop-filter]:saturate-150 lg:hidden"
        >
          <motion.div
            variants={panelVariants}
            className="flex h-[100dvh] w-full flex-col px-6 pt-5 pb-10 sm:px-10 sm:pt-6"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-between"
            >
              <span className="text-muted-foreground text-[0.65rem] uppercase tracking-[0.32em]">
                Menú
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar menú"
                className="border-hairline hover:bg-secondary active:scale-95 group flex h-10 w-10 items-center justify-center rounded-full border transition-[background-color,transform] duration-300 sm:h-11 sm:w-11"
              >
                <X
                  className="size-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-90"
                  strokeWidth={1.5}
                />
              </button>
            </motion.div>

            {/* Sweeping gold rule, an editorial entrance signature */}
            <motion.div
              variants={ruleVariants}
              style={{ originX: 0 }}
              className="bg-gold/60 mt-6 h-px w-full"
            />

            <nav
              aria-label="Principal"
              className="mt-8 flex flex-1 flex-col justify-center sm:mt-12"
            >
              <ul className="space-y-1 sm:space-y-2">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={itemVariants}
                    className="border-hairline overflow-hidden border-b last:border-b-0"
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        "group flex items-baseline justify-between gap-6 py-4 sm:py-7",
                        "font-display text-balance text-[clamp(2.4rem,11vw,3.6rem)] font-light leading-[1.05]",
                        "sm:text-6xl",
                      )}
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="text-muted-foreground/60 font-mono text-xs tracking-[0.2em]">
                          {link.meta}
                        </span>
                        <span className="transition-colors duration-500 group-hover:text-gold">
                          {link.label}
                        </span>
                      </span>
                      <ArrowUpRight
                        className={cn(
                          "text-muted-foreground/50 size-6 -translate-y-1",
                          "transition-[color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                          "group-hover:translate-x-1 group-hover:-translate-y-2 group-hover:text-gold",
                        )}
                        strokeWidth={1.25}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col gap-8 sm:mt-12"
            >
              <div className="gold-rule h-px w-20" />
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="space-y-2">
                  <p className="text-muted-foreground text-[0.65rem] uppercase tracking-[0.32em]">
                    Oficina privada
                  </p>
                  <p className="font-display text-2xl leading-tight">
                    Aspen · Costa Azul · Kyoto
                  </p>
                  <a
                    href="mailto:office@luxoraestates.com"
                    className="text-muted-foreground hover:text-foreground inline-block text-sm transition-colors"
                  >
                    office@luxoraestates.com
                  </a>
                </div>
                <Link
                  href={navCta.href}
                  onClick={onClose}
                  className={cn(
                    "border-gold/60 hover:bg-gold hover:text-primary-foreground group inline-flex h-12 items-center justify-center gap-3",
                    "self-start rounded-full border px-7 text-sm font-medium tracking-wide",
                    "transition-[background-color,color,transform] duration-500 active:scale-[0.97] sm:self-auto",
                  )}
                >
                  {navCta.label}
                  <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
