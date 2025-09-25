import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    // await mongoose.connection.dropDatabase();
    console.log("se conecto con la base de datos");
  } catch (error) {
    console.log("no se conecto con la base de datos", error);
  }
};
