import React, { useState } from "react";
import "./AISupport.css";
import ai1 from "../assets/ai1.jpeg";
import ai2 from "../assets/ai2.jpg";
import ai3 from "../assets/ai3.jpg";
import ai4 from "../assets/ai4.jpeg";
import ai5 from "../assets/ai5.jpg";
import ai6 from "../assets/ai6.jpg";

const AISupport = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [selectedYoga, setSelectedYoga] = useState(null);

  const predefinedQuestions = [
    "I feel anxious, what should I do?",
    "How can I sleep better?",
    "I’m feeling stressed, any quick tips?",
    "How to stay motivated every day?",
  ];

  const yogaExercises = [
    { img: ai1, title: "Yoga 1", desc: "Helps calm your mind and reduce stress." },
    { img: ai2, title: "Yoga 2", desc: "Improves breathing and focus." },
    { img: ai3, title: "Yoga 3", desc: "Relaxes body and enhances flexibility." },
    { img: ai4, title: "Yoga 4", desc: "Boosts energy and improves posture." },
    { img: ai5, title: "Yoga 5", desc: "Helps improve mindfulness and sleep." },
    { img: ai6, title: "Yoga 6", desc: "Relieves anxiety and promotes relaxation." },
  ];

  const handleSend = async (text) => {
    if (!text.trim()) return;

    const newMessage = { sender: "user", text };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
    import.meta.env.VITE_GEMINI_API_KEY,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text }] }],
    }),
  }
);

const data = await response.json();
console.log("Gemini raw response:", data);

let botText = "Sorry, I couldn't understand that.";
if (
  data?.candidates &&
  data.candidates[0]?.content &&
  data.candidates[0].content.parts &&
  data.candidates[0].content.parts[0]?.text
) {
  botText = data.candidates[0].content.parts[0].text;
}




      setMessages((prev) => [...prev, { sender: "bot", text: botText }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error connecting to AI service." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <div className="ai-support-page">
      <div className="top-header">
        <h1>AI Mental Health Support</h1>
        <p>
          A safe, confidential space to talk, get guidance, and feel supported
          anytime you need.
        </p>
      </div>

      <div className="conversation-section">
        <button className="start-btn" onClick={() => setChatOpen(true)}>
          Start Your Conversation
        </button>
      </div>

      <div className="info-container">
        <div className="info-box">
          <span className="info-icon">💬</span>
          <h3>Instant Support</h3>
          <p>Get help immediately, anytime you need it.</p>
        </div>
        <div className="info-box">
          <span className="info-icon">🔒</span>
          <h3>Complete Privacy</h3>
          <p>Your conversations are confidential and secure.</p>
        </div>
        <div className="info-box">
          <span className="info-icon">⏰</span>
          <h3>24/7 Available</h3>
          <p>Support when you need it most.</p>
        </div>
      </div>

      <div className="yoga-section">
        <h2>Yoga to Relax Your Mind</h2>
        <div className="yoga-grid">
          {yogaExercises.map((yoga, i) => (
            <div key={i} className="yoga-card">
              <img src={yoga.img} alt={yoga.title} />
              <div className="yoga-info">
                <h3>{yoga.title}</h3>
                <button
                  className="arrow-btn"
                  onClick={() => setSelectedYoga(yoga)}
                >
                  ➔
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* -------- YOGA MODAL -------- */}
      {selectedYoga && (
        <div className="yoga-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSelectedYoga(null)}>
              ✖
            </button>
            <div className="yoga-detail-content">
              <img src={selectedYoga.img} alt={selectedYoga.title} />
              <div>
                <h2>{selectedYoga.title}</h2>
                <p>{selectedYoga.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* -------- CHAT MODAL -------- */}
      {chatOpen && (
        <div className="chat-modal">
          <div className="chat-window">
            <button className="close-btn" onClick={() => setChatOpen(false)}>
              ✖
            </button>
            <h2>AI Chat Support</h2>

            <div className="chat-messages">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={msg.sender === "user" ? "user-msg" : "bot-msg"}
                >
                  {msg.text}
                </div>
              ))}
              {loading && <div className="bot-msg">🤖 Typing...</div>}
            </div>

            {/* Predefined questions */}
            <div className="predefined-questions">
              {predefinedQuestions.map((q, idx) => (
                <button key={idx} onClick={() => handleSend(q)}>
                  {q}
                </button>
              ))}
            </div>

            <form className="chat-form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
              />
              <button type="submit" className="send-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AISupport;
