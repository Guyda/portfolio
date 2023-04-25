import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { useEffect } from "react";

const useCustomCursor = () => {
  MouseFollower.registerGSAP(gsap);

  useEffect(() => {
    if (window.matchMedia("(pointer:fine)").matches) {
      const cursor = new MouseFollower({
        speed: 0.55,
        visible: false,
        visibleOnState: true,
      });
    }
  }, []);

  return null;
};

export default useCustomCursor;
