import Cursor from "./Components/Cursor";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
// import useCustomCursor from "./Hooks/useCustomCursor";
import Home from "./Pages/Home";

export default function App() {
  // useCustomCursor();
  return (
    <div id="smooth-wrapper" className="scroll-auto" data-scroll-container>
      <Cursor />
      <Nav />
      <main id="smooth-content ">
        {/* ROUTES */}
        <Home />
      </main>
      <Footer />
    </div>
  );
}
