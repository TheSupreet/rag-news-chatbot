import { QdrantClient } from "@qdrant/js-client-rest";
import dotenv from "dotenv";

dotenv.config();

export const qdrant = new QdrantClient({
  url: process.env.QDRANT_URL,
  // no API key needed for local Qdrant
});

export const COLLECTION = process.env.QDRANT_COLLECTION;
