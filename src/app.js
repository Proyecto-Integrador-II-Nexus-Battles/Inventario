import express from "express";
import { PORT } from "./config.js";
import { fileURLToPath } from "url";
import * as path from "path";
import bodyParser from "body-parser";

import { cardsRoutes } from "./routes/cards.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", cardsRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: "Endpoint not found",
    });
});
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));
app.listen(PORT);
console.log(`Server is running on port http://localhost:${PORT}`);