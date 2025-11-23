import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db";

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT

const app = express();

// CORS middleware configuration
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
)

// JSON parsing middleware
app.use(express.json());

// Cookie parsing middleware
app.use(cookieParser());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend running..." });
});

// Start
const startServer = async () => {
  await connectDB();
  app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`));
};

startServer();
