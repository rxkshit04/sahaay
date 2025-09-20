import "./Login.css"

const Login = () => {

  return(
    <>
    <div className="main">
    <div className="lefter">
      <div className="image">
      <img id="images" src="/login_img.svg"></img>
      </div>
     <p>Sahaay</p>
    </div>
    <div className="righter">
      <div className="login">
        <h2>Login to your account</h2>
        <form method="POST" action={"#"}>
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="yourmail@example.com" required></input> 
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your Password" required></input>
        <button>Login</button>
        <p>Don’t have an account? <a href="/signup">Sign Up</a></p>
        </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default Login;
