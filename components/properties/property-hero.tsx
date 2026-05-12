"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowLeft, Images } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/layout/container";
import { DURATION, EASE_OUT } from "@/lib/motion";
import type { Property } from "@/lib/data";

import { PropertyGalleryModal } from "./property-gallery-modal";

export function PropertyHero({ property }: { property: Property }) {
  const reduced = useReducedMotion();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Hero gallery = main image + extra gallery images
  const heroGallery = [
    { src: property.image, alt: property.imageAlt },
    ...property.gallery,
  ];

  return (
    <>
      <section className="relative isolate flex min-h-[88vh] flex-col overflow-hidden">
        {/* Background image with cinematic Ken-Burns entrance */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            initial={{ opacity: 0, scale: reduced ? 1 : 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: DURATION.cinematic + 0.4, ease: EASE_OUT }}
            className="relative h-full w-full"
          >
            <Image
              src={property.image}
              alt={property.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(120%_80%_at_30%_20%,oklch(0.975_0.006_80/0.20)_0%,oklch(0.975_0.006_80/0.62)_60%,oklch(0.975_0.006_80/0.94)_100%)]"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent via-background/55 to-background"
          />
        </div>

        {/* Top bar — back link */}
        <Container className="relative pt-28 sm:pt-32 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.base, ease: EASE_OUT, delay: 0.4 }}
          >
            <Link
              href="/properties"
              className="text-muted-foreground hover:text-foreground group inline-flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.32em] transition-colors"
            >
              <ArrowLeft
                className="size-3.5 transition-transform duration-500 group-hover:-translate-x-0.5"
                strokeWidth={1.5}
              />
              Volver al catálogo
            </Link>
          </motion.div>
        </Container>

        {/* Bottom content — overlay */}
        <div className="relative mt-auto">
          <Container className="flex flex-col gap-10 pb-12 sm:pb-16 lg:pb-20">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
              <div className="flex flex-col gap-6 lg:max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: DURATION.base,
                    ease: EASE_OUT,
                    delay: 0.55,
                  }}
                  className="flex flex-wrap items-center gap-3"
                >
                  <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.24em]">
                    <span className="bg-gold size-1 rounded-full" />
                    {property.type} · {property.region}
                  </span>
                  {property.status === "Reservada" && (
                    <span className="glass-strong inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.24em]">
                      <span className="bg-foreground/60 size-1 rounded-full" />
                      Reservada
                    </span>
                  )}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: DURATION.cinematic,
                    ease: EASE_OUT,
                    delay: 0.7,
                  }}
                  className="font-display text-balance text-[clamp(2.6rem,8vw,7rem)] font-light leading-[0.95] tracking-[-0.025em]"
                >
                  {property.name}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: DURATION.base,
                    ease: EASE_OUT,
                    delay: 0.85,
                  }}
                  className="text-muted-foreground text-pretty max-w-xl text-base leading-relaxed sm:text-lg"
                >
                  {property.location} · {property.country}
                </motion.p>
              </div>

              {/* Gallery trigger */}
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: DURATION.base,
                  ease: EASE_OUT,
                  delay: 0.95,
                }}
                onClick={() => {
                  setGalleryIndex(0);
                  setGalleryOpen(true);
                }}
                className="glass-strong group flex items-center gap-4 rounded-full px-5 py-3 text-sm transition-[background-color] duration-500 active:scale-[0.98] hover:bg-gold/15 self-start"
              >
                <span className="border-hairline flex size-9 items-center justify-center rounded-full border">
                  <Images className="size-4" strokeWidth={1.5} />
                </span>
                <span className="flex flex-col items-start gap-0.5">
                  <span className="text-muted-foreground/85 font-mono text-[0.6rem] uppercase tracking-[0.32em]">
                    Galería
                  </span>
                  <span className="text-foreground/95 text-sm">
                    {heroGallery.length} imágenes
                  </span>
                </span>
              </motion.button>
            </div>

            {/* Bottom row — meta strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: DURATION.slow,
                ease: EASE_OUT,
                delay: 1.1,
              }}
              className="border-hairline flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.32em]">
                <span className="text-muted-foreground/70">Precio</span>
                <span className="text-foreground/95">{property.price}</span>
                <span className="bg-hairline h-3 w-px" />
                <span className="text-muted-foreground/70">Dormitorios</span>
                <span className="text-foreground/95">{property.beds}</span>
                <span className="bg-hairline h-3 w-px" />
                <span className="text-muted-foreground/70">Superficie</span>
                <span className="text-foreground/95">{property.area}</span>
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
            </motion.div>
          </Container>
        </div>
      </section>

      <PropertyGalleryModal
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        images={heroGallery}
        startIndex={galleryIndex}
        propertyName={property.name}
      />
    </>
  );
}
