// src/App.jsx
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AISupport from "./pages/AISupport";
import TalkToCounsellor from "./pages/TalkToCounsellor";
import Tests from "./pages/Tests";
import Resources from "./pages/Resources";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <header className="site-header" role="banner">
        <div className="header-inner">
          <button
            type="button"
            className="brand-btn"
            onClick={handleBrandClick}
            aria-label="Go to Sahaay home"
          >
            Sahaay
          </button>

          <nav className="main-nav" role="navigation" aria-label="Main navigation">
            <Link to="/ai" className="nav-link">AI Support</Link>
            <Link to="/counsellor" className="nav-link">Counsellor</Link>
            <Link to="/tests" className="nav-link">Tests</Link>
            <Link to="/resources" className="nav-link">Resources</Link>
            <Link to="/login" className="nav-link">Login</Link>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ai" element={<AISupport />} />
          <Route path="/counsellor" element={<TalkToCounsellor />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </main>
    </div>
  );
}
