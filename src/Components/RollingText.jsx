import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef } from "react";
import { roll } from "../Helpers";
import { Link } from "react-router-dom";
import { TransitionContext } from "../Context/TransitionState";
// Strongly/Heavily inspired by: https://codepen.io/GreenSock/pen/rNjvgjo?editors=1010

export default function RollingText({
  el,
  words,
  duration = 60,
  reverse = false,
  size = "text-projects",
  trigger = "[data-scroll-container]",
  url = "/work",
}) {
  gsap.registerPlugin(ScrollTrigger);

  const { transitionEnded } = useContext(TransitionContext);

  const line = useRef(null);

  if (!el || !words) return null;

  useEffect(() => {
    let direction = 1;

    let _el = "." + el + "1";

    let ctx = gsap.context(() => {
      if (transitionEnded) {
        const roll1 = roll(_el, { duration }, reverse),
          tl = ScrollTrigger.create({
            trigger: document.querySelector(trigger),
            onUpdate(self) {
              if (self.direction !== direction) {
                direction *= -1;
                gsap.to([roll1], {
                  timeScale: direction,
                  overwrite: true,
                });
              }
            },
          });
        return () => {
          ctx.revert();
          ctx.kill();
        };
      }
    });
  }, [transitionEnded]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl_line = gsap
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
    });

    return () => {
      ctx.revert();
      ctx.kill();
    };
  }, []);

  return (
    <div
      ref={line}
      className="w-full overflow-hidden"
      data-cursor="-projects"
      data-cursor-text={`<div class="flex flex-col items-center justify-center space-between">
          <span class="font-lexend text-sm leading-none pb-[8px]">View</span><span class="font-zilla text-lg leading-tight">${words}</span></div>`}
    >
      <span className="sr-only">{words}</span>

      <Link
        to={url}
        className="rollingtexts relative flex flex-1 items-center font-black font-lexend text-ecru font-black hover:cursor-none	 hover:after:content-[''] hover:after:bg-goldenyellow hover:after:w-full hover:after:h-full hover:after:absolute hover:after:z-0 py-[0rem] hover:text-watermelon will-change-[all] transition-all duration-300 uppercase"
      >
        <span
          className={`${el}1 relative block flex-1 leading-none whitespace-nowrap pointer-none m-0 p-0 ${size} will-change-[transform] select-none px-[2rem] sm:px-[3rem] md:px-[4rem] box-border z-10`}
        >
          {words}
        </span>
      </Link>
    </div>
  );
}
