import { model } from "../config/gemini.js";

export const generateAnswer = async (prompt) => {
  try {
    console.log("Sending to Gemini:", prompt);

    const result = await model.generateContent(prompt);

    const response = result.response;
    const text = response.text();

    return text;
  } catch (err) {
    console.error("Error generating answer:", err);
    throw err;
  }
};