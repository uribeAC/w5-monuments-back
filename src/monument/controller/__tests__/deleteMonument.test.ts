import { Request, Response } from "express";
import { himejiCastle, sensojiTemple, tokyoTower } from "../../fixtures.js";
import MonumentController from "../MonumentController.js";
import Monument from "../../Monument.js";

describe("Given the deleteMonument function", () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Pick<Response, "status" | "json">;

  let japanMonuments: Monument[];
  let monumentController: MonumentController;

  beforeEach(() => {
    japanMonuments = [sensojiTemple, himejiCastle];
    monumentController = new MonumentController(japanMonuments);

    jest.clearAllMocks();
  });

  describe("When it receives a request with Senso-ji Temple id that is already in database", () => {
    const req = {
      params: { monumentId: sensojiTemple.id },
    } as Pick<Request, "params">;

    test("Then it should call the received response's method status with 200", () => {
      monumentController.deleteMonument(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("Then it should call the received response's method json with a monument named 'Senso-ji Temple'", () => {
      const { name } = sensojiTemple;

      monumentController.deleteMonument(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ name }));
    });

    test("Then Senso-ji Temple should not be in the Japanese Monuments array", () => {
      monumentController.deleteMonument(req as Request, res as Response);

      expect(japanMonuments).not.toContain(sensojiTemple);
    });
  });

  describe("When it receives a request with Tokyo Tower id and the monument isn't in the database", () => {
    const req = {
      params: { monumentId: tokyoTower.id },
    } as Pick<Request, "params">;

    test("Then it should call the received response's method status with 404", () => {
      monumentController.deleteMonument(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(404);
    });

    test("Then it should call the received response's method json with a 'Monument not found in database' error", () => {
      monumentController.deleteMonument(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({
        error: "Monument not found in database",
      });
    });
  });
});
