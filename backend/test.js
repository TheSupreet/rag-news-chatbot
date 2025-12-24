import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function run() {
  try {
    const response = await ai.models.generateContent({
      model: "models/gemini-2.5-flash", 
      contents: [
        {
          role: "user",
          parts: [{ text: "Say hi in one line" }],
        },
      ],
    });

    console.log(response.text);
  } catch (err) {
    console.error("API error:", err);
  }
}

run();
