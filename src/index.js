import "dotenv/config";
import "./connectionDB.js";
import server from "./server.js";

server.listen(2604, () => {
	console.log("Server running on port 2604");
});
