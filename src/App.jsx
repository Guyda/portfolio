import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import useCustomCursor from "./Hooks/useCustomCursor";
import { routes } from "./routes";
import { useTransition, animated } from 'react-spring'


export default function App() {
  const cursor = useCustomCursor();
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { clipPath: 'circle(0% at 6% 6%)'},
    enter: { clipPath: 'circle(140% at 6% 6%)' },
    leave: {  clipPath: 'circle(140% at 6% 6%)'},
    
  })

  return (
    <div id="smooth-wrapper" className="scroll-auto" data-scroll-container>
      <Nav />
      <main id="smooth-content">
        {/* ROUTES */}
        {transitions((styles, item) => (
          <animated.div style={styles}>
        <Routes location={location}>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
          </animated.div>
          ))}
          
      </main>
      <Footer />
    </div>
  );
}
