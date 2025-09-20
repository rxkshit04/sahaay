// App.jsx remains unchanged
import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "./services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

// Import pages
import Home from "./pages/Home";
import Auth from "./pages/Auth"; 
import AISupport from "./pages/AISupport";
import TalkToCounsellor from "./pages/TalkToCounsellor";
import Tests from "./pages/Tests";
import Resources from "./pages/Resources";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div>
      {/* 🔹 Header */}
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

          {/* 🔹 Navbar */}
          <nav className="main-nav" role="navigation" aria-label="Main navigation">
            <Link to="/ai" className="nav-link">AI Support</Link>
            <Link to="/counsellor" className="nav-link">Counsellor</Link>
            <Link to="/tests" className="nav-link">Tests</Link>
            <Link to="/resources" className="nav-link">Resources</Link>
            {user ? (
              <button className="nav-link logout-btn" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link to="/auth" className="nav-link">Login</Link>
            )}
          </nav>
        </div>
      </header>

      {/* 🔹 Routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} /> 
          <Route path="/ai" element={<AISupport />} />
          <Route path="/counsellor" element={<TalkToCounsellor />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </main>
    </div>
  );
}