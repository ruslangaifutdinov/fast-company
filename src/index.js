import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Users from "./components/users.jsx";
import Container from "./components/container";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Container />
  </>
);

reportWebVitals();
