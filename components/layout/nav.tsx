"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { DURATION, EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";
import { Wordmark } from "./wordmark";
import { navCta, navLinks } from "./nav-config";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  // Smooth scroll-driven glass: opacity ramps 0→1 across 0–96px,
  // hairline border lags slightly so it appears once the surface is real.
  const glassOpacity = useTransform(scrollY, [0, 96], [0, 1]);
  const borderOpacity = useTransform(scrollY, [16, 96], [0, 1]);
  const navY = useTransform(scrollY, [0, 96], [0, -2]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: DURATION.slow, ease: EASE_OUT, delay: 0.1 }}
        style={{ y: navY }}
        className="fixed inset-x-0 top-0 z-50"
      >
        {/* Glass surface that fades in on scroll. */}
        <motion.div
          aria-hidden
          style={{ opacity: glassOpacity }}
          className="bg-background/55 supports-[backdrop-filter]:bg-background/40 absolute inset-0 supports-[backdrop-filter]:backdrop-blur-2xl supports-[backdrop-filter]:saturate-150"
        />
        <motion.div
          aria-hidden
          style={{ opacity: borderOpacity }}
          className="bg-hairline absolute inset-x-0 bottom-0 h-px"
        />

        <div className="relative mx-auto flex h-[64px] w-full max-w-[88rem] items-center justify-between px-5 sm:h-[68px] sm:px-8 lg:h-20 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-12">
          <div className="flex items-center lg:justify-self-start">
            <Wordmark />
          </div>

          <nav
            aria-label="Principal"
            className="hidden lg:flex lg:items-center lg:justify-self-center"
          >
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative inline-flex items-center px-5 py-2 text-sm tracking-wide rounded-full"
                  >
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      {link.label}
                    </span>
                    <span
                      aria-hidden
                      className="bg-gold pointer-events-none absolute inset-x-5 bottom-1 h-px origin-left scale-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 lg:justify-self-end">
            <Link
              href={navCta.href}
              className={cn(
                "group relative hidden items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-medium",
                "border-hairline border transition-[background-color,border-color,transform] duration-500",
                "hover:border-gold/70 hover:bg-gold/5 active:scale-[0.98] lg:inline-flex",
              )}
            >
              <span className="bg-gold size-1.5 rounded-full transition-transform duration-500 group-hover:scale-125" />
              <span>{navCta.label}</span>
              <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
              className="border-hairline hover:bg-secondary active:scale-95 inline-flex h-10 w-10 items-center justify-center rounded-full border transition-[background-color,transform] duration-300 sm:h-11 sm:w-11 lg:hidden"
            >
              <Menu className="size-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
