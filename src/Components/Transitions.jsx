import { SwitchTransition, Transition } from "react-transition-group";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";
import useMousePosition from "../Hooks/useMousePosition";
import { useContext, useEffect, useRef } from "react";
import { removeClassByPrefix } from "../Helpers";
import { TransitionContext } from "../Context/TransitionState";

const Transitions = ({ children }) => {
  const location = useLocation();
  const mouse = useMousePosition();
  const nodeRef = useRef(null);
  const parentRef = useRef(null);
  const body = typeof window !== "undefined" ? document.body : null;
  const { handleTransitionStatus } = useContext(TransitionContext);

  useEffect(() => {
    handleTransitionStatus(true);
  }, []);

  const onEnter = () => {
    handleTransitionStatus(false);
    nodeRef.current.classList.add("page-fixed");
    if (body) {
      body.classList.add("overflow-hidden");
    }
    parentRef.current.classList.add("z-[1]");

    let t = (mouse.mouseY / window.innerHeight) * 100;
    let l = (mouse.mouseX / window.innerWidth) * 100;

    let tl = gsap.timeline();
    return tl
      .set(nodeRef.current, {
        webkitClipPath: "circle(0% at " + l + "% " + t + "%)",
        clipPath: "circle(0% at " + l + "% " + t + "%)",
        height: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        willChange: "clip-path",
        visibility: "visible",
        zIndex: "800",
        opacity: 1,
      })
      .to(nodeRef.current, {
        webkitClipPath: "circle(200% at " + l + "% " + t + "%)",
        clipPath: "circle(200% at " + l + "% " + t + "%)",
        ease: "Power4.inOut",
        duration: 1.5,
      });
  };

  const onEntered = () => {
    nodeRef.current.classList.remove("page-fixed");
    if (body) {
      body.classList.remove("overflow-hidden");
    }
    window.scrollTo(window.pageXOffset, 1);
    window.scrollTo(window.pageXOffset, 0);
    window.dispatchEvent(new Event("resize"));

    gsap.set(nodeRef.current, {
      clearProps: "all",
    });
    // removeClassByPrefix(body, "bg-");
    // if(body) {
    //  body.classList.add("bg-" + color);
    // }
    return handleTransitionStatus(true);
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
