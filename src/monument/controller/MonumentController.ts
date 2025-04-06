import { Response, Request } from "express";
import { MonumentCommonData, MonumentStructure } from "../types.js";
import { MonumentControllerStructure } from "./types.js";
import Monument from "../Monument.js";
class MonumentController implements MonumentControllerStructure {
  constructor(private monuments: MonumentStructure[]) {}

  getMonuments = (_req: Request, res: Response): void => {
    res.status(200).json({ monuments: this.monuments });
  };

  addMonument = (req: Request, res: Response): void => {
    const monument = req.body as MonumentCommonData;

    const newMonument = new Monument(
      monument.name,
      monument.description,
      monument.imageUrl,
      { country: monument.country, city: monument.city },
    );

    if (this.monuments.some((monument) => monument.name === newMonument.name)) {
      res.status(409).json({ error: "Duplicated monument, already in data" });
      return;
    }

    this.monuments.push(newMonument);
    res.status(201).json(newMonument);
  };
}

export default MonumentController;
