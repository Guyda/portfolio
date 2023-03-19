import Home from "./Pages/Home";
import useLocoScroll from './Components/useLocoScroll';



export default function App() {
  
  const smoothScroll = useLocoScroll(true);

  return (
    <div data-scroll-container className="App">
      <main data-scroll-section>
        <Home />
        <section className="section" >
          <div className="content">
            <h2>some other title</h2>
            <p>Some other paragraph</p>
          </div>
          <div className="ledge bg-dark"></div>
        </section>
        <section className="section bg-dark" >
          <div className="content">
            <h2>End of page</h2>
            <p>Some other paragraph</p>
          </div>
        </section>
      </main>
    </div>
  )

}