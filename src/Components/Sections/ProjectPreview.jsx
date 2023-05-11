import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function ProjectPreview({ content = [] }) {
  const pvWarped = useRef();
  const pvSection = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(pvSection.current, {
        marginTop: "100px",
      });

      gsap.from(pvWarped.current, {
        marginTop: "-45px",
      });

      const previews = gsap.utils.toArray(".project-preview");

      previews.forEach((p) => {
        gsap.from(p, {
          autoAlpha: 0,
          marginTop: "60px",
          duration: 0.8,
          ease: "Power4.inOut",
          scrollTrigger: {
            trigger: p,
            start: "top 75%",
            end: "top 75%",
          },
        });
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
      className="z-5 relative block w-full py-[60px] bg-darker"
    >
      {content.map((k, i) => {
        const { image, alt } = k;

        return (
          <div
            key={"asset_" + i}
            className={"max-w-screen-lg block mx-auto my-[60px] p-[1rem] "}
          >
            <img src={image} alt={alt} className="project-preview" />
          </div>
        );
      })}
      <div
        ref={pvWarped}
        className="bg-darker absolute block top-0 left-0 z-1 w-full origin-center h-[50px] bg-darker rounded-tl-[50%] rounded-tr-[50%]"
      />
    </section>
  );
}
