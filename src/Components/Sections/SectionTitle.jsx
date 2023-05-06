import { useContext, useEffect, useRef } from "react";
import { Scroller } from "../Icons";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { TransitionContext } from "../../Context/TransitionState";

export default function SectionTitle({ titles = {} }) {
  gsap.registerPlugin(ScrollTrigger);

  const { transitionEnded } = useContext(TransitionContext);

  const introContent = useRef();
  const introScroller = useRef();
  const introSection = useRef();
  const introGradient = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (transitionEnded) {
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

  let { title1, color1, title2, color2, subtitle, color3 } = titles;
  let t1 = "text1 block text-titlesr page-title " + color1;
  let t2 =
    "text2 block leading-none text-title mt-[-.5rem] md:mt-[-1rem] page-title-delayed " +
    color2;
  let t3 =
    "ticker-text flex justify-center w-auto m-0 mx-auto mt-[20px] sm:text-[1rem] md:text-[22px] font-zilla w-full page-fadein " +
    color3;
  return (
    <section className="block h-screen ">
      <div
        className="intro-section relative box-border flex flex-col items-center z-100 "
        ref={introSection}
      >
        <div
          className="intro-content block w-full text-center select-none z-10 h-screen flex flex-col items-center justify-center"
          ref={introContent}
        >
          <h1 className="whitespace-nowrap w-full overflow-hidden relative box-border font-lexend  text-[0] font-bold flex flex-col">
            {title1 && <span className={t1}>{title1}</span>}
            {title2 && <span className={t2}>{title2}</span>}
          </h1>

          {subtitle && <div className={t3}>{subtitle}</div>}
        </div>
        <div
          className="intro-scroller fixed bottom-[1rem] left-1/2 -translate-x-1/2 z-10"
          ref={introScroller}
        >
          <Scroller />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-screen z-0 opacity-50 bg-hero-bg bg-repeat-x bg-contain"
          ref={introGradient}
        />
      </div>
    </section>
  );
}
