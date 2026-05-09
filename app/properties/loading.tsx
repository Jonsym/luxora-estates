import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

/**
 * Premium skeleton — gentle hairline shimmer, no harsh placeholders.
 * Mirrors the listing layout so the eye lands on the same regions
 * the real content will occupy.
 */
export default function PropertiesLoading() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Header skeleton */}
      <header className="relative pt-32 sm:pt-36 lg:pt-44">
        <Container>
          <div className="space-y-10">
            <Bar w="w-32" className="h-2" />
            <Bar w="w-48" className="h-2" />
            <div className="space-y-5 pt-2">
              <Bar w="w-3/4" className="h-12 sm:h-16" />
              <Bar w="w-2/3" className="h-12 sm:h-16" />
            </div>
            <div className="flex items-start gap-6">
              <span className="bg-hairline mt-3 hidden h-px w-16 sm:block" />
              <div className="w-full max-w-xl space-y-2.5">
                <Bar w="w-full" className="h-2" />
                <Bar w="w-11/12" className="h-2" />
                <Bar w="w-2/3" className="h-2" />
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Filter strip skeleton */}
      <div className="border-hairline mt-16 border-y sm:mt-20 lg:mt-24">
        <Container className="flex flex-wrap items-center gap-x-6 gap-y-4 py-7">
          <Bar w="w-24" className="h-3" />
          <Bar w="w-20" className="h-9 rounded-full" />
          <Bar w="w-24" className="h-9 rounded-full" />
          <Bar w="w-20" className="h-9 rounded-full" />
          <span className="bg-hairline h-3 w-px" />
          <Bar w="w-24" className="h-3" />
          <Bar w="w-24" className="h-9 rounded-full" />
          <Bar w="w-20" className="h-9 rounded-full" />
        </Container>
      </div>

      {/* Grid skeleton */}
      <Container className="grid grid-cols-12 gap-x-6 gap-y-12 pb-32 pt-12 sm:gap-y-16 sm:pt-16 lg:gap-x-8 lg:pt-20">
        {Array.from({ length: 7 }).map((_, i) => {
          const isFeature = i === 0;
          return (
            <div
              key={i}
              className={cn(
                "col-span-12",
                isFeature
                  ? "lg:col-span-8"
                  : "sm:col-span-6 lg:col-span-4",
              )}
            >
              <Tile feature={isFeature} />
            </div>
          );
        })}
      </Container>
    </main>
  );
}

function Tile({ feature }: { feature: boolean }) {
  return (
    <div className="space-y-5">
      <div
        className={cn(
          "bg-surface relative w-full overflow-hidden rounded-sm",
          feature ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[4/5]",
        )}
      >
        <Shimmer />
      </div>
      <div className="space-y-2.5">
        <Bar w="w-1/3" className="h-2" />
        <Bar w={feature ? "w-2/3" : "w-1/2"} className="h-5" />
        <Bar w="w-1/3" className="h-2" />
      </div>
      <div className="border-hairline flex flex-wrap items-center gap-4 border-t pt-3">
        <Bar w="w-12" className="h-2" />
        <Bar w="w-14" className="h-2" />
        <Bar w="w-16" className="h-2" />
      </div>
    </div>
  );
}

function Bar({ w, className }: { w: string; className?: string }) {
  return (
    <div className={cn("bg-surface relative overflow-hidden rounded-sm", w, className)}>
      <Shimmer />
    </div>
  );
}

/**
 * A subtle gold sheen that crosses the placeholder. Pure CSS animation,
 * defined inline so we don't pollute global styles for a single use.
 */
function Shimmer() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 -translate-x-full animate-[shimmer_2.6s_ease-in-out_infinite]"
      style={{
        background:
          "linear-gradient(90deg, transparent, oklch(0.78 0.10 85 / 0.06) 50%, transparent)",
      }}
    />
  );
}
