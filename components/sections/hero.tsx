"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { DURATION, EASE_OUT } from "@/lib/motion";
import { heroImage } from "@/lib/data";

export function Hero() {
  const reduced = useReducedMotion();
  const offset = reduced ? 0 : 28;

  // Parallax: image drifts down ~120px across the hero's lifetime,
  // and the foreground content drifts up ~60px so the eye is led into the page.
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 900], reduced ? [0, 0] : [0, 140]);
  const bgScale = useTransform(scrollY, [0, 900], reduced ? [1, 1] : [1, 1.06]);
  const contentY = useTransform(
    scrollY,
    [0, 600],
    reduced ? [0, 0] : [0, -40],
  );
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0.55]);

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      {/* Background image stack with parallax */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="absolute -inset-y-16 inset-x-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: reduced ? 1 : 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: DURATION.cinematic, ease: EASE_OUT }}
            className="relative h-full w-full"
          >
            <Image
              src={heroImage}
              alt="Villa contemporánea sobre el Mediterráneo al amanecer"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Tonal stack */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(120%_80%_at_28%_30%,oklch(0.135_0.006_80/0.55)_0%,oklch(0.135_0.006_80/0.85)_55%,oklch(0.135_0.006_80/0.95)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent via-background/40 to-background"
        />
        {/* Subtle film grain via SVG noise (extremely low alpha) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />
      </div>

      {/* Hero content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative flex flex-1 flex-col"
      >
        <Container className="relative flex flex-1 items-center pt-28 pb-28 sm:pt-36 sm:pb-32 lg:pt-44 lg:pb-40">
          <div className="flex w-full flex-col gap-10 sm:gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: offset }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: DURATION.base,
                ease: EASE_OUT,
                delay: 0.35,
              }}
              className="flex items-center gap-4"
            >
              <span className="bg-gold size-1.5 rounded-full" />
              <span className="text-muted-foreground text-[0.65rem] uppercase tracking-[0.32em] sm:text-[0.7rem]">
                Luxora — Desde 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: offset }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: DURATION.cinematic,
                ease: EASE_OUT,
                delay: 0.5,
              }}
              className="font-display text-balance text-[clamp(2.8rem,10.5vw,9.5rem)] font-light leading-[0.94] tracking-[-0.025em]"
            >
              Patrimonios
              <br />
              <span className="text-gold italic">de excepción.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: offset }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: DURATION.slow,
                ease: EASE_OUT,
                delay: 0.65,
              }}
              className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
            >
              <div className="flex items-start gap-5 sm:gap-6">
                <div className="gold-rule mt-3 hidden h-px w-16 sm:block lg:w-20" />
                <p className="text-muted-foreground text-pretty max-w-md text-[0.95rem] leading-relaxed sm:text-base lg:text-lg">
                  Una colección curada de las residencias más extraordinarias
                  del mundo. Representación privada, rigor arquitectónico y
                  servicio discreto.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-4">
                <Link
                  href="#colecciones"
                  className="border-gold/60 hover:bg-gold hover:text-primary-foreground active:scale-[0.98] group inline-flex h-12 items-center gap-3 rounded-full border px-6 text-sm font-medium tracking-wide transition-[background-color,color,transform] duration-500 sm:px-7"
                >
                  Explorar la colección
                  <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="#contacto"
                  className="text-foreground/85 hover:text-foreground group inline-flex items-center gap-3 px-1 py-2 text-sm tracking-wide transition-colors"
                >
                  <span className="bg-foreground/40 size-1 rounded-full transition-colors group-hover:bg-gold" />
                  Concertar una conversación
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>

        {/* Bottom meta strip — count + scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: DURATION.slow,
            ease: EASE_OUT,
            delay: 1.0,
          }}
          className="relative"
        >
          <Container className="flex flex-col gap-5 pb-8 sm:flex-row sm:items-center sm:justify-between sm:pb-10 lg:pb-12">
            <div className="text-muted-foreground/80 flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.32em] sm:text-[0.7rem]">
              <span className="bg-hairline h-px w-10" />
              <span>47 fincas · 23 países</span>
            </div>
            <div className="text-muted-foreground/70 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] sm:text-[0.7rem]">
              <span>Desplázate</span>
              <motion.span
                animate={reduced ? {} : { y: [0, 5, 0] }}
                transition={{
                  duration: 2.4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="inline-flex"
              >
                <ArrowDown className="size-3.5" strokeWidth={1.5} />
              </motion.span>
            </div>
          </Container>
        </motion.div>
      </motion.div>
    </section>
  );
}
