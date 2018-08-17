import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";

import App from "./main-page/index";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
