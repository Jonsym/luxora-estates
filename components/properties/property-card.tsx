import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import type { Property } from "@/lib/data";

type Size = "default" | "feature";

const aspectMap: Record<Size, string> = {
  default: "aspect-[4/5]",
  feature: "aspect-[16/10] sm:aspect-[16/9]",
};

const sizesMap: Record<Size, string> = {
  default: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  feature: "(min-width: 1024px) 66vw, 100vw",
};

const titleClassMap: Record<Size, string> = {
  default: "text-xl sm:text-2xl",
  feature: "text-2xl sm:text-3xl lg:text-[2.4rem]",
};

export function PropertyCard({
  property,
  size = "default",
}: {
  property: Property;
  size?: Size;
}) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      className="group block"
    >
      <div
        className={cn(
          "bg-surface-elevated relative w-full overflow-hidden rounded-sm",
          aspectMap[size],
        )}
      >
        <Image
          src={property.image}
          alt={property.imageAlt}
          fill
          sizes={sizesMap[size]}
          className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-background/65 via-background/10 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-70"
        />
        <div
          aria-hidden
          className="ring-gold/0 group-hover:ring-gold/25 absolute inset-0 ring-1 ring-inset transition-[box-shadow] duration-700"
        />
        <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-3 sm:inset-x-6 sm:top-6">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.24em]">
            <span className="bg-gold size-1 rounded-full" />
            {property.region}
          </span>
          <span className="text-foreground/85 font-mono text-[0.65rem] uppercase tracking-[0.24em]">
            {property.price}
          </span>
        </div>
        {property.status === "Reservada" && (
          <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
            <span className="glass-strong inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.24em]">
              <span className="bg-foreground/60 size-1 rounded-full" />
              Reservada
            </span>
          </div>
        )}
      </div>

      <div className="mt-5 flex items-start justify-between gap-6 sm:mt-6">
        <div className="space-y-1">
          <p className="text-muted-foreground/80 text-[0.65rem] uppercase tracking-[0.32em]">
            {property.type} · {property.country}
          </p>
          <h3
            className={cn(
              "font-display group-hover:text-gold text-balance leading-tight transition-colors duration-500",
              titleClassMap[size],
            )}
          >
            {property.name}
          </h3>
          <p className="text-muted-foreground text-sm">{property.location}</p>
        </div>
        <ArrowUpRight
          className="text-muted-foreground/70 group-hover:text-gold mt-1.5 size-4 shrink-0 transition-[color,transform] duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.25}
        />
      </div>

      <dl className="border-hairline mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t pt-4 font-mono text-[0.65rem] uppercase tracking-[0.24em]">
        <div className="flex items-baseline gap-2">
          <dt className="text-muted-foreground/60">Dorm.</dt>
          <dd>{property.beds}</dd>
        </div>
        <span className="bg-hairline h-3 w-px" />
        <div className="flex items-baseline gap-2">
          <dt className="text-muted-foreground/60">Baños</dt>
          <dd>{property.baths}</dd>
        </div>
        <span className="bg-hairline h-3 w-px" />
        <div className="flex items-baseline gap-2">
          <dt className="text-muted-foreground/60">Sup.</dt>
          <dd>{property.area}</dd>
        </div>
        {property.parcel && (
          <>
            <span className="bg-hairline h-3 w-px" />
            <div className="flex items-baseline gap-2">
              <dt className="text-muted-foreground/60">Parcela</dt>
              <dd>{property.parcel}</dd>
            </div>
          </>
        )}
      </dl>
    </Link>
  );
}
