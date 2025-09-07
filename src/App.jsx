import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AISupport from "./pages/AISupport";
import TalkToCounsellor from "./pages/TalkToCounsellor";
import Tests from "./pages/Tests";
import Resources from "./pages/Resources";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ai" element={<AISupport />} />
        <Route path="/counsellor" element={<TalkToCounsellor />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  );
}
