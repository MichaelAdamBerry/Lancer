import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./firebase";

ReactDOM.render(
  <div className="container-fluid appContainer">
    <App />
  </div>,
  document.getElementById("app")
);
