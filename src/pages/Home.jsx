import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpg";
import "./Home.css";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "How does yoga help with anxiety?",
      a: "Yoga combines breathing exercises and mindfulness, which calm the nervous system and reduce stress hormones.",
    },
    {
      q: "Can yoga help with depression?",
      a: "Regular yoga practice boosts mood-regulating neurotransmitters like serotonin and helps build a positive outlook.",
    },
    {
      q: "Is yoga good for focus and concentration?",
      a: "Yes, yoga improves concentration and memory by reducing mental clutter and enhancing blood flow to the brain.",
    },
    {
      q: "Can yoga improve sleep?",
      a: "Gentle yoga before bed reduces restlessness, helping you fall asleep faster and enjoy deeper sleep.",
    },
    {
      q: "How does yoga affect overall mental health?",
      a: "Yoga balances body and mind, reduces stress, improves resilience, and encourages self-awareness.",
    },
    {
      q: "Do beginners benefit from yoga too?",
      a: "Absolutely! Even simple breathing and stretching practices help beginners feel calmer and more in control.",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Your Mental Health <br /> <span>Matters</span>
          </h1>
          <p>
            A safe, confidential space for college students to access mental
            health support, connect with peers, and build resilience for
            academic and personal success.
          </p>
          <div className="hero-buttons">
            <Link to="/tests" className="btn-primary">
              Start Your Journey →
            </Link>
            <Link to="/resources" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={logo} alt="Mental health illustration" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Everything You Need for Mental Wellness</h2>

        <div className="features-row">
          <div className="feature-card">
            <i className="fas fa-robot"></i>
            <h3>AI-Powered Support</h3>
            <p>Instant help with our compassionate AI chatbot.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-user-shield"></i>
            <h3>Confidential Appointments</h3>
            <p>Book secure sessions with counselors.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-book"></i>
            <h3>Resource Library</h3>
            <p>Curated articles, guides, and meditation tools.</p>
          </div>
        </div>

        <div className="features-row">
          <div className="feature-card">
            <i className="fas fa-users"></i>
            <h3>Peer Support Community</h3>
            <p>Connect with fellow students in moderated forums.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-lock"></i>
            <h3>Complete Privacy</h3>
            <p>End-to-end encrypted and anonymous participation.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-chart-line"></i>
            <h3>Progress Tracking</h3>
            <p>Track your wellness journey with insights.</p>
          </div>
        </div>
      </section>

      {/* Ready to Prioritize Section */}
      <section className="prioritize">
        <p className="tag">Take the First Step Today</p>
        <h2>
          Ready to Prioritize Your <span>Mental Health?</span>
        </h2>
        <p className="subtitle">
          Join thousands of students who have found support, community, and
          healing. Your journey to better mental health starts with a single click.
        </p>
        <div className="prioritize-buttons">
          <Link to="/tests" className="btn-primary">
            Start Your Journey →
          </Link>
          <Link to="/counsellor" className="btn-secondary">
            Talk to Someone Now
          </Link>
        </div>
        <div className="prioritize-features">
          <span>• Free for all students</span>
          <span>• 100% confidential</span>
          <span>• Available 24/7</span>
          <span>• No judgment zone</span>
        </div>
      </section>

      {/* Yoga & Mental Health FAQ Section */}
      <section className="faq">
        <h2>🧘‍♀️ Yoga & Mental Health</h2>
        <p className="subtitle">
          Discover how yoga can help overcome stress, anxiety, depression, and more.
        </p>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">{item.q}</div>
              {openIndex === index && (
                <div className="faq-answer">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
