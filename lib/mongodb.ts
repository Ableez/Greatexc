import mongoose from "mongoose";

const uri = process.env.MONGODB_URI!;

export const connectToDb = async () => {
  try {
    await mongoose.connect(uri);

    console.log("Connected to mongodb");
  } catch (error) {
    console.log("error connecting to mongodb: ", error);
  }
};
