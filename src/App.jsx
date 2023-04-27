import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import useCustomCursor from "./Hooks/useCustomCursor";
import { routes } from "./routes";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const cursor = useCustomCursor();
  const location = useLocation();

  const exitComplete = () => {
    const body = document.querySelector("body");
    body.classList.remove("noscroll");
  };

  return (
    <div id="smooth-wrapper" className="scroll-auto" data-scroll-container>
      <Nav />
      <main id="smooth-content " data-barba="container">
        {/* ROUTES */}
        <AnimatePresence
          initial={false}
          mode="sync"
          onExitComplete={() => exitComplete()}
        >
          <Routes location={location} key={location.pathname}>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
