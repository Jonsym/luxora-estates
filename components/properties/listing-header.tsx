import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Reveal, RevealItem } from "@/components/ui/reveal";

type Props = {
  total: number;
};

export function ListingHeader({ total }: Props) {
  return (
    <header className="relative pt-32 sm:pt-36 lg:pt-44">
      <Container>
        <Reveal stagger>
          <RevealItem className="flex items-center gap-4">
            <Link
              href="/"
              className="text-muted-foreground/80 hover:text-foreground inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.32em] transition-colors"
            >
              <span className="bg-muted-foreground/50 h-px w-6" />
              Luxora — Inicio
            </Link>
          </RevealItem>

          <RevealItem className="mt-10 flex items-center gap-4">
            <span className="text-muted-foreground/70 font-mono text-[0.7rem] uppercase tracking-[0.32em]">
              — Catálogo
            </span>
            <span className="bg-hairline h-px w-10" />
            <span className="text-foreground/70 text-[0.7rem] uppercase tracking-[0.32em]">
              {total} residencias activas
            </span>
          </RevealItem>

          <RevealItem
            as="h1"
            className="font-display mt-10 text-balance text-[clamp(2.6rem,7vw,6rem)] font-light leading-[0.95] tracking-[-0.025em] sm:mt-14"
          >
            La cartera viva
            <br />
            <span className="text-gold italic">de Luxora.</span>
          </RevealItem>

          <RevealItem className="mt-10 flex max-w-2xl items-start gap-6 sm:mt-12">
            <span className="gold-rule mt-3 hidden h-px w-16 sm:block" />
            <p className="text-muted-foreground text-pretty text-base leading-relaxed sm:text-lg">
              Una selección abierta — y deliberadamente reducida — de las
              residencias que actualmente representamos. Filtra por tipología
              y geografía; el resto de la cartera se atiende por
              correspondencia privada.
            </p>
          </RevealItem>
        </Reveal>
      </Container>
    </header>
  );
}
