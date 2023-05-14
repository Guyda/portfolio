import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef } from "react";
import { TransitionContext } from "../Context/TransitionState";
import { Codepen, Github, LinkedIn } from "./Icons";

export default function Footer({ motion = true }) {
  gsap.registerPlugin(ScrollTrigger);
  const { transitionEnded } = useContext(TransitionContext);

  const ftWarped = useRef();
  const ftBlock = useRef();
  const ftContent = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (transitionEnded && motion) {
        const tl_footer = gsap
          .timeline({
            scrollTrigger: {
              trigger: ftBlock.current,
              // scrub: true,
              // markers: true,
              start: "top 95%",
              // end: "95% bottom",
              toggleActions: "play restart play reverse",
              // once: false,
            },
          })
          .fromTo(
            ftContent.current,
            {
              marginTop: "50px",
            },
            {
              duration: 0.6,
              ease: "Power2.Out",
              marginTop: 0,
            }
          );
      }
    });
    return () => {
      ctx.revert();
      ctx.kill();
    };
  }, [transitionEnded]);

  const socials = [
    {
      name: "Github",
      url: "/",
      icon: <Github />,
      class: "text-[32px]",
    },
    {
      name: "LinkedIn",
      url: "/",
      icon: <LinkedIn />,
      class: "text-[32px]",
    },
    {
      name: "Codepen",
      url: "/",
      icon: <Codepen />,
      class: "text-[32px]",
    },
  ];

  return (
    <footer
      aria-label="Site Footer"
      ref={ftBlock}
      className="z-10 relative h-[300px] overflow-hidden"
    >
      <div
        ref={ftContent}
        className="w-full absolute top-0 left-0 w-full h-[300px] z-10 bg-ecru py-[4rem] "
      >
        <div className="flex flex-col items-center justify-center">
          <ul className="align-center justify-center inline-flex flex-row gap-8 pb-[2rem]">
            {socials.map((k) => (
              <li key={k.name}>
                <a
                  href={k.url}
                  rel="noreferrer"
                  target="_blank"
                  className="text-watermelon transition hover:opacity-75"
                >
                  <div className="icon w-[28px] h-[28px] fill-watermelon">
                    {k.icon}
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <div>
            <span className="font-zilla text-center text-watermelon block mx-auto text-[20px]">
              Guyda Bru
            </span>
            <span className="font-lexend font-bold text-watermelon block mx-auto text-[32px]">
              Full-Stack Developer
            </span>
          </div>
        </div>
        <div className="pt-8 border-dark flex items-center justify-center">
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
              <li>
                <a
                  href="#"
                  className="font-lexend text-watermelon transition hover:opacity-75"
                >
                  &copy;guyda.com 2023
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        ref={ftWarped}
        className="bg-warped absolute block top-0 left-0 z-1 w-full origin-center h-[50px] bg-ecru rounded-tl-[50%] rounded-tr-[50%]"
      />
    </footer>
  );
}
