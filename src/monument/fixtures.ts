import Monument from "./Monument.js";
import { MonumentStructure } from "./types.js";

export const sensojiTemple = new Monument(
  "Templo Sensō-ji",
  "Este es el templo budista más antiguo de Tokio, construido en honor a la diosa Kannon.",
  "https://live.staticflickr.com/65535/52532522963_11f33537ae_b.jpg",
  { country: "Japon", city: "Tokio" },
);

export const himejiCastle = new Monument(
  "Castillo de Himeji",
  "Fue construido por el samurái y gobernador japonés Akamatsu Norimura entre 1333 y 1346.",
  "https://www.yoitabitravel.com/wp-content/uploads/2019/02/fuji-hakone-3.jpg",
  { country: "Japon", city: "Himeji" },
);

export const japanMonuments = [sensojiTemple, himejiCastle];

export const tokyoTowerData: MonumentStructure = {
  id: "",
  name: "Tokyo Tower",
  description:
    "Es una torre de celosía inspirada en la Torre Eiffel que está pintada de color blanco y naranja.",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/TaroTokyo20110213-TokyoTower-01.jpg/1024px-TaroTokyo20110213-TokyoTower-01.jpg",
  country: "Japon",
  city: "Tokyo",
};

export const tokyoTower = new Monument(
  tokyoTowerData.name,
  tokyoTowerData.description,
  tokyoTowerData.imageUrl,
  { country: tokyoTowerData.country, city: tokyoTowerData.city },
);
