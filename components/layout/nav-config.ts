export type NavLink = {
  label: string;
  href: string;
  meta?: string;
};

export const navLinks: NavLink[] = [
  { label: "Catálogo", href: "/properties", meta: "01" },
  { label: "Colecciones", href: "/#colecciones", meta: "02" },
  { label: "Diario", href: "/#diario", meta: "03" },
  { label: "La casa", href: "/#la-casa", meta: "04" },
];

export const navCta = {
  label: "Consulta privada",
  href: "/#contacto",
};
