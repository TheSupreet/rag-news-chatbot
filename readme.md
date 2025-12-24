# 📰 RAG-Powered News Chatbot

A full-stack **Retrieval-Augmented Generation (RAG)** chatbot that answers user queries based on a corpus of news articles using **Gemini** for generation, **Qdrant** for vector search, and **Redis** for session-based chat history.

---

## 🚀 Tech Stack

### Frontend

- React (Vite)
- JavaScript
- CSS
- Fetch API

### Backend

- Node.js
- Express.js
- Google Gemini API
- Qdrant (Vector Database)
- Redis (Session & Cache)
- dotenv

---

## 🧠 Architecture Overview

1. News articles are converted into **embeddings**
2. Embeddings are stored in **Qdrant**
3. User query → embedding → vector similarity search
4. Retrieved context + query → **Gemini**
5. Response returned and stored in **Redis session history**

---

## 📂 Project Structure

### Backend

```
backend/
├── config/
│ ├── gemini.js
│ ├── qdrant.js
│ ├── redis.js
│ └── jina.js
├── rag/
│ ├── embeddings.js
│ ├── retriever.js
│ └── generate.js
├── routes/
│ └── chat.routes.js
├── utils/
│ └── session.js
├── src/
│ ├── app.js
│ └── server.js
├── .env
└── package.json
```

### Frontend

```
frontend/
├── src/
│ ├── components/
│ │ ├── Chat.jsx
│ │ ├── InputBox.jsx
│ │ └── Message.jsx
│ ├── services/
│ │ └── api.js
│ ├── styles/
│ │ └── chat.css
│ ├── App.jsx
│ └── main.jsx
├── .env
└── package.json
```

---

## ⚙️ Environment Variables

### Backend `.env`

```env
PORT=5000
REDIS_URL=redis://localhost:6379
QDRANT_URL=http://localhost:6333
QDRANT_COLLECTION=news
GEMINI_API_KEY=your_gemini_api_key
```

Frontend .env
```
VITE_API_URL=http://localhost:5000

```

### Start Qdrant

docker run -p 6333:6333 qdrant/qdrant

<img width="1918" height="974" alt="Screenshot 2025-12-24 154628" src="https://github.com/user-attachments/assets/954daef8-fc14-4339-a86f-7381816afc8f" />
