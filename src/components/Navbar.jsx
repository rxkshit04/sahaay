import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Sahaay Logo" className="navbar-logo" />
        <span className="navbar-title">Sahaay</span>
      </div>
      <div className="navbar-links">
        <Link to="/ai">AI Support</Link>
        <Link to="/counsellor">Counsellor</Link>
        <Link to="/tests">Tests</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
