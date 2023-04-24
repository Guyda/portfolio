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
    : "";

  return (
    <header
      aria-label="Site Header"
      className="bg-transparent fixed top-0 z-50 w-screen pt-5 pb-5"
    >
      <div className="mx-auto flex h-16 max-w-screen items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-center justify-between">
          <a
            className={`site-name block transform transition-all duration-500 ${siteName}`}
            href="/"
          >
            <span className="sr-only">Home</span>
            <span className="text-ecru font-zilla text-[22px]">Guyda Bru</span>
          </a>
          <nav aria-label="Site Nav">
            <MagneticButton
              scale={2}
              tollerance={0.8}
              speed={0.3}
              borderRadius="50%"
              className="magnetic-button"
            >
              <button
                className={`hamburger ${btnBg} w-20 h-20 flex flex-col justify-center items-center rounded-full transform transition-all ring-0 ring-gray-300 hover:ring-8 hover:bg-dark group-focus:ring-4 ring-opacity-30 duration-300 delay-150 group ${
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
