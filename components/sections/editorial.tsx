import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { articles, type Article } from "@/lib/data";

export function Editorial() {
  const feature = articles.find((a) => a.feature) ?? articles[0];
  const rest = articles.filter((a) => a.slug !== feature.slug);

  return (
    <Section id="diario" className="relative bg-surface/40">
      <Container>
        <SectionHeader
          number="07"
          eyebrow="El diario"
          title="Historias y"
          titleAccent="detalles."
          lede="Notas de lectura sobre arquitectura, interiorismo y mercado privado, escritas por la casa."
        />

        <div className="mt-20 grid grid-cols-1 gap-12 sm:mt-28 lg:mt-32 lg:grid-cols-12 lg:gap-16">
          {/* Feature article */}
          <Reveal className="lg:col-span-7" duration={1.0}>
            <FeatureCard article={feature} />
          </Reveal>

          {/* Stack of secondary articles */}
          <Reveal
            as="ul"
            stagger
            staggerDelay={0.12}
            className="flex flex-col gap-10 lg:col-span-5"
          >
            {rest.map((a) => (
              <RevealItem as="li" key={a.slug}>
                <SecondaryCard article={a} />
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function FeatureCard({ article }: { article: Article }) {
  return (
    <Link href={`#${article.slug}`} className="group block">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm sm:aspect-[5/6] lg:aspect-[4/5]">
        <div className="absolute inset-0 transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]">
          <ParallaxImage
            src={article.image}
            alt={article.imageAlt}
            travel={90}
            sizes="(min-width: 1024px) 60vw, 100vw"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/15 to-transparent"
        />
        <div className="absolute inset-x-5 top-5 flex items-center justify-between sm:inset-x-8 sm:top-8">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.24em]">
            <span className="bg-gold size-1 rounded-full" />
            {article.category}
          </span>
          <span className="text-foreground/85 font-mono text-[0.65rem] uppercase tracking-[0.24em]">
            {article.readMin} min
          </span>
        </div>
        <div className="absolute inset-x-5 bottom-5 flex flex-col gap-3 sm:inset-x-10 sm:bottom-10 sm:gap-4">
          <h3 className="font-display text-balance text-2xl font-light leading-tight tracking-[-0.01em] sm:text-4xl lg:text-5xl">
            {article.title}
          </h3>
          <p className="text-foreground/80 max-w-lg text-sm sm:text-base">
            {article.excerpt}
          </p>
          <div className="text-foreground/70 mt-1 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.28em] sm:text-xs">
            <span>{article.date}</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function SecondaryCard({ article }: { article: Article }) {
  return (
    <Link
      href={`#${article.slug}`}
      className="group border-hairline flex flex-col gap-5 border-t pt-8 sm:flex-row sm:items-start sm:gap-6"
    >
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-sm sm:w-44">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(min-width: 640px) 200px, 100vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground/80 text-[0.65rem] uppercase tracking-[0.32em]">
            {article.category}
          </span>
          <span className="bg-muted-foreground/30 size-1 rounded-full" />
          <span className="text-muted-foreground/70 text-[0.65rem] uppercase tracking-[0.32em]">
            {article.date}
          </span>
        </div>
        <h3 className="font-display group-hover:text-gold mt-3 text-balance text-2xl leading-tight transition-colors duration-500">
          {article.title}
        </h3>
        <p className="text-muted-foreground/85 mt-3 line-clamp-2 text-sm leading-relaxed">
          {article.excerpt}
        </p>
      </div>
    </Link>
  );
}
