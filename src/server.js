import express from "express";
import morgan from "morgan";
import routesGames from "./routes/routesGames.js";

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use("/games", routesGames);

server.get("/", (req, res) => {
	res.status(404).send("Oops! We can't find the page you're looking for.");
});

export default server;
