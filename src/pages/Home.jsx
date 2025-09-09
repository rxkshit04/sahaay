import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "./Home.css";

export default function Home() {
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

        {/* First Row */}
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

        {/* Second Row */}
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
    </div>
  );
}
