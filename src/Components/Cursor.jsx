import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { useEffect } from "react";

export default function Cursor() {
  MouseFollower.registerGSAP(gsap);

  useEffect(() => {
    const cursor = new MouseFollower({
      el: null,
      container: document.body,
      className: "mf-cursor",
      innerClassName: "mf-cursor-inner",
      textClassName: "mf-cursor-text",
      mediaClassName: "mf-cursor-media",
      mediaBoxClassName: "mf-cursor-media-box",
      iconSvgClassName: "mf-svgsprite",
      iconSvgNamePrefix: "-",
      iconSvgSrc: "",
      dataAttr: "cursor",
      hiddenState: "-hidden",
      textState: "-text",
      iconState: "-icon",
      activeState: "-active",
      mediaState: "-media",
      stateDetection: {
        "-pointer": "a,button",
        "-hidden": "iframe",
      },
      visible: true,
      visibleOnState: false,
      speed: 0.55,
      ease: "expo.out",
      overwrite: true,
      skewing: 0,
      skewingText: 2,
      skewingIcon: 2,
      skewingMedia: 2,
      skewingDelta: 0.001,
      skewingDeltaMax: 0.15,
      stickDelta: 0.15,
      showTimeout: 20,
      hideOnLeave: true,
      hideTimeout: 300,
      hideMediaTimeout: 300,
    });

    // const el = document.querySelector(".rollingtexts");

    // el.addEventListener("mouseenter", () => {
    //   cursor.addState("-difference"); // you can pass multiple states separated by whitespace
    // });

    // el.addEventListener("mouseleave", () => {
    //   cursor.removeState("-difference");
    // });

    // return el.removeEventListener("mouseenter mouseleave", () => {});
  }, []);

  return <></>;
}
// export default function Cursor() {
//   return (
//     <>
//       <div
//         id="cursor"
//         className="pointer-events-none left-0 z-[999] fixed top-0 left-0"
//       >
//         {/* <div class="fixed top-0 -translate-x-1/2 -translate-y-1/2 mix-blend-difference stroke-dark fill-transparent ">
//           <svg height="60" width="60">
//             <circle id="big" cx="30" cy="30" r="18" stroke-width="0.8"></circle>
//           </svg>
//         </div> */}

//         <div class="fixed top-0 -translate-x-1/2 -translate-y-1/2 mix-blend-difference">
//           <svg height="10" width="10">
//             <circle cx="4" cy="4" r="3" stroke-width="0"></circle>
//           </svg>
//         </div>
//       </div>
//     </>
//   );
// }
