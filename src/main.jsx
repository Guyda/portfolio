import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styles/styles.scss";
import { ReactLenis } from "@studio-freight/react-lenis";
import { BrowserRouter } from "react-router-dom";
import { TransitionCtxProvider } from "./Context/TransitionState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactLenis root>
      <BrowserRouter>
        <TransitionCtxProvider>
          <App />
        </TransitionCtxProvider>
      </BrowserRouter>
    </ReactLenis>
  </React.StrictMode>
);
