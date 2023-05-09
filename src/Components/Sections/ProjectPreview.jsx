import { gsap } from "gsap";
import { useEffect } from "react";

export default function ProjectPreview({ content = [] }) {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const previews = gsap.utils.toArray(".project-preview");

      previews.forEach((p) => {
        gsap.fromTo(
          p,
          {
            autoAlpha: 0,
            yPercent: 10,
          },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.8,
            ease: "Power4.inOut",
            scrollTrigger: {
              trigger: p,
              start: "top 75%",
              end: "top 75%",
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
      ctx.kill();
    };
  }, []);

  return (
    <section className="block w-full py-[60px] bg-ecru">
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
    </section>
  );
}
