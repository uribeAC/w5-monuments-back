import Monument from "../Monument.js";
import { MonumentStructure } from "../types.js";

const eiffelTower = new Monument(
  "Eiffel Tower",
  "La Torre Eiffel es una torre de hierro en París, Francia, y es uno de los monumentos más emblemáticos del mundo.",
  "https://media.architecturaldigest.com/photos/66a951edce728792a48166e6/3:2/w_7950,h_5300,c_limit/GettyImages-955441104.jpg",
  { country: "Francia", city: "Paris" },
);

const tajMahal = new Monument(
  "Taj Mahal",
  "El Taj Mahal es un mausoleo de mármol blanco en la ciudad de Agra, India, y es una de las Siete Maravillas del Mundo.",
  "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
  { country: "India", city: "Agra" },
);

const fushimiInari = new Monument(
  "Fushimi Inari Taisha",
  "El Fushimi Inari Taisha es un santuario sintoísta en Kioto, Japón, famoso por sus miles de torii rojos que forman senderos en la montaña Inari.",
  "https://www.agoda.com/wp-content/uploads/2024/07/Fushimi-Inari-Shrine-Kyoto-Japan.jpg",
  { country: "Japón", city: "Kioto" },
);

const coliseo = new Monument(
  "Coliseo de Roma",
  "El Coliseo es un anfiteatro de la antigua Roma, situado en el centro de Roma, Italia, conocido por ser un símbolo de la civilización romana.",
  "https://www.lavanguardia.com/files/og_thumbnail/uploads/2017/05/15/5fa3c5d7ef234.jpeg",
  { country: "Italia", city: "Roma" },
);

const greatWallOfChina = new Monument(
  "Great Wall of China",
  "La Gran Muralla China es una serie de fortificaciones construidas a lo largo de la parte norte de China para protegerse de invasores.",
  "https://whc.unesco.org/uploads/thumbs/site_0438_0035-1200-630-20241024162522.jpg",
  { country: "China", city: "Beijing" },
);

export const monuments: MonumentStructure[] = [
  eiffelTower,
  tajMahal,
  fushimiInari,
  coliseo,
  greatWallOfChina,
];
