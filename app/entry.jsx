import React from "react";
import ReactDOM from "react-dom";

import "../style";

import App from "./components/app_component";

const appDiv = document.createElement("div");

ReactDOM.render(<App />, document.body.appendChild(appDiv));
