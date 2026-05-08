import Link from "next/link";
import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
  href?: string;
};

export function Wordmark({ className, href = "/" }: WordmarkProps) {
  return (
    <Link
      href={href}
      aria-label="Luxora Estates — inicio"
      className={cn(
        "group inline-flex items-baseline gap-2 font-display text-[1.05rem] leading-none",
        className,
      )}
    >
      <span className="tracking-[0.32em] uppercase font-medium">Luxora</span>
      <span
        aria-hidden
        className="text-gold transition-opacity duration-500 group-hover:opacity-70"
      >
        ·
      </span>
      <span className="text-muted-foreground tracking-[0.28em] uppercase text-[0.7rem]">
        Estates
      </span>
    </Link>
  );
}
