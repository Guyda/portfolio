import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { roll } from "../Helpers";
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
    let direction = 1;

    const roll1 = roll("#" + el, { duration: duration }, reverse);
    const scroll = ScrollTrigger.create({
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
        className={`whitespace-nowrap font-lexend block relative box-border select-none text-[0] ${
          tilt ? "rotate-[-5deg]" : ""
        }`}
      >
        <div
          id={el}
          className={`texts inline-block p-0 m-0 text-ecru font-bold pl-[10px] pr-[10px] leading-none ${size}`}
        >
          {words}
        </div>
      </div>
    </>
  );
}
