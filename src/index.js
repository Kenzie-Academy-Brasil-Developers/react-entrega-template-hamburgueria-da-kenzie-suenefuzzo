import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./style/globalStyle";
import { Reset } from "./style/reset";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Reset/>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

reportWebVitals();
