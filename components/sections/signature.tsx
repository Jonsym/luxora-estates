import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { signatureProperty } from "@/lib/data";

export function Signature() {
  const p = signatureProperty;
  return (
    <Section id="propiedad-insignia" className="relative bg-surface/40">
      <Container>
        <Reveal stagger>
          <RevealItem className="flex items-center gap-4">
            <span className="text-muted-foreground/70 font-mono text-[0.7rem] uppercase tracking-[0.32em]">
              — 05
            </span>
            <span className="bg-hairline h-px w-10" />
            <span className="text-foreground/70 text-[0.7rem] uppercase tracking-[0.32em]">
              Propiedad insignia
            </span>
          </RevealItem>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-x-12">
          {/* Image column */}
          <Reveal className="lg:col-span-7" duration={1.1}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <ParallaxImage
                src={p.hero}
                alt={p.imageAlt}
                travel={100}
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent"
              />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between sm:inset-x-6 sm:top-6">
                <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.24em]">
                  <span className="bg-gold size-1 rounded-full" />
                  Off-market · {p.region}
                </span>
                <span className="text-foreground/85 font-mono text-[0.65rem] uppercase tracking-[0.24em]">
                  {p.price}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Content column */}
          <div className="lg:col-span-5">
            <Reveal stagger>
              <RevealItem className="text-muted-foreground text-[0.7rem] uppercase tracking-[0.32em]">
                {p.region}
              </RevealItem>
              <RevealItem
                as="h3"
                className="font-display mt-6 text-balance text-[clamp(2.4rem,5vw,4.4rem)] font-light leading-[0.98] tracking-[-0.02em]"
              >
                {p.name}
              </RevealItem>

              <RevealItem className="text-muted-foreground mt-10 max-w-md space-y-5 text-base leading-relaxed">
                {p.story.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </RevealItem>

              <RevealItem className="mt-12">
                <dl className="border-hairline border-t">
                  {p.highlights.map((h) => (
                    <div
                      key={h.label}
                      className="border-hairline grid grid-cols-3 gap-4 border-b py-4"
                    >
                      <dt className="text-muted-foreground/70 font-mono text-[0.65rem] uppercase tracking-[0.24em]">
                        {h.label}
                      </dt>
                      <dd className="text-foreground/90 col-span-2 text-sm">
                        {h.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </RevealItem>

              <RevealItem className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="#contacto"
                  className="border-gold/60 hover:bg-gold hover:text-primary-foreground active:scale-[0.98] group inline-flex h-12 items-center gap-3 rounded-full border px-7 text-sm font-medium tracking-wide transition-[background-color,color,transform] duration-500"
                >
                  Solicitar información
                  <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="#galeria"
                  className="text-foreground/85 hover:text-foreground inline-flex items-center gap-2 px-2 py-3 text-sm transition-colors"
                >
                  <span className="bg-foreground/40 size-1 rounded-full" />
                  Ver galería completa
                </Link>
              </RevealItem>
            </Reveal>
          </div>
        </div>

        {/* Detail strip */}
        <Reveal
          as="ul"
          stagger
          staggerDelay={0.12}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-20"
        >
          {p.gallery.map((g, i) => (
            <RevealItem
              key={i}
              as="li"
              className="group relative aspect-[5/6] overflow-hidden rounded-sm"
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"
              />
              <span className="absolute bottom-4 left-4 font-mono text-[0.65rem] uppercase tracking-[0.32em] text-foreground/85">
                0{i + 1} / 0{p.gallery.length}
              </span>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
