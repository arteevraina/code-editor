import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import Web from "./web-based/web";
import "./web-based/index.css";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <Web />
  </React.StrictMode>,
  document.getElementById("web")
);
