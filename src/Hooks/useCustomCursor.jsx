import { gsap } from "gsap";
import MouseFollower from "mouse-follower";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useCustomCursor = () => {
  MouseFollower.registerGSAP(gsap);
  const location = useLocation();

  useEffect(() => {
    const cursor = new MouseFollower({
      speed: 0.66,
      skewing: 1,
      skewingText: 1,
      skewingIcon: 1,
      skewingMedia: 1,
    });
    if (window.matchMedia("(pointer:fine)").matches) {
      cursor.show();
    }
    return () => cursor.destroy();
  }, [location]);

  return null;
};

export default useCustomCursor;
