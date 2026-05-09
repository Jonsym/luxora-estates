/**
 * Luxora Estates — content for the homepage and the property catalog.
 * All Spanish copy. Image URLs reference Unsplash; the remote pattern
 * is whitelisted in next.config.ts.
 */

export type PropertyType = "Villa" | "Penthouse" | "Hacienda" | "Chalet" | "Casa";
export type PropertyGeography =
  | "Mediterráneo"
  | "Alpes"
  | "Ciudad"
  | "Campo";

export type AmenityCategory = {
  category: string;
  items: string[];
};

export type LifestyleBlock = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  body: string;
};

export type LocationMeta = {
  airport?: string;
  sea?: string;
  ski?: string;
  village?: string;
  notes?: string;
};

export type Property = {
  slug: string;
  name: string;
  type: PropertyType;
  geography: PropertyGeography;
  location: string;
  region: string;
  country: string;
  /** Editorial price ("Bajo solicitud", "32,5 M USD", …). */
  price: string;
  /** Numeric price ceiling in millions of EUR for filter math. 0 = on request. */
  priceFilter: number;
  status: "Disponible" | "Reservada";
  beds: number;
  baths: number;
  area: string;
  parcel?: string;
  orientation?: string;
  architect?: string;
  year?: number;
  image: string;
  imageAlt: string;
  blurb: string;
  description: string[];
  highlights: { label: string; value: string }[];
  amenities: AmenityCategory[];
  gallery: { src: string; alt: string }[];
  location_meta: LocationMeta;
  lifestyle: LifestyleBlock[];
  /** Used for homepage feature grid + signature picker. */
  homepageFeature?: boolean;
  signature?: boolean;
};

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const properties: Property[] = [
  {
    slug: "villa-aurelia",
    name: "Villa Aurelia",
    type: "Villa",
    geography: "Mediterráneo",
    location: "Roca Llisa",
    region: "Ibiza",
    country: "España",
    price: "Bajo solicitud",
    priceFilter: 0,
    status: "Disponible",
    beds: 8,
    baths: 10,
    area: "1.840 m²",
    parcel: "1,2 ha",
    orientation: "Sur / Suroeste",
    architect: "Marc Kushner / HWKN",
    year: 2022,
    image: u("photo-1613490493576-7fde63acd811"),
    imageAlt:
      "Villa contemporánea blanca con piscina infinita sobre el Mediterráneo",
    blurb:
      "Una residencia mediterránea contemporánea, concebida como una sucesión de pabellones encalados sobre el acantilado.",
    description: [
      "Concebida como un pequeño pueblo blanco, Villa Aurelia es una sucesión de pabellones encalados que se abren al Mediterráneo a través de un eje longitudinal de agua y vegetación.",
      "Materiales locales — piedra calcárea, madera de olivo, cal — dialogan con piezas contemporáneas elegidas en colaboración con galerías europeas. La residencia se entrega completamente amueblada bajo solicitud.",
      "El programa principal se distribuye en cuatro pabellones unidos por porches de penumbra, separando la vida íntima de las áreas de recepción. Una casa de invitados independiente aloja al servicio o a los visitantes.",
    ],
    highlights: [
      { label: "Arquitecto", value: "Marc Kushner / HWKN" },
      { label: "Año", value: "2022" },
      { label: "Superficie construida", value: "1.840 m²" },
      { label: "Parcela", value: "1,2 ha · primera línea de mar" },
      { label: "Dormitorios", value: "8 suites + 2 casas de invitados" },
      { label: "Orientación", value: "Sur / Suroeste" },
      { label: "Acceso al mar", value: "Cala privada · embarcadero" },
    ],
    amenities: [
      {
        category: "Bienestar",
        items: [
          "Piscina infinita exterior climatizada",
          "Spa con sauna finlandesa y hammam",
          "Gimnasio acristalado con vistas al mar",
          "Sala de yoga y pilates con suelo de bambú",
        ],
      },
      {
        category: "Exterior",
        items: [
          "1,2 ha de jardín mediterráneo de Patrick Blanc",
          "Embarcadero privado y cala con acceso directo",
          "Pabellón de comedor exterior con cocina open fire",
          "Helipuerto homologado para H125",
        ],
      },
      {
        category: "Interior",
        items: [
          "Cine privado de 12 plazas con sonido Dolby Atmos",
          "Bodega climatizada para 2.400 botellas",
          "Biblioteca de doble altura con balcón",
          "Cocina principal Bulthaup + cocina de servicio",
        ],
      },
      {
        category: "Servicios",
        items: [
          "Personal de servicio incluido (mayordomo + dos)",
          "Sistema domótico Crestron integral",
          "Garaje subterráneo para 6 vehículos",
          "Seguridad perimetral 24/7",
        ],
      },
    ],
    gallery: [
      {
        src: u("photo-1600210491892-03d54c0aaf87", 1800),
        alt: "Salón principal de doble altura con vistas al mar",
      },
      {
        src: u("photo-1613977257363-707ba9348227", 1800),
        alt: "Suite principal con cabecero en travertino y luz tenue",
      },
      {
        src: u("photo-1564013799919-ab600027ffc6", 1800),
        alt: "Patio interior con vegetación mediterránea y agua reflectante",
      },
      {
        src: u("photo-1600585154340-be6161a56a0c", 1800),
        alt: "Pabellón exterior y piscina infinita al atardecer",
      },
    ],
    location_meta: {
      airport: "Aeropuerto de Ibiza · 18 min en coche",
      sea: "Cala privada · acceso directo desde la propiedad",
      village: "Santa Eulalia · 12 min",
      notes:
        "Acceso por camino privado con control de acceso. Helipuerto activo bajo solicitud previa.",
    },
    lifestyle: [
      {
        src: u("photo-1505691938895-1758d7feb511", 1600),
        alt: "Mesa larga vestida para una cena al atardecer junto al mar",
        eyebrow: "El día",
        title: "Una jornada que sigue al sol.",
        body: "El eje principal de la villa orienta cada espacio hacia un momento del día: desayuno mirando al mar abierto, almuerzo a la sombra del olivar y cena bajo las pérgolas de cal y madera.",
      },
      {
        src: u("photo-1582268611958-ebfd161ef9cf", 1600),
        alt: "Detalle interior de mármol travertino y madera con luz natural",
        eyebrow: "El detalle",
        title: "Una conversación con los materiales.",
        body: "Cada estancia ha sido pensada como una pequeña pieza de orfebrería: travertinos de la Toscana, madera de olivo recuperada y bronces patinados a mano. El conjunto envejece con el tiempo, no contra él.",
      },
    ],
    homepageFeature: false,
    signature: true,
  },
  {
    slug: "villa-des-marees",
    name: "Villa des Marées",
    type: "Villa",
    geography: "Mediterráneo",
    location: "Cap d'Antibes",
    region: "Costa Azul",
    country: "Francia",
    price: "Bajo solicitud",
    priceFilter: 0,
    status: "Disponible",
    beds: 7,
    baths: 9,
    area: "1.420 m²",
    parcel: "0,9 ha",
    orientation: "Sur",
    architect: "Atelier Marques",
    year: 2021,
    image: u("photo-1613490493576-7fde63acd811"),
    imageAlt:
      "Villa moderna frente al mar con piscina infinita al atardecer",
    blurb:
      "Una residencia de inspiración mediterránea, suspendida sobre los acantilados, con piscina infinita y acceso privado a una cala.",
    description: [
      "Suspendida entre el cielo y el mar, Villa des Marées ocupa una de las parcelas más reservadas del Cap d'Antibes. La arquitectura, obra del Atelier Marques, persigue la disolución entre interior y paisaje a través de una serie de planos horizontales en piedra clara.",
      "El interior está vestido con piezas de Liaigre y obras de la galería Kreo. Cada habitación está orientada para captar un momento distinto de la luz mediterránea, desde el alba hasta la noche cerrada.",
    ],
    highlights: [
      { label: "Arquitecto", value: "Atelier Marques" },
      { label: "Año", value: "2021" },
      { label: "Superficie", value: "1.420 m²" },
      { label: "Parcela", value: "0,9 ha · primera línea" },
      { label: "Dormitorios", value: "7 suites" },
      { label: "Acceso al mar", value: "Cala privada · 30 m de costa" },
    ],
    amenities: [
      {
        category: "Bienestar",
        items: [
          "Piscina infinita climatizada",
          "Spa con sauna y baño turco",
          "Gimnasio con vistas al Mediterráneo",
        ],
      },
      {
        category: "Exterior",
        items: [
          "Jardín de Jean Mus con olivar centenario",
          "Acceso privado a cala",
          "Pérgola de comedor exterior",
        ],
      },
      {
        category: "Interior",
        items: [
          "Bodega refrigerada para 1.600 botellas",
          "Cine privado de 8 plazas",
          "Cocina principal Boffi",
        ],
      },
      {
        category: "Servicios",
        items: [
          "Personal de servicio bajo demanda",
          "Sistema domótico KNX",
          "Garaje para 4 vehículos + ascensor",
        ],
      },
    ],
    gallery: [
      {
        src: u("photo-1600585154526-990dced4db0d", 1800),
        alt: "Salón abierto al mar con grandes ventanales",
      },
      {
        src: u("photo-1600573472556-e636c2acda88", 1800),
        alt: "Terraza al amanecer con vistas al Mediterráneo",
      },
      {
        src: u("photo-1600210491892-03d54c0aaf87", 1800),
        alt: "Suite principal con vestidor en madera natural",
      },
    ],
    location_meta: {
      airport: "Aeropuerto de Niza · 22 min en coche",
      sea: "Acceso privado a cala · 80 m de la villa",
      village: "Antibes · 8 min",
      notes: "Helipuerto compartido en propiedad vecina bajo acuerdo.",
    },
    lifestyle: [
      {
        src: u("photo-1505691938895-1758d7feb511", 1600),
        alt: "Mesa al exterior con vajilla blanca y velas",
        eyebrow: "El verano",
        title: "Costa Azul, en privado.",
        body: "La villa es uno de los últimos accesos privados al mar del Cap d'Antibes. Un sendero entre pinos baja directamente desde la piscina hasta la cala.",
      },
    ],
    homepageFeature: true,
  },
  {
    slug: "casa-del-silencio",
    name: "Casa del Silencio",
    type: "Chalet",
    geography: "Alpes",
    location: "Aspen Highlands",
    region: "Colorado",
    country: "Estados Unidos",
    price: "32,5 M USD",
    priceFilter: 30,
    status: "Disponible",
    beds: 6,
    baths: 8,
    area: "980 m²",
    parcel: "0,4 ha",
    orientation: "Suroeste",
    architect: "Studio Holm",
    year: 2019,
    image: u("photo-1600607687939-ce8a6c25118c"),
    imageAlt:
      "Chalet contemporáneo de piedra y madera al pie de la montaña nevada",
    blurb:
      "Refugio alpino en piedra, vidrio y madera de cedro envejecido. Vistas a las cumbres y acceso ski-in/ski-out privado.",
    description: [
      "Casa del Silencio es un ejercicio de arquitectura introvertida: cuatro volúmenes de piedra local rodean un patio central donde la nieve se acumula como una escultura cambiante.",
      "Cada estancia mira hacia las cumbres de Aspen Highlands. La carpintería está realizada en cedro envejecido por la propia montaña antes de ser instalado, una técnica desarrollada por el Studio Holm en colaboración con artesanos suizos.",
    ],
    highlights: [
      { label: "Arquitecto", value: "Studio Holm" },
      { label: "Año", value: "2019" },
      { label: "Superficie", value: "980 m²" },
      { label: "Acceso", value: "Ski-in / ski-out privado" },
      { label: "Dormitorios", value: "6 suites" },
      { label: "Orientación", value: "Suroeste" },
    ],
    amenities: [
      {
        category: "Bienestar",
        items: [
          "Spa alpino con sauna, vapor y piscina interior",
          "Gimnasio con vistas a las pistas",
          "Sala de masajes y zona de recuperación en frío",
        ],
      },
      {
        category: "Exterior",
        items: [
          "Acceso ski-in / ski-out privado",
          "Patio central con chimenea exterior",
          "Cuarto de esquís climatizado para 12 personas",
        ],
      },
      {
        category: "Interior",
        items: [
          "Salón doble con chimenea de piedra de doble cara",
          "Bodega para 800 botellas",
          "Cocina Molteni a medida",
        ],
      },
      {
        category: "Servicios",
        items: [
          "Personal de invierno bajo demanda",
          "Sistema de calefacción geotérmico",
          "Garaje climatizado para 4 vehículos",
        ],
      },
    ],
    gallery: [
      {
        src: u("photo-1551776235-dde6d482980b", 1800),
        alt: "Exterior nevado con grandes ventanales iluminados",
      },
      {
        src: u("photo-1582268611958-ebfd161ef9cf", 1800),
        alt: "Salón con chimenea de piedra y mobiliario en lana cruda",
      },
      {
        src: u("photo-1505693416388-ac5ce068fe85", 1800),
        alt: "Cocina con techos altos y materiales naturales",
      },
    ],
    location_meta: {
      airport: "Aspen / Pitkin County · 12 min",
      ski: "Pistas de Aspen Highlands · acceso directo",
      village: "Centro de Aspen · 9 min",
    },
    lifestyle: [
      {
        src: u("photo-1551776235-dde6d482980b", 1600),
        alt: "Vistas a las pistas nevadas desde el ventanal",
        eyebrow: "El invierno",
        title: "La nieve, en silencio.",
        body: "Diseñada para los meses de nieve, la casa absorbe el ruido del exterior con muros de piedra de un metro y carpinterías triples.",
      },
    ],
    homepageFeature: true,
  },
  {
    slug: "torre-celeste",
    name: "Torre Celeste",
    type: "Penthouse",
    geography: "Ciudad",
    location: "Distrito Centro",
    region: "Madrid",
    country: "España",
    price: "18,9 M EUR",
    priceFilter: 18.9,
    status: "Disponible",
    beds: 4,
    baths: 5,
    area: "640 m²",
    orientation: "Sur",
    architect: "B720 / Fermín Vázquez",
    year: 2023,
    image: u("photo-1600566753190-17f0baa2a6c3"),
    imageAlt: "Penthouse urbano con grandes ventanales sobre la ciudad iluminada",
    blurb:
      "Penthouse triplex en una de las direcciones más reservadas de Madrid. Terrazas envolventes, biblioteca y ascensor privado.",
    description: [
      "Torre Celeste ocupa las tres últimas plantas de un edificio histórico cuidadosamente restaurado por el estudio B720. El proyecto interior preserva la cota original del antiguo palacio mientras introduce una arquitectura interior contemporánea.",
      "La planta principal se abre a una terraza envolvente con vistas al skyline. Las plantas superiores acogen las suites privadas y un belvedere acristalado pensado como sala de lectura.",
    ],
    highlights: [
      { label: "Arquitecto", value: "B720 / Fermín Vázquez" },
      { label: "Año", value: "2023" },
      { label: "Superficie", value: "640 m² + 220 m² terrazas" },
      { label: "Plantas", value: "Triplex · plantas 7-9" },
      { label: "Acceso", value: "Ascensor privado directo" },
      { label: "Dormitorios", value: "4 suites + estudio" },
    ],
    amenities: [
      {
        category: "Interior",
        items: [
          "Biblioteca de doble altura",
          "Cocina principal y office Bulthaup",
          "Salón con techos de 4,2 m",
        ],
      },
      {
        category: "Exterior",
        items: [
          "Terrazas envolventes (220 m²)",
          "Belvedere acristalado",
          "Jardín vertical de Patrick Blanc",
        ],
      },
      {
        category: "Servicios",
        items: [
          "Conserjería 24 h del edificio",
          "Domótica integral KNX",
          "2 plazas de garaje + carga eléctrica",
        ],
      },
    ],
    gallery: [
      {
        src: u("photo-1502134249126-9f3755a50d78", 1800),
        alt: "Salón principal con grandes ventanales sobre la ciudad",
      },
      {
        src: u("photo-1600573472550-8090b5e0745e", 1800),
        alt: "Detalle de mármol travertino y bronce en el vestíbulo",
      },
      {
        src: u("photo-1505693416388-ac5ce068fe85", 1800),
        alt: "Comedor con mesa larga y obra contemporánea",
      },
    ],
    location_meta: {
      airport: "Madrid Barajas · 28 min",
      village: "Distrito Salamanca · a pie",
      notes: "Edificio con conserjería 24 h y acceso reservado.",
    },
    lifestyle: [
      {
        src: u("photo-1600573472556-e636c2acda88", 1600),
        alt: "Vista nocturna del skyline de Madrid desde la terraza",
        eyebrow: "La ciudad",
        title: "Madrid, vista desde lo alto.",
        body: "El penthouse domina visualmente el eje del Paseo del Prado, con el Retiro como horizonte natural y la sierra de fondo en los días claros.",
      },
    ],
    homepageFeature: true,
  },
  {
    slug: "hacienda-el-roble",
    name: "Hacienda El Roble",
    type: "Hacienda",
    geography: "Campo",
    location: "Valle de Provence",
    region: "Provenza",
    country: "Francia",
    price: "Bajo solicitud",
    priceFilter: 0,
    status: "Disponible",
    beds: 9,
    baths: 11,
    area: "2.800 m²",
    parcel: "14 ha",
    architect: "Restauración: Pierre Yovanovitch",
    year: 1872,
    image: u("photo-1600210492486-724fe5c67fb0"),
    imageAlt: "Hacienda señorial entre olivares y campos de lavanda",
    blurb:
      "Casa señorial del siglo XIX con 14 hectáreas, viñedo en producción, capilla restaurada y casa de invitados independiente.",
    description: [
      "Construida en 1872 sobre los restos de un priorato del siglo XV, Hacienda El Roble combina el rigor histórico de su fábrica original con la mirada contemporánea de Pierre Yovanovitch, responsable de su última restauración.",
      "Catorce hectáreas de viñedo en producción, una capilla restaurada y una casa de invitados independiente acompañan la residencia principal. La propiedad se entrega con licencia DOP activa.",
    ],
    highlights: [
      { label: "Arquitecto", value: "Restauración: Pierre Yovanovitch" },
      { label: "Año original", value: "1872 · sobre priorato del s. XV" },
      { label: "Superficie", value: "2.800 m² + dependencias" },
      { label: "Parcela", value: "14 ha · viñedo en producción" },
      { label: "Dormitorios", value: "9 + 4 en casa de invitados" },
    ],
    amenities: [
      {
        category: "Exterior",
        items: [
          "Viñedo en producción (DOP activa)",
          "Olivar y huerto orgánico",
          "Piscina natural y zona de baños",
          "Capilla restaurada del s. XV",
        ],
      },
      {
        category: "Interior",
        items: [
          "Bodega de 12.000 botellas (subterránea)",
          "Cocina histórica restaurada + cocina contemporánea",
          "Biblioteca de techo abovedado",
          "Salón de música con piano de cola",
        ],
      },
      {
        category: "Servicios",
        items: [
          "Casa de invitados independiente (4 suites)",
          "Personal agrícola y enólogo bajo contrato",
          "Garajes en antigua caballeriza",
        ],
      },
    ],
    gallery: [
      {
        src: u("photo-1505693416388-ac5ce068fe85", 1800),
        alt: "Salón con techos de viga vista y mobiliario de autor",
      },
      {
        src: u("photo-1600210492486-724fe5c67fb0", 1800),
        alt: "Vista aérea de la hacienda entre olivares",
      },
      {
        src: u("photo-1600573472550-8090b5e0745e", 1800),
        alt: "Detalle de la capilla restaurada con pavimento original",
      },
    ],
    location_meta: {
      airport: "Marsella Provence · 50 min",
      village: "Aix-en-Provence · 25 min",
      notes:
        "Propiedad agrícola en explotación. Personal agrícola transferible bajo acuerdo.",
    },
    lifestyle: [
      {
        src: u("photo-1582268611958-ebfd161ef9cf", 1600),
        alt: "Detalle interior con muebles antiguos y obra contemporánea",
        eyebrow: "La tierra",
        title: "Una hacienda viva.",
        body: "La explotación agrícola continúa en activo. La cosecha del último año dio 18.000 botellas; la siguiente, prevista para septiembre, está reservada en su totalidad.",
      },
    ],
    homepageFeature: true,
  },
  {
    slug: "refugio-zermatt",
    name: "Refugio Zermatt",
    type: "Chalet",
    geography: "Alpes",
    location: "Winkelmatten",
    region: "Zermatt",
    country: "Suiza",
    price: "44 M CHF",
    priceFilter: 46,
    status: "Disponible",
    beds: 5,
    baths: 7,
    area: "720 m²",
    parcel: "0,2 ha",
    orientation: "Sureste",
    architect: "Heinz Julen",
    year: 2018,
    image: u("photo-1551776235-dde6d482980b"),
    imageAlt: "Chalet alpino contemporáneo con vistas al Matterhorn",
    blurb:
      "Chalet contemporáneo con vistas frontales al Matterhorn. Diseño de Heinz Julen, materiales locales y spa privado.",
    description: [
      "El chalet ocupa una de las parcelas más altas de Winkelmatten, con vistas frontales al Matterhorn. Heinz Julen firma una arquitectura de madera quemada y piedra alpina, austera por fuera y profundamente íntima por dentro.",
      "El programa se distribuye en cuatro plantas conectadas por un ascensor revestido en madera. La planta inferior aloja un spa con piscina interior y una bodega para 600 botellas.",
    ],
    highlights: [
      { label: "Arquitecto", value: "Heinz Julen" },
      { label: "Año", value: "2018" },
      { label: "Superficie", value: "720 m²" },
      { label: "Plantas", value: "4 + ascensor privado" },
      { label: "Vistas", value: "Frontales al Matterhorn" },
    ],
    amenities: [
      {
        category: "Bienestar",
        items: [
          "Spa con piscina interior",
          "Sauna finlandesa con vista a la montaña",
          "Sala de masajes y zona de recuperación",
        ],
      },
      {
        category: "Interior",
        items: [
          "Bodega climatizada para 600 botellas",
          "Cocina Bulthaup con isla central",
          "Salón con chimenea de piedra y techo de doble altura",
        ],
      },
      {
        category: "Servicios",
        items: [
          "Acceso ski-in / ski-out (Sunnegga)",
          "Garaje climatizado para 2 vehículos",
          "Personal de invierno disponible",
        ],
      },
    ],
    gallery: [
      {
        src: u("photo-1600607687939-ce8a6c25118c", 1800),
        alt: "Vista exterior del chalet bajo nevada",
      },
      {
        src: u("photo-1582268611958-ebfd161ef9cf", 1800),
        alt: "Salón con chimenea y vistas al valle",
      },
    ],
    location_meta: {
      airport: "Sion · 1 h 20 min · helipuerto a 6 min",
      ski: "Acceso directo a Sunnegga",
      village: "Centro de Zermatt · 8 min",
    },
    lifestyle: [
      {
        src: u("photo-1551776235-dde6d482980b", 1600),
        alt: "Sendero alpino al amanecer con el Matterhorn al fondo",
        eyebrow: "El silencio",
        title: "Una vista que no envejece.",
        body: "El gran ventanal del salón está orientado para enmarcar el Matterhorn al amanecer y al atardecer; un encuadre que cambia cada día y que la villa preserva como su única imagen fija.",
      },
    ],
  },
  {
    slug: "penthouse-akasaka",
    name: "Penthouse Akasaka",
    type: "Penthouse",
    geography: "Ciudad",
    location: "Akasaka",
    region: "Tokio",
    country: "Japón",
    price: "Bajo solicitud",
    priceFilter: 0,
    status: "Reservada",
    beds: 3,
    baths: 4,
    area: "420 m²",
    orientation: "Suroeste",
    architect: "Kengo Kuma & Associates",
    year: 2024,
    image: u("photo-1600210491892-03d54c0aaf87"),
    imageAlt:
      "Penthouse de doble altura en Tokio con paneles de madera y vistas a la ciudad",
    blurb:
      "Penthouse en una torre de Kengo Kuma. Doble altura, paneles de madera y vistas al Tokio nocturno.",
    description: [
      "El proyecto firma uno de los pocos áticos privados diseñados íntegramente por Kengo Kuma & Associates. La estructura interior reproduce la lógica de las pagodas de madera tradicionales con tecnología contemporánea.",
      "Una doble altura central conecta las dos plantas del penthouse a través de una celosía móvil de madera de hinoki. Los acabados incluyen washi tradicional aplicado por artesanos del taller Awagami.",
    ],
    highlights: [
      { label: "Arquitecto", value: "Kengo Kuma & Associates" },
      { label: "Año", value: "2024" },
      { label: "Superficie", value: "420 m²" },
      { label: "Vistas", value: "Skyline de Tokio + monte Fuji días claros" },
      { label: "Estado", value: "Reservada · lista de espera abierta" },
    ],
    amenities: [
      {
        category: "Interior",
        items: [
          "Doble altura con celosía de hinoki",
          "Cocina open kitchen con office japonés",
          "Sala de té tradicional (chashitsu) restaurada",
        ],
      },
      {
        category: "Servicios",
        items: [
          "Conserjería privada de la torre",
          "Acceso de seguridad biométrico",
          "Plaza de garaje + ascensor directo",
        ],
      },
    ],
    gallery: [
      {
        src: u("photo-1502134249126-9f3755a50d78", 1800),
        alt: "Vista nocturna de Tokio desde el ventanal del salón",
      },
      {
        src: u("photo-1600210491892-03d54c0aaf87", 1800),
        alt: "Detalle de la celosía de madera y la doble altura",
      },
    ],
    location_meta: {
      airport: "Haneda · 18 min · Narita · 50 min",
      village: "Roppongi · 6 min · Imperial Palace · 12 min",
    },
    lifestyle: [
      {
        src: u("photo-1505691938895-1758d7feb511", 1600),
        alt: "Mesa con servicio de té sobre madera natural",
        eyebrow: "Tokio",
        title: "Una pausa en altura.",
        body: "La sala de té original se conserva como pieza arqueológica dentro del penthouse, separada del programa contemporáneo por un patio interior con piedra de Oya.",
      },
    ],
  },
  {
    slug: "casa-mar",
    name: "Casa Mar",
    type: "Casa",
    geography: "Mediterráneo",
    location: "Cap de Begur",
    region: "Costa Brava",
    country: "España",
    price: "12,4 M EUR",
    priceFilter: 12.4,
    status: "Disponible",
    beds: 5,
    baths: 6,
    area: "560 m²",
    parcel: "0,3 ha",
    orientation: "Sureste",
    architect: "RCR Arquitectes",
    year: 2020,
    image: u("photo-1605276374104-dee2a0ed3cd6"),
    imageAlt: "Villa minimalista de hormigón sobre acantilado mediterráneo",
    blurb:
      "Una caja de hormigón pulido sobre los acantilados del Cap de Begur, firmada por RCR Arquitectes.",
    description: [
      "RCR Arquitectes firma esta caja de hormigón pulido pensada como una extensión natural del acantilado. Los muros laterales se cierran al pueblo y la fachada principal se abre por completo al horizonte.",
      "El programa interior es deliberadamente austero: un único nivel de planta libre, una piscina excavada en la roca y un jardín de plantas autóctonas que se funde con el monte mediterráneo.",
    ],
    highlights: [
      { label: "Arquitecto", value: "RCR Arquitectes" },
      { label: "Año", value: "2020" },
      { label: "Superficie", value: "560 m²" },
      { label: "Parcela", value: "0,3 ha · primera línea" },
      { label: "Dormitorios", value: "5 suites" },
    ],
    amenities: [
      {
        category: "Exterior",
        items: [
          "Piscina excavada en la roca",
          "Jardín mediterráneo autóctono",
          "Acceso peatonal a cala (10 min)",
        ],
      },
      {
        category: "Interior",
        items: [
          "Planta libre con cocina central",
          "Bodega para 400 botellas",
          "Estudio acristalado",
        ],
      },
      {
        category: "Servicios",
        items: [
          "Sistema domótico Loxone",
          "Garaje para 2 vehículos",
        ],
      },
    ],
    gallery: [
      {
        src: u("photo-1605276374104-dee2a0ed3cd6", 1800),
        alt: "Vista lateral de la casa al atardecer",
      },
      {
        src: u("photo-1600210491892-03d54c0aaf87", 1800),
        alt: "Salón con planta libre y mobiliario contemporáneo",
      },
    ],
    location_meta: {
      airport: "Girona · 50 min · Barcelona · 1 h 30 min",
      sea: "Cala Aiguablava · 10 min a pie",
      village: "Begur · 8 min",
    },
    lifestyle: [
      {
        src: u("photo-1600573472556-e636c2acda88", 1600),
        alt: "Atardecer mediterráneo con piscina en primer plano",
        eyebrow: "El mar",
        title: "El Mediterráneo, sin filtros.",
        body: "La fachada se abre íntegramente sobre el mar abierto, reduciendo la frontera entre la casa y el horizonte a una línea de hormigón pulido.",
      },
    ],
  },
  {
    slug: "villa-faraglioni",
    name: "Villa Faraglioni",
    type: "Villa",
    geography: "Mediterráneo",
    location: "Marina Piccola",
    region: "Capri",
    country: "Italia",
    price: "Bajo solicitud",
    priceFilter: 0,
    status: "Disponible",
    beds: 6,
    baths: 7,
    area: "880 m²",
    parcel: "0,5 ha",
    orientation: "Sur",
    architect: "Restauración: Studio Peregalli",
    year: 1928,
    image: u("photo-1600596542815-ffad4c1539a9"),
    imageAlt:
      "Villa caprese tradicional con buganvillas y vistas a los Faraglioni",
    blurb:
      "Villa caprese histórica restaurada por Studio Peregalli. Vistas frontales a los Faraglioni y acceso privado al mar.",
    description: [
      "Una de las villas más fotografiadas de Capri, restaurada por el Studio Peregalli con el rigor que caracteriza al estudio milanés. Los acabados originales de los años veinte se han conservado y completado con piezas históricas seleccionadas.",
      "El jardín, diseñado por la familia originaria con la asesoría de Russell Page en los años sesenta, conserva su trazado de cipreses, buganvillas y cítricos centenarios.",
    ],
    highlights: [
      { label: "Restauración", value: "Studio Peregalli" },
      { label: "Año original", value: "1928" },
      { label: "Superficie", value: "880 m²" },
      { label: "Jardín", value: "Trazado original con asesoría de Russell Page" },
      { label: "Dormitorios", value: "6 suites" },
    ],
    amenities: [
      {
        category: "Exterior",
        items: [
          "Acceso privado al mar (escalinata histórica)",
          "Jardín con cítricos y cipreses centenarios",
          "Piscina con borde infinito a los Faraglioni",
        ],
      },
      {
        category: "Interior",
        items: [
          "Salón con frescos originales restaurados",
          "Cocina principal y office histórico",
          "Biblioteca con bóveda decorada",
        ],
      },
      {
        category: "Servicios",
        items: [
          "Personal histórico transferible",
          "Embarcadero compartido en Marina Piccola",
        ],
      },
    ],
    gallery: [
      {
        src: u("photo-1600596542815-ffad4c1539a9", 1800),
        alt: "Vista de la villa con los Faraglioni al fondo",
      },
      {
        src: u("photo-1505693416388-ac5ce068fe85", 1800),
        alt: "Salón principal con frescos restaurados",
      },
    ],
    location_meta: {
      airport: "Nápoles Capodichino · 50 min en helicóptero",
      sea: "Acceso privado · escalinata histórica",
      village: "Centro de Capri · 12 min a pie",
    },
    lifestyle: [
      {
        src: u("photo-1600573472556-e636c2acda88", 1600),
        alt: "Vista de los Faraglioni al amanecer desde la terraza",
        eyebrow: "Capri",
        title: "Una vista patrimonio.",
        body: "Las vistas frontales a los Faraglioni desde la terraza principal están protegidas por servidumbre histórica desde 1962.",
      },
    ],
  },
  {
    slug: "tenuta-brunello",
    name: "Tenuta Brunello",
    type: "Hacienda",
    geography: "Campo",
    location: "Val d'Orcia",
    region: "Toscana",
    country: "Italia",
    price: "26 M EUR",
    priceFilter: 26,
    status: "Disponible",
    beds: 12,
    baths: 14,
    area: "3.400 m²",
    parcel: "82 ha",
    architect: "Restauración: Tristan Auer",
    year: 1620,
    image: u("photo-1505693416388-ac5ce068fe85"),
    imageAlt:
      "Hacienda toscana entre cipreses y campos de viñedo al atardecer",
    blurb:
      "Tenuta histórica del s. XVII con 82 hectáreas de viñedo Brunello en producción. Restauración firmada por Tristan Auer.",
    description: [
      "Una propiedad agrícola que combina villa principal del s. XVII, casa de invitados, antigua bodega operativa y 82 hectáreas de viñedo Brunello en producción continua desde hace dos siglos.",
      "La restauración firmada por Tristan Auer recupera la materialidad original de los muros de toba toscana mientras introduce un programa contemporáneo discreto: spa subterráneo, biblioteca y dos pabellones de huéspedes.",
    ],
    highlights: [
      { label: "Restauración", value: "Tristan Auer" },
      { label: "Año original", value: "1620" },
      { label: "Superficie construida", value: "3.400 m²" },
      { label: "Parcela", value: "82 ha · viñedo Brunello DOCG" },
      { label: "Producción", value: "≈ 95.000 botellas / año" },
    ],
    amenities: [
      {
        category: "Exterior",
        items: [
          "82 ha de viñedo Brunello DOCG",
          "Bodega histórica en producción",
          "Olivar y huerto orgánico",
          "Piscina natural panorámica",
        ],
      },
      {
        category: "Interior",
        items: [
          "Spa subterráneo con grotta",
          "Bodega privada de 18.000 botellas",
          "Biblioteca con archivos históricos",
        ],
      },
      {
        category: "Servicios",
        items: [
          "Personal agrícola y enólogo bajo contrato",
          "Helipuerto homologado",
          "Casa de invitados (4 suites)",
        ],
      },
    ],
    gallery: [
      {
        src: u("photo-1505693416388-ac5ce068fe85", 1800),
        alt: "Vista aérea de la tenuta entre cipreses",
      },
      {
        src: u("photo-1600210492486-724fe5c67fb0", 1800),
        alt: "Bodega histórica con barricas de roble",
      },
    ],
    location_meta: {
      airport: "Florencia Peretola · 1 h 30 min · helipuerto privado",
      village: "Montalcino · 14 min",
      notes:
        "Producción Brunello DOCG en marcha. Personal y contratos transferibles.",
    },
    lifestyle: [
      {
        src: u("photo-1582268611958-ebfd161ef9cf", 1600),
        alt: "Mesa larga vestida en el salón de la tenuta al atardecer",
        eyebrow: "La toscana",
        title: "Una hacienda completa.",
        body: "La propiedad incluye no solo la residencia, sino también la totalidad de la explotación vinícola, con sus contratos comerciales activos y su personal histórico.",
      },
    ],
  },
];

// ─── selectors ────────────────────────────────────────────────────────────────

export const allProperties: Property[] = properties;

export const featuredProperties: Property[] = properties.filter(
  (p) => p.homepageFeature,
);

export const signatureProperty: Property =
  properties.find((p) => p.signature) ?? properties[0];

export function getProperty(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getRelatedProperties(slug: string, limit = 3): Property[] {
  const current = getProperty(slug);
  if (!current) return properties.slice(0, limit);
  // Prefer same geography, then same type, then anything else.
  const sameGeo = properties.filter(
    (p) => p.slug !== slug && p.geography === current.geography,
  );
  const sameType = properties.filter(
    (p) =>
      p.slug !== slug &&
      p.type === current.type &&
      !sameGeo.some((s) => s.slug === p.slug),
  );
  const rest = properties.filter(
    (p) =>
      p.slug !== slug &&
      !sameGeo.some((s) => s.slug === p.slug) &&
      !sameType.some((s) => s.slug === p.slug),
  );
  return [...sameGeo, ...sameType, ...rest].slice(0, limit);
}

// ─── homepage-only content ───────────────────────────────────────────────────

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
  { value: "47", label: "Fincas representadas", meta: "Cartera viva" },
  { value: "23", label: "Países", meta: "Cobertura global" },
  { value: "1,2", label: "Mil M€ en cartera", meta: "Valor total" },
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

export const heroImage = u("photo-1600596542815-ffad4c1539a9", 2400);
export const aboutImage = u("photo-1600585154526-990dced4db0d", 1600);
