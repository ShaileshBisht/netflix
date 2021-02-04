import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../axios";
import requests from "../Requests";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
