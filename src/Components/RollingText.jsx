import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { roll } from "../Helpers";
// Strongly/Heavily inspired by: https://codepen.io/GreenSock/pen/rNjvgjo?editors=1010

export default function RollingText({
  el,
  words,
  duration = 60,
  reverse = false,
  size = "text-projects",
  trigger = "[data-scroll-container]",
}) {
  gsap.registerPlugin(ScrollTrigger);

  if (!el || !words) return null;

  useEffect(() => {
    let direction = 1; // 1 = forward, -1 = backward scroll

    const roll1 = roll("." + el + "1", { duration }, reverse),
      scroll = ScrollTrigger.create({
        trigger: document.querySelector(trigger),
        onUpdate(self) {
          if (self.direction !== direction) {
            direction *= -1;
            gsap.to([roll1], { timeScale: direction, overwrite: true });
          }
        },
      });
  }, []);

  return (
    <div className={`w-full overflow-hidden`}>
      <span className="sr-only">{words}</span>

      <div
        aria-hidden
        className={` relative flex items-center font-lexend text-ecru font-black hover:cursor-pointer hover:after:content-[''] hover:after:bg-goldenyellow hover:after:w-full hover:after:h-full hover:after:absolute hover:after:z-0 py-[2rem] hover:text-watermelon will-change-[all] transition-all duration-300`}
      >
        <span
          className={`${el}1 relative block leading-none whitespace-nowrap pointer-none m-0 p-0 ${size} will-change-[transform] select-none px-[4rem] box-border z-10`}
        >
          {words}&nbsp;
        </span>
      </div>
    </div>
  );
}
