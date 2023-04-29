import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styles/styles.scss";
import { ReactLenis } from "@studio-freight/react-lenis";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactLenis root options={{ duration: 1.5 }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactLenis>
  </React.StrictMode>
);
