import { gsap } from "gsap";
import MouseFollower from "mouse-follower";
import { useEffect } from "react";

const useCustomCursor = () => {
  MouseFollower.registerGSAP(gsap);

  useEffect(() => {
    if (window.matchMedia("(pointer:fine)").matches) {
      const cursor = new MouseFollower({
        speed: 0.66,
        skewing: 1,
        skewingText: 1,
        skewingIcon: 1,
        skewingMedia: 1,
        // visible: false,
        // visibleOnState: true,
        // stateDetection: {
        //   "-hidden": "a, button",
        // },
      });
    }
  }, []);

  return null;
};

export default useCustomCursor;
