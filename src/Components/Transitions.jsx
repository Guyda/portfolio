import { SwitchTransition, Transition } from "react-transition-group";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";
import useMousePosition from "../Hooks/useMousePosition";
import { useRef } from "react";
import { removeClassByPrefix } from "../Helpers";

const Transitions = ({ children, color }) => {
  const location = useLocation();
  const mouse = useMousePosition();
  const nodeRef = useRef(null);
  const parentRef = useRef(null);
  const body = document.body;

  const onEnter = () => {
    nodeRef.current.classList.add("page-fixed");
    body.classList.add("overflow-hidden");

    let t = (mouse.mouseY / window.innerHeight) * 100;
    let l = (mouse.mouseX / window.innerWidth) * 100;

    let tl = gsap.timeline();
    tl.set(nodeRef.current, {
      webkitClipPath: "circle(0% at " + l + "% " + t + "%)",
      clipPath: "circle(0% at " + l + "% " + t + "%)",
      height: "100%",
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      willChange: "clip-path",
      visibility: "visible",
      zIndex: "99999",
      opacity: 1,
    }).to(nodeRef.current, {
      webkitClipPath: "circle(200% at " + l + "% " + t + "%)",
      clipPath: "circle(200% at " + l + "% " + t + "%)",
      ease: "Power4.inOut",
      duration: 1.5,
    });
  };

  const onEntered = () => {
    nodeRef.current.classList.remove("page-fixed");

    body.classList.remove("overflow-hidden");
    // window.scrollTo(0, 0);
    window.scrollTo(window.pageXOffset, 1);
    window.scrollTo(window.pageXOffset, 0);
    window.dispatchEvent(new Event("resize"));

    gsap.set(nodeRef.current, {
      clearProps: "all",
    });
    removeClassByPrefix(body, "bg-");
    body.classList.add("bg-" + color);
  };

  return (
    <div ref={parentRef}>
      <SwitchTransition mode="in-out">
        <Transition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          onEnter={onEnter}
          onEntered={onEntered}
          exit={false}
        >
          <div ref={nodeRef}>{children}</div>
        </Transition>
      </SwitchTransition>
    </div>
  );
};

export default Transitions;
