import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Container from "./components/container";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Container />
  </>
);

reportWebVitals();