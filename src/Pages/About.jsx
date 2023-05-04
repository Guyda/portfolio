import Footer from "../Components/Footer";

export default function About({ bg, accent }) {
  return (
    <div className="bg-daisybush">
      <section className="block h-[80vh] ">
        <div className="intro-section relative box-border z-100 ">
          <div className="intro-content block w-full text-center select-none z-10 h-screen flex flex-col items-center justify-center">
            <h1 className="whitespace-nowrap w-full overflow-hidden relative box-border font-lexend  text-[0] font-bold flex flex-col">
              <span className="text1 block text-ecru leading-none text-titlesr page-title ">
                A Jack of
              </span>
              <span className="text2 block leading-none text-title mt-[-.5rem] md:mt-[-1rem] page-title-delayed  text-pearlaqua">
                All Trades
              </span>
            </h1>

            <div className="ticker-text flex justify-center w-auto m-0 mx-auto mt-[20px] sm:text-[1rem] md:text-[22px] font-zilla text-ecru w-full page-fadein">
              <span className="static font-normal">
                ...is a master of none, but oftentimes
                <span className="inline-block sm:block">
                  better than a master of one.
                </span>
              </span>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-screen z-0 opacity-50 bg-hero-bg bg-repeat-x bg-contain" />
        </div>
      </section>
      <section className={"block w-full py-40"}>
        <div className="max-w-prose mx-auto text-ecru px-[1rem]">
          <p className="font-zilla text-[18px] mb-[1rem]  text-center leading-relaxed">
            During my time in advertising I have been responsible for designing,
            animating, developing, and bringing concepts to life for local and
            national clients such as{" "}
            <span className="font-lexend font-normal">TD Bank</span>,{" "}
            <span className="font-lexend font-normal">
              Independence Blue Cross
            </span>
            , <span className="font-lexend font-normal">Boiron</span>,{" "}
            <span className="font-lexend font-normal">Bayer</span>,{" "}
            <span className="font-lexend font-normal">
              Fine Wine & Good Spirits
            </span>
            , <span className="font-lexend font-normal">PECO</span>.
          </p>
          <p className="font-zilla text-[18px] text-center leading-relaxed">
            Outside of working for the{" "}
            <span className="font-lexend font-normal">
              Philadelphia Museum of Art
            </span>
            , I can be found trying to get out of Diamond rank in Rocket League,
            gardening, giving out wrong-answers-only during trivia nights at my
            local pub, or making crêpes.
          </p>
        </div>
      </section>

      <section className="block w-full py-40">
        <div className="max-w-screen-md mx-auto text-ecru px-[1rem]">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-x-20 ">
            <div className="grid-cols-1 text-center mb-[3rem]">
              <h2 className="text-[2rem] font-bold pb-[2rem] font-lexend lg:text-[1.88rem]">
                Design
              </h2>
              <ul className="font-zilla text-[18px]">
                <li className="mb-[1rem] ">Ideation</li>
                <li className="mb-[1rem] ">Visual Design</li>
                <li className="mb-[1rem] ">HTML/CSS</li>
                <li className="mb-[1rem] ">Bulma</li>
                <li className="mb-[1rem] ">TailwindCSS</li>
                <li className="mb-[1rem] ">Accessibility</li>
              </ul>
            </div>

            <div className="grid-cols-1 text-center">
              <h2 className="text-[2rem] font-bold pb-[2rem] font-lexend lg:text-[1.88rem]">
                Deploy
              </h2>
              <ul className="font-zilla text-[18px]">
                <li className="mb-[1rem] ">JavaScript</li>
                <li className="mb-[1rem] ">Nginx</li>
                <li className="mb-[1rem] ">Docker</li>
                <li className="mb-[1rem] ">Google Cloud</li>
                <li className="mb-[1rem] ">AWS</li>
                <li className="mb-[1rem] ">REST API</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
