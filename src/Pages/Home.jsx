import Intro from "../Components/Intro";
import RollingText from "../Components/RollingText";

export default function Home() {
  const projects = [
    {
      el: "projects-pma",
      words: "Philamuseum of Art",
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
    <>
      {/* TOP */}
      <Intro />

      {/* INTERTEXT */}
      <section className="block w-full py-20 bg-watermelon">
        <div className="max-w-screen-lg mx-auto text-ecru px-[1rem]">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-x-20 ">
            <div className="grid-cols-1">
              <h2 className="text-[28px] font-bold sm:pb-[1rem] font-lexend text-[28px]">
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
      <section className="block w-full overflow-hidden bg-watermelon py-20">
        {projects.map((p, i) => (
          <RollingText key={"projects_" + i} {...p} reverse={i % 2 == 0} />
        ))}
      </section>
    </>
  );
}
