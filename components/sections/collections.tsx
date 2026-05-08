"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { collections } from "@/lib/data";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Collections() {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const reduced = useReducedMotion();
  const active = hoverIdx ?? 0;

  return (
    <Section id="colecciones" className="relative">
      <Container>
        <SectionHeader
          number="02"
          eyebrow="Por temperamento"
          title="Colecciones"
          titleAccent="por geografía."
          lede="Cuatro selecciones temáticas que reúnen residencias por carácter, paisaje y modo de vida."
        />

        <div className="mt-20 grid grid-cols-1 gap-12 sm:mt-28 lg:mt-32 lg:grid-cols-12 lg:gap-16">
          {/* Left: editorial list */}
          <ul
            className="lg:col-span-7"
            onMouseLeave={() => setHoverIdx(null)}
          >
            {collections.map((c, i) => {
              const isActive = i === hoverIdx;
              return (
                <li
                  key={c.number}
                  className="border-hairline border-b last:border-b-0"
                >
                  <Link
                    href={`#${c.name.toLowerCase().replace(/\s+/g, "-")}`}
                    onMouseEnter={() => setHoverIdx(i)}
                    onFocus={() => setHoverIdx(i)}
                    className={cn(
                      "group grid grid-cols-12 items-center gap-4 py-8 transition-[padding] duration-500 sm:py-10",
                      isActive && "lg:pl-4",
                    )}
                  >
                    <span
                      className={cn(
                        "col-span-2 font-mono text-xs tracking-[0.2em] transition-colors duration-500 sm:col-span-1",
                        isActive
                          ? "text-gold"
                          : "text-muted-foreground/60",
                      )}
                    >
                      {c.number}
                    </span>
                    <h3
                      className={cn(
                        "font-display col-span-10 text-balance text-2xl font-light leading-tight transition-[color,letter-spacing] duration-500 sm:col-span-5 sm:text-4xl lg:text-[2.6rem]",
                        isActive && "text-gold",
                      )}
                    >
                      {c.name}
                    </h3>
                    <p className="text-muted-foreground/85 col-span-12 text-sm sm:col-span-3">
                      {c.scope}
                    </p>
                    <div className="text-muted-foreground/70 col-span-10 text-sm sm:col-span-2">
                      {c.count}{" "}
                      <span className="text-muted-foreground/50">
                        propiedades
                      </span>
                    </div>
                    <ArrowUpRight
                      className={cn(
                        "col-span-2 ml-auto size-5 transition-all duration-500 sm:col-span-1",
                        isActive
                          ? "text-gold translate-x-0.5 -translate-y-0.5"
                          : "text-muted-foreground/40",
                      )}
                      strokeWidth={1.25}
                    />

                    {/* Inline preview for mobile */}
                    <div className="col-span-12 lg:hidden">
                      <div
                        className={cn(
                          "relative mt-4 w-full overflow-hidden rounded-sm aspect-[16/9] transition-opacity",
                        )}
                      >
                        <Image
                          src={c.image}
                          alt={c.imageAlt}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                        <div
                          aria-hidden
                          className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"
                        />
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right: sticky preview pane (lg+ only) */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-32">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: reduced ? 1 : 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={collections[active].image}
                      alt={collections[active].imageAlt}
                      fill
                      sizes="40vw"
                      className="object-cover"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
                  <div>
                    <p className="text-muted-foreground/80 text-[0.65rem] uppercase tracking-[0.32em]">
                      Vista previa
                    </p>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={active}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease }}
                        className="font-display mt-1 text-xl"
                      >
                        {collections[active].name}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  <span className="bg-gold/90 text-primary-foreground inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.24em]">
                    {collections[active].count} propiedades
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
