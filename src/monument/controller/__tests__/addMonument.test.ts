import { Request, Response } from "express";
import {
  himejiCastle,
  sensojiTemple,
  tokyoTower,
  tokyoTowerData,
} from "../../fixtures.js";
import MonumentController from "../MonumentController.js";

describe("Given the addMonument function", () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Pick<Response, "status" | "json">;

  let japanMonuments = [sensojiTemple, himejiCastle];
  let monumentController = new MonumentController(japanMonuments);

  afterEach(() => {
    jest.clearAllMocks();
    japanMonuments = [sensojiTemple, himejiCastle];
    monumentController = new MonumentController(japanMonuments);
  });

  describe("When it receives a request with Tokyo Tower data", () => {
    const req = {
      body: tokyoTowerData,
    } as Pick<Request, "body">;

    test("Then it should call the received response's method status with 201", () => {
      monumentController.addMonument(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(201);
    });

    test("Then it should call the received response's method json with a monument named 'Tokyo Tower'", () => {
      const { name } = tokyoTower;

      monumentController.addMonument(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ name }));
    });

    test("Then it should call the received response's method json with a monument with the description 'Es una torre de celosía inspirada en la Torre Eiffel que está pintada de color blanco y naranja.'", () => {
      const { description } = tokyoTower;

      monumentController.addMonument(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ description }),
      );
    });

    test("Then it should call the received response's method json with a monument in the country 'Japon'", () => {
      const { country } = tokyoTower;

      monumentController.addMonument(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ country }),
      );
    });

    test("Then it should call the received response's method json with a monument in the city 'Tokyo'", () => {
      const { city } = tokyoTower;

      monumentController.addMonument(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ city }));
    });
  });

  describe("When it receives a request with the existent monument Senso-ji Temple", () => {
    const req = {
      body: {
        id: "",
        name: "Templo Sensō-ji",
        description:
          "Este es el templo budista más antiguo de Tokio, construido en honor a la diosa Kannon.",
        imageUrl:
          "https://live.staticflickr.com/65535/52532522963_11f33537ae_b.jpg",
        country: "Japon",
        city: "Tokio",
      },
    } as Pick<Request, "body">;

    test("Then it should call the received response's method status with 409", () => {
      monumentController.addMonument(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(409);
    });

    test("Then it should call the received response's method json with a 'Duplicated monument, already in data' error ", () => {
      monumentController.addMonument(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({
        error: "Duplicated monument, already in data",
      });
    });
  });
});
