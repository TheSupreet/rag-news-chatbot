import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import chatRoutes from "../routes/chat.routes.js";

dotenv.config();

const app = express();

// ✅ CORS middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Vite default
    credentials: true,
  })
);

app.use(express.json());

// routes
app.use("/api", chatRoutes);

export default app;
