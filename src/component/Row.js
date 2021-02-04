import React from "react";
import "./Row.css";

function Row({ title }) {
  return (
    <div className="row">
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
