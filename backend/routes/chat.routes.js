import express from "express";
import { generateAnswer } from "../rag/generate.js";

const router = express.Router();

router.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) return res.status(400).json({ error: "Message is required" });

  try {
    const answer = await generateAnswer(message);
    res.json({ answer });
  } catch (err) {
    res.status(500).json({ error: "Failed to generate answer" });
  }
});

export default router;
