"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import type { PropertyGeography, PropertyType } from "@/lib/data";

export type Filters = {
  type: "all" | PropertyType;
  geography: "all" | PropertyGeography;
  beds: "any" | "1-3" | "4-6" | "7+";
};

export const initialFilters: Filters = {
  type: "all",
  geography: "all",
  beds: "any",
};

const typeOptions: { value: Filters["type"]; label: string }[] = [
  { value: "all", label: "Todas" },
  { value: "Villa", label: "Villas" },
  { value: "Penthouse", label: "Penthouses" },
  { value: "Hacienda", label: "Haciendas" },
  { value: "Chalet", label: "Chalets" },
  { value: "Casa", label: "Casas" },
];

const geoOptions: { value: Filters["geography"]; label: string }[] = [
  { value: "all", label: "Todas" },
  { value: "Mediterráneo", label: "Mediterráneo" },
  { value: "Alpes", label: "Alpes" },
  { value: "Ciudad", label: "Ciudad" },
  { value: "Campo", label: "Campo" },
];

const bedOptions: { value: Filters["beds"]; label: string }[] = [
  { value: "any", label: "Cualquiera" },
  { value: "1-3", label: "1 — 3" },
  { value: "4-6", label: "4 — 6" },
  { value: "7+", label: "7+" },
];

export function PropertyFilters({
  filters,
  onChange,
  onReset,
  total,
  filtered,
}: {
  filters: Filters;
  onChange: (next: Partial<Filters>) => void;
  onReset: () => void;
  total: number;
  filtered: number;
}) {
  const isDefault =
    filters.type === "all" &&
    filters.geography === "all" &&
    filters.beds === "any";

  return (
    <div className="flex flex-col gap-7">
      <FilterRow
        label="Tipología"
        options={typeOptions}
        value={filters.type}
        onChange={(v) => onChange({ type: v })}
      />
      <FilterRow
        label="Geografía"
        options={geoOptions}
        value={filters.geography}
        onChange={(v) => onChange({ geography: v })}
      />
      <FilterRow
        label="Dormitorios"
        options={bedOptions}
        value={filters.beds}
        onChange={(v) => onChange({ beds: v })}
      />

      <div className="border-hairline flex flex-wrap items-center justify-between gap-4 border-t pt-5">
        <p className="text-muted-foreground/80 font-mono text-[0.65rem] uppercase tracking-[0.32em]">
          {isDefault
            ? `${total} residencias en cartera`
            : `${filtered} de ${total} residencias`}
        </p>
        {!isDefault && (
          <button
            type="button"
            onClick={onReset}
            className="text-foreground/85 hover:text-gold inline-flex items-center gap-2 text-xs underline-offset-[6px] transition-colors duration-300 hover:underline"
          >
            Restablecer filtros
            <span className="bg-gold size-1 rounded-full" />
          </button>
        )}
      </div>
    </div>
  );
}

type FilterRowProps<V extends string> = {
  label: string;
  options: { value: V; label: string }[];
  value: V;
  onChange: (v: V) => void;
};

function FilterRow<V extends string>({
  label,
  options,
  value,
  onChange,
}: FilterRowProps<V>) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
      <span className="text-muted-foreground/70 font-mono text-[0.65rem] uppercase tracking-[0.32em] sm:w-32 lg:w-36">
        {label}
      </span>
      <div className="-mx-1 flex flex-wrap items-center gap-x-2 gap-y-2.5">
        {options.map((opt) => {
          const active = opt.value === value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={cn(
                "relative inline-flex items-center rounded-full border px-4 py-1.5 text-sm tracking-wide",
                "transition-[background-color,border-color,color] duration-300",
                active
                  ? "border-gold/55 text-gold"
                  : "border-hairline text-foreground/75 hover:border-gold/35 hover:text-foreground",
              )}
            >
              {active && (
                <motion.span
                  layoutId={`filter-${label}-bg`}
                  aria-hidden
                  className="bg-gold/10 absolute inset-0 -z-10 rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
