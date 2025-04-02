import { Location, MonumentStructure } from "./types.js";
import { v4 as uuidv4 } from "uuid";

class Monument implements MonumentStructure {
  public id: string;
  public country: string;
  public city: string;

  constructor(
    public name: string,
    public description: string,
    public imageUrl: string,
    location: Location,
  ) {
    this.country = location.country;
    this.city = location.city;
    this.id = uuidv4();
  }
}

export default Monument;
