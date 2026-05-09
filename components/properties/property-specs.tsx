import { Reveal, RevealItem } from "@/components/ui/reveal";
import type { Property } from "@/lib/data";

export function PropertySpecs({ property }: { property: Property }) {
  return (
    <Reveal stagger>
      <RevealItem className="flex items-center gap-4">
        <span className="text-muted-foreground/70 font-mono text-[0.65rem] uppercase tracking-[0.32em]">
          — 02
        </span>
        <span className="bg-hairline h-px w-10" />
        <span className="text-foreground/70 text-[0.65rem] uppercase tracking-[0.32em]">
          La ficha
        </span>
      </RevealItem>

      <RevealItem
        as="h2"
        className="font-display mt-8 text-balance text-[clamp(1.8rem,3.6vw,2.8rem)] font-light leading-[1.05] tracking-[-0.015em]"
      >
        Hecha en frío,
        <br />
        <span className="text-gold italic">leída en calma.</span>
      </RevealItem>

      <RevealItem className="mt-12">
        <dl className="border-hairline border-t">
          {property.highlights.map((h) => (
            <div
              key={h.label}
              className="border-hairline grid grid-cols-3 gap-4 border-b py-5 sm:grid-cols-4 sm:py-6"
            >
              <dt className="text-muted-foreground/70 col-span-1 font-mono text-[0.65rem] uppercase tracking-[0.28em]">
                {h.label}
              </dt>
              <dd className="text-foreground/95 col-span-2 text-sm leading-relaxed sm:col-span-3 sm:text-[0.95rem]">
                {h.value}
              </dd>
            </div>
          ))}
        </dl>
      </RevealItem>
    </Reveal>
  );
}
