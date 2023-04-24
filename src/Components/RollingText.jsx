import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { roll } from "../Helpers";
import useOnScreen from "../Hooks/useOnScreen";
// Strongly/Heavily inspired by: https://codepen.io/GreenSock/pen/rNjvgjo?editors=1010

export default function RollingText({
  el,
  words,
  duration = 60,
  reverse = false,
  tilt = null,
  size = "text-18xl",
}) {
  gsap.registerPlugin(ScrollTrigger);

  if (!el || !words) return null;

  useLayoutEffect(() => {
    let direction = 1; // 1 = forward, -1 = backward scroll

    const roll1 = roll("#" + el, { duration: 10 }, reverse),
      scroll = ScrollTrigger.create({
        trigger: document.querySelector("[data-scroll-container]"),
        onUpdate(self) {
          if (self.direction !== direction) {
            direction *= -1;
            gsap.to([roll1], { timeScale: direction, overwrite: true });
          }
        },
      });
  }, []);

  return (
    <>
      <span className="sr-only">{words}</span>
      <div
        aria-hidden
        className={`whitespace-nowrap font-lexend block relative box-border select-none text-[0] py-[1rem] ${
          tilt ? "rotate-[-5deg]" : ""
        }`}
      >
        <div
          id={el}
          className={`projecttexts inline-block p-0 m-0 text-ecru font-black pl-[10px] pr-[10px] leading-none ${size}`}
        >
          {words}
        </div>
      </div>
    </>
  );
}
