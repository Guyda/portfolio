import Home from "./Pages/Home";
import Footer from './Components/Footer';
import useLocoScroll from './Hooks/useLocoScroll';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function App() {
  
  const smoothScroll = useLocoScroll(true);

  return (
    <div data-scroll-container className="App">
      <div data-scroll-section>
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </div>
  )

}