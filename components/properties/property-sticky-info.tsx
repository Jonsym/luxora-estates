import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

import type { Property } from "@/lib/data";

export function PropertyStickyInfo({ property }: { property: Property }) {
  return (
    <div className="lg:sticky lg:top-28">
      <div className="border-hairline glass-strong relative flex flex-col gap-7 rounded-md border p-6 sm:p-8">
        {/* Status + Price */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <p className="text-muted-foreground/70 font-mono text-[0.65rem] uppercase tracking-[0.32em]">
              Precio
            </p>
            <p className="font-display text-2xl leading-tight sm:text-3xl">
              {property.price}
            </p>
          </div>
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.24em] ${
              property.status === "Disponible"
                ? "border-gold/45 text-gold"
                : "border-hairline text-muted-foreground"
            }`}
          >
            <span
              className={`size-1 rounded-full ${
                property.status === "Disponible"
                  ? "bg-gold"
                  : "bg-muted-foreground/60"
              }`}
            />
            {property.status}
          </span>
        </div>

        <div className="bg-hairline h-px w-full" />

        {/* Quick specs */}
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
          <Spec label="Dormitorios" value={String(property.beds)} />
          <Spec label="Baños" value={String(property.baths)} />
          <Spec label="Superficie" value={property.area} />
          {property.parcel && <Spec label="Parcela" value={property.parcel} />}
          {property.year && (
            <Spec label="Año" value={String(property.year)} />
          )}
          {property.orientation && (
            <Spec label="Orientación" value={property.orientation} />
          )}
        </dl>

        <div className="bg-hairline h-px w-full" />

        {/* CTA stack */}
        <div className="flex flex-col gap-3">
          <Link
            href="#solicitar"
            className="border-gold/55 hover:bg-gold hover:text-primary-foreground active:scale-[0.98] group inline-flex h-12 items-center justify-center gap-3 rounded-full border px-6 text-sm font-medium tracking-wide transition-[background-color,color,transform] duration-500"
          >
            Solicitar información
            <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href="mailto:office@luxoraestates.com"
            className="text-muted-foreground hover:text-foreground inline-flex items-center justify-center gap-2 py-2 text-sm transition-colors"
          >
            <Mail className="size-3.5" strokeWidth={1.5} />
            office@luxoraestates.com
          </a>
          <a
            href="tel:+34910000000"
            className="text-muted-foreground hover:text-foreground inline-flex items-center justify-center gap-2 py-1 text-sm transition-colors"
          >
            <Phone className="size-3.5" strokeWidth={1.5} />
            +34 910 00 00 00
          </a>
        </div>
      </div>

      {/* Off-card meta */}
      <p className="text-muted-foreground/60 mt-6 px-2 text-center font-mono text-[0.6rem] uppercase tracking-[0.32em]">
        Visitas privadas concertadas con 48 h de antelación
      </p>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1.5">
      <dt className="text-muted-foreground/70 font-mono text-[0.6rem] uppercase tracking-[0.32em]">
        {label}
      </dt>
      <dd className="text-foreground/95 text-sm">{value}</dd>
    </div>
  );
}
