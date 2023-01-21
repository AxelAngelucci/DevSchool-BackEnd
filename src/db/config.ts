import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

mongoose.set("strictQuery", true);
const db = (): void => {
  try {
    mongoose.connect(process.env.MONGO_URI || "");
    console.log("CONNECTED TO MONGODB");
  } catch (error) {
    console.log(error);
  }
};

export default db;
