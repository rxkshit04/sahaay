import "./Signup.css"
import { auth, provider, signInWithPopup } from "../services/firebase.js";

const handleGoogleSignup = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    
    console.log("User Info:", {
      name: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      photo: user.photoURL
    });

    alert(`Welcome ${user.displayName}`);

  } catch (error) {
    console.error("Google sign-in error:", error);
  }
};


const Signup = () => {
  return (
    <>
      <div className="wrapper">
        <div className="side-left">
          <div className="graphic">
            <img src="/signup.svg" alt="relaxation" />
          </div>
        </div>

        <div className="side-right">
          <div className="form-box">
            <h2>Create Account</h2>
            <form method="POST" action="#">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                placeholder="Your full name"
                required
              />

              <label htmlFor="useremail">Email</label>
              <input
                type="email"
                id="useremail"
                placeholder="yourmail@example.com"
                required
              />

              <label htmlFor="userpassword">Password</label>
              <input
                type="password"
                id="userpassword"
                placeholder="Enter password"
                required
              />

              <label htmlFor="confirmpass">Confirm Password</label>
              <input
                type="password"
                id="confirmpass"
                placeholder="Confirm password"
                required
              />
            <label className="tnc">
            <span>
            By signing up, you agree to our <a href="#">Terms & Conditions</a> and{" "}
            <a href="#">Privacy Policy</a>
            </span>
        </label>

              <button  type="submit">Sign Up</button>

            </form>
            <button onClick={handleGoogleSignup} id="googlebtn"><img id="google" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width={"22px"} height={"22px"}></img> SignUp With Google</button>
             <p>
                Already registered? <a href="/login">Login</a>
              </p>
          </div>
        </div>
      </div>
    </>

  



  );
};

export default Signup;
