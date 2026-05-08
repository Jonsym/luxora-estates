import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { aboutImage } from "@/lib/data";

const principles = [
  {
    label: "Representación privada",
    body: "Trabajamos en exclusiva con un número limitado de propietarios y compradores, sin listados públicos ni rotación.",
  },
  {
    label: "Rigor arquitectónico",
    body: "Cada residencia que aceptamos es estudiada por nuestro comité de arquitectura antes de ser ofrecida.",
  },
  {
    label: "Discreción absoluta",
    body: "Nada se publica, nada se filtra. Las visitas se concertan únicamente bajo confidencialidad.",
  },
];

export function About() {
  return (
    <Section id="la-casa" className="relative bg-surface/40">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left: image + caption */}
          <Reveal stagger className="lg:col-span-5">
            <RevealItem>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                <Image
                  src={aboutImage}
                  alt="Detalle arquitectónico de mármol y madera natural en una residencia privada"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-tr from-background/50 via-transparent to-transparent"
                />
              </div>
            </RevealItem>
            <RevealItem className="mt-6 flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.32em]">
              <span className="bg-gold size-1 rounded-full" />
              <span className="text-muted-foreground/80">
                Estudio privado · Madrid · Aspen · Kyoto
              </span>
            </RevealItem>
          </Reveal>

          {/* Right: editorial copy */}
          <div className="lg:col-span-7">
            <Reveal stagger>
              <RevealItem className="flex items-center gap-4">
                <span className="text-muted-foreground/70 font-mono text-[0.7rem] uppercase tracking-[0.32em]">
                  — 03
                </span>
                <span className="bg-hairline h-px w-10" />
                <span className="text-foreground/70 text-[0.7rem] uppercase tracking-[0.32em]">
                  La casa
                </span>
              </RevealItem>

              <RevealItem
                as="h2"
                className="font-display mt-12 text-balance text-[clamp(2.4rem,5.4vw,4.6rem)] font-light leading-[0.98] tracking-[-0.02em]"
              >
                Una práctica privada,
                <br />
                <span className="text-gold italic">fundada en el rigor.</span>
              </RevealItem>

              <RevealItem className="text-muted-foreground mt-10 max-w-2xl space-y-6 text-base leading-relaxed sm:text-lg">
                <p>
                  Luxora es un estudio de representación inmobiliaria nacido del
                  encuentro entre arquitectos, conservadores e inversores
                  privados. No publicamos. No alquilamos. No tasamos para
                  terceros.
                </p>
                <p>
                  Cada propiedad que aceptamos pasa por un comité interno de
                  arquitectura que evalúa su autoría, su estado de
                  conservación y su lugar en el tiempo. Trabajamos con un
                  máximo de cincuenta residencias activas en cualquier momento.
                </p>
              </RevealItem>

              <RevealItem className="mt-16">
                <ul className="grid gap-y-10 sm:grid-cols-3 sm:gap-x-8">
                  {principles.map((p) => (
                    <li
                      key={p.label}
                      className="border-hairline border-t pt-6"
                    >
                      <div className="flex items-center gap-3">
                        <span className="bg-gold/80 size-1 rounded-full" />
                        <h3 className="text-foreground/90 text-sm font-medium tracking-wide">
                          {p.label}
                        </h3>
                      </div>
                      <p className="text-muted-foreground/85 mt-3 text-sm leading-relaxed">
                        {p.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </RevealItem>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
