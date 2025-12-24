import axios from "axios";

export async function jinaEmbed(texts) {
  const res = await axios.post(
    "https://api.jina.ai/v1/embeddings",
    {
      model: "jina-embeddings-v2-base-en",
      input: texts,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.JINA_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return res.data.data.map((d) => d.embedding);
}
