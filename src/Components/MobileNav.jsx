import { useEffect, useRef } from "react";
import MagneticButton from "./MagneticButton";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { gsap } from "gsap";
import { links } from "../Helpers";

export default function MobileNav({ handleMobileLinks }) {
  const mobileNav = useRef(null);
  const hamFooter = useRef(null);

  const settings = {
    scale: 2,
    tollerance: 0.8,
    speed: 0.3,
    borderRadius: "50%",
  };

  const tl = gsap.timeline();

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.fromTo(
        mobileNav.current,
        {
          autoAlpha: 0,
          scale: 0.98,
          filter: "blur(10px)",
        },
        {
          autoAlpha: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.33,
          ease: "Power4.inOut",
        }
      );

      //animate links
      const hamLinks = document.getElementsByClassName("hamLinks");
      tl.fromTo(
        [hamLinks],
        {
          autoAlpha: 0,
          yPercent: -10,
          filter: "blur(10px)",
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          filter: "blur(0px)",
          delay: 0.35,
          stagger: 0.2,
          duration: 0.5,
          ease: "Power1.Out",
        }
      );
      tl.fromTo(
        hamFooter.current,
        {
          autoAlpha: 0,
          filter: "blur(10px)",
        },
        {
          autoAlpha: 1,
          filter: "blur(0px)",
          ease: "Power1.Out",
          duration: 0.5,
        }
      );
    });

    return () => {
      ctx.revert();
      ctx.kill();
    };
  }, []);

  const clickedLink = (e, url) => {
    e.preventDefault();
    handleMobileLinks(url);
  };

  return (
    <div
      ref={mobileNav}
      className="mobileNav scale-[0.88] w-full h-full fixed top-0 left-0 opacity-0 display-none bg-ecru flex flex-col items-center justify-center border-[1rem] border-watermelon z-[666] overscroll-contain"
    >
      <nav
        aria-label="Site Nav Desktop"
        className="relative w-full h-full flex flex-col justify-between"
      >
        <ul className="flex-1 flex flex-col justify-center align-center">
          {links.map((l) => (
            <li key={l.name} className="w-[240px] mx-auto">
              <MagneticButton
                {...settings}
                className="magnetic-button inline-block p-0 bg-tranparent touch-none px-0 py-[1rem] flex items-center justify-center"
              >
                <NavLink
                  to={l.url}
                  onClick={(e) => clickedLink(e, l.url)}
                  className="hamLinks block -translate-y-1/2 text-watermelon font-lexend font-bold text-[40px]
 relative pb-[6px] after:transition-all after:duration-500 after:w-0  after:-translate-x-1/2 after:h-[6px] after:border-t-[6px] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:border-watermelon after:rounded-full  aria-[current=page]:after:w-1/2 aria-[current=page]:after:h-[6px] aria-[current=page]:after:border-t-[6px] aria-[current=page]:after:-translate-x-1/2"
                >
                  {l.name}
                </NavLink>
              </MagneticButton>
            </li>
          ))}
        </ul>
        <div ref={hamFooter}>
          <Footer motion={false} />
        </div>
      </nav>
    </div>
  );
}
