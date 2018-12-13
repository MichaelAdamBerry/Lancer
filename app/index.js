import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./firebase/firebase";

ReactDOM.render(
  <div className="appContainer">
    <App />
  </div>,
  document.getElementById("app")
);
