"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";

import { DURATION, EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Property } from "@/lib/data";

import { EmptyState } from "./empty-state";
import { PropertyCard } from "./property-card";
import {
  PropertyFilters,
  initialFilters,
  type Filters,
} from "./property-filters";

function applyFilters(items: Property[], f: Filters): Property[] {
  return items.filter((p) => {
    if (f.type !== "all" && p.type !== f.type) return false;
    if (f.geography !== "all" && p.geography !== f.geography) return false;
    if (f.beds === "1-3" && (p.beds < 1 || p.beds > 3)) return false;
    if (f.beds === "4-6" && (p.beds < 4 || p.beds > 6)) return false;
    if (f.beds === "7+" && p.beds < 7) return false;
    return true;
  });
}

export function PropertiesExplorer({ properties }: { properties: Property[] }) {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const filtered = useMemo(
    () => applyFilters(properties, filters),
    [properties, filters],
  );

  const updateFilters = useCallback((next: Partial<Filters>) => {
    setFilters((prev) => ({ ...prev, ...next }));
  }, []);

  const reset = useCallback(() => setFilters(initialFilters), []);

  return (
    <>
      {/* Filter bar — sticky only at lg+ to avoid eating mobile viewport. */}
      <div className="border-hairline relative z-30 border-y bg-background/85 supports-[backdrop-filter]:bg-background/65 supports-[backdrop-filter]:backdrop-blur-2xl supports-[backdrop-filter]:saturate-150 lg:sticky lg:top-20">
        <div className="mx-auto w-full max-w-[88rem] px-6 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-9">
          <PropertyFilters
            filters={filters}
            onChange={updateFilters}
            onReset={reset}
            total={properties.length}
            filtered={filtered.length}
          />
        </div>
      </div>

      {/* Grid / Empty state */}
      <div className="mx-auto w-full max-w-[88rem] px-6 pb-32 pt-12 sm:px-8 sm:pb-40 sm:pt-16 lg:px-12 lg:pt-20">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <EmptyState key="empty" onReset={reset} />
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: DURATION.quick, ease: EASE_OUT }}
            >
              <LayoutGroup id="property-grid">
                <ul className="grid grid-cols-12 gap-x-6 gap-y-12 sm:gap-y-16 lg:gap-x-8">
                  <AnimatePresence mode="popLayout" initial={false}>
                    {filtered.map((p, i) => {
                      const isFeature = i % 6 === 0;
                      return (
                        <motion.li
                          key={p.slug}
                          layout
                          initial={{ opacity: 0, y: 24 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.97 }}
                          transition={{
                            opacity: { duration: 0.45, ease: EASE_OUT },
                            y: { duration: 0.55, ease: EASE_OUT },
                            layout: { duration: 0.7, ease: EASE_OUT },
                          }}
                          className={cn(
                            "col-span-12",
                            isFeature
                              ? "lg:col-span-8"
                              : "sm:col-span-6 lg:col-span-4",
                          )}
                        >
                          <PropertyCard
                            property={p}
                            size={isFeature ? "feature" : "default"}
                          />
                        </motion.li>
                      );
                    })}
                  </AnimatePresence>
                </ul>
              </LayoutGroup>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
