import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function ProjectText({ title, text }) {
  gsap.registerPlugin(ScrollTrigger);

  const pvContent = useRef();
  const pvSection = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl_cloud = gsap
        .timeline({
          scrollTrigger: {
            trigger: pvSection.current,
            start: "top 90%",
          },
        })
        .from([pvContent.current.getElementsByClassName("project-text")], {
          opacity: 0,
          duration: 0.66,
          ease: "Power4.out",
          stagger: 0.25,
        });
    });

    return () => {
      ctx.revert();
      ctx.kill();
    };
  }, []);

  return (
    <section
      ref={pvSection}
      className="z-5 relative block w-full py-40 bg-ecru"
    >
      <div
        ref={pvContent}
        className="max-w-screen-md mx-auto text-center text-dark px-[1rem]"
      >
        <h2 className="project-text text-dark font-lexend text-[2rem] pb-4 block">
          {title}
        </h2>
        <div className="project-text text-dark">{text}</div>
      </div>
    </section>
  );
}
