import React, { useState } from "react";
import "./AISupport.css";

const AISupport = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedYoga, setSelectedYoga] = useState(null);

  const presetQuestions = [
    "I'm feeling very anxious. What should I do?",
    "How can I manage stress better?",
    "I can't sleep at night, any tips?",
    "I feel lonely and need advice.",
    "How do I stay motivated every day?"
  ];

  const yogaExercises = [
    {
      name: "Anulom Vilom",
      details:
        "A powerful breathing technique that balances the mind and reduces anxiety.\n\nSteps:\n1. Sit comfortably with a straight back.\n2. Close your right nostril with your thumb and inhale through the left nostril.\n3. Close the left nostril with your ring finger and exhale through the right.\n4. Repeat for 5–10 minutes."
    },
    {
      name: "Shavasana",
      details:
        "A relaxation pose that calms the mind and relieves stress.\n\nSteps:\n1. Lie flat on your back.\n2. Keep arms slightly away from the body.\n3. Close your eyes and focus on slow breathing.\n4. Stay relaxed for 5–10 minutes."
    },
    {
      name: "Bhramari Pranayama",
      details:
        "A humming bee breath that reduces stress and relaxes the nervous system.\n\nSteps:\n1. Sit comfortably and close your eyes.\n2. Place fingers on your ears.\n3. Inhale deeply, then exhale making a humming sound.\n4. Repeat 5–7 times."
    },
    {
      name: "Balasana (Child’s Pose)",
      details:
        "A gentle yoga pose to release stress and stretch the back.\n\nSteps:\n1. Kneel down and sit on your heels.\n2. Bend forward and stretch your arms in front.\n3. Rest your forehead on the mat.\n4. Hold for 1–2 minutes."
    },
    {
      name: "Sukhasana (Easy Pose)",
      details:
        "A simple cross-legged pose to relax and improve focus.\n\nSteps:\n1. Sit cross-legged with a straight spine.\n2. Rest hands on knees in Gyan Mudra.\n3. Close your eyes and focus on breathing.\n4. Meditate for 5–10 minutes."
    },
    {
      name: "Viparita Karani (Legs-Up-the-Wall)",
      details:
        "A restorative pose that relieves tension and calms the mind.\n\nSteps:\n1. Lie down close to a wall.\n2. Lift your legs and rest them against the wall.\n3. Keep arms relaxed at sides.\n4. Stay in this position for 5–10 minutes."
    }
  ];

  return (
    <div className="ai-support">
      {/* Heading */}
      <div className="top-heading">
        <h1 className="main-heading">AI Mental Health Support</h1>
        <p className="sub-heading">
          Get immediate support from our compassionate AI assistant, available
          24/7 to help you through difficult moments.
        </p>
      </div>

      {/* Start Conversation Box */}
      <div className="conversation-box">
        <h2>Start Your Conversation</h2>
        <p>Our AI assistant is here to listen and help. Click below to begin.</p>
        <button className="start-btn" onClick={() => setIsChatOpen(true)}>
          Start Chat with AI Assistant
        </button>
      </div>

      {/* Info Boxes */}
      <div className="info-boxes">
        <div className="info-box">
          <span className="info-icon">💬</span>
          <h3>Instant Support</h3>
          <p>Get help immediately, anytime you need it</p>
        </div>
        <div className="info-box">
          <span className="info-icon">🔒</span>
          <h3>Complete Privacy</h3>
          <p>Your conversations are confidential and secure</p>
        </div>
        <div className="info-box">
          <span className="info-icon">⏰</span>
          <h3>24/7 Available</h3>
          <p>Support when you need it most</p>
        </div>
      </div>

      {/* Chatbot Window */}
      {isChatOpen && (
        <div className="chatbot-overlay">
          <div className="chatbot-window">
            <div className="chatbot-header">
              <h2>AI Assistant</h2>
              <button onClick={() => setIsChatOpen(false)}>✖</button>
            </div>
            <div className="chatbot-body">
              <div className="preset-questions">
                {presetQuestions.map((q, index) => (
                  <button key={index} className="preset-btn">
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Yoga Section */}
      <div className="yoga-section">
        <h2 className="yoga-heading">🧘 Yoga to Relax Your Mind</h2>
        <div className="yoga-grid">
          {yogaExercises.map((yoga, index) => (
            <div key={index} className="yoga-card">
              <h3>{yoga.name}</h3>
              <button
                className="arrow-btn"
                onClick={() => setSelectedYoga(yoga)}
              >
                ➡
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Yoga Modal */}
      {selectedYoga && (
        <div className="yoga-overlay">
          <div className="yoga-window">
            <div className="yoga-header">
              <h2>{selectedYoga.name}</h2>
              <button onClick={() => setSelectedYoga(null)}>✖</button>
            </div>
            <div className="yoga-body">
              <pre>{selectedYoga.details}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AISupport;
