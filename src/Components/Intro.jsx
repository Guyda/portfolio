import { gsap } from "gsap";
import Cloud from "./Cloud";
import RollingText from "./RollingText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import TickerText from "./TickerText";

export default function Intro() {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".intro-content",
          scrub: true,
          start: "bottom bottom",
          end: "bottom top",
          // markers: true,
        },
      })
      .to(".intro-content", { yPercent: -50, stagger: 0.25 });
    return () => tl.revert();
  }, []);

  return (
    <div className="relative box-border block w-screen min-h-screen ">
      <Cloud className="intro-content" />
      <div className="intro-content relative w-full translate-y-1/3">
        <RollingText
          text={[
            {
              el: "introText01",
              aria: "Digital",
              words: "Digital Digital Digital",
              size: "text-25xl",
              duration: 80,
              reverse: false,
            },
            {
              el: "introText02",
              aria: "Tech Lead",
              words: "Tech Lead Tech Lead Tech Lead",
              size: "text-18xl",
              duration: 70,
              reverse: true,
            },
          ]}
        />
        <TickerText />
      </div>
    </div>
  );
}
