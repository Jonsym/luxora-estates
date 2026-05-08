import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { stats } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Stats() {
  return (
    <Section spacing="tight" id="cifras" className="relative">
      <Container>
        <Reveal stagger>
          <RevealItem className="flex items-center gap-4">
            <span className="text-muted-foreground/70 font-mono text-[0.7rem] uppercase tracking-[0.32em]">
              — 04
            </span>
            <span className="bg-hairline h-px w-10" />
            <span className="text-foreground/70 text-[0.7rem] uppercase tracking-[0.32em]">
              Cifras
            </span>
          </RevealItem>

          <RevealItem
            as="h2"
            className="font-display mt-10 max-w-3xl text-balance text-[clamp(2rem,4vw,3.4rem)] font-light leading-tight tracking-[-0.02em]"
          >
            La medida exacta de un estudio que prefiere{" "}
            <span className="text-gold italic">la profundidad</span> a la
            extensión.
          </RevealItem>

          <RevealItem className="mt-20 sm:mt-24">
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={cn(
                    "relative flex flex-col gap-4 py-10 lg:py-12",
                    "border-hairline border-t",
                    "lg:border-t-0 lg:border-l lg:px-10 lg:first:border-l-0 lg:first:pl-0",
                  )}
                >
                  <span className="text-muted-foreground/60 font-mono text-[0.65rem] uppercase tracking-[0.32em]">
                    0{i + 1}
                  </span>
                  <dd className="font-display text-[clamp(3.4rem,7vw,5.6rem)] font-light leading-none tracking-[-0.03em]">
                    {s.value}
                  </dd>
                  <dt className="text-foreground/85 max-w-[14ch] text-balance text-base leading-snug sm:text-lg">
                    {s.label}
                  </dt>
                  <span className="text-muted-foreground/60 mt-auto inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.32em]">
                    <span className="bg-gold/70 size-1 rounded-full" />
                    {s.meta}
                  </span>
                </div>
              ))}
            </dl>
          </RevealItem>
        </Reveal>
      </Container>
    </Section>
  );
}
