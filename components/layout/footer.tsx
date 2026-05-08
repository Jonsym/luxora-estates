import Link from "next/link";

import { Container } from "./container";
import { NewsletterForm } from "./newsletter-form";
import { navLinks } from "./nav-config";

const offices = [
  { city: "Aspen", region: "Colorado, EE. UU." },
  { city: "Costa Azul", region: "Francia" },
  { city: "Kyoto", region: "Japón" },
];

const legal = [
  { label: "Privacidad", href: "#privacidad" },
  { label: "Términos", href: "#terminos" },
  { label: "Aviso legal", href: "#aviso-legal" },
];

export function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="relative">
      <h2 id="footer-heading" className="sr-only">
        Pie de página de Luxora Estates
      </h2>

      {/* Top hairline with a centered gold rule */}
      <div className="bg-hairline relative h-px w-full">
        <div className="gold-rule absolute left-1/2 top-1/2 h-px w-32 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <Container className="pt-20 pb-10 sm:pt-28">
        <div className="grid gap-16 md:grid-cols-12 md:gap-x-10 md:gap-y-20 lg:gap-x-16">
          {/* Brand */}
          <div className="space-y-6 md:col-span-4">
            <div className="font-display flex items-baseline gap-3 leading-none">
              <span className="text-2xl uppercase tracking-[0.28em]">
                Luxora
              </span>
              <span aria-hidden className="text-gold">·</span>
              <span className="text-muted-foreground text-xs uppercase tracking-[0.32em]">
                Estates
              </span>
            </div>
            <p className="text-muted-foreground text-pretty max-w-sm text-sm leading-relaxed">
              Una práctica privada que representa las residencias más
              extraordinarias del mundo. Rigor arquitectónico, servicio
              discreto y estándares sin concesiones desde 2026.
            </p>
            <div className="flex items-center gap-3">
              <span className="bg-gold size-1.5 rounded-full" />
              <span className="text-muted-foreground/80 font-mono text-[0.65rem] uppercase tracking-[0.32em]">
                Actualmente representamos 47 fincas
              </span>
            </div>
          </div>

          {/* Discover */}
          <nav
            aria-label="Pie de página"
            className="space-y-6 md:col-span-2 lg:col-span-2"
          >
            <p className="text-muted-foreground/70 text-[0.65rem] uppercase tracking-[0.32em]">
              Descubrir
            </p>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/80 hover:text-gold inline-flex items-baseline gap-2 transition-colors duration-300"
                  >
                    <span className="text-muted-foreground/50 font-mono text-[0.6rem] tracking-[0.2em]">
                      {link.meta}
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Office */}
          <div className="space-y-6 md:col-span-3 lg:col-span-2">
            <p className="text-muted-foreground/70 text-[0.65rem] uppercase tracking-[0.32em]">
              Oficinas
            </p>
            <ul className="space-y-3 text-sm">
              {offices.map((o) => (
                <li
                  key={o.city}
                  className="flex flex-col leading-snug"
                >
                  <span className="text-foreground/90">{o.city}</span>
                  <span className="text-muted-foreground/70 text-xs">
                    {o.region}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="mailto:office@luxoraestates.com"
              className="text-muted-foreground hover:text-foreground inline-block text-sm transition-colors"
            >
              office@luxoraestates.com
            </a>
          </div>

          {/* Newsletter */}
          <div className="space-y-6 md:col-span-3 lg:col-span-4">
            <p className="text-muted-foreground/70 text-[0.65rem] uppercase tracking-[0.32em]">
              Correspondencia
            </p>
            <p className="font-display text-balance text-2xl leading-tight sm:text-[1.65rem]">
              Una invitación, cuatro veces al año.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Editorial wordmark — large, low-contrast, decorative */}
        <div
          aria-hidden
          className="font-display text-foreground/[0.04] mt-24 select-none overflow-hidden text-[clamp(5rem,18vw,18rem)] font-light leading-[0.9] tracking-[-0.04em]"
        >
          LUXORA
        </div>

        {/* Bottom legal row */}
        <div className="border-hairline mt-10 flex flex-col gap-6 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground/70 font-mono text-[0.7rem] uppercase tracking-[0.24em]">
            © 2026 Luxora Estates · Todos los derechos reservados
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legal.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-muted-foreground/70 hover:text-foreground/90 text-xs transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="text-muted-foreground/50 inline-flex items-center gap-2 text-xs">
              <span className="bg-muted-foreground/40 size-1 rounded-full" />
              ES · EUR
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
