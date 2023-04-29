import { SwitchTransition, Transition } from "react-transition-group";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";
import useMousePosition from "../Hooks/useMousePosition";
import { useRef } from "react";

export const Transit = () => (
  <div
    id="transit"
    className="block w-[300vw] h-[300vw] -translate-y-[150vw] -translate-x-[150vw] scale-0 bg-dark rounded-full fixed z-[99999] origin-center"
  />
);

const Transitions = ({ children, color }) => {
  const location = useLocation();
  const mouse = useMousePosition();
  const nodeRef = useRef(null);

  return (
    <SwitchTransition mode="in-out">
      <Transition
        key={location.pathname}
        nodeRef={nodeRef}
        timeout={10}
        // in={true}
        // mountOnEnter={true}
        // unmountOnExit={true}
        // appear
        // onEntering={() => }
        onEnter={(node) => {
          // document.body.classList.add("page-fixed");

          let t = (mouse.mouseY / window.innerHeight) * 100;
          let l = (mouse.mouseX / window.innerWidth) * 100;

          gsap.fromTo(
            nodeRef.current,
            { clipPath: `circle(0% at ${l}% ${t}%)` },
            {
              clipPath: `circle(150% at ${l}% ${t}%)`,
              duration: 2,
              ease: "power4.out",
              onComplete: () => {
                // console.log({ n: nodeRef.current });
                // node.classList.remove("page-fixed");
              },
            }
          );
        }}
        // onEntered={() => {
        //   document.body.classList.remove("page-fixed");
        // }}
        onExit={(node) => {
          // gsap
          //   .timeline({ pause: true })
          //   .to(transit, {
          //     scale: 1,
          //     duration: 0.5,
          //     x: mouse.mouseX + "px",
          //     y: mouse.mouseY + "px",
          //     ease: "power4.inOut",
          //   })
          //   .to(transit, { opacity: 0, duration: 0.25 })
          //   .to(transit, { scale: 0, duration: 0 })
          //   .play();
          // gsap.set(node, {
          //   zIndex: 1,
          // });
          // gsap.timeline({ paused: true }).to(node, {});
          // gsap
          //   .timeline({ paused: true })
          //   .to(nodeRef.current, { scale: 0.8, duration: 0.2 })
          //   .to(nodeRef.current, { xPercent: 100, autoAlpha: 0, duration: 0.2 })
          //   .play();
        }}
      >
        <div ref={nodeRef}>{children}</div>
      </Transition>
    </SwitchTransition>
  );
};

export default Transitions;
