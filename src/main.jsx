import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./Styles/styles.scss";
import { ReactLenis } from "@studio-freight/react-lenis";
import { BrowserRouter } from "react-router-dom";
import { TransitionCtxProvider } from "./Context/TransitionState";
import { HelmetProvider } from "react-helmet-async";
const helmetContext = {};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
      <ReactLenis root>
        <BrowserRouter>
          <TransitionCtxProvider>
            <App />
          </TransitionCtxProvider>
        </BrowserRouter>
      </ReactLenis>
    </HelmetProvider>
  </StrictMode>
);
