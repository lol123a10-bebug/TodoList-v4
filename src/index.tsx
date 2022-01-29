import "@hookstate/devtools";
import React from "react";
import ReactDOM from "react-dom";
import "reseter.css";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import Root from "./pages/Root";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
