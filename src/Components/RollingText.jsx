import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { roll } from "../Helpers";
// Strongly/Heavily inspired by: https://codepen.io/GreenSock/pen/rNjvgjo?editors=1010

export default function RollingText({ text = [] }) {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const rolls = text.map((k) =>
      roll("." + k.el, { duration: k.duration }, k.reverse)
    );

    let direction = 1;

    const scroll = ScrollTrigger.create({
      onUpdate(self) {
        if (self.direction !== direction) {
          direction *= -1;
          const reroll = gsap.to(rolls, {
            timeScale: direction,
            overwrite: true,
          });
          return () => reroll.revert();
        }
      },
    });
  }, []);

  return (
    <>
      <span className="sr-only">{text.map((w) => w.aria).join(" ")}</span>
      {text.map((w, i) => (
        <div
          key={w.el}
          aria-hidden
          className={`whitespace-nowrap font-titan block relative box-border select-none text-[0] ${
            w.tilt ? "rotate-[-5deg]" : ""
          }`}
        >
          <div
            className={`${w.el} texts inline-block p-0 m-0 text-cream uppercase pl-[10px] pr-[10px] leading-none ${w.size}`}
          >
            {w.words}
          </div>
        </div>
      ))}
    </>
  );
}
