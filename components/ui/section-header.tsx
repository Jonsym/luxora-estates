import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal, RevealItem } from "./reveal";

type SectionHeaderProps = {
  number: string;
  eyebrow: string;
  title: ReactNode;
  /** Optional second line of the title, rendered in italic gold. */
  titleAccent?: ReactNode;
  /** Standfirst paragraph below the title. */
  lede?: ReactNode;
  align?: "start" | "between";
  className?: string;
  rightSlot?: ReactNode;
};

export function SectionHeader({
  number,
  eyebrow,
  title,
  titleAccent,
  lede,
  align = "between",
  rightSlot,
  className,
}: SectionHeaderProps) {
  return (
    <Reveal stagger className={cn("w-full", className)}>
      <div className="flex flex-col gap-12 lg:gap-16">
        <RevealItem>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground/70 font-mono text-[0.7rem] uppercase tracking-[0.32em]">
              — {number}
            </span>
            <span className="bg-hairline h-px w-10" />
            <span className="text-foreground/70 text-[0.7rem] uppercase tracking-[0.32em]">
              {eyebrow}
            </span>
          </div>
        </RevealItem>

        <div
          className={cn(
            "flex flex-col gap-10 lg:flex-row lg:gap-16",
            align === "between" ? "lg:items-end lg:justify-between" : "",
          )}
        >
          <RevealItem
            as="h2"
            className="font-display text-balance text-[clamp(2.6rem,6vw,5rem)] font-light leading-[0.95] tracking-[-0.02em]"
          >
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className="text-gold italic">{titleAccent}</span>
              </>
            )}
          </RevealItem>

          {(lede || rightSlot) && (
            <RevealItem className="lg:max-w-md">
              {lede && (
                <p className="text-muted-foreground text-pretty text-base leading-relaxed sm:text-lg">
                  {lede}
                </p>
              )}
              {rightSlot}
            </RevealItem>
          )}
        </div>
      </div>
    </Reveal>
  );
}
