import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./firebase";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
