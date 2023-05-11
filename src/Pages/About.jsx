import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import MagneticButton from "../Components/MagneticButton";
import SEO from "../Components/SEO";
import { SectionTitle } from "../Components/Sections";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function About() {
  const projectButton = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(projectButton.current, {
        autoAlpha: 0,
        yPercent: 30,
        filter: "blur(10px)",
        duration: 1,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: projectButton.current,
          start: "top 75%",
          end: "top 75%",
        },
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
            I've been working as a Sr. Web Developer at the{" "}
            <span className="font-lexend font-normal">
              Philadelphia Museum of Art
            </span>{" "}
            since 2017, but outside of that I can be found trying to get out of
            Diamond rank in Rocket League, gardening, giving out
            wrong-answers-only during trivia nights at my local brewery, or
            making crêpes.
          </p>
        </div>
      </section>

      <section className="block w-full py-40">
        <div className="max-w-screen-md mx-auto text-ecru px-[1rem]">
          <h3 className="block font-normal pb-[6rem] font-lexend text-[24px] text-center page-title page-title overflow-hidden ">
            Things I do
          </h3>
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
        <div
          ref={projectButton}
          className="w-[280px] text-center mx-auto text-ecru block mt-[6rem]"
        >
          <MagneticButton
            data-cursor="-hidden"
            scale={2}
            tollerance={0.8}
            speed={0.3}
            borderRadius="50%"
            className="magnetic-button p-0 bg-tranparent touch-none p-[2rem] flex items-center justify-center"
          >
            <a
              href={
                import.meta.env.BASE_URL + "Guy-David-Bru-resume2023-web.pdf"
              }
              className="bg-pearlaqua px-[2rem] py-[1rem] rounded-lg flex flex-col justify-center items-center transform transition-all text-daisybush font-bold ring-0 ring-gray-300 hover:ring-8 hover:bg-ecru group-focus:ring-4 ring-opacity-30 duration-300 delay-150 hover:text-dark"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download PDF (Open new window)"
            >
              Download Resume
            </a>
          </MagneticButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
