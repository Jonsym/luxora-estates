/**
 * Content for the Luxora Estates homepage.
 * Spanish copy throughout. Image URLs reference Unsplash;
 * remote pattern is whitelisted in next.config.ts.
 */

export type Property = {
  slug: string;
  name: string;
  location: string;
  region: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
  imageAlt: string;
  blurb: string;
  architect?: string;
  year?: number;
};

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const featuredProperties: Property[] = [
  {
    slug: "villa-des-marees",
    name: "Villa des Marées",
    location: "Cap d'Antibes",
    region: "Costa Azul, Francia",
    price: "Bajo solicitud",
    beds: 7,
    baths: 9,
    area: "1.420 m²",
    image: u("photo-1613490493576-7fde63acd811"),
    imageAlt: "Villa moderna frente al mar con piscina infinita al atardecer",
    blurb:
      "Una residencia de inspiración mediterránea, suspendida sobre los acantilados, con piscina infinita y acceso privado a una cala.",
    architect: "Atelier Marques",
    year: 2021,
  },
  {
    slug: "casa-del-silencio",
    name: "Casa del Silencio",
    location: "Aspen Highlands",
    region: "Colorado, EE. UU.",
    price: "32,5 M USD",
    beds: 6,
    baths: 8,
    area: "980 m²",
    image: u("photo-1600607687939-ce8a6c25118c"),
    imageAlt: "Chalet contemporáneo de piedra y madera al pie de la montaña",
    blurb:
      "Refugio alpino en piedra, vidrio y madera de cedro envejecido. Vistas a las cumbres y acceso ski-in/ski-out privado.",
    architect: "Studio Holm",
    year: 2019,
  },
  {
    slug: "torre-celeste",
    name: "Torre Celeste",
    location: "Distrito Centro",
    region: "Madrid, España",
    price: "18,9 M EUR",
    beds: 4,
    baths: 5,
    area: "640 m²",
    image: u("photo-1600566753190-17f0baa2a6c3"),
    imageAlt: "Penthouse urbano con grandes ventanales sobre la ciudad iluminada",
    blurb:
      "Penthouse triplex en una de las direcciones más reservadas de Madrid. Terrazas envolventes, biblioteca y ascensor privado.",
    architect: "B720 / Fermín Vázquez",
    year: 2023,
  },
  {
    slug: "hacienda-el-roble",
    name: "Hacienda El Roble",
    location: "Valle de Provence",
    region: "Provenza, Francia",
    price: "Bajo solicitud",
    beds: 9,
    baths: 11,
    area: "2.800 m²",
    image: u("photo-1600210492486-724fe5c67fb0"),
    imageAlt: "Hacienda señorial entre olivares y campos de lavanda",
    blurb:
      "Casa señorial del siglo XIX con 14 hectáreas, viñedo en producción, capilla restaurada y casa de invitados independiente.",
    architect: "Restauración: Pierre Yovanovitch",
    year: 1872,
  },
];

export type Collection = {
  number: string;
  name: string;
  count: number;
  scope: string;
  image: string;
  imageAlt: string;
};

export const collections: Collection[] = [
  {
    number: "01",
    name: "Refugios alpinos",
    count: 12,
    scope: "Aspen · Zermatt · St. Moritz",
    image: u("photo-1551776235-dde6d482980b", 1200),
    imageAlt: "Cabaña alpina contemporánea cubierta de nieve",
  },
  {
    number: "02",
    name: "Costa mediterránea",
    count: 18,
    scope: "Cap Ferrat · Mallorca · Capri",
    image: u("photo-1605276374104-dee2a0ed3cd6", 1200),
    imageAlt: "Villa mediterránea blanca sobre acantilado al atardecer",
  },
  {
    number: "03",
    name: "Pied-à-terre urbanos",
    count: 9,
    scope: "París · Madrid · Tokio",
    image: u("photo-1502134249126-9f3755a50d78", 1200),
    imageAlt: "Apartamento urbano con grandes ventanales sobre la ciudad",
  },
  {
    number: "04",
    name: "Haciendas y campo",
    count: 8,
    scope: "Provenza · Toscana · Andalucía",
    image: u("photo-1505693416388-ac5ce068fe85", 1200),
    imageAlt: "Hacienda rural rodeada de olivares al amanecer",
  },
];

export type Stat = {
  value: string;
  label: string;
  meta: string;
};

export const stats: Stat[] = [
  {
    value: "47",
    label: "Fincas representadas",
    meta: "Cartera viva",
  },
  {
    value: "23",
    label: "Países",
    meta: "Cobertura global",
  },
  {
    value: "1,2",
    label: "Mil M€ en cartera",
    meta: "Valor total",
  },
  {
    value: "100%",
    label: "Discreción garantizada",
    meta: "Representación privada",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  city: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Encontraron una casa que no estaba en el mercado y nunca lo estuvo. La operación se cerró en una conversación, sin un solo correo de más.",
    author: "M. R.",
    city: "Cliente · París",
  },
  {
    quote:
      "Su sentido del detalle es casi obsesivo. Conocían la orientación de cada habitación antes de mostrárnosla.",
    author: "A. K.",
    city: "Cliente · Zúrich",
  },
  {
    quote:
      "Trabajan como un estudio, no como una agencia. Esa es toda la diferencia.",
    author: "J. L.",
    city: "Cliente · Madrid",
  },
];

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readMin: number;
  image: string;
  imageAlt: string;
  feature?: boolean;
};

export const articles: Article[] = [
  {
    slug: "casas-que-permanecen",
    category: "Arquitectura",
    title: "Las casas que permanecen.",
    excerpt:
      "Notas sobre la materialidad, el tiempo y la idea de patrimonio en la nueva generación de residencias privadas.",
    date: "Mayo · 2026",
    readMin: 8,
    image: u("photo-1582268611958-ebfd161ef9cf", 1600),
    imageAlt: "Interior arquitectónico minimalista con luz natural difusa",
    feature: true,
  },
  {
    slug: "luz-mediterranea",
    category: "Editorial",
    title: "Una luz que no envejece.",
    excerpt:
      "El verano en la Costa Azul, contado a través de seis terrazas y una piscina sin bordes.",
    date: "Abril · 2026",
    readMin: 5,
    image: u("photo-1600573472556-e636c2acda88", 1000),
    imageAlt: "Terraza con vistas al Mediterráneo al amanecer",
  },
  {
    slug: "interiores-de-autor",
    category: "Interiorismo",
    title: "Interiores de autor.",
    excerpt:
      "Conversaciones con cuatro estudios europeos que están redefiniendo el lenguaje del lujo doméstico.",
    date: "Marzo · 2026",
    readMin: 7,
    image: u("photo-1505691938895-1758d7feb511", 1000),
    imageAlt: "Salón con interiorismo cálido y mobiliario de autor",
  },
  {
    slug: "compra-discreta",
    category: "Mercado",
    title: "El arte de la compra discreta.",
    excerpt:
      "Cómo se mueve hoy el mercado off-market y por qué la discreción se ha vuelto el activo más valioso.",
    date: "Febrero · 2026",
    readMin: 6,
    image: u("photo-1600573472550-8090b5e0745e", 1000),
    imageAlt: "Detalle arquitectónico de mármol travertino y bronce",
  },
];

export type SignatureProperty = Property & {
  hero: string;
  gallery: { src: string; alt: string }[];
  highlights: { label: string; value: string }[];
  story: string[];
};

export const signatureProperty: SignatureProperty = {
  slug: "villa-aurelia",
  name: "Villa Aurelia",
  location: "Roca Llisa",
  region: "Ibiza, España",
  price: "Bajo solicitud",
  beds: 8,
  baths: 10,
  area: "1.840 m²",
  image: u("photo-1600585154340-be6161a56a0c"),
  imageAlt: "Villa contemporánea blanca con piscina infinita sobre el Mediterráneo",
  hero: u("photo-1613490493576-7fde63acd811", 2000),
  blurb:
    "Una residencia mediterránea contemporánea, concebida como una sucesión de pabellones encalados sobre el acantilado.",
  architect: "Marc Kushner / HWKN",
  year: 2022,
  highlights: [
    { label: "Arquitecto", value: "Marc Kushner / HWKN" },
    { label: "Año", value: "2022" },
    { label: "Superficie", value: "1.840 m² · parcela 1,2 ha" },
    { label: "Dormitorios", value: "8 suites · 2 casas de invitados" },
    { label: "Orientación", value: "Sur / Suroeste" },
    { label: "Acceso al mar", value: "Cala privada · embarcadero" },
  ],
  gallery: [
    {
      src: u("photo-1600210491892-03d54c0aaf87", 1200),
      alt: "Salón principal con vistas al mar y mobiliario de autor",
    },
    {
      src: u("photo-1613977257363-707ba9348227", 1200),
      alt: "Suite principal con cabecero en travertino y luz tenue",
    },
    {
      src: u("photo-1564013799919-ab600027ffc6", 1200),
      alt: "Patio interior con vegetación mediterránea y agua reflectante",
    },
  ],
  story: [
    "Concebida como un pequeño pueblo blanco, Villa Aurelia es una sucesión de pabellones encalados que se abren al Mediterráneo a través de un eje longitudinal de agua y vegetación.",
    "Materiales locales — piedra calcárea, madera de olivo, cal — dialogan con piezas contemporáneas elegidas en colaboración con galerías europeas. La residencia se entrega completamente amueblada bajo solicitud.",
  ],
};

export const heroImage = u(
  "photo-1600596542815-ffad4c1539a9",
  2400,
);

export const aboutImage = u("photo-1600585154526-990dced4db0d", 1600);
