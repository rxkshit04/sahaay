// Modified Auth.jsx
import { useState } from "react";
import { auth, provider, db } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // Added import for navigation
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate(); // Added hook for navigation

  const handleChange = (e) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  // 🔹 Signup / Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let userCredential;

      if (isLogin) {
        // Login
        userCredential = await signInWithEmailAndPassword(
          auth,
          form.email,
          form.password
        );
      } else {
        // Signup
        if (form.password !== form.confirmPassword) {
          return alert("Passwords do not match");
        }
        userCredential = await createUserWithEmailAndPassword(
          auth,
          form.email,
          form.password
        );

        // Store extra data in Firestore (only at first signup)
        await setDoc(doc(db, "users", userCredential.user.uid), {
          fullname: form.fullname,
          email: form.email,
          photoURL: null,
          createdAt: new Date().toISOString(),
        });
      }

      const user = userCredential.user;
      const token = await user.getIdToken(); // Firebase JWT
      localStorage.setItem("token", token);

      // Removed alert and added redirect
      navigate("/");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        alert("No account found. Please sign up first.");
      } else if (err.code === "auth/wrong-password") {
        alert("Incorrect password. Try again.");
      } else if (err.code === "auth/email-already-in-use") {
        alert("Email already in use. Try logging in.");
      } else {
        alert(err.message);
      }
    }
  };

  // 🔹 Google Auth
  const handleGoogleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();
      localStorage.setItem("token", token);

      // If new Google user, create Firestore doc
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          fullname: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          createdAt: new Date().toISOString(),
        });
      }

      // Removed alert and added redirect
      navigate("/");
    } catch (err) {
      alert("Google login failed: " + err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img
          src={isLogin ? "/login_img.svg" : "/signup.svg"}
          alt="graphic"
        />
      </div>

      <div className="auth-right">
        <div className="auth-box">
          <h2>{isLogin ? "Login to your account" : "Create an account"}</h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Your full name"
                  onChange={handleChange}
                  required
                />
              </>
            )}

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="yourmail@example.com"
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              onChange={handleChange}
              required
            />

            {!isLogin && (
              <>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm password"
                  onChange={handleChange}
                  required
                />
              </>
            )}

            <button type="submit">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <button onClick={handleGoogleAuth} id="googlebtn">
            <img
              id="google"
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
            />
            {isLogin ? "Login with Google" : "Sign up with Google"}
          </button>

          <p>
            {isLogin
              ? "Don’t have an account?"
              : "Already have an account?"}{" "}
            <span
              className="toggle-link"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;