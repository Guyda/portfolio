// import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
// import MagneticButton from "../Components/MagneticButton";
import SEO from "../Components/SEO";
import { SectionTitle } from "../Components/Sections";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function About() {
  // const projectButton = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const titles = gsap.utils.toArray(".anim-title");
      const texts = gsap.utils.toArray(".anim-text");
      const lists = gsap.utils.toArray(".anim-list");

      titles.forEach((p, index) => {
        gsap.from(p, {
          autoAlpha: 0,
          yPercent: 10,
          filter: "blur(10px)",
          duration: 0.66,
          delay: index * 0.1,
          ease: "Power4.Out",
          scrollTrigger: {
            trigger: p,
            start: "top 95%",
            end: "top 95%",
          },
        });
      });

      texts.forEach((p, index) => {
        gsap.from(p, {
          autoAlpha: 0,
          yPercent: 100,
          filter: "blur(10px)",
          duration: 0.66,
          delay: index * 0.07,
          ease: "Power4.Out",
          scrollTrigger: {
            trigger: p,
            start: "top 95%",
            end: "top 95%",
          },
        });
      });

      lists.forEach((p, index) => {
        gsap.to(p, {
          yPercent: 33,
          ease: "Power4.Out",
          scrollTrigger: {
            trigger: "[data-scroll-container]",
            start: "top 33%",
            // end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    return () => {
      ctx.revert();
      ctx.kill();
    };
  }, []);
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

      <section className="block w-full py-40">
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
            Since 2017, I've been working as a Sr. Web Developer for the{" "}
            <span className="font-lexend font-normal">
              Philadelphia Museum of Art
            </span>
            , but outside of that I can be found trying to get out of Diamond
            rank in Rocket League, gardening, giving out wrong-answers-only
            during trivia nights at my local brewery, or making crêpes.
          </p>
        </div>
      </section>

      <section className="block w-full pt-40 pb-80">
        <div className="max-w-screen-md mx-auto text-ecru px-[1rem]">
          <h3 className="block font-lexend text-[32px] font-bold text-center anim-title">
            Things I do
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-x-20 ">
            <div className="grid-cols-1 text-center mb-[3rem] md:mb-0 anim-list">
              <h2 className="text-[2rem] font-bold pb-[2rem] font-lexend lg:text-[1.88rem] anim-title">
                Design
              </h2>
              <ul className="font-zilla text-[18px] ">
                <li className="mb-[1rem] anim-text">Ideation</li>
                <li className="mb-[1rem] anim-text">Visual Design</li>
                <li className="mb-[1rem] anim-text">HTML/CSS</li>
                <li className="mb-[1rem] anim-text">Bulma</li>
                <li className="mb-[1rem] anim-text">TailwindCSS</li>
                <li className="mb-[1rem] anim-text">Accessibility</li>
              </ul>
            </div>

            <div className="grid-cols-1 text-center anim-list">
              <h2 className="text-[2rem] font-bold pb-[2rem] font-lexend lg:text-[1.88rem] anim-title">
                Deploy
              </h2>
              <ul className="font-zilla text-[18px]">
                <li className="mb-[1rem] anim-text">JavaScript</li>
                <li className="mb-[1rem] anim-text">Nginx</li>
                <li className="mb-[1rem] anim-text">Docker</li>
                <li className="mb-[1rem] anim-text">Google Cloud</li>
                <li className="mb-[1rem] anim-text">AWS</li>
                <li className="mb-[1rem] anim-text">REST API</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
