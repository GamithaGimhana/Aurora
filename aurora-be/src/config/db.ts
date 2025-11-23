import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
};

export default connectDB;
