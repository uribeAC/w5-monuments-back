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
      const expectedName = monumentName;

      const hokageMonument = new Monument(monumentName, "", "", {
        country: "",
        city: "",
      });
      const actualName = hokageMonument.name;

      expect(actualName).toBe(expectedName);
    });

    test("Then it should return a Monument with description: 'Is the most representative trait of Konohagakure. It is a mountain that has had the faces of all the Hokage carved into the stone.'", () => {
      const expectedDescription = monumentDescription;

      const hokageMonument = new Monument("", monumentDescription, "", {
        country: "",
        city: "",
      });
      const actualDescription = hokageMonument.description;

      expect(actualDescription).toBe(expectedDescription);
    });

    test("Then it should return a Monument with an url that opens a image of Hokage Monument", () => {
      const expectedImageUrl = monumenImageUrl;

      const hokageMonument = new Monument("", "", monumenImageUrl, {
        country: "",
        city: "",
      });
      const actualImageUrl = hokageMonument.imageUrl;

      expect(actualImageUrl).toBe(expectedImageUrl);
    });

    test("Then it should return a Monument with country: 'Land of Fire'", () => {
      const expectedCountry = monumentLocation.country;

      const hokageMonument = new Monument("", "", "", {
        country: monumentLocation.country,
        city: "",
      });
      const actualCountry = hokageMonument.country;

      expect(actualCountry).toBe(expectedCountry);
    });

    test("Then it should return a Monument with city: 'Konohagakure'", () => {
      const expectedCity = monumentLocation.city;

      const hokageMonument = new Monument("", "", "", {
        country: "",
        city: monumentLocation.city,
      });
      const actualCity = hokageMonument.city;

      expect(actualCity).toBe(expectedCity);
    });
  });
});
