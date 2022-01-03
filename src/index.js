import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.scss";

console.dir(process.env);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
