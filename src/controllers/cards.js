import path from "path";
import { fileURLToPath } from "url";
import { CardModel } from "../models/card.js";

export class cardsController {
  static async getAll (req, res) {
    const cards = await CardModel.getAll()
    return res.render("visualizacion_inventario", { cards });
  }

  static async create(req, res) {

  }
}

