import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { featuredProperties, type Property } from "@/lib/data";
import { cn } from "@/lib/utils";

// Asymmetric grid that stays safe at every breakpoint:
// the offsets only push down (never up), so cards never overlap row gutters.
const layout = [
  "lg:col-span-7",
  "lg:col-span-5 lg:mt-32",
  "lg:col-span-5",
  "lg:col-span-7 lg:mt-12",
] as const;

const aspect = [
  "aspect-[4/3]",
  "aspect-[4/5]",
  "aspect-[5/6]",
  "aspect-[16/10]",
] as const;

export function FeaturedProperties() {
  return (
    <Section id="propiedades-destacadas" className="relative">
      <Container>
        <SectionHeader
          number="01"
          eyebrow="Selección destacada"
          title="Residencias"
          titleAccent="del momento."
          lede="Una mirada cercana a cuatro de las propiedades que actualmente representamos. Cada una con su propia historia, geografía y temperamento."
        />

        <Reveal
          as="ul"
          stagger
          staggerDelay={0.12}
          className="mt-20 grid grid-cols-12 gap-x-6 gap-y-12 sm:mt-28 sm:gap-y-16 lg:mt-32 lg:gap-x-8"
        >
          {featuredProperties.map((p, i) => (
            <RevealItem
              key={p.slug}
              as="li"
              className={cn("col-span-12", layout[i])}
            >
              <PropertyCard property={p} aspect={aspect[i]} />
            </RevealItem>
          ))}
        </Reveal>

        <Reveal className="mt-20 flex justify-center sm:mt-24">
          <Link
            href="#catalogo"
            className="border-hairline hover:border-gold/60 hover:bg-gold/5 active:scale-[0.98] group inline-flex items-center gap-3 rounded-full border px-6 py-3 text-sm tracking-wide transition-[background-color,border-color,transform] duration-500"
          >
            Ver el catálogo completo
            <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}

function PropertyCard({
  property,
  aspect,
}: {
  property: Property;
  aspect: string;
}) {
  return (
    <Link
      href={`#${property.slug}`}
      className="group block"
    >
      <div
        className={cn(
          "bg-surface-elevated relative w-full overflow-hidden rounded-sm",
          aspect,
        )}
      >
        <Image
          src={property.image}
          alt={property.imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-background/65 via-background/10 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-70"
        />
        {/* Soft gold inner highlight on hover */}
        <div
          aria-hidden
          className="ring-gold/0 group-hover:ring-gold/25 absolute inset-0 ring-1 ring-inset transition-[box-shadow] duration-700"
        />
        <div className="absolute inset-x-5 top-5 flex items-start justify-between sm:inset-x-6 sm:top-6">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.24em]">
            <span className="bg-gold size-1 rounded-full" />
            {property.region}
          </span>
          <span className="text-foreground/85 font-mono text-[0.65rem] uppercase tracking-[0.24em]">
            {property.price}
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-start justify-between gap-6 sm:mt-7">
        <div className="space-y-2">
          <h3 className="font-display group-hover:text-gold text-balance text-2xl leading-tight transition-colors duration-500 sm:text-3xl">
            {property.name}
          </h3>
          <p className="text-muted-foreground text-sm">{property.location}</p>
        </div>
        <ArrowUpRight
          className="text-muted-foreground/70 group-hover:text-gold mt-2 size-5 shrink-0 transition-[color,transform] duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.25}
        />
      </div>

      <p className="text-muted-foreground/80 mt-4 max-w-md text-sm leading-relaxed">
        {property.blurb}
      </p>

      <dl className="border-hairline mt-6 flex items-center gap-6 border-t pt-4 font-mono text-[0.65rem] uppercase tracking-[0.24em]">
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
      </dl>
    </Link>
  );
}
