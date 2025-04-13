import Monument from "../Monument.js";
import { MonumentStructure } from "../types.js";

const eiffelTower = new Monument(
  "Eiffel Tower",
  "The Eiffel Tower is an iron tower in Paris and is one of the most iconic monuments in the world.",
  "https://i.ibb.co/207qvbMt/image.webp",
  { country: "France", city: "Paris" },
);

const tajMahal = new Monument(
  "Taj Mahal",
  "The Taj Mahal is a white marble mausoleum in the city of Agra and is one of the Seven Wonders of the World.",
  "https://i.ibb.co/4gS8tfRS/image-1.webp",
  { country: "India", city: "Agra" },
);

const fushimiInari = new Monument(
  "Fushimi Inari Taisha",
  "Fushimi Inari Taisha is a Shinto shrine in Kyoto famous for its thousands of red torii gates that form paths on Mount Inari.",
  "https://i.ibb.co/m7HhGgD/image-2.webp",
  { country: "Japan", city: "Kyoto" },
);

const coliseo = new Monument(
  "Colosseum of Rome",
  "The Colosseum is an ancient Roman amphitheater located in the center of Rome known for being a symbol of Roman civilization.",
  "https://i.ibb.co/TMgZBqqd/image-6.webp",
  { country: "Italy", city: "Rome" },
);

const greatWallOfChina = new Monument(
  "Great Wall of China",
  "The Great Wall of China is a series of fortifications built along northern China to protect against invaders.",
  "https://i.ibb.co/B2jdKGJN/image-3.webp",
  { country: "China", city: "Beijing" },
);

const terracottaWarriors = new Monument(
  "Terracotta Warriors",
  "The Terracotta Warriors are a collection of life-sized figures representing the soldiers, horses, and chariots of the army of the first emperor of China.",
  "https://i.ibb.co/7JfrpxCT/image-4.webp",
  { country: "China", city: "Xi'an" },
);

const sagradaFamilia = new Monument(
  "Sagrada Familia",
  "The Sagrada Familia is a Catholic basilica in Spain designed by architect Antoni Gaudí, known for its unique architecture and ongoing construction since 1882.",
  "https://i.ibb.co/G3prsxLV/image-5.webp",
  { country: "Spain", city: "Barcelona" },
);

const neuschwansteinCastle = new Monument(
  "Neuschwanstein Castle",
  "Neuschwanstein Castle is a fairy-tale-like castle located in Germany famous for its magical appearance and for inspiring the Disney 'Sleeping Beauty' castle.",
  "https://i.ibb.co/Ngxdg3PY/image-7.webp",
  { country: "Germany", city: "Bavaria" },
);

export const monuments: MonumentStructure[] = [
  eiffelTower,
  tajMahal,
  fushimiInari,
  coliseo,
  greatWallOfChina,
  terracottaWarriors,
  sagradaFamilia,
  neuschwansteinCastle,
];
