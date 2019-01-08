import React from "react";
import { render } from "react-dom";

import "../style";

import App from "./components/app_component";

const appDiv = document.createElement("div");

render(<App />, document.body.appendChild(appDiv));
