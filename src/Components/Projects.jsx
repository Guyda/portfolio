import { gsap } from "gsap";
import RollingText from "./RollingText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

export default function Projects() {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".projects-content",
          scrub: true,
          // start: "center center",
        },
      })
      .to(".projects-content", {
        y: -100,
      });
  }, []);

  const projects = [
    {
      year: "2018–2023",
      title: "Project 1",
      link: "/",
      image: "https://iili.io/HGqsNLu.png",
    },
    {
      year: "2017–2018",
      title: "Project 2",
      link: "/",
      image: "https://iili.io/HGqsk1j.png",
    },
  ];

  return (
    <div className="relative box-border block w-screen min-h-screen pt-[15vh] pb-[15vh]">
      <div className="projects-content relative w-full">
        <RollingText
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
        />

        <div className="projects-intro relative left-1/2 max-w-[600px] mt-[100px] mb-[100px] text-dark text-[20px] border-2">
          <p>
            I've worked with all sorts of folks and industries, so no matter how
            weird or wild your idea, I'm pretty sure I can bring it to life -
            unless it involves time travel, I'm still working on that.
          </p>
        </div>

        <div id="block w-full max-w-[1000px] m-0 mx-auto">
          {projects.map((p) => (
            <div
              key={p.image}
              className="flex flex-col justify-center relative w-full h-[320px] group cursor-pointer "
            >
              <div className="absolute z-[200] w-auto h-full block m-0 p-0 border-0 will-change-[transform, opacity] top-1/2 left-2/3 opacity-0 transform -translate-y-1/2 translate-x-1/2 transition duration-700 group-hover:translate-x-[40%] group-hover:opacity-100">
                <img
                  className="w-auto h-full block m-0 p-0 border-0 "
                  src={p.image}
                />
              </div>
              <div className="relative flex flex-col m-0 w-full h-full">
                <span className="absolute inline-block m-0 mt-[-50px] p-0 will-change-[transsform, left] transform translate-x-1/2 top-1/2 left-1/2 transition-all group-hover:left-[40%]">
                  {p.year}
                </span>
                <h3 className="absolute inline-block m-0 mt-[-30px] p-0 will-change-[transsform, left] transform translate-x-1/2 top-1/2 left-1/2 transition-all group-hover:left-[45%]">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
