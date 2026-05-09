"use client";

import { motion } from "framer-motion";

import { DURATION, EASE_OUT } from "@/lib/motion";

export function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      key="empty"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: DURATION.base, ease: EASE_OUT }}
      className="border-hairline relative mx-auto mt-12 flex max-w-2xl flex-col items-center gap-8 border-t px-6 py-20 text-center"
    >
      <span className="bg-gold/80 absolute -top-px left-1/2 h-px w-16 -translate-x-1/2" />

      <span className="text-muted-foreground/80 font-mono text-[0.65rem] uppercase tracking-[0.32em]">
        Sin coincidencias
      </span>

      <h3 className="font-display text-balance text-3xl font-light leading-tight tracking-[-0.01em] sm:text-4xl">
        Ninguna residencia
        <br />
        <span className="text-gold italic">coincide con tu mirada.</span>
      </h3>

      <p className="text-muted-foreground/85 max-w-md text-pretty text-sm leading-relaxed sm:text-base">
        Cada selección de Luxora se renueva semanalmente. Si tienes un
        criterio específico, podemos buscarlo en cartera privada.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <button
          type="button"
          onClick={onReset}
          className="border-gold/55 hover:bg-gold hover:text-primary-foreground active:scale-[0.98] inline-flex h-12 items-center gap-3 rounded-full border px-7 text-sm font-medium tracking-wide transition-[background-color,color,transform] duration-500"
        >
          Restablecer filtros
          <span className="bg-current size-1 rounded-full" />
        </button>
        <a
          href="/#contacto"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
        >
          <span className="bg-muted-foreground/40 size-1 rounded-full" />
          Búsqueda a medida
        </a>
      </div>
    </motion.div>
  );
}
