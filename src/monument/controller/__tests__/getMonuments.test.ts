import { Request, Response } from "express";
import MonumentController from "../MonumentController.js";
import { japanMonuments } from "../../fixtures.js";

describe("Given the getMonuments function", () => {
  describe("When it receives a request and a response for monuments", () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    const monumentController = new MonumentController(japanMonuments);

    afterEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should call the received respon's method status with 200", () => {
      monumentController.getMonuments(req, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("Then it should call the received respon's method json with 'Templo Sensō-ji' and 'Castillo de Himeji'", () => {
      monumentController.getMonuments(req, res as Response);

      expect(res.json).toHaveBeenCalledWith({ monuments: japanMonuments });
    });
  });
});
