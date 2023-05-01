import { gsap } from "gsap";
import { useContext, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import Cloud from "./Cloud";
import TickerText from "./TickerText";
import { Scroller } from "./Icons";
import { TransitionContext } from "../Context/TransitionState";

export default function Intro() {
  gsap.registerPlugin(ScrollTrigger);

  const { transitionEnded } = useContext(TransitionContext);

  const introContent = useRef();
  const introCloud = useRef();
  const introScroller = useRef();
  const introSection = useRef();
  const introGradient = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      console.log("intro", { transitionEnded });
      if (transitionEnded) {
        const tl_cloud = gsap
          .timeline({
            scrollTrigger: {
              trigger: introSection.current,
              scrub: true,
              start: "top top",
            },
          })
          .to(introCloud.current, {
            yPercent: 70,
          });

        const tl_title = gsap
          .timeline({
            scrollTrigger: {
              trigger: introSection.current,
              scrub: true,
              start: "top top",
            },
          })
          .to(introContent.current, {
            yPercent: -0,
            opacity: 0,
          });

        const tl_scroller = gsap
          .timeline({
            scrollTrigger: {
              trigger: introScroller.current,
              scrub: true,
              start: "bottom bottom",
              end: "bottom 80%",
              // markers: true,
            },
          })
          .to(introScroller.current, {
            yPercent: -100,
            opacity: 0,
            display: "none",
          });

        const tl_bg = gsap
          .timeline({
            scrollTrigger: {
              trigger: introSection.current,
              scrub: true,
              start: "top top",
              end: "bottom center",
            },
          })
          .to(introGradient.current, {
            opacity: 0,
          });
      }
    });
    return () => {
      ctx.revert();
      ctx.kill();
    };
  }, [transitionEnded]);

  return (
    <section className="block min-h-screen ">
      <div
        className="intro-section relative box-border py-[15vh] flex flex-col items-center z-100 "
        ref={introSection}
      >
        <div
          className="intro-content block w-full text-center font-lexend select-none z-10"
          ref={introContent}
        >
          <h1 className="whitespace-nowrap w-full overflow-hidden relative box-border text-[0] font-bold flex flex-col">
            <span className="text1 block text-ecru leading-none text-titlesr page-title ">
              Sr.
            </span>
            <span className="text2 block text-goldenyellow leading-none text-title mt-[-.5rem] md:mt-[-1rem] page-title-delayed">
              Web Developer
            </span>
          </h1>
          <TickerText />
        </div>
        <div className="intro-cloud z-20 h-[50vh]" ref={introCloud}>
          <Cloud />
        </div>
        <div
          className="intro-scroller fixed bottom-[1rem] right-[3rem] z-10"
          ref={introScroller}
        >
          <Scroller />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-screen intro-gradient z-0 opacity-100"
          ref={introGradient}
        />
      </div>
    </section>
  );
}
