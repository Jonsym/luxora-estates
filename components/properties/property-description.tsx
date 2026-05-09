import { Reveal, RevealItem } from "@/components/ui/reveal";
import type { Property } from "@/lib/data";

export function PropertyDescription({ property }: { property: Property }) {
  return (
    <Reveal stagger>
      <RevealItem className="flex items-center gap-4">
        <span className="text-muted-foreground/70 font-mono text-[0.65rem] uppercase tracking-[0.32em]">
          — 01
        </span>
        <span className="bg-hairline h-px w-10" />
        <span className="text-foreground/70 text-[0.65rem] uppercase tracking-[0.32em]">
          El relato
        </span>
      </RevealItem>

      <RevealItem
        as="h2"
        className="font-display mt-10 text-balance text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1.02] tracking-[-0.02em]"
      >
        {property.blurb}
      </RevealItem>

      <RevealItem className="text-muted-foreground mt-10 max-w-2xl space-y-6 text-base leading-relaxed sm:text-[1.05rem]">
        {property.description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </RevealItem>

      {property.architect && property.year && (
        <RevealItem className="border-hairline mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t pt-6 font-mono text-[0.65rem] uppercase tracking-[0.32em]">
          <div className="flex items-baseline gap-3">
            <span className="text-muted-foreground/60">Arquitectura</span>
            <span className="text-foreground/95">{property.architect}</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-muted-foreground/60">Año</span>
            <span className="text-foreground/95">{property.year}</span>
          </div>
        </RevealItem>
      )}
    </Reveal>
  );
}
