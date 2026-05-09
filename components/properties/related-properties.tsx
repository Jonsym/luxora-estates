import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import type { Property } from "@/lib/data";

import { PropertyCard } from "./property-card";

export function RelatedProperties({ properties }: { properties: Property[] }) {
  if (!properties.length) return null;

  return (
    <Section className="bg-surface/40">
      <Container>
        <Reveal stagger>
          <RevealItem className="flex items-center gap-4">
            <span className="text-muted-foreground/70 font-mono text-[0.7rem] uppercase tracking-[0.32em]">
              — También representamos
            </span>
            <span className="bg-hairline h-px w-10" />
          </RevealItem>

          <RevealItem className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="font-display max-w-3xl text-balance text-[clamp(2.2rem,5vw,4.2rem)] font-light leading-[0.98] tracking-[-0.02em]">
              Otras residencias
              <br />
              <span className="text-gold italic">de la cartera.</span>
            </h2>
            <Link
              href="/properties"
              className="border-hairline hover:border-gold/55 hover:bg-gold/5 active:scale-[0.98] group inline-flex h-12 items-center gap-3 self-start rounded-full border px-6 text-sm tracking-wide transition-[background-color,border-color,transform] duration-500 lg:self-auto"
            >
              Ver el catálogo completo
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </RevealItem>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          staggerDelay={0.12}
          className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:mt-20 lg:grid-cols-3 lg:gap-x-8"
        >
          {properties.map((p) => (
            <RevealItem as="li" key={p.slug}>
              <PropertyCard property={p} />
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
