import React, { useState } from "react";
import "./AISupport.css";
import ai1 from "../assets/ai1.jpeg";
import ai2 from "../assets/ai2.jpg";
import ai3 from "../assets/ai3.jpg";
import ai4 from "../assets/ai4.jpeg";
import ai5 from "../assets/ai5.jpg";
import ai6 from "../assets/ai6.jpg";

const categories = {
  "Mental Health": ["I feel anxious", "I'm stressed lately", "I'm feeling down"],
  "Physical Pain": ["Headache", "Back pain", "Stomach ache"],
  "Sleep Issues": ["Can't fall asleep", "Wake up tired", "Sleep too little"],
  "Nutrition": ["Healthy meal ideas", "Low energy from diet", "Supplements"],
};

const AISupport = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedYoga, setSelectedYoga] = useState(null);

  const [introStep, setIntroStep] = useState(0);
  const [category, setCategory] = useState(null);
  const [showFreeChat, setShowFreeChat] = useState(false);

  const systemPrompt = `
You are a helpful AI health assistant. Provide trusted general advice, but recommend consulting a doctor for serious symptoms.
`;

  const yogaExercises = [
    {
      img: ai1,
      title: "Anulom Vilom",
      desc: "Anulom Vilom is a breathing exercise where you inhale through one nostril and exhale through the other, using your fingers to alternate sides. It helps calm the mind, improve focus, balance the nervous system, and increase lung capacity.",
    },
    {
      img: ai2,
      title: "Shavasana",
      desc: "Shavasana is done by lying flat on your back with legs apart, arms relaxed by your sides, palms facing upward, and eyes closed. It helps reduce stress, relax the body, lower blood pressure, and restore energy.",
    },
    {
      img: ai3,
      title: "Bhramari",
      desc: "Bhramari involves closing the ears with fingers and making a humming sound while exhaling. It calms the mind, reduces stress and anxiety, and improves concentration.",
    },
    {
      img: ai4,
      title: "Balasana",
      desc: "Balasana is performed by kneeling on the floor with big toes touching and knees apart, sitting back on the heels, bending forward to rest the torso between the thighs. It helps relieve stress, fatigue, back pain, and improves digestion.",
    },
    {
      img: ai5,
      title: "Sukhasana",
      desc: "Sukhasana is done by sitting on the floor with legs crossed, keeping the spine straight, hands resting on the knees, shoulders relaxed, and eyes closed while breathing calmly. It promotes mental calmness and focus.",
    },
    {
      img: ai6,
      title: "Viparita Karani",
      desc: "Viparita Karani is done by lying on your back with your legs extended up against a wall. It helps relieve tired legs, improves blood circulation, reduces stress, and promotes relaxation and better sleep.",
    },
  ];

  const handleSend = async (text) => {
    if (!text.trim()) return;

    const userMessage = { sender: "user", text };
    setMessages((prev) => [...prev, userMessage]);
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
            contents: [
              {
                role: "user",
                parts: [{ text: `${systemPrompt}\nUser: ${text}` }],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      let botText = "Sorry, I couldn't understand that.";
      if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        botText = data.candidates[0].content.parts[0].text;
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botText }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error connecting to AI service." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySelect = (cat) => {
    setCategory(cat);
    setIntroStep(1);
    setMessages([
      { sender: "bot", text: `You selected "${cat}". What are you experiencing?` },
    ]);
  };

  const handlePredefinedSelect = (option) => {
    setMessages((prev) => [...prev, { sender: "user", text: option }]);
    handleSend(option);
    setShowFreeChat(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend(input);
  };

  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice input not supported in your browser");
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setInput(voiceText);
    };
  };

  return (
    <div className="ai-support-page">
      <div className="top-header">
        <h1>AI Mental Health Support</h1>
        <p>Get personalized wellness support. Safe, simple, and free.</p>
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
          <p>Get help immediatley, anytime you need it.</p>
        </div>
        <div className="info-box">
          <span className="info-icon">🔒</span>
          <h3>Complete Privacy </h3>
          <p>Your conversations are confidental and secure.</p>
        </div>
        <div className="info-box">
          <span className="info-icon">🎤</span>
          <h3>24/7 Available </h3>
          <p>Support when you are in the most.</p>
        </div>
      </div>

      <div className="yoga-section">
        <h2>Yoga to Relax Your Mind 🧘🏻‍♂️</h2>
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

            {/* ---------------- GUIDED INTRO ---------------- */}
            {!showFreeChat && introStep === 0 && (
              <div className="predefined-questions left-align">
                <p>
                  <strong>Hi! What would you like help with?</strong>
                </p>
                {Object.keys(categories).map((cat, idx) => (
                  <button key={idx} onClick={() => handleCategorySelect(cat)}>
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {!showFreeChat && introStep === 1 && category && (
              <div className="predefined-questions left-align">
                {categories[category].map((q, idx) => (
                  <button key={idx} onClick={() => handlePredefinedSelect(q)}>
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* ---------------- INPUT FORM ---------------- */}
            {showFreeChat && (
              <form className="chat-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="chat-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask your health question..."
                />
                <button
                  type="button"
                  className="send-btn"
                  onClick={handleVoiceInput}
                >
                  🎤
                </button>
                <button type="submit" className="send-btn">
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AISupport;
