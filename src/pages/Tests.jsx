import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./tests.css";

const assessments = [
  {
    id: "phq9",
    title: "PHQ-9 Depression Assessment",
    description: "Evaluate symptoms of depression over the past 14 days",
    questions: [
      "Little interest or pleasure in doing things",
      "Feeling down, depressed, or hopeless",
      "Trouble falling or staying asleep, or sleeping too much",
      "Feeling tired or having little energy",
      "Poor appetite or overeating",
      "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
      "Trouble concentrating on things, such as reading the newspaper or watching television",
      "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving a lot more than usual",
      "Thoughts that you would be better off dead or of hurting yourself in some way",
    ],
    scale: [
      { label: "Not at all", value: 0 },
      { label: "Several days", value: 1 },
      { label: "More than half the days", value: 2 },
      { label: "Nearly every day", value: 3 },
    ],
    time: "5–10 minutes",
    icon: "🧠",
  },
  {
    id: "gad7",
    title: "GAD-7 Anxiety Assessment",
    description: "Assess symptoms of generalized anxiety disorder",
    questions: [
      "Feeling nervous, anxious or on edge",
      "Not being able to stop or control worrying",
      "Worrying too much about different things",
      "Trouble relaxing",
      "Being so restless that it's hard to sit still",
      "Becoming easily annoyed or irritable",
      "Feeling afraid as if something awful might happen",
    ],
    scale: [
      { label: "Not at all", value: 0 },
      { label: "Several days", value: 1 },
      { label: "More than half the days", value: 2 },
      { label: "Nearly every day", value: 3 },
    ],
    time: "3–5 minutes",
    icon: "💚",
  },
  {
    id: "ghq12",
    title: "GHQ-12 General Health Questionnaire",
    description: "Overall psychological well-being screening",
    questions: [
      "Been able to concentrate on whatever you're doing?",
      "Lost much sleep over worry?",
      "Felt that you are playing a useful part in things?",
      "Felt capable of making decisions about things?",
      "Felt constantly under strain?",
      "Felt you couldn't overcome your difficulties?",
      "Been able to enjoy your normal day-to-day activities?",
      "Been able to face up to your problems?",
      "Been feeling unhappy or depressed?",
      "Been losing confidence in yourself?",
      "Been thinking of yourself as a worthless person?",
      "Been feeling reasonably happy, all things considered?",
    ],
    scale: [
      { label: "Better than usual", value: 0 },
      { label: "Same as usual", value: 1 },
      { label: "Less than usual", value: 2 },
      { label: "Much less than usual", value: 3 },
    ],
    time: "10–15 minutes",
    icon: "📈",
  },
];

export default function Tests() {
  const [activeTest, setActiveTest] = useState(null);
  const [responses, setResponses] = useState({});
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleStart = (id) => {
    setActiveTest(id);
    setResponses({});
    setResult(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOptionChange = (questionIndex, value) => {
    setResponses((prev) => ({
      ...prev,
      [questionIndex]: value,
    }));
  };

  const handleSubmit = () => {
    const selectedTest = assessments.find((t) => t.id === activeTest);
    const totalScore = selectedTest.questions.reduce((sum, _, i) => {
      return sum + (parseInt(responses[i]) || 0);
    }, 0);

    setResult({
      score: totalScore,
      feedback: getFeedback(selectedTest.id, totalScore),
    });
  };

  const getFeedback = (testId, score) => {
    if (testId === "phq9") {
      if (score <= 4) return "Minimal depression";
      if (score <= 9) return "Mild depression";
      if (score <= 14) return "Moderate depression";
      if (score <= 19) return "Moderately severe depression";
      return "Severe depression";
    }

    if (testId === "gad7") {
      if (score <= 4) return "Minimal anxiety";
      if (score <= 9) return "Mild anxiety";
      if (score <= 14) return "Moderate anxiety";
      return "Severe anxiety";
    }

    if (testId === "ghq12") {
      if (score <= 11) return "Psychological well-being is within normal range";
      return "Possible psychological distress – consider professional advice";
    }

    return "Assessment complete";
  };

  const selectedTest = assessments.find((t) => t.id === activeTest);
  const allAnswered =
    selectedTest &&
    selectedTest.questions.length === Object.keys(responses).length;

  return (
    <div className="tests-page">
      {/* Hero */}
      <div className="tests-hero">
        <h1>Mental Health Self-Assessment</h1>
        <p>
          Take confidential, scientifically-validated assessments to better
          understand your mental health. Results are private and can help guide
          your wellness journey.
        </p>
      </div>

      {/* Test Cards */}
      {!activeTest && (
        <div className="tests-grid">
          {assessments.map((test) => (
            <div key={test.id} className="test-card">
              <div className="test-icon">{test.icon}</div>
              <h2>{test.title}</h2>
              <p className="description">{test.description}</p>
              <div className="meta">
                <span>📋 {test.questions.length} questions</span>
                <span>⏱ {test.time}</span>
              </div>
              <button onClick={() => handleStart(test.id)}>
                Start Assessment
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Active Test */}
      {activeTest && (
        <div className="test-section">
          <h2>{selectedTest.title}</h2>
          <p><i>(Please answer all questions)</i></p>

          <div className="test-table">
            <div className="row header">
              <div className="cell question-header">Question</div>
              {selectedTest.scale.map((opt, idx) => (
                <div key={idx} className="cell option-header">{opt.label}</div>
              ))}
            </div>

            {selectedTest.questions.map((question, qIndex) => (
              <div key={qIndex} className="row">
                <div className="cell question">{qIndex + 1}. {question}</div>
                {selectedTest.scale.map((opt, optIndex) => (
                  <div className="cell" key={optIndex}>
                    <input
                      type="radio"
                      name={`q-${qIndex}`}
                      value={opt.value}
                      checked={responses[qIndex] === opt.value}
                      onChange={() => handleOptionChange(qIndex, opt.value)}
                      required
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={!allAnswered}
          >
            Submit
          </button>

         {result && (
  <div className="result-block">
    <h3>Your Score: {result.score}</h3>
    <p>{result.feedback}</p>
    <button className="back-btn" onClick={() => setActiveTest(null)}>
      Back to All Tests
    </button>
  </div>
)}
        </div>
      )}

      {/* Info + Counsellor */}
      {!activeTest && (
        <>
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
            <button className="counsellor-btn" onClick={() => navigate("/counsellor")}>
              Talk to Counsellor – Free
            </button>
          </div>
        </>
      )}
    </div>
  );
}
