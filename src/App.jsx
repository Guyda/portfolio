import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";

export default function App() {
  return (
    <div id="smooth-wrapper" data-scroll-container>
      <Nav />
      <main id="smooth-content ">
        {/* ROUTES */}
        <Home />
      </main>
      <Footer />
    </div>
  );
}
