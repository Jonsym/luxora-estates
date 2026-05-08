"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt: string;
  /**
   * Total parallax travel in px across the section's scroll lifespan.
   * The inner element is overshot by `travel/2` on each side so the
   * frame stays filled regardless of scroll position.
   */
  travel?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  imageClassName?: string;
};

/**
 * Cinematic image with subtle vertical parallax tied to the section's
 * scroll position. Renders nothing extra when prefers-reduced-motion.
 *
 * Parent must control the aspect ratio / dimensions.
 */
export function ParallaxImage({
  src,
  alt,
  travel = 80,
  className,
  imageClassName,
  sizes,
  priority,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [-travel / 2, travel / 2],
  );

  return (
    <div
      ref={ref}
      className={cn("relative h-full w-full overflow-hidden", className)}
    >
      <motion.div
        style={{
          y,
          position: "absolute",
          top: -travel / 2,
          bottom: -travel / 2,
          left: 0,
          right: 0,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imageClassName)}
        />
      </motion.div>
    </div>
  );
}
