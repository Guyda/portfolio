import { gsap } from "gsap";
import RollingText from "./RollingText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

export default function Projects() {
  gsap.registerPlugin(ScrollTrigger);

  // useLayoutEffect(() => {
  //   const tl = gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: ".projects-content ",
  //         scrub: true,
  //         // start: "center center",
  //       },
  //     })
  //     .to(".projects-content ", {
  //       yPercent: -100,
  //     });

  //   return () => tl.revert();
  // }, []);

  const projects = [
    {
      year: "2018–2023",
      title: "Philamuseum.org",
      link: "/",
      image: "https://iili.io/HGqsNLu.png",
    },
    {
      year: "2017–2018",
      title: "Johnson Publication",
      link: "/",
      image: "https://iili.io/HGqsk1j.png",
    },
  ];

  return (
    <div className="relative box-border block w-screen min-h-screen pt-[15vh] pb-[15vh]">
      <div className="relative w-full">
        <div className="projects-content">
          {/* <RollingText
            text={[
              {
                el: "projectsText01",
                aria: "Projects",
                words: "Projects Projects Projects",
                size: "text-18xl",
                duration: 80,
                reverse: true,
                tilt: 5,
              },
            ]}
          /> */}
          <div className="whitespace-nowrap block relative box-border font-titan text-[0] rotate-[-5deg]">
            <div className="text1 inline-block text-cream leading-none text-18xl">
              Projects
            </div>
          </div>
        </div>

        <div className="projects-intro relative left-1/3 max-w-[600px] mt-[100px] mb-[100px] text-dark text-[20px]">
          <p>
            I've worked with all sorts of folks and industries, so no matter how
            weird or wild your idea, I'm pretty sure I can bring it to life -
            unless it involves time travel, I'm still working on that.
          </p>
        </div>

        <div id="block m-0 mx-auto">
          {projects.map((p) => (
            <div
              key={p.image}
              className="flex flex-col justify-center relative min-h-[320px] mx-auto cursor-pointer group "
            >
              <div className="absolute z-[200] w-auto h-full block m-0 p-0 will-change-[transform, opacity] top-1/2 left-2/3 opacity-0 transform -translate-y-1/2 -translate-x-1/2 transition duration-700 ease-bezier group-hover:translate-x-[0%] group-hover:opacity-100 ">
                <img className="w-auto h-full block m-0 p-0 " src={p.image} />
              </div>
              <div className="relative flex flex-col justify-center items-center m-0 mx-auto w-full">
                <span className="absolute block m-0 mt-[-50px] p-0 will-change-[transform, left] transform -translate-x-1/2 top-1/2 left-1/2 duration-500 transition-all ease-bezier font-caveat text-[2rem] w-full text-center text-cream group-hover:left-[40%] group-hover:text-dark">
                  {p.year}
                </span>
                <span className="absolute block m-0 mx-auto mt-[-30px] p-0 will-change-[transform, left] transform -translate-x-1/2 top-1/2 left-1/2 transition-all duration-500 ease-bezier font-titan text-projects w-full text-center text-cream group-hover:left-[45%]  group-hover:text-dark">
                  {p.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
