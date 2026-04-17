export type Destino = {
  slug: string;
  name: string;
  location: string;
  coverImage: string;
  headline: string;
  excerpt: string;
  bestSeason: string;
  suggestedDuration: string;
  highlights: string[];
  story: string[];
};

export const destinos: Destino[] = [
  {
    slug: "kyoto-japao",
    name: "Kyoto",
    location: "Japao",
    coverImage: "/images/kyoto.png",
    headline: "Templos centenarios, jardins silenciosos e rituais de primavera.",
    excerpt:
      "Um itinerario elegante entre bairros historicos, casas de cha e arquitetura delicada.",
    bestSeason: "Marco a maio",
    suggestedDuration: "5 dias",
    highlights: [
      "Passeio ao amanhecer pelo distrito de Higashiyama.",
      "Cerimonia do cha em casa tradicional restaurada.",
      "Jantar kaiseki com menu sazonal.",
    ],
    story: [
      "Kyoto convida a reduzir o ritmo e perceber detalhes: o som da madeira ao caminhar por corredores antigos, a luz filtrada entre bambus e o perfume floral que invade os jardins ao entardecer.",
      "A cidade equilibra tradição e design contemporaneo com naturalidade. Entre galerias, ateliers de ceramica e restaurantes intimistas, cada visita ganha personalidade propria.",
    ],
  },
  {
    slug: "capadocia-turquia",
    name: "Capadocia",
    location: "Turquia",
    coverImage: "/images/capadocia.png",
    headline: "Cenarios lunares e voo de baloes em uma paisagem cinematografica.",
    excerpt:
      "Vales esculpidos em rocha vulcanica, hoteis caverna e rotas panoramicas de alto impacto.",
    bestSeason: "Abril a junho",
    suggestedDuration: "4 dias",
    highlights: [
      "Sobrevoo ao nascer do sol em balao privativo.",
      "Tour por aldeias de pedra e capelas subterraneas.",
      "Degustacao de vinhos locais ao por do sol.",
    ],
    story: [
      "Na Capadocia, a experiencia visual e quase teatral. As formações rochosas criam molduras naturais para passeios de carro, trekking e fotografias em diferentes tons de dourado.",
      "A hospedagem em suites escavadas na rocha adiciona textura ao roteiro. O contraste entre simplicidade mineral e conforto sofisticado torna a viagem inesquecivel.",
    ],
  },
  {
    slug: "amalfi-italia",
    name: "Costa Amalfitana",
    location: "Italia",
    coverImage: "/images/amalfi.png",
    headline: "Falésias dramaticas, mar azul profundo e vilas com charme mediterraneo.",
    excerpt:
      "Um percurso para explorar praias secretas, gastronomia costeira e mirantes icônicos.",
    bestSeason: "Maio a setembro",
    suggestedDuration: "6 dias",
    highlights: [
      "Passeio de barco entre Positano e Amalfi.",
      "Almoco com frutos do mar em terraço suspenso.",
      "Visita a jardins com vista para o Tirreno.",
    ],
    story: [
      "A Costa Amalfitana combina energia solar e sofisticação descontraida. Entre ruas sinuosas e varandas floridas, o mar surge sempre como protagonista.",
      "Os dias pedem longos almoços, mergulhos discretos e finais de tarde dourados. A noite, a cena gastronomica oferece menus autorais com ingredientes da costa.",
    ],
  },
  {
    slug: "petra-jordania",
    name: "Petra",
    location: "Jordania",
    coverImage: "/images/petra.png",
    headline: "Patrimonio monumental no deserto, com atmosfera arqueologica unica.",
    excerpt:
      "Percursos historicos por canyons estreitos e monumentos talhados em rocha rosada.",
    bestSeason: "Outubro a abril",
    suggestedDuration: "3 dias",
    highlights: [
      "Entrada pelo Siq para chegada ao Tesouro em luz dourada.",
      "Trilha ate o Mosteiro com vista panoramica.",
      "Experiencia noturna com velas no sitio historico.",
    ],
    story: [
      "Petra impressiona pela escala e pelo silencio do deserto. Cada fachada esculpida parece surgir da pedra como uma obra de arte monumental.",
      "Com guia especializado, a narrativa historica ganha profundidade e transforma a visita em uma imersao cultural completa, entre comercio antigo e engenharia sofisticada.",
    ],
  },
];

export function getDestinoBySlug(slug: string) {
  return destinos.find((destino) => destino.slug === slug);
}
