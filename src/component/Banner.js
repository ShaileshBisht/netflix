import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">My List</button>
          <button className="banner_button">Play</button>
        </div>
        <h1 className="banner_discription">this is a test discription</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
