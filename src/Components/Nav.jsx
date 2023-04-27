import useScrollPosition from "../Hooks/useScrollPosition";
import Hamburger from "./Hamburger";
import { useState } from "react";
import MagneticButton from "./MagneticButton";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollPosition = useScrollPosition();

  const bgTrigger = scrollPosition > 50;
  const btnBg = bgTrigger ? "bg-dark bg-opacity-80" : "bg-transparent";
  const siteName = bgTrigger
    ? "translate-y-[-100px] ease-in-out opacity-0"
    : // "ease-in-out mix-blend-exclusion opacity-70 bg-dark px-2 py-1 rounded-lg hover:opacity-100"
      "";
  const links = [
    { name: "Projects", url: "/" },
    { name: "About", url: "/" },
    { name: "Contact", url: "/" },
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
      className="bg-transparent fixed top-0 z-[400] w-screen pt-5 pb-5"
    >
      <div className="mx-auto flex h-12 max-w-5xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-center justify-between">
          <MagneticButton
            {...settings}
            className="site-name magnetic-button p-0 bg-tranparent touch-none w-[100px] h-[60px] mr-[0] flex items-center justify-center"
          >
            <a
              data-cursor="-lg"
              className={`will-change-[transform, opacity] block transform transition-all duration-500 ${siteName}`}
              href="/"
            >
              <span className="sr-only">Home</span>

              <span className="text-ecru font-zilla text-sitename">
                Guyda Bru
              </span>
            </a>
          </MagneticButton>

          <nav aria-label="Site Nav">
            <ul
              data-cursor="-lg"
              className={`hidden md:flex items-center gap-2 font-lexend font-bold text-[.88rem] px-[1rem] will-change-[transform, opacity] transform transition-all duration-500 ${siteName}`}
            >
              {links.map((l) => (
                <li key={l.name}>
                  <MagneticButton
                    {...settings}
                    className="magnetic-button p-0 bg-tranparent touch-none w-[90px] h-[30px] mr-[0] flex items-center justify-center"
                  >
                    <a href={l.url} className="text-ecru">
                      {l.name}
                    </a>
                  </MagneticButton>
                </li>
              ))}
            </ul>
            <MagneticButton
              {...settings}
              className="md:hidden magnetic-button p-0 bg-tranparent touch-none rounded-full w-[100px] h-[100px] md:w-[200px] md:h-[200px] mr-[0] md:mr-[-50px] flex items-center justify-center"
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
          </nav>
        </div>
      </div>
    </header>
  );
}
