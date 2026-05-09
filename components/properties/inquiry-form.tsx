"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { useId, useState } from "react";

import { Reveal, RevealItem } from "@/components/ui/reveal";
import { DURATION, EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Property } from "@/lib/data";

type Status = "idle" | "submitting" | "submitted";

export function InquiryForm({ property }: { property: Property }) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    visit: "",
    message: "",
  });

  const set =
    <K extends keyof typeof data>(key: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setData((d) => ({ ...d, [key]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("submitting");
    // Portfolio: simulate a network call.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("submitted");
  };

  return (
    <div id="solicitar" className="scroll-mt-32">
      <Reveal stagger>
        <RevealItem className="flex items-center gap-4">
        <span className="text-muted-foreground/70 font-mono text-[0.65rem] uppercase tracking-[0.32em]">
          — Iniciar conversación
        </span>
        <span className="bg-hairline h-px w-10" />
        <span className="text-foreground/70 text-[0.65rem] uppercase tracking-[0.32em]">
          Solicitar información
        </span>
      </RevealItem>

      <RevealItem
        as="h2"
        className="font-display mt-8 text-balance text-[clamp(1.8rem,3.6vw,2.8rem)] font-light leading-[1.05] tracking-[-0.015em]"
      >
        Una visita
        <br />
        <span className="text-gold italic">a {property.name}.</span>
      </RevealItem>

      <RevealItem className="text-muted-foreground/85 mt-8 max-w-xl text-pretty text-sm leading-relaxed sm:text-base">
        Cuéntanos cuándo podrías visitar la residencia o qué información
        adicional necesitas. Respondemos personalmente en menos de
        veinticuatro horas.
      </RevealItem>

      <RevealItem className="mt-12">
        <AnimatePresence mode="wait">
          {status === "submitted" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: DURATION.base, ease: EASE_OUT }}
              className="border-gold/40 bg-gold/5 flex flex-col gap-6 rounded-md border p-8 sm:flex-row sm:items-center sm:gap-8"
            >
              <span className="border-gold/55 flex size-14 shrink-0 items-center justify-center rounded-full border">
                <Check className="text-gold size-6" strokeWidth={1.5} />
              </span>
              <div className="space-y-3">
                <h3 className="font-display text-2xl leading-tight">
                  Gracias, {data.name.split(" ")[0] || "te"}.
                </h3>
                <p className="text-muted-foreground text-pretty text-sm leading-relaxed sm:text-base">
                  Hemos recibido tu solicitud sobre{" "}
                  <span className="text-foreground/95">{property.name}</span>.
                  La oficina privada te escribirá en menos de veinticuatro
                  horas con la propuesta de visita.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: DURATION.base, ease: EASE_OUT }}
              onSubmit={submit}
              className="flex flex-col gap-7"
            >
              <div className="grid gap-7 sm:grid-cols-2">
                <Field
                  id={`${id}-name`}
                  label="Nombre"
                  required
                  value={data.name}
                  onChange={set("name")}
                  placeholder="Tu nombre completo"
                  autoComplete="name"
                />
                <Field
                  id={`${id}-email`}
                  label="Correo"
                  required
                  type="email"
                  value={data.email}
                  onChange={set("email")}
                  placeholder="tu@correo.privado"
                  autoComplete="email"
                />
                <Field
                  id={`${id}-phone`}
                  label="Teléfono"
                  type="tel"
                  value={data.phone}
                  onChange={set("phone")}
                  placeholder="+34 …"
                  autoComplete="tel"
                />
                <Field
                  id={`${id}-visit`}
                  label="Visita preferida"
                  type="date"
                  value={data.visit}
                  onChange={set("visit")}
                />
              </div>

              <Field
                id={`${id}-message`}
                label="Mensaje"
                value={data.message}
                onChange={set("message")}
                placeholder={`Cuéntanos qué te ha llamado la atención de ${property.name}…`}
                multiline
              />

              <div className="border-hairline flex flex-col gap-5 border-t pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-muted-foreground/70 max-w-md text-xs leading-relaxed">
                  Tus datos se utilizarán únicamente para responder a esta
                  solicitud. Nunca los cederemos a terceros.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={cn(
                    "border-gold/55 hover:bg-gold hover:text-primary-foreground active:scale-[0.98] group inline-flex h-12 items-center justify-center gap-3",
                    "rounded-full border px-7 text-sm font-medium tracking-wide",
                    "transition-[background-color,color,transform] duration-500",
                    "disabled:cursor-not-allowed disabled:opacity-70",
                  )}
                >
                  {status === "submitting" ? (
                    <>
                      <LoaderCircle
                        className="size-4 animate-spin"
                        strokeWidth={1.5}
                      />
                      Enviando…
                    </>
                  ) : (
                    <>
                      Solicitar información
                      <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </RevealItem>
      </Reveal>
    </div>
  );
}

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  type?: "text" | "email" | "tel" | "date";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  autoComplete?: string;
  multiline?: boolean;
};

function Field({
  id,
  label,
  required,
  type = "text",
  value,
  onChange,
  placeholder,
  autoComplete,
  multiline,
}: FieldProps) {
  return (
    <div className="group flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-muted-foreground/70 font-mono text-[0.6rem] uppercase tracking-[0.32em]"
      >
        {label}
        {required && <span className="text-gold ml-1.5">·</span>}
      </label>
      {multiline ? (
        <textarea
          id={id}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
          className={cn(
            "border-hairline focus-visible:border-gold/60 placeholder:text-muted-foreground/40",
            "w-full resize-none border-b bg-transparent py-3 text-[0.95rem] leading-relaxed",
            "outline-none transition-[border-color] duration-300",
          )}
        />
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={cn(
            "border-hairline focus-visible:border-gold/60 placeholder:text-muted-foreground/40",
            "w-full border-b bg-transparent py-3 text-[0.95rem] tracking-wide",
            "outline-none transition-[border-color] duration-300",
            "[color-scheme:dark]",
          )}
        />
      )}
    </div>
  );
}
