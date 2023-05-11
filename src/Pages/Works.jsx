import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import RollingText from "../Components/RollingText";
import SEO from "../Components/SEO";
import { SectionTitle } from "../Components/Sections";
import { projects } from "../routes";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Works() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const previews = gsap.utils.toArray(".card");

      previews.forEach((p, index) => {
        gsap.from(p, {
          autoAlpha: 0,
          yPercent: 10,
          filter: "blur(10px)",
          duration: 0.66,
          delay: index * 0.1,
          ease: "Power4.Out",
          scrollTrigger: {
            trigger: p,
            start: "top 90%",
            end: "top 90%",
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
    <div className="bg-persianblue">
      <SEO
        title="Projects - Guyda Bru, Full-Stack Developer"
        description="20 years experience designing, developing, deploying"
        name="guyda.com"
        type="website"
      />

      <SectionTitle
        titles={{
          title1: " Jack of",
          color1: "text-ecru",
          title2: "All Trades",
          color2: "text-pearlaqua",
          subtitle: (
            <span className="static font-normal">
              ...is a master of none, but oftentimes
              <span className="inline-block sm:block">
                better than a master of one.
              </span>
            </span>
          ),
          color3: "text-ecru",
        }}
      />

      <section className="block w-full py-40">
        <div className="max-w-5xl mx-auto text-ecru px-[1rem]">
          <h3 className="block font-normal sm:pb-[1rem] font-lexend text-[24px] md:pb-[2rem] text-center page-title page-title overflow-hidden ">
            Selected Projects
          </h3>
        </div>
        {projects
          .filter((p) => p.type === "main")
          .map((p, i) => (
            <RollingText key={"projects_" + i} {...p} reverse={i % 2 == 0} />
          ))}
      </section>

      {/* SMALLER Projects */}
      <section className="block w-full py-40">
        <div className="max-w-screen-xl mx-auto text-ecru px-[1rem]">
          <h3 className="block font-normal pb-[6rem] font-lexend text-[24px] text-center page-title page-title overflow-hidden ">
            OTHER PROJECTS TO LIST HERE
          </h3>
        </div>
        <div className="other-project my-2 mx-auto px-4 md:px-12 max-w-screen-xl">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {projects
              .filter((p) => p.type !== "main")
              .map((p, i) => (
                <div
                  key={"projects_" + i}
                  className="card my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 "
                >
                  <article className="shadow-lg h-full">
                    <Link
                      to={p.url}
                      data-cursor="-projects"
                      data-cursor-text={`<div class="flex flex-col items-center justify-center space-between">
          <span class="font-lexend text-sm leading-none pb-[8px]">View</span><span class="font-zilla text-lg leading-tight">${p.words}</span></div>`}
                    >
                      <div
                        className="rounded-lg h-full my-1 p-10 w-full bg-[rgba(255,255,255,.05)] hover:bg-persianblue group duration-300
                        ring-0 ring-gray-300 hover:ring-4 ring-opacity-30 cursor-none"
                      >
                        <h4 className="flex items-center justify-between text-lg font-lexend text-ecru pb-3 ">
                          {p.words}
                        </h4>
                        <p className="text-ecru font-zilla mb-10 ">{p.desc}</p>
                        {/* <div className="bg-persianblue px-[1rem] py-[.5rem] rounded-lg flex flex-col justify-center items-center text-ecru font-bold group-hover:text-persianblue group-hover:bg-ecru duration-300">
                          View work
                        </div> */}
                      </div>
                    </Link>
                  </article>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
