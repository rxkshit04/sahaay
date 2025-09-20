import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/logo.jpg";
import "./Home.css";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

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
      <section className="hero" data-aos="fade-up">
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
      <section className="features" data-aos="fade-up">
        <h2>Everything You Need for Mental Wellness</h2>

        <div className="features-row">
          {[
            {
              icon: "fas fa-robot",
              title: "AI-Powered Support",
              desc: "Instant help with our compassionate AI chatbot.",
            },
            {
              icon: "fas fa-user-shield",
              title: "Confidential Appointments",
              desc: "Book secure sessions with counselors.",
            },
            {
              icon: "fas fa-book",
              title: "Resource Library",
              desc: "Curated articles, guides, and meditation tools.",
            },
          ].map((item, idx) => (
            <div
              className="feature-card"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={100 * idx}
            >
              <i className={item.icon}></i>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="features-row">
          {[
            {
              icon: "fas fa-users",
              title: "Peer Support Community",
              desc: "Connect with fellow students in moderated forums.",
            },
            {
              icon: "fas fa-lock",
              title: "Complete Privacy",
              desc: "End-to-end encrypted and anonymous participation.",
            },
            {
              icon: "fas fa-chart-line",
              title: "Progress Tracking",
              desc: "Track your wellness journey with insights.",
            },
          ].map((item, idx) => (
            <div
              className="feature-card"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={100 * (idx + 3)}
            >
              <i className={item.icon}></i>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prioritize Section */}
      <section className="prioritize" data-aos="fade-up">
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

      {/* FAQ Section */}
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
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {item.q}
              </div>
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