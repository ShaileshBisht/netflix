import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

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
        <h1 className="banner_discription">
          {truncate(
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
          minima! Aliquid ullam sed veniam et.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
          minima! Aliquid ullam sed veniam et.`,
            150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
