
import { CardModel } from "../models/card.js";

export class apiController {
  static async getAll (req, res) {
    const cards = await CardModel.getAll()
    res.json(cards);
  }
}

