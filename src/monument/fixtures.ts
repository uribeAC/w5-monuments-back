import Monument from "./Monument.js";

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
