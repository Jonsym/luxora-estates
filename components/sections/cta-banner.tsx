"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal, RevealItem } from "@/components/ui/reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function CtaBanner() {
  const reduced = useReducedMotion();

  return (
    <Section
      id="contacto"
      spacing="loose"
      className="relative isolate overflow-hidden"
    >
      {/* Subtle decorative gold halo */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.6, ease, delay: 0.3 }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.62_0.105_80/0.12),transparent)] blur-3xl" />
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.20 0.008 60 / 0.10) 30%, oklch(0.20 0.008 60 / 0.10) 70%, transparent)",
          }}
        />
      </motion.div>

      <Container>
        <Reveal stagger>
          <RevealItem className="flex items-center gap-4">
            <span className="bg-gold size-1.5 rounded-full" />
            <span className="text-foreground/80 text-[0.7rem] uppercase tracking-[0.32em]">
              — 08 · Iniciar correspondencia
            </span>
          </RevealItem>

          <RevealItem
            as="h2"
            className="font-display mt-12 max-w-5xl text-balance text-[clamp(2.8rem,8.5vw,8.4rem)] font-light leading-[0.94] tracking-[-0.025em]"
          >
            ¿Buscas algo
            <br />
            <span className="text-gold italic">fuera de lo común?</span>
          </RevealItem>

          <RevealItem className="mt-12 flex items-start gap-6">
            <div className="gold-rule mt-3 hidden h-px w-20 sm:block" />
            <p className="text-muted-foreground text-pretty max-w-xl text-base leading-relaxed sm:text-lg">
              Toda relación empieza con una conversación. Cuéntanos qué buscas,
              dónde y cuándo. Respondemos personalmente en menos de
              veinticuatro horas.
            </p>
          </RevealItem>

          <RevealItem className="mt-14 flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              href="mailto:office@luxoraestates.com"
              className="border-gold/60 hover:bg-gold hover:text-primary-foreground active:scale-[0.98] group inline-flex h-12 items-center gap-3 rounded-full border px-7 text-sm font-medium tracking-wide transition-[background-color,color,transform] duration-500"
            >
              Concertar una conversación
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="mailto:office@luxoraestates.com"
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
              >
                <Mail className="size-3.5" strokeWidth={1.5} />
                office@luxoraestates.com
              </Link>
              <span className="bg-hairline hidden h-3 w-px sm:block" />
              <Link
                href="tel:+34910000000"
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
              >
                <Phone className="size-3.5" strokeWidth={1.5} />
                +34 910 00 00 00
              </Link>
            </div>
          </RevealItem>

          <RevealItem className="border-hairline mt-20 grid grid-cols-1 gap-8 border-t pt-10 sm:grid-cols-3 sm:gap-6">
            <Detail
              label="Horario"
              value="Lunes a viernes · 09:00 – 19:00 CET"
            />
            <Detail
              label="Visitas privadas"
              value="Bajo cita previa · Confidencialidad asegurada"
            />
            <Detail
              label="Idiomas"
              value="Español · English · Français · 日本語"
            />
          </RevealItem>
        </Reveal>
      </Container>
    </Section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-muted-foreground/70 font-mono text-[0.65rem] uppercase tracking-[0.32em]">
        {label}
      </span>
      <span className="text-foreground/85 text-sm leading-snug">{value}</span>
    </div>
  );
}
