import { ParallaxImage } from "@/components/ui/parallax-image";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import type { LifestyleBlock } from "@/lib/data";
import { cn } from "@/lib/utils";

export function PropertyLifestyle({
  blocks,
  startNumber = 5,
}: {
  blocks: LifestyleBlock[];
  startNumber?: number;
}) {
  if (!blocks.length) return null;

  return (
    <div className="space-y-24 sm:space-y-32">
      {blocks.map((block, i) => (
        <Reveal key={block.title} stagger>
          <RevealItem className="flex items-center gap-4">
            <span className="text-muted-foreground/70 font-mono text-[0.65rem] uppercase tracking-[0.32em]">
              — 0{startNumber + i}
            </span>
            <span className="bg-hairline h-px w-10" />
            <span className="text-foreground/70 text-[0.65rem] uppercase tracking-[0.32em]">
              {block.eyebrow}
            </span>
          </RevealItem>

          <div
            className={cn(
              "mt-12 grid grid-cols-1 gap-10 sm:gap-12",
              i % 2 === 0
                ? "lg:grid-cols-[1.1fr_0.9fr]"
                : "lg:grid-cols-[0.9fr_1.1fr]",
            )}
          >
            <RevealItem
              className={cn(
                "relative overflow-hidden rounded-sm aspect-[4/5]",
                i % 2 === 1 && "lg:order-2",
              )}
            >
              <ParallaxImage
                src={block.src}
                alt={block.alt}
                travel={80}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent"
              />
            </RevealItem>

            <RevealItem
              className={cn(
                "flex flex-col justify-center gap-6",
                i % 2 === 1 && "lg:order-1",
              )}
            >
              <h3 className="font-display text-balance text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.05] tracking-[-0.015em]">
                {block.title}
              </h3>
              <div className="gold-rule h-px w-16" />
              <p className="text-muted-foreground text-pretty max-w-md text-base leading-relaxed sm:text-[1.05rem]">
                {block.body}
              </p>
            </RevealItem>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
