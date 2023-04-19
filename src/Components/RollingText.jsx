import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
// Heavily inspired by: https://codepen.io/GreenSock/pen/rNjvgjo?editors=1010

export default function RollingText({ text = [] }) {
  useLayoutEffect(() => {
    const rolls = text.map((k) =>
      roll("." + k.el, { duration: k.duration }, k.reverse)
    );

    let direction = 1;

    const scroll = ScrollTrigger.create({
      onUpdate(self) {
        if (self.direction !== direction) {
          direction *= -1;
          gsap.to(rolls, { timeScale: direction, overwrite: true });
        }
      },
    });
  }, []);

  const roll = (targets, vars, reverse) => {
    vars = vars || {};
    vars.ease || (vars.ease = "none");
    const tl = gsap.timeline({
        repeat: -1,
        onReverseComplete() {
          this.totalTime(this.rawTime() + this.duration() * 5);
        },
      }),
      elements = gsap.utils.toArray(targets),
      clones = elements.map((el) => {
        let clone = el.cloneNode(true);
        el.parentNode.appendChild(clone);
        return clone;
      }),
      positionClones = () =>
        elements.forEach((el, i) =>
          gsap.set(clones[i], {
            position: "absolute",
            overwrite: false,
            top: el.offsetTop,
            left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth),
          })
        );
    positionClones();
    elements.forEach((el, i) =>
      tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0)
    );
    window.addEventListener("resize", () => {
      let time = tl.totalTime();
      tl.totalTime(0);
      positionClones();
      tl.totalTime(time);
    });
    return tl;
  };

  return (
    <>
      <span className="sr-only">{text.map((w) => w.aria).join(" ")}</span>
      {text.map((w, i) => (
        <div
          key={w.el}
          aria-hidden
          className={`whitespace-nowrap font-titan block relative box-border select-none text-[0]`}
        >
          <div
            className={`${w.el} inline-block p-0 m-0 text-cream uppercase pl-[10px] pr-[10px] leading-none ${w.size}`}
          >
            {w.words}
          </div>
        </div>
      ))}
    </>
  );
}
