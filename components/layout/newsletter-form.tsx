"use client";

import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "submitted";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || status !== "idle") return;
    setStatus("submitting");
    // Portfolio: simulate a network roundtrip so the success state is visible.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <label htmlFor="newsletter-email" className="sr-only">
        Dirección de correo
      </label>
      <div
        className={cn(
          "border-hairline group relative flex h-12 items-center border-b transition-colors",
          "focus-within:border-gold/70",
        )}
      >
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="tu@correo.privado"
          value={email}
          disabled={status !== "idle"}
          onChange={(e) => setEmail(e.target.value)}
          className={cn(
            "placeholder:text-muted-foreground/50 w-full bg-transparent pr-12",
            "text-sm tracking-wide outline-none disabled:opacity-60",
          )}
        />
        <button
          type="submit"
          disabled={status !== "idle"}
          aria-label="Suscribirse"
          className={cn(
            "absolute right-0 inline-flex h-9 w-9 items-center justify-center rounded-full",
            "border-hairline border transition-all duration-500",
            "group-focus-within:border-gold/60 group-focus-within:text-gold",
            "hover:bg-gold hover:border-gold hover:text-primary-foreground",
            "disabled:opacity-50",
          )}
        >
          <ArrowRight className="size-4" strokeWidth={1.5} />
        </button>
      </div>

      <div className="mt-3 min-h-[1.25rem] text-xs">
        <AnimatePresence mode="wait">
          {status === "submitted" ? (
            <motion.p
              key="ok"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-gold"
            >
              Gracias. La primera carta llegará en breve.
            </motion.p>
          ) : (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-muted-foreground/70"
            >
              Correspondencia trimestral. Cancela cuando lo desees.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
