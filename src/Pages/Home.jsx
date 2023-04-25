import Intro from "../Components/Intro";
import RollingText from "../Components/RollingText";

export default function Home() {
  const projects = [
    {
      el: "projects-pma",
      words: "Philadelphia Museum of Art",
    },
    {
      el: "projects-jgj",
      words: "Johnson Publication",
    },
    {
      el: "projects-fwgs",
      words: "Fine Wine & Good Spirits",
    },
    {
      el: "projects-hh",
      words: "Happier Holidays",
    },
  ];
  return (
    <div className="bg-watermelon">
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
                I take pride in creating websites that not only look great but
                also function exceptionally well. I'm all about optimizing
                websites for speed and SEO, ensuring that your website is always
                performing at its best.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="block w-full bg-watermelon py-40">
        <div className="max-w-screen-xl mx-auto text-ecru px-[1rem]">
          <h3 className="block text-[28px] font-normal text-center sm:pb-[1rem] font-lexend text-[28px] md:pb-[2rem]">
            Selected Projects
          </h3>
        </div>
        {projects.map((p, i) => (
          <RollingText key={"projects_" + i} {...p} reverse={i % 2 == 0} />
        ))}
      </section>
    </div>
  );
}
