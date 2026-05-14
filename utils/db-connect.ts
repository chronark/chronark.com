import mongoose from "mongoose";

// mongoose.set('strictQuery', true);
export const connect = async () => {
	try {
		const uri = process.env.MONGODB_URI as string;
		if (!uri) {
			throw new Error("Please define the MONGODB_URI environment variable");
		}
		await mongoose.connect(uri);
		// console.log("connected to DB");
		return mongoose;
	} catch (e) {
		console.log("could not connect to DB");
		console.error(e);
	}
};
