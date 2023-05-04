import useScrollPosition from "../Hooks/useScrollPosition";
import Hamburger from "./Hamburger";
import { useState } from "react";
import MagneticButton from "./MagneticButton";
import { NavLink } from "react-router-dom";
import useWindowSize from "../Hooks/useWindowSize";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollPosition = useScrollPosition();
  const windowWidth = useWindowSize();
  const { width } = windowWidth;

  const bgTrigger = scrollPosition > 50;
  const smScreen = width < 768;
  const btnBg = bgTrigger ? "bg-dark bg-opacity-80" : "bg-transparent";
  const siteName = bgTrigger
    ? "translate-y-[-100px] ease-in-out opacity-0"
    : "";
  const links = [
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
  return (
    <header
      aria-label="Site Header"
      className="bg-transparent fixed top-0 z-[999] w-screen pt-5 pb-5"
    >
      <div className="mx-auto flex h-12 max-w-5xl items-center gap-8 px-4 sm:px-6 ">
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
                    className="magnetic-button p-0 bg-tranparent touch-none w-[90px] h-[30px] mr-[0] flex items-center justify-center"
                  >
                    <NavLink
                      to={l.url}
                      className="text-ecru pb-[6px] border-b-[3px] transition-all will-change-[border] duration-500 border-transparent aria-[current=page]:border-ecru aria-[current=page]:text-ecru"
                    >
                      {l.name}
                    </NavLink>
                  </MagneticButton>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Site Nav Mobile">
            <div
              className={`navburger absolute top-0 right-0 transition duration-200 delay-150 ${
                bgTrigger || smScreen ? "transition-opacity" : "opacity-0"
              }`}
            >
              <MagneticButton
                {...settings}
                className="magnetic-button p-0 bg-tranparent touch-none rounded-full w-[100px] h-[100px] md:w-[200px] md:h-[200px] mr-[15px] md:mr-[-30px] lg:mr-[0] md:mt-[-50px] flex items-center justify-center z-99999"
              >
                <button
                  className={`hamburger ${btnBg} w-[80px] h-[80px] flex flex-col justify-center items-center rounded-full transform transition-all ring-0 ring-gray-300 hover:ring-8 hover:bg-dark group-focus:ring-4 ring-opacity-30 duration-300 delay-150 group ${
                    isOpen ? "is-active" : ""
                  }`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Hamburger />
                </button>
              </MagneticButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
