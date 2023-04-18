import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

// helper function that clones the targets, places them next to the original,
// then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
function roll(targets, vars, reverse) {
  vars = vars || {};
  vars.ease || (vars.ease = "none");
  const tl = gsap.timeline({
      repeat: -1,
      onReverseComplete() {
        this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
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
    let time = tl.totalTime(); // record the current time
    tl.totalTime(0); // rewind and clear out the timeline
    positionClones(); // reposition
    tl.totalTime(time); // jump back to the proper time
  });
  return tl;
}

export default function RollingText({ el, text, size, reverse = false }) {
  if (!text) return <></>;

  gsap.registerPlugin(ScrollTrigger);

  let direction = 1; // 1 = forward, -1 = backward scroll

  useEffect(() => {
    const roll1 = roll("." + el, { duration: 60 }, reverse),
      scroll = ScrollTrigger.create({
        trigger: document.querySelector("[data-scroll-container]"),
        onUpdate(self) {
          if (self.direction !== direction) {
            direction *= -1;
            gsap.to([roll1], { timeScale: direction, overwrite: true });
          }
        },
      });
  }, [gsap, ScrollTrigger]);

  return (
    <>
      <div
        className={`whitespace-nowrap w-[200vw] font-titan block relative box-border select-none mb-[-4vw]`}
      >
        <div
          className={`${el} inline-block p-0 m-0 text-cream uppercase leading-none pl-[20px] pr-[20px] text-[${size}]`}
        >
          {text}
        </div>
      </div>
    </>
  );
}
