import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App/App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/style.scss";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
