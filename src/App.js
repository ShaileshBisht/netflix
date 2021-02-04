import React from "react";
import "./App.css";
import HomeScreen from "./component/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <HomeScreen />
    </div>
  );
}

export default App;
