import { Router } from "express";
import DriversGames from "../drivers/diversGames.js";

const routesGames = Router();

routesGames.post("/", DriversGames.createGame);
routesGames.get("/:id", DriversGames.readGame);
routesGames.get("/", DriversGames.readAllGames);
routesGames.put("/:id", DriversGames.updateGame);
routesGames.delete("/:id", DriversGames.deleteGame);

export default routesGames;
