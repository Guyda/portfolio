import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { ReactLenis } from "@studio-freight/react-lenis";
import { TransitionCtxProvider } from "./Context/TransitionState";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./Styles/styles.scss";
const helmetContext = {};

export function render(url, context) {
  return renderToString(
    <StaticRouter location={url} context={context}>
      <StrictMode>
        <HelmetProvider context={helmetContext}>
          <ReactLenis root>
            <TransitionCtxProvider>
              <App />
            </TransitionCtxProvider>
          </ReactLenis>
        </HelmetProvider>
      </StrictMode>
    </StaticRouter>
  );
}
