import useScrollPosition from "../Hooks/useScrollPosition";
import Hamburger from "./Hamburger";
import { useEffect, useRef, useState } from "react";
import MagneticButton from "./MagneticButton";
import { NavLink, useNavigate } from "react-router-dom";
import useWindowSize from "../Hooks/useWindowSize";
import MobileNav from "./MobileNav";
import { links } from "../Helpers";
import { gsap } from "gsap";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const history = useNavigate();

  const scrollPosition = useScrollPosition();
  const windowWidth = useWindowSize();
  const { width } = windowWidth;

  const mobileNav = useRef(null);

  const bgTrigger = scrollPosition > 50 || isOpen;
  const smScreen = width < 768;
  const btnBg = bgTrigger ? "bg-dark bg-opacity-50" : "bg-transparent";
  const siteName = bgTrigger
    ? "translate-y-[-100px] ease-in-out opacity-0"
    : "";

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
  }, [isOpen]);

  const handleMenu = () => {
    isOpen ? closeMobileNav() : setIsOpen(true);
  };

  const closeMobileNav = (url = null) => {
    if (url) {
      history(url, { replace: true });
    }

    gsap.to(mobileNav.current, {
      autoAlpha: 0,
      duration: 0.33,
      onComplete: () => {
        setIsOpen(false);
      },
    });
  };

  return (
    <header
      aria-label="Site Header"
      className="bg-transparent fixed top-0 z-[9999] w-screen pt-5 pb-5"
    >
      <div className="mx-auto flex h-12 max-w-5xl items-center gap-8 px-2 sm:px-0 z-[999]">
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
              <span className="text-ecru font-zilla font-bold text-sitename relative">
                Guyda Bru
                <span className="absolute font-lexend top-[-24px] p-[6px] rounded-[6px] flex items-center justify-center bg-dark text-ecru left-0 w-80px h-[20px] font-normal text-[10px] opacity-80">
                  BETA SITE
                </span>
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
                      className="relative text-ecru pb-[6px] after:transition-all after:duration-500 after:w-0  after:-translate-x-1/2 after:h-[3px] after:border-t-[3px] after:content-[''] after:absolute after:bottom-[-1px] after:left-1/2 after:border-ecru after:rounded-full  aria-[current=page]:text-ecru  aria-[current=page]:after:w-1/2 aria-[current=page]:after:h-[3px] aria-[current=page]:after:border-t-[3px] aria-[current=page]:after:-translate-x-1/2
                      "
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

      {isOpen && (
        <div ref={mobileNav}>
          <MobileNav handleMobileLinks={(url) => closeMobileNav(url)} />
        </div>
      )}
    </header>
  );
}
