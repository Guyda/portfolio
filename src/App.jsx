import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import useCustomCursor from "./Hooks/useCustomCursor";
import { routes } from "./routes";

export default function App() {
  const cursor = useCustomCursor();
  return (
    <div id="smooth-wrapper" className="scroll-auto" data-scroll-container>
      <Nav />
      <main id="smooth-content">
        <Routes location={location}>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
