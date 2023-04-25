import gsap from "gsap";
import { useEffect } from "react";

export default function useCustomCursor() {
  useEffect(() => {
    // const cursor = document.getElementById("cursor");
    gsap.set("#cursor", { xPercent: -50, yPercent: -50 });

    window.addEventListener("mousemove", (e) => {
      gsap.to("#cursor", {
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out",
        duration: 0.5,
      });
    });

    return window.removeEventListener("mousemove", () => {});
  }, []);
}
