import { gsap } from "gsap";

export function roll(targets, vars, reverse) {
  vars = vars || {};
  vars.ease || (vars.ease = "none");

  const tl = gsap.timeline({
      repeat: -1,
      // repeatDelay: 3,
      onReverseComplete() {
        this.totalTime(this.rawTime() + this.duration() * 20); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
      },
    }),
    elements = gsap.utils.toArray(targets),
    clones = elements.map((el) => {
      let clone = el.cloneNode(true);
      el.parentNode.appendChild(clone);
      return clone;
    }),
    positionClones = () => {
      elements.forEach((el, i) => {
        const style = el.currentStyle || window.getComputedStyle(el),
          width = el.offsetWidth, // or use style.width
          margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight),
          padding =
            parseFloat(style.paddingLeft) + parseFloat(style.paddingRight),
          border =
            parseFloat(style.borderLeftWidth) +
            parseFloat(style.borderRightWidth),
          total = width + margin + padding + border;
        return gsap.set(clones[i], {
          position: "absolute",
          overwrite: false,
          top: el.offsetTop,
          left: el.offsetLeft + (reverse ? -total : total),
        });
      });
    };
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

export const removeClassByPrefix = (el, prefix) => {
  var regx = new RegExp("\\b" + prefix + ".*?\\b", "g");
  el.className = el.className.replace(regx, "");
  return el;
};
