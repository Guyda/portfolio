import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import Cloud from "./Cloud";
import TickerText from "./TickerText";
import { Scroller } from "./Icons";

export default function Intro() {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const tl_cloud = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".intro-section",
          scrub: true,
          start: "top top",
        },
      })
      .to(".intro-cloud", {
        yPercent: -100,
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
          trigger: ".intro-section",
          scrub: true,
          start: "top top",
          end: "bottom bottom",
        },
      })
      .to(".intro-scroller", {
        yPercent: -100,
        opacity: 0,
        display: "none",
      });

    return () => {
      tl_texts.revert();
      tl_cloud.revert();
      tl_scroller.revert();
    };
  }, []);

  return (
    <section className="block w-full h-full overflow-hidden bg-watermelon">
      <div className="intro-section relative box-border w-screen py-[160px] flex flex-col items-center">
        <div className="intro-content block w-full text-center font-lexend select-none z-10">
          <h1 className="whitespace-nowrap block relative box-border text-[0] font-bold">
            <span className="text1 block text-ecru leading-none text-[77px]">
              Sr.
            </span>
            <span className="text2 block text-goldenyellow leading-none text-[120px] mt-[-20px]">
              Web Developer
            </span>
          </h1>
          <TickerText />
        </div>
        <div className="intro-cloud z-20 my-[140px]">
          <Cloud />
        </div>
        <div className="intro-scroller fixed bottom-[1rem] left-1/2">
          <Scroller />
        </div>
      </div>
    </section>
  );
}
