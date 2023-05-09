import Footer from "../Components/Footer";
import RollingText from "../Components/RollingText";
import SEO from "../Components/SEO";
import { SectionTitle } from "../Components/Sections";
import { projects } from "../routes";

export default function Works() {
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
        {projects.map((p, i) => (
          <RollingText key={"projects_" + i} {...p} reverse={i % 2 == 0} />
        ))}
      </section>

      {/* SMALLER Projects */}
      <section className="block w-full py-40">
        <div className="max-w-screen-md mx-auto text-ecru px-[1rem]">
          <h3 className="block font-normal pb-[6rem] font-lexend text-[24px] text-center page-title page-title overflow-hidden ">
            SMALLER PROJECTS TO LIST HERE
          </h3>
        </div>
      </section>
      <Footer />
    </div>
  );
}
