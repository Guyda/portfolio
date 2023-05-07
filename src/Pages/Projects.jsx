import Footer from "../Components/Footer";
import RollingText from "../Components/RollingText";
import SEO from "../Components/SEO";
// import ScrollingText from "../Components/ScrollingText";
import { SectionTitle } from "../Components/Sections";
import { projects } from "../Helpers";

export default function Projects() {
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
        {/* {projects.map((p, i) => (
          <ScrollingText key={"projects_" + i} {...p} reverse={i % 2 == 0} />
        ))} */}
        {projects.map((p, i) => (
          <RollingText key={"projects_" + i} {...p} reverse={i % 2 == 0} />
        ))}
      </section>

      <section className="block w-full py-40">
        <div className="max-w-screen-md mx-auto text-ecru px-[1rem]">
          <h3 className="block font-normal pb-[6rem] font-lexend text-[24px] text-center page-title page-title overflow-hidden ">
            Things I do
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-x-20 ">
            <div className="grid-cols-1 text-center mb-[3rem]">
              <h2 className="text-[2rem] font-bold pb-[2rem] font-lexend lg:text-[1.88rem]">
                Design
              </h2>
              <ul className="font-zilla text-[18px]">
                <li className="mb-[1rem] ">Ideation</li>
                <li className="mb-[1rem] ">Visual Design</li>
                <li className="mb-[1rem] ">HTML/CSS</li>
                <li className="mb-[1rem] ">Bulma</li>
                <li className="mb-[1rem] ">TailwindCSS</li>
                <li className="mb-[1rem] ">Accessibility</li>
              </ul>
            </div>

            <div className="grid-cols-1 text-center">
              <h2 className="text-[2rem] font-bold pb-[2rem] font-lexend lg:text-[1.88rem]">
                Deploy
              </h2>
              <ul className="font-zilla text-[18px]">
                <li className="mb-[1rem] ">JavaScript</li>
                <li className="mb-[1rem] ">Nginx</li>
                <li className="mb-[1rem] ">Docker</li>
                <li className="mb-[1rem] ">Google Cloud</li>
                <li className="mb-[1rem] ">AWS</li>
                <li className="mb-[1rem] ">REST API</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
