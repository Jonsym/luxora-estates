export type NavLink = {
  label: string;
  href: string;
  meta?: string;
};

export const navLinks: NavLink[] = [
  { label: "Colecciones", href: "#colecciones", meta: "01" },
  { label: "Insignia", href: "#propiedad-insignia", meta: "02" },
  { label: "Diario", href: "#diario", meta: "03" },
  { label: "La casa", href: "#la-casa", meta: "04" },
];

export const navCta = {
  label: "Consulta privada",
  href: "#contacto",
};
