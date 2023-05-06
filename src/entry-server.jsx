import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import React from "react";
import App from "./App";
import "./Styles/styles.scss";
import { ReactLenis } from "@studio-freight/react-lenis";
import { TransitionCtxProvider } from "./Context/TransitionState";
import { HelmetProvider } from "react-helmet-async";
const helmetContext = {};

export function SSRRender(url = "", context = {}) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <React.StrictMode>
        <HelmetProvider context={helmetContext}>
          <ReactLenis root>
            <TransitionCtxProvider>
              <App />
            </TransitionCtxProvider>
          </ReactLenis>
        </HelmetProvider>
      </React.StrictMode>
    </StaticRouter>
  );
}
