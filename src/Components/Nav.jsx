import useScrollPosition from "../Hooks/useScrollPosition";

import { useState } from "react";

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
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-center justify-between">
          <a
            className={`site-name block transform transition-all duration-500 ${siteName}`}
            href="/"
          >
            <span className="sr-only">Home</span>
            <span className="text-[2rem] text-cream font-caveat">
              Guyda Bru
            </span>
          </a>
          <nav aria-label="Site Nav">
            <button
              className={`hamburger ${btnBg} w-20 h-20 flex flex-col justify-center items-center rounded-full transform transition-all ring-0 ring-gray-300 hover:ring-8 hover:bg-dark group-focus:ring-4 ring-opacity-30 duration-300 delay-150 group ${
                isOpen ? "is-active" : ""
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                width="32"
                height="12"
                viewBox="0 0 32 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="top-bun absolute top-[25px] origin-center transform transition-all duration-200 group-hover:top-[35px] group-[.is-active]:rotate-[45deg] group-[.is-active]:top-[35px] group-[.is-active]:left-[23px]"
              >
                <path
                  d="M10.1197 7C8.5698 7 7.15669 7 5.88034 7C4.64957 7 3.57835 6.90515 2.66667 6.71545C1.80057 6.52574 1.1396 6.20325 0.683761 5.74797C0.22792 5.25474 0 4.53387 0 3.58537C0 2.6748 0.205128 1.9729 0.615384 1.47967C1.07122 0.98645 1.64103 0.626016 2.32479 0.398374C3.05413 0.170731 3.87464 0.0569109 4.78632 0.0569109C5.69801 0.018971 6.63248 0 7.58974 0C8.04558 0 8.8433 0 9.98291 0C11.1225 0 12.4217 0 13.8803 0C15.339 0 16.8889 0.018971 18.5299 0.0569109C20.2165 0.0948508 21.7892 0.132792 23.2479 0.170733C24.7521 0.208673 26.0969 0.284552 27.2821 0.398374C28.4672 0.474254 29.3333 0.569105 29.8803 0.682927C30.4274 0.834687 30.906 1.11924 31.3162 1.53658C31.7721 1.91599 32 2.59892 32 3.58537C32 4.45799 31.7721 5.14092 31.3162 5.63415C30.906 6.08943 30.2222 6.43089 29.265 6.65854C28.3077 6.84824 27.0769 6.96206 25.5726 7C24.0684 7 22.245 7 20.1026 7H10.1197Z"
                  fill="#FFFADE"
                />
              </svg>
              <svg
                width="32"
                height="12"
                viewBox="0 0 32 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bottom-bun absolute top-[45px] origin-center transform transition-all duration-200 group-hover:top-[35px] group-[.is-active]:rotate-[-45deg] group-[.is-active]:top-[35px] group-[.is-active]:left-[26px]"
              >
                <path
                  d="M10.1197 7C8.5698 7 7.15669 7 5.88034 7C4.64957 7 3.57835 6.90515 2.66667 6.71545C1.80057 6.52574 1.1396 6.20325 0.683761 5.74797C0.22792 5.25474 0 4.53387 0 3.58537C0 2.6748 0.205128 1.9729 0.615384 1.47967C1.07122 0.98645 1.64103 0.626016 2.32479 0.398374C3.05413 0.170731 3.87464 0.0569109 4.78632 0.0569109C5.69801 0.018971 6.63248 0 7.58974 0C8.04558 0 8.8433 0 9.98291 0C11.1225 0 12.4217 0 13.8803 0C15.339 0 16.8889 0.018971 18.5299 0.0569109C20.2165 0.0948508 21.7892 0.132792 23.2479 0.170733C24.7521 0.208673 26.0969 0.284552 27.2821 0.398374C28.4672 0.474254 29.3333 0.569105 29.8803 0.682927C30.4274 0.834687 30.906 1.11924 31.3162 1.53658C31.7721 1.91599 32 2.59892 32 3.58537C32 4.45799 31.7721 5.14092 31.3162 5.63415C30.906 6.08943 30.2222 6.43089 29.265 6.65854C28.3077 6.84824 27.0769 6.96206 25.5726 7C24.0684 7 22.245 7 20.1026 7H10.1197Z"
                  fill="#FFFADE"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
