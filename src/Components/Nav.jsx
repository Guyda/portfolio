import useScrollPosition from "../Hooks/useScrollPosition";
import Hamburger from "./Hamburger";
import { useEffect, useRef, useState } from "react";
import MagneticButton from "./MagneticButton";
import { NavLink } from "react-router-dom";
import useWindowSize from "../Hooks/useWindowSize";
import Footer from "./Footer";
import { gsap } from "gsap";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNav = useRef(null);
  const hamFooter = useRef(null);

  const scrollPosition = useScrollPosition();
  const windowWidth = useWindowSize();
  const { width } = windowWidth;

  const bgTrigger = scrollPosition > 50 || isOpen;
  const smScreen = width < 768;
  const btnBg = bgTrigger ? "bg-dark bg-opacity-50" : "bg-transparent";
  const siteName = bgTrigger
    ? "translate-y-[-100px] ease-in-out opacity-0"
    : "";
  const links = [
    { name: "Intro", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  const settings = {
    scale: 2,
    tollerance: 0.8,
    speed: 0.3,
    borderRadius: "50%",
  };

  useEffect(() => {
    const body = typeof window !== "undefined" ? document.body : null;
    if (body) {
      if (isOpen) {
        body.classList.add("overflow-hidden");
      } else {
        body.classList.remove("overflow-hidden");
      }
    }

    gsap.to(mobileNav.current, {
      autoAlpha: isOpen ? 1 : 0,
      scale: isOpen ? 1 : 0.98,
      filter: isOpen ? "blur(0px)" : "blur(10px)",
      duration: 0.33,
      ease: "Power4.inOut",
    });

    //animate links
    const hamLinks = document.getElementsByClassName("hamLinks");
    gsap.to([hamLinks], {
      autoAlpha: isOpen ? 1 : 0,
      yPercent: isOpen ? 0 : -50,
      filter: isOpen ? "blur(0px)" : "blur(10px)",
      delay: 0.5,
      stagger: 0.25,
      ease: "Power1.Out",
    });
    gsap.to(hamFooter.current, {
      autoAlpha: isOpen ? 1 : 0,
      filter: isOpen ? "blur(0px)" : "blur(10px)",
      delay: 1.25,
      ease: "Power1.Out",
    });
  }, [isOpen]);

  const handleMenu = (status) => {
    return setIsOpen(!status);
  };

  return (
    <header
      aria-label="Site Header"
      className="bg-transparent fixed top-0 z-[9999] w-screen pt-5 pb-5"
    >
      <div className="mx-auto flex h-12 max-w-5xl items-center gap-8 px-4 sm:px-6 z-[999]">
        <div className="flex flex-1 items-center justify-center justify-between ">
          <MagneticButton
            {...settings}
            className="site-name magnetic-button p-0 bg-tranparent touch-none w-[100px] h-[60px] mr-[0] flex items-center justify-center"
          >
            <NavLink
              data-cursor="-lg"
              className={`will-change-[transform, opacity] block transform transition-all duration-500 ${siteName}`}
              to="/"
            >
              <span className="sr-only">Home</span>

              <span className="text-ecru font-zilla text-sitename">
                Guyda Bru
              </span>
            </NavLink>
          </MagneticButton>

          <nav aria-label="Site Nav Desktop" className="flex-1 justify-end ">
            <ul
              data-cursor="-lg"
              className={`hidden md:flex justify-end gap-2 font-lexend font-bold text-[.88rem] px-[1rem] will-change-[transform, opacity] transform transition-all duration-500 ${siteName}`}
            >
              {links.map((l) => (
                <li key={l.name}>
                  <MagneticButton
                    {...settings}
                    className="magnetic-button p-0 bg-tranparent touch-none w-[80px] h-[30px] mr-[0] flex items-center justify-center"
                  >
                    <NavLink
                      to={l.url}
                      className={`
                        relative
                        text-ecru
                        pb-[6px]
                        after:transition-all
                        after:duration-500
                        after:w-0 
                        after:-translate-x-1/2
                        after:h-[3px]
                        after:border-t-[3px]
                        after:content-['']
                        after:absolute
                        after:bottom-[-1px]
                        after:left-1/2
                        after:border-ecru
                        after:rounded-full 
                        aria-[current=page]:text-ecru 
                        aria-[current=page]:after:w-1/2
                        aria-[current=page]:after:h-[3px]
                        aria-[current=page]:after:border-t-[3px]
                        aria-[current=page]:after:-translate-x-1/2
                      `}
                    >
                      {l.name}
                    </NavLink>
                  </MagneticButton>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Hamburger Menu" className="">
            <div
              className={`navburger absolute top-[16px] right-0 transition duration-200 z-[99999] ${
                isOpen || bgTrigger || smScreen
                  ? "transition-opacity pointer-events-auto"
                  : "opacity-0 pointer-events-none "
              }`}
            >
              <MagneticButton
                {...settings}
                className="magnetic-button p-0 bg-tranparent touch-none rounded-full w-[100px] h-[100px] md:w-[200px] md:h-[200px] mr-[15px] md:mr-[-30px] lg:mr-[0] md:mt-[-50px] flex items-center justify-center z-99999"
              >
                <button
                  className={`hamburger ${btnBg} w-[80px] h-[80px] flex flex-col justify-center items-center rounded-full transform transition-all ring-0 ring-dark hover:ring-8 hover:bg-dark group-focus:ring-4 ring-opacity-30 duration-300 delay-150 group ${
                    isOpen ? "is-active" : ""
                  }`}
                  onClick={() => handleMenu(isOpen)}
                >
                  <Hamburger />
                </button>
              </MagneticButton>
            </div>
          </nav>
        </div>
      </div>

      <div
        ref={mobileNav}
        className="mobileNav scale-[0.88] w-full h-full fixed top-0 left-0 opacity-0 display-none bg-ecru flex flex-col items-center justify-center border-[1rem] border-watermelon z-[666] overscroll-contain"
      >
        <nav
          aria-label="Site Nav Desktop"
          className="relative w-full h-full flex flex-col justify-between"
        >
          <ul
            data-cursor="-lg"
            className="flex-1 flex flex-col justify-center align-center"
          >
            {links.map((l) => (
              <li key={l.name} className="w-[240px] mx-auto">
                <MagneticButton
                  {...settings}
                  className="magnetic-button inline-block p-0 bg-tranparent touch-none px-0 py-[1rem] flex items-center justify-center"
                >
                  <NavLink
                    to={l.url}
                    onClick={() => handleMenu(isOpen)}
                    className={`
                      hamLinks
                      block
                      -translate-y-1/2
                      text-watermelon
                      font-lexend
                      font-bold
                      text-[40px]

                      relative
                      pb-[6px]
                      after:transition-all
                      after:duration-500
                      after:w-0 
                      after:-translate-x-1/2
                      after:h-[6px]
                      after:border-t-[6px]
                      after:content-['']
                      after:absolute
                      after:bottom-0
                      after:left-1/2
                      after:border-watermelon
                      after:rounded-full 
                      aria-[current=page]:after:w-1/2
                      aria-[current=page]:after:h-[6px]
                      aria-[current=page]:after:border-t-[6px]
                      aria-[current=page]:after:-translate-x-1/2
                    `}
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
    </header>
  );
}
