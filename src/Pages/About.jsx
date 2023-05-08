import Footer from "../Components/Footer";
import SEO from "../Components/SEO";
import { SectionTitle } from "../Components/Sections";

export default function About() {
  return (
    <div className="bg-daisybush">
      <SEO
        title="About - Guyda Bru, Full-Stack Developer"
        description="20 years experience designing, developing, deploying"
        name="guyda.com"
        type="website"
      />

      <SectionTitle
        titles={{
          title1: "Something",
          color1: "text-ecru",
          title2: "About Me",
          color2: "text-pearlaqua",
        }}
      />

      <section className={"block w-full py-40"}>
        <div className="max-w-prose mx-auto text-ecru px-[1rem]">
          <p className="font-zilla text-[18px] mb-[1rem]  text-center leading-relaxed">
            During my time in advertising I have been responsible for designing,
            animating, developing, and bringing concepts to life for local and
            national clients such as
            <span className="font-lexend font-normal">TD Bank</span>,
            <span className="font-lexend font-normal">
              Independence Blue Cross
            </span>
            , <span className="font-lexend font-normal">Boiron</span>,
            <span className="font-lexend font-normal">Bayer</span>,
            <span className="font-lexend font-normal">
              Fine Wine & Good Spirits
            </span>
            , <span className="font-lexend font-normal">PECO</span>.
          </p>
          <p className="font-zilla text-[18px] text-center leading-relaxed">
            I've been working at the{" "}
            <span className="font-lexend font-normal">
              Philadelphia Museum of Art
            </span>{" "}
            for the last 6 years, but outside of that I can be found trying to
            get out of Diamond rank in Rocket League, gardening, giving out
            wrong-answers-only during trivia nights at my local brewery, or
            making crêpes.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
