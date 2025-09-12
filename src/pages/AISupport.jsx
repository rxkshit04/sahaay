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
  {
    img: ai1,
    title: "Anulom Vilom",
    desc: "Anulom Vilom is a breathing exercise where you inhale through one nostril and exhale through the other, using your fingers to alternate sides. It helps calm the mind, improve focus, balance the nervous system, and increase lung capacity."
  },
  {
    img: ai2,
    title: "Shavasana",
    desc: "Shavasana is done by lying flat on your back with legs apart, arms relaxed by your sides, palms facing upward, and eyes closed. It helps reduce stress, relax the body, lower blood pressure, and restore energy."
  },
  {
    img: ai3,
    title: "Bhramari",
    desc: "Bhramari involves closing the ears with fingers and making a humming sound while exhaling. It calms the mind, reduces stress and anxiety, and improves concentration. Alternatively, this pose can be used for general relaxation or breathing focus."
  },
  {
    img: ai4,
    title: "Balasana",
    desc: "Balasana is performed by kneeling on the floor with big toes touching and knees apart, sitting back on the heels, bending forward to rest the torso between the thighs, stretching the arms forward or placing them alongside the body, and resting the forehead on the floor while breathing deeply. It helps relieve stress and fatigue, gently stretches the hips, thighs, and ankles, calms the mind, eases back and neck pain, improves digestion, and enhances blood circulation."
  },
  {
    img: ai5,
    title: "Sukhasana",
    desc: "Sukhasana is done by sitting on the floor with legs crossed, keeping the spine straight, hands resting on the knees or in a mudra, shoulders relaxed, and eyes closed while breathing calmly and evenly. It promotes mental calmness, improves posture, enhances focus and concentration, stretches the hips and spine, reduces anxiety, and is ideal for meditation and breathing exercises."
  },
  {
    img: ai6,
    title: "Viparita Karani",
    desc: "Viparita Karani is done by lying on your back with your legs extended up against a wall, keeping your hips close to the wall, arms relaxed at your sides, and eyes closed while breathing deeply. It helps relieve tired legs and feet, improves blood circulation, reduces stress and anxiety, eases lower back pain, supports lymphatic drainage, and promotes relaxation and better sleep."
  },
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
