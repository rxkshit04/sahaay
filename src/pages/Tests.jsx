import React, { useState } from "react";
import "./tests.css";

const assessments = [
  {
    id: "phq9",
    title: "PHQ-9 Depression Assessment",
    description: "Evaluate symptoms of depression over the past two weeks",
    questions: 9,
    time: "5–10 minutes",
    icon: "🧠",
  },
  {
    id: "gad7",
    title: "GAD-7 Anxiety Assessment",
    description: "Assess symptoms of generalized anxiety disorder",
    questions: 7,
    time: "3–5 minutes",
    icon: "💚",
  },
  {
    id: "ghq",
    title: "GHQ General Health Assessment",
    description: "Overall psychological well-being screening",
    questions: 12,
    time: "10–15 minutes",
    icon: "📈",
  },
];

export default function Tests() {
  const [activeTest, setActiveTest] = useState(null);

  const handleStart = (id) => {
    setActiveTest(id);
  };

  const handleClose = () => {
    setActiveTest(null);
  };

  return (
    <div className="tests-page">
      {/* Hero Section */}
      <div className="tests-hero">
        <h1>Mental Health Self-Assessment</h1>
        <p>
          Take confidential, scientifically-validated assessments to better
          understand your mental health. Results are private and can help guide
          your wellness journey.
        </p>
      </div>

      {/* Cards */}
      <div className="tests-grid">
        {assessments.map((test) => (
          <div key={test.id} className="test-card">
            <div className="test-icon">{test.icon}</div>
            <h2>{test.title}</h2>
            <p className="description">{test.description}</p>
            <div className="meta">
              <span>📋 {test.questions} questions</span>
              <span>⏱ {test.time}</span>
            </div>
            <button onClick={() => handleStart(test.id)}>Start Assessment</button>
          </div>
        ))}
      </div>

      {/* Info + Counsellor */}
      <div className="tests-info">
        <h3>Important Information</h3>
        <p>
          These assessments are screening tools, not diagnostic instruments.
          Results should be discussed with a mental health professional.
        </p>
      </div>

      <div className="tests-support">
        <h3>Need Support After Testing?</h3>
        <p>
          Connect with our free counsellors immediately after completing any
          assessment.
        </p>
        <button className="counsellor-btn">Talk to Counsellor – Free</button>
      </div>

      {/* Test Modal */}
      {activeTest && (
        <div className="test-modal-overlay">
          <div className="test-modal">
            <button className="close-btn" onClick={handleClose}>
              ✖
            </button>
            <h2>{assessments.find((t) => t.id === activeTest).title}</h2>
            <p>(Your test questions will go here)</p>
            <button className="submit-btn">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}
