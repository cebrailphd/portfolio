import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./Portfolio";
import { BrowserRouter } from "react-router-dom";
const css = require("normalize.css");
import "@fontsource/readex-pro";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Portfolio />
  </BrowserRouter>
);
