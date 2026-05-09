import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/layout/container";

export default function PropertyNotFound() {
  return (
    <main className="flex flex-1 items-center pt-32 pb-32 sm:pt-40 sm:pb-40">
      <Container className="flex flex-col items-start gap-10 sm:gap-14">
        <span className="text-muted-foreground/80 font-mono text-[0.65rem] uppercase tracking-[0.32em]">
          Error 404 · Residencia no encontrada
        </span>

        <h1 className="font-display text-balance text-[clamp(2.6rem,7vw,6rem)] font-light leading-[0.95] tracking-[-0.025em]">
          Esa puerta
          <br />
          <span className="text-gold italic">no se abre.</span>
        </h1>

        <div className="flex items-start gap-6">
          <span className="gold-rule mt-3 hidden h-px w-16 sm:block" />
          <p className="text-muted-foreground text-pretty max-w-md text-base leading-relaxed sm:text-lg">
            La residencia que buscas no se encuentra en nuestro catálogo
            actual. Puede haber sido reservada, retirada o haber cambiado de
            dirección. Te invitamos a revisar la cartera viva o a iniciar
            una conversación privada.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="/properties"
            className="border-gold/55 hover:bg-gold hover:text-primary-foreground active:scale-[0.98] group inline-flex h-12 items-center gap-3 rounded-full border px-7 text-sm font-medium tracking-wide transition-[background-color,color,transform] duration-500"
          >
            <ArrowLeft
              className="size-4 transition-transform duration-500 group-hover:-translate-x-0.5"
              strokeWidth={1.5}
            />
            Volver al catálogo
          </Link>
          <Link
            href="/#contacto"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
          >
            <span className="bg-muted-foreground/40 size-1 rounded-full" />
            Búsqueda a medida
          </Link>
        </div>
      </Container>
    </main>
  );
}
