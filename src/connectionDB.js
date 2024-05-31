import mongoose from "mongoose";

mongoose
	.connect(process.env.MONGODB_ATLAS_CONNECTION)
	.then((dato) => {
		console.log("Mongo Atlas Active");
	})
	.catch((error) => {
		console.log("Oops! The database has no connection");
	});
