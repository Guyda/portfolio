import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { roll } from "../Helpers";
import { Link } from "react-router-dom";
// Strongly/Heavily inspired by: https://codepen.io/GreenSock/pen/rNjvgjo?editors=1010

export default function RollingText({
  el,
  words,
  duration = 60,
  reverse = false,
  size = "text-projects",
  trigger = "[data-scroll-container]",
  url = "/projects",
}) {
  gsap.registerPlugin(ScrollTrigger);

  if (!el || !words) return null;

  useEffect(() => {
    let direction = 1; // 1 = forward, -1 = backward scroll

    let _el = "." + el + "1";
    let element = document.querySelector(_el);

    const roll1 = roll(_el, { duration }, reverse),
      tl = ScrollTrigger.create({
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
    <div
      className="w-full overflow-hidden"
      data-cursor="-projects"
      data-cursor-text={`<div class="flex flex-col items-center justify-center space-between">
          <span class="font-lexend text-sm leading-none pb-[8px]">View</span><span class="font-zilla text-lg leading-tight">${words}</span></div>`}
    >
      <span className="sr-only">{words}</span>

      <Link
        to={url}
        className={`rollingtexts relative flex items-center font-lexend text-ecru font-black hover:cursor-none	 hover:after:content-[''] hover:after:bg-goldenyellow hover:after:w-full hover:after:h-full hover:after:absolute hover:after:z-0 py-[2rem] hover:text-watermelon will-change-[all] transition-all duration-300`}
      >
        <span
          className={`${el}1 relative block leading-none whitespace-nowrap pointer-none m-0 p-0 ${size} will-change-[transform] select-none px-[2rem] sm:px-[3rem] md:px-[4rem] box-border z-10`}
        >
          {words}
        </span>
      </Link>
    </div>
  );
}
