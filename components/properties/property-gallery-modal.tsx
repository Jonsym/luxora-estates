"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { DURATION, EASE_OUT } from "@/lib/motion";

type GalleryImage = { src: string; alt: string };

type Props = {
  open: boolean;
  onClose: () => void;
  images: GalleryImage[];
  startIndex?: number;
  propertyName: string;
};

export function PropertyGalleryModal({
  open,
  onClose,
  images,
  startIndex = 0,
  propertyName,
}: Props) {
  const [index, setIndex] = useState(startIndex);
  const [direction, setDirection] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (open) setIndex(startIndex);
  }, [open, startIndex]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  // Body scroll lock + keyboard nav
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, next, prev]);

  const slideOffset = reduced ? 0 : 32;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="gallery"
          role="dialog"
          aria-modal="true"
          aria-label={`Galería de ${propertyName}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: DURATION.quick, ease: EASE_OUT }}
          className="bg-background/97 supports-[backdrop-filter]:bg-background/85 fixed inset-0 z-[80] supports-[backdrop-filter]:backdrop-blur-2xl"
        >
          {/* Top bar */}
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-4 px-5 pt-5 sm:px-10 sm:pt-7">
            <div className="space-y-1">
              <p className="text-muted-foreground/70 font-mono text-[0.65rem] uppercase tracking-[0.32em]">
                Galería · {propertyName}
              </p>
              <p className="text-foreground/90 font-mono text-[0.7rem] uppercase tracking-[0.28em]">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar galería"
              className="border-hairline hover:bg-secondary active:scale-95 group flex h-11 w-11 items-center justify-center rounded-full border transition-[background-color,transform] duration-300"
            >
              <X
                className="size-5 transition-transform duration-500 group-hover:rotate-90"
                strokeWidth={1.5}
              />
            </button>
          </div>

          {/* Image area */}
          <div className="absolute inset-0 flex items-center justify-center px-4 pb-28 pt-20 sm:px-12">
            <div className="relative h-full w-full max-w-[1500px]">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction === 0 ? 0 : direction * slideOffset,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    x: direction === 0 ? 0 : direction * -slideOffset * 0.5,
                  }}
                  transition={{ duration: DURATION.base, ease: EASE_OUT }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={images[index].src}
                    alt={images[index].alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Caption */}
              <p className="absolute inset-x-0 -bottom-12 mx-auto max-w-2xl text-center text-xs text-muted-foreground sm:-bottom-14 sm:text-sm">
                {images[index].alt}
              </p>
            </div>
          </div>

          {/* Nav controls */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Imagen anterior"
                className="border-hairline hover:bg-secondary group absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border transition-[background-color,transform] duration-300 active:scale-95 sm:left-8 sm:h-14 sm:w-14"
              >
                <ChevronLeft
                  className="size-5 transition-transform duration-500 group-hover:-translate-x-0.5 sm:size-6"
                  strokeWidth={1.5}
                />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Siguiente imagen"
                className="border-hairline hover:bg-secondary group absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border transition-[background-color,transform] duration-300 active:scale-95 sm:right-8 sm:h-14 sm:w-14"
              >
                <ChevronRight
                  className="size-5 transition-transform duration-500 group-hover:translate-x-0.5 sm:size-6"
                  strokeWidth={1.5}
                />
              </button>
            </>
          )}

          {/* Bottom strip — thumbnails */}
          <div className="absolute inset-x-0 bottom-4 z-10 sm:bottom-6">
            <div className="mx-auto flex max-w-3xl items-center justify-center gap-2 px-4">
              {images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Ir a imagen ${i + 1}`}
                  aria-current={i === index}
                  className={`bg-foreground/30 hover:bg-foreground/60 h-1 rounded-full transition-[background-color,width] duration-500 ${
                    i === index ? "bg-gold w-10" : "w-5"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
