import { Router } from "express";
import { defaultR } from "../controllers/testing.controllers.js";

const router = Router();
router.get("/", defaultR);

export default router;
