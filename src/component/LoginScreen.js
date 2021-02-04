import React from "react";
import "./LoginScreen.css";

function Login() {
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="loginScreen_button">Sign In</button>
      </div>
    </div>
  );
}

export default Login;
