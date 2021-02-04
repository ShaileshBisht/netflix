import React from "react";
import "./SignupScreen.css";

function SignupScreen() {
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="signupScreen_gray">New to netflix? </span>
          <span className="signupScreen_link">Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
