import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLenis } from "@studio-freight/react-lenis";

const useTrigger = ({
  trigger,
  start,
  toggleClass,
  once = true,
  markers = false,
}) => {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = useLenis(({ scroll }) =>
    ScrollTrigger.create({ trigger, start, toggleClass, once, markers })
  );
};

export default useTrigger;
