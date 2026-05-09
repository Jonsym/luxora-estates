import { Reveal, RevealItem } from "@/components/ui/reveal";
import type { Property } from "@/lib/data";

export function PropertyAmenities({ property }: { property: Property }) {
  return (
    <Reveal stagger>
      <RevealItem className="flex items-center gap-4">
        <span className="text-muted-foreground/70 font-mono text-[0.65rem] uppercase tracking-[0.32em]">
          — 03
        </span>
        <span className="bg-hairline h-px w-10" />
        <span className="text-foreground/70 text-[0.65rem] uppercase tracking-[0.32em]">
          Servicios
        </span>
      </RevealItem>

      <RevealItem
        as="h2"
        className="font-display mt-8 text-balance text-[clamp(1.8rem,3.6vw,2.8rem)] font-light leading-[1.05] tracking-[-0.015em]"
      >
        El programa,
        <br />
        <span className="text-gold italic">en detalle.</span>
      </RevealItem>

      <RevealItem className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
        {property.amenities.map((cat, i) => (
          <div key={cat.category} className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground/60 font-mono text-[0.6rem] tracking-[0.28em]">
                0{i + 1}
              </span>
              <span className="bg-hairline h-px w-6" />
              <h3 className="text-foreground/90 text-[0.7rem] uppercase tracking-[0.32em]">
                {cat.category}
              </h3>
            </div>
            <ul className="space-y-3.5">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="text-foreground/85 flex items-start gap-3 text-sm leading-relaxed sm:text-[0.95rem]"
                >
                  <span className="bg-gold/80 mt-2 size-1 shrink-0 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </RevealItem>
    </Reveal>
  );
}
