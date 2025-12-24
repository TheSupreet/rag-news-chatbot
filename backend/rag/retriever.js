import { getEmbedding } from "./embeddings.js";

// dummy in-memory data (replace with DB later)
const documents = [
  { id: 1, text: "India won the cricket match today" },
  { id: 2, text: "Stock markets saw a big rise" },
  { id: 3, text: "AI is transforming software development" }
];

function cosineSimilarity(a, b) {
  const dot = a.reduce((sum, v, i) => sum + v * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, v) => sum + v * v, 0));
  const magB = Math.sqrt(b.reduce((sum, v) => sum + v * v, 0));
  return dot / (magA * magB);
}

export async function retrieveRelevantDocs(query) {
  const queryEmbedding = await getEmbedding(query);

  const scored = await Promise.all(
    documents.map(async (doc) => {
      const emb = await getEmbedding(doc.text);
      return {
        ...doc,
        score: cosineSimilarity(queryEmbedding, emb)
      };
    })
  );

  return scored.sort((a, b) => b.score - a.score).slice(0, 2);
}
