import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import Cloud from "./Cloud";
import TickerText from "./TickerText";
import { Scroller } from "./Icons";

export default function Intro() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl_cloud = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".intro-section",
          scrub: true,
          start: "top top",
        },
      })
      .to(".intro-cloud", {
        yPercent: 80,
      });

    const tl_texts = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".intro-section",
          scrub: true,
          start: "top top",
        },
      })
      .to(".intro-content", {
        yPercent: -0,
        opacity: 0,
      });

    const tl_scroller = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".intro-scroller",
          scrub: true,
          start: "bottom bottom",
          end: "bottom 80%",
          // markers: true,
        },
      })
      .to(".intro-scroller", {
        yPercent: -100,
        opacity: 0,
        display: "none",
      });

    const tl_bg = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".intro-section",
          scrub: true,
          start: "top top",
          end: "bottom center",
        },
      })
      .to(".intro-gradient", {
        opacity: 0,
      });

    return () => {
      tl_texts.revert();
      tl_cloud.revert();
      tl_scroller.revert();
      tl_bg.revert();
    };
  }, []);

  return (
    <section className="block min-h-screen ">
      <div className="intro-section relative box-border py-[15vh] flex flex-col items-center z-100 ">
        <div className="intro-content block w-full text-center font-lexend select-none z-10">
          <h1 className="whitespace-nowrap block relative box-border text-[0] font-bold">
            <span className="text1 block text-ecru leading-none text-titlesr">
              Sr.
            </span>
            <span className="text2 block text-goldenyellow leading-none text-title mt-[-.5rem] md:mt-[-1rem]">
              Web Developer
            </span>
          </h1>
          <TickerText />
        </div>
        <div className="intro-cloud z-20 h-[50vh] ">
          <Cloud />
        </div>
        <div className="intro-scroller fixed bottom-[1rem] right-[3rem] z-10">
          <Scroller />
        </div>
        <div className="absolute top-0 left-0 w-full h-screen intro-gradient z-0 opacity-100"></div>
      </div>
    </section>
  );
}
