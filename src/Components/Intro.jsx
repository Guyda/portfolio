import { gsap } from "gsap";
import Cloud from "./Cloud";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import TickerText from "./TickerText";

export default function Intro() {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const tl_cloud = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".intro-section",
          scrub: true,
          start: "top top",
          // markers: true,
        },
      })
      .to(".intro-cloud", {
        yPercent: 0,
      });

    const tl_texts = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".intro-section",
          scrub: true,
          start: "top top",
          // markers: true,
        },
      })
      .to(".intro-content", {
        yPercent: -50,
        opacity: 0,
      });

    return () => {
      tl_texts.revert();
      tl_cloud.revert();
    };
  }, []);

  return (
    <div className="intro-section relative box-border w-screen min-h-screen flex flex-col items-center justify-center">
      <div className="intro-cloud absolute z-20 top-1/2 -translate-y-1/2">
        <Cloud />
      </div>
      <div className="intro-content w-full absolute text-center font-titan select-none  top-1/2 -translate-y-1/2">
        <div className="whitespace-nowrap block relative box-border text-[0]">
          <div className="text1 inline-block text-cream leading-none text-25xl">
            Sr. Dev
          </div>
        </div>
        <div className="whitespace-nowrap block relative box-border text-[0]">
          <div className="text2 inline-block text-dark leading-none text-18xl">
            Tech Lead
          </div>
        </div>
        <TickerText />
      </div>
    </div>
  );
}
