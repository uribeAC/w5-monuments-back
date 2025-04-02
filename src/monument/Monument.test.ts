import Monument from "./Monument.js";
import { Location } from "./types.js";

describe("Given a monument instance", () => {
  describe("When is instantiated with Hokage Monument", () => {
    const monumentName = "Hokage Monument";
    const monumentDescription =
      "Is the most representative trait of Konohagakure. It is a mountain that has had the faces of all the Hokage carved into the stone.";
    const monumenImageUrl =
      "https://static.wikia.nocookie.net/louser/images/6/6b/Hogake_Monument_Naruto_Shippuden.png/revision/latest/scale-to-width-down/250?cb=20130305083411";
    const monumentLocation: Location = {
      country: "Land of Fire",
      city: "Konohagakure",
    };

    test("Then it should return a Monument with name: 'Hokage Monument'", () => {
      const expectedName = "Hokage Monument";

      const hokageMonument = new Monument(
        monumentName,
        monumentDescription,
        monumenImageUrl,
        monumentLocation,
      );
      const actualName = hokageMonument.name;

      expect(actualName).toBe(expectedName);
    });

    test("Then it should return a Monument with description: 'Is the most representative trait of Konohagakure. It is a mountain that has had the faces of all the Hokage carved into the stone.'", () => {
      const expectedDescription =
        "Is the most representative trait of Konohagakure. It is a mountain that has had the faces of all the Hokage carved into the stone.";

      const hokageMonument = new Monument(
        monumentName,
        monumentDescription,
        monumenImageUrl,
        monumentLocation,
      );
      const actualDescription = hokageMonument.description;

      expect(actualDescription).toBe(expectedDescription);
    });

    test("Then it should return a Monument with an url that opens a image of Hokage Monument", () => {
      const expectedImageUrl =
        "https://static.wikia.nocookie.net/louser/images/6/6b/Hogake_Monument_Naruto_Shippuden.png/revision/latest/scale-to-width-down/250?cb=20130305083411";

      const hokageMonument = new Monument(
        monumentName,
        monumentDescription,
        monumenImageUrl,
        monumentLocation,
      );
      const actualImageUrl = hokageMonument.imageUrl;

      expect(actualImageUrl).toBe(expectedImageUrl);
    });

    test("Then it should return a Monument with country: 'Land of Fire'", () => {
      const expectedCountry = "Land of Fire";

      const hokageMonument = new Monument(
        monumentName,
        monumentDescription,
        monumenImageUrl,
        monumentLocation,
      );
      const actualCountry = hokageMonument.country;

      expect(actualCountry).toBe(expectedCountry);
    });

    test("Then it should return a Monument with city: 'Konohagakure'", () => {
      const expectedCity = "Konohagakure";

      const hokageMonument = new Monument(
        monumentName,
        monumentDescription,
        monumenImageUrl,
        monumentLocation,
      );
      const actualCity = hokageMonument.city;

      expect(actualCity).toBe(expectedCity);
    });
  });
});
