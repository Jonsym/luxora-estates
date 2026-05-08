import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [primary, ...secondary] = testimonials;

  return (
    <Section id="testimonios" className="relative">
      <Container>
        <Reveal stagger>
          <RevealItem className="flex items-center gap-4">
            <span className="text-muted-foreground/70 font-mono text-[0.7rem] uppercase tracking-[0.32em]">
              — 06
            </span>
            <span className="bg-hairline h-px w-10" />
            <span className="text-foreground/70 text-[0.7rem] uppercase tracking-[0.32em]">
              Testimonios
            </span>
          </RevealItem>
        </Reveal>

        <Reveal stagger className="mt-20 lg:mt-28">
          {/* Primary editorial pull-quote */}
          <RevealItem className="grid grid-cols-12 gap-4 lg:gap-12">
            <div
              aria-hidden
              className="font-display text-gold/30 col-span-2 select-none text-[clamp(5rem,12vw,9rem)] leading-[0.7] sm:col-span-1"
            >
              &ldquo;
            </div>
            <blockquote className="col-span-10 sm:col-span-11">
              <p className="font-display text-balance text-[clamp(1.8rem,3.6vw,3.4rem)] font-light leading-[1.1] tracking-[-0.015em]">
                {primary.quote}
              </p>
              <footer className="border-hairline mt-12 flex flex-col gap-2 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
                <cite className="not-italic">
                  <span className="font-display text-base">
                    {primary.author}
                  </span>
                  <span className="text-muted-foreground/80 ml-3 text-sm">
                    {primary.city}
                  </span>
                </cite>
                <span className="text-muted-foreground/60 font-mono text-[0.65rem] uppercase tracking-[0.32em]">
                  Operación cerrada · 2025
                </span>
              </footer>
            </blockquote>
          </RevealItem>

          {/* Secondary pair */}
          <RevealItem className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-10 lg:mt-24">
            {secondary.map((t, i) => (
              <figure
                key={t.author}
                className="border-hairline relative border-t pt-8"
              >
                <span className="bg-gold/80 absolute -top-px left-0 h-px w-12" />
                <span className="text-muted-foreground/60 font-mono text-[0.65rem] uppercase tracking-[0.32em]">
                  0{i + 2} / 03
                </span>
                <blockquote className="font-display mt-6 text-pretty text-xl leading-snug sm:text-2xl">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-baseline gap-3">
                  <span className="text-foreground/90 text-sm">
                    {t.author}
                  </span>
                  <span className="bg-muted-foreground/40 size-1 rounded-full" />
                  <span className="text-muted-foreground/80 text-sm">
                    {t.city}
                  </span>
                </figcaption>
              </figure>
            ))}
          </RevealItem>
        </Reveal>
      </Container>
    </Section>
  );
}
