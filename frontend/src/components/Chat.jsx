import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { api } from "../services/api";
import Message from "./Message";
import InputBox from "./InputBox";

const sessionId = uuid();

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load chat history
  useEffect(() => {
    api
      .get(`/chat/history/${sessionId}`)
      .then((res) => {
        setMessages(res.data);
      })
      .catch(() => {});
  }, []);

  const sendMessage = async (text) => {
    setLoading(true);
    console.log("the msg is senrt os ==>", text);
    setMessages((prev) => [...prev, { role: "user", message: text }]);

    const res = await api.post("/chat", {
      sessionId,
      message: text,
    });

    setMessages((prev) => [
      ...prev,
      { role: "assistant", message: res.data.answer },
    ]);
    setLoading(false);
  };

  const resetChat = async () => {
    await api.delete(`/chat/session/${sessionId}`);
    setMessages([]);
  };

  return (
    <div className="chat-container">
      <header>
        <h2>📰 News RAG Chatbot</h2>
        <button onClick={resetChat}>Reset</button>
      </header>

      <div className="chat-box">
        {messages.map((msg, i) => (
          <Message key={i} role={msg.role} text={msg.message} />
        ))}

        {loading && <Message role="assistant" text="Typing..." />}
      </div>

      <InputBox onSend={sendMessage} disabled={loading} />
    </div>
  );
}
