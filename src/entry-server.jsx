import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { ReactLenis } from "@studio-freight/react-lenis";
import { TransitionCtxProvider } from "./Context/TransitionState";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./Styles/styles.scss";

export function render(url, context) {
  const helmetContext = {};

  const body = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url} context={context}>
          <ReactLenis root>
            <TransitionCtxProvider>
              <App />
            </TransitionCtxProvider>
          </ReactLenis>
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );

  const helmet = helmetContext.helmet;

  return {
    body,
    ctx: context,
    head: [
      helmet.title?.toString(),
      helmet.base?.toString(),
      helmet.meta?.toString(),
      helmet.style?.toString(),
      helmet.link?.toString(),
      helmet.script?.toString(),
      helmet.noscript?.toString(),
    ].join(""),
    titleAttr: helmet.titleAttributes?.toString(),
    bodyAttr: helmet.bodyAttributes?.toString(),
    htmlAttr: helmet.htmlAttributes?.toString(),
  };
}
