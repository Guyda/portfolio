import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { TransitionContext } from "../Context/TransitionState";

export default function ScrollingText({
  el,
  words,
  reverse = false,
  size = "text-projects",
  trigger = "[data-scroll-container]",
  url = "/work",
}) {
  gsap.registerPlugin(ScrollTrigger);

  const { transitionEnded } = useContext(TransitionContext);

  const line = useRef(null);
  const scrolltext = useRef(null);

  if (!el || !words) return null;

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (transitionEnded) {
        const tl_line1 = gsap
          .timeline({
            scrollTrigger: {
              trigger: line.current,
              scrub: true,
              start: "top bottom",
              end: "top 75%",
            },
          })
          .from(line.current, {
            yPercent: 50,
            autoAlpha: 0,
          });

        // const tl_line2 = gsap
        //   .timeline({
        //     scrollTrigger: {
        //       trigger: line.current,
        //       scrub: true,
        //       start: "top bottom",
        //       end: "bottom top",
        //       markers: true,
        //     },
        //   })
        //   .fromTo(
        //     scrolltext.current,
        //     {
        //       xPercent: 0,
        //     },
        //     {
        //       xPercent: -25,
        //     }
        //   );
      }
    });
    return () => {
      ctx.revert();
      ctx.kill();
    };
  }, [transitionEnded]);

  return (
    <div
      ref={line}
      className="w-full h-full border-2 overflow-hidden"
      data-cursor="-projects"
      data-cursor-text={`<div class="flex flex-col items-center justify-center space-between">
          <span class="font-lexend text-sm leading-none pb-[8px]">View</span><span class="font-zilla text-lg leading-tight">${words}</span></div>`}
    >
      <Link
        to={url}
        className="rollingtexts relative flex items-center font-lexend text-ecru font-black hover:cursor-none hover:after:content-[''] hover:after:bg-goldenyellow hover:after:w-full hover:after:h-full hover:after:absolute hover:after:z-0 py-[2rem] hover:text-watermelon will-change-[all] transition-all duration-300"
      >
        <span className="sr-only">{words}</span>
        <span
          aria-hidden
          ref={scrolltext}
          className={`${el}1 relative block leading-none whitespace-nowrap pointer-none m-0 p-0 ${size} will-change-[transform] select-none px-[2rem] sm:px-[3rem] md:px-[4rem] box-border z-10`}
        >
          {words}
        </span>
      </Link>
    </div>
  );
}
