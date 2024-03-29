import Footer from "../Components/Footer";
import Intro from "../Components/Intro";
import RollingText from "../Components/RollingText";
import SEO from "../Components/SEO";
import MagneticButton from "../Components/MagneticButton";
import { projects } from "../routes";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  const projectButton = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(projectButton.current, {
        autoAlpha: 0,
        yPercent: 30,
        filter: "blur(10px)",
        duration: 1,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: projectButton.current,
          start: "top 75%",
          end: "top 75%",
        },
      });
    });

    return () => {
      ctx.revert();
      ctx.kill();
    };
  }, []);

  return (
    <div className="bg-watermelon">
      <SEO
        title="Intro - Guyda Bru, Full-Stack Developer"
        description="20 years experience designing, developing, deploying"
        name="guyda.com"
        type="website"
      />

      {/* TOP */}
      <Intro />

      {/* INTERTEXT */}
      <section className="block w-full py-40">
        <div className="max-w-screen-lg mx-auto text-ecru px-[1rem]">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-x-20 ">
            <div className="grid-cols-1">
              <h2 className="text-[2rem] font-bold pb-[1rem] sm:pb-[1rem] font-lexend lg:text-[1.88rem] leading-none md:leading-tight">
                Making the internet a prettier place, one line of code at a
                time.
              </h2>
            </div>

            <div className="grid-cols-1">
              <p className="font-zilla text-[18px]">
                I have perfected my ability to create websites that seamlessly
                blend striking visual design with top-notch functionality. My
                recent projects have been powered by React, NextJS, and
                Tailwind. But, my web dev journey started with Flash
                ActionScript and HTML/CSS. You could say I'm a seasoned
                developer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="block w-full bg-watermelon py-40">
        <div className="max-w-5xl mx-auto text-ecru px-[1rem]">
          <h3 className="block font-normal sm:pb-[1rem] text-center font-lexend text-[24px] md:pb-[2rem]">
            Some of my latest work
          </h3>
        </div>
        {/* TOP 4 */}
        {projects
          .filter((p) => p.type === "main")
          .map((p, i) => (
            <RollingText key={"projects_" + i} {...p} reverse={i % 2 == 0} />
          ))}
        <div
          ref={projectButton}
          className="w-[250px] text-center mx-auto text-ecru block mt-[6rem]"
        >
          <MagneticButton
            data-cursor="-hidden"
            scale={2}
            tollerance={0.8}
            speed={0.3}
            borderRadius="50%"
            className="magnetic-button p-0 bg-tranparent touch-none p-[2rem] flex items-center justify-center"
          >
            <Link
              to="/work"
              className="bg-goldenyellow px-[2rem] py-[1rem] rounded-lg flex flex-col justify-center items-center transform transition-all text-watermelon font-bold ring-0 ring-gray-300 hover:ring-8 hover:bg-ecru group-focus:ring-4 ring-opacity-30 duration-300 delay-150 hover:text-dark font-zilla"
            >
              View more work
            </Link>
          </MagneticButton>
        </div>
      </section>
      <Footer />
    </div>
  );
}
