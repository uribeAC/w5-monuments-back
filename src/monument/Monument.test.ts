import Monument from "./Monument.js";

describe("Given a monument instance", () => {
  describe("When is instantiated with Hokage Monument", () => {
    test("Then it should return a Monument with name: 'Hokage Monument'", () => {
      const expectedName = "Hokage Monument";

      const hokageMonument = new Monument("Hokage Monument", "", "", {
        country: "",
        city: "",
      });
      const actualName = hokageMonument.name;

      expect(actualName).toBe(expectedName);
    });

    test("Then it should return a Monument with description: 'Is the most representative trait of Konohagakure. It is a mountain that has had the faces of all the Hokage carved into the stone.'", () => {
      const expectedDescription =
        "Is the most representative trait of Konohagakure. It is a mountain that has had the faces of all the Hokage carved into the stone.";

      const hokageMonument = new Monument(
        "",
        "Is the most representative trait of Konohagakure. It is a mountain that has had the faces of all the Hokage carved into the stone.",
        "",
        {
          country: "",
          city: "",
        },
      );
      const actualDescription = hokageMonument.description;

      expect(actualDescription).toBe(expectedDescription);
    });

    test("Then it should return a Monument with an url that opens a image of Hokage Monument", () => {
      const expectedImageUrl =
        "https://static.wikia.nocookie.net/louser/images/6/6b/Hogake_Monument_Naruto_Shippuden.png/revision/latest/scale-to-width-down/250?cb=20130305083411";

      const hokageMonument = new Monument(
        "",
        "",
        "https://static.wikia.nocookie.net/louser/images/6/6b/Hogake_Monument_Naruto_Shippuden.png/revision/latest/scale-to-width-down/250?cb=20130305083411",
        {
          country: "",
          city: "",
        },
      );
      const actualImageUrl = hokageMonument.imageUrl;

      expect(actualImageUrl).toBe(expectedImageUrl);
    });

    test("Then it should return a Monument with country: 'Land of Fire'", () => {
      const expectedCountry = "Land of Fire";

      const hokageMonument = new Monument("", "", "", {
        country: "Land of Fire",
        city: "",
      });
      const actualCountry = hokageMonument.country;

      expect(actualCountry).toBe(expectedCountry);
    });

    test("Then it should return a Monument with city: 'Konohagakure'", () => {
      const expectedCity = "Konohagakure";

      const hokageMonument = new Monument("", "", "", {
        country: "",
        city: "Konohagakure",
      });
      const actualCity = hokageMonument.city;

      expect(actualCity).toBe(expectedCity);
    });
  });
});
