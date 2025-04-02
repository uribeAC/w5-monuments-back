import Monument from "./Monument";
import { MonumentStructure } from "./types";

const eiffelTower = new Monument(
  "Eiffel Tower",
  "La Torre Eiffel es una torre de hierro en París, Francia, y es uno de los monumentos más emblemáticos del mundo.",
  "https://upload.wikimedia.org/wikipedia/commons/a/a8/Eiffel_Tower_2020.jpg",
  { country: "Francia", city: "Paris" },
);

const tajMahal = new Monument(
  "Taj Mahal",
  "El Taj Mahal es un mausoleo de mármol blanco en la ciudad de Agra, India, y es una de las Siete Maravillas del Mundo.",
  "https://upload.wikimedia.org/wikipedia/commons/4/4d/Taj_Mahal_in_Morning.jpg",
  { country: "India", city: "Agra" },
);

const fushimiInari = new Monument(
  "Fushimi Inari Taisha",
  "El Fushimi Inari Taisha es un santuario sintoísta en Kioto, Japón, famoso por sus miles de torii rojos que forman senderos en la montaña Inari.",
  "https://upload.wikimedia.org/wikipedia/commons/e/e7/Fushimi_Inari_Taisha.JPG",
  { country: "Japón", city: "Kioto" },
);

const coliseo = new Monument(
  "Coliseo de Roma",
  "El Coliseo es un anfiteatro de la antigua Roma, situado en el centro de Roma, Italia, conocido por ser un símbolo de la civilización romana.",
  "https://upload.wikimedia.org/wikipedia/commons/d/d7/Colosseo_2020.jpg",
  { country: "Italia", city: "Roma" },
);

const greatWallOfChina = new Monument(
  "Great Wall of China",
  "La Gran Muralla China es una serie de fortificaciones construidas a lo largo de la parte norte de China para protegerse de invasores.",
  "https://upload.wikimedia.org/wikipedia/commons/6/63/Mutianyu_Great_Wall_-_Oct_2007.jpg",
  { country: "China", city: "Beijing" },
);

export const monuments: MonumentStructure[] = [
  eiffelTower,
  tajMahal,
  fushimiInari,
  coliseo,
  greatWallOfChina,
];
