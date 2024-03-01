import { Router } from "express";
import { cardsController } from "../controllers/cards.js";
import { apiController } from "../controllers/api.js";

export const cardsRoutes = Router();
cardsRoutes.get("/", cardsController.getAll);
cardsRoutes.get("/api", apiController.getAll);
cardsRoutes.get("/creacionCarta", function (req, res) {
    res.render("creacion_carta");
});

