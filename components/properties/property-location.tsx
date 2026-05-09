import { Compass, MapPin, Plane, Sailboat, Tent } from "lucide-react";

import { Reveal, RevealItem } from "@/components/ui/reveal";
import type { Property } from "@/lib/data";

const iconMap = {
  airport: Plane,
  sea: Sailboat,
  ski: Compass,
  village: Tent,
} as const;

const labelMap = {
  airport: "Aeropuerto",
  sea: "Mar",
  ski: "Pistas",
  village: "Núcleo",
} as const;

export function PropertyLocation({ property }: { property: Property }) {
  const meta = property.location_meta;
  const entries = (
    Object.entries(meta).filter(
      ([k, v]) => k !== "notes" && Boolean(v),
    ) as [keyof typeof iconMap, string][]
  );

  return (
    <Reveal stagger>
      <RevealItem className="flex items-center gap-4">
        <span className="text-muted-foreground/70 font-mono text-[0.65rem] uppercase tracking-[0.32em]">
          — 04
        </span>
        <span className="bg-hairline h-px w-10" />
        <span className="text-foreground/70 text-[0.65rem] uppercase tracking-[0.32em]">
          Ubicación
        </span>
      </RevealItem>

      <RevealItem
        as="h2"
        className="font-display mt-8 text-balance text-[clamp(1.8rem,3.6vw,2.8rem)] font-light leading-[1.05] tracking-[-0.015em]"
      >
        {property.location},
        <br />
        <span className="text-gold italic">{property.region}.</span>
      </RevealItem>

      <RevealItem className="mt-10 flex items-center gap-3">
        <MapPin className="text-muted-foreground/70 size-4" strokeWidth={1.5} />
        <span className="text-muted-foreground text-sm sm:text-base">
          {property.location} · {property.region} · {property.country}
        </span>
      </RevealItem>

      <RevealItem className="mt-12">
        <dl className="border-hairline grid grid-cols-1 gap-y-2 border-t sm:grid-cols-2 sm:gap-x-12">
          {entries.map(([k, v]) => {
            const Icon = iconMap[k];
            return (
              <div
                key={k}
                className="border-hairline flex items-start gap-4 border-b py-5 sm:py-6"
              >
                <span className="border-hairline mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border">
                  <Icon className="size-4" strokeWidth={1.5} />
                </span>
                <div className="space-y-1.5">
                  <dt className="text-muted-foreground/70 font-mono text-[0.6rem] uppercase tracking-[0.32em]">
                    {labelMap[k]}
                  </dt>
                  <dd className="text-foreground/95 text-sm leading-snug sm:text-[0.95rem]">
                    {v}
                  </dd>
                </div>
              </div>
            );
          })}
        </dl>
      </RevealItem>

      {meta.notes && (
        <RevealItem className="mt-8 flex items-start gap-4">
          <span className="bg-gold/70 mt-2 h-px w-8 shrink-0" />
          <p className="text-muted-foreground/85 max-w-xl text-sm leading-relaxed">
            {meta.notes}
          </p>
        </RevealItem>
      )}
    </Reveal>
  );
}
