import RollingText from "../Components/RollingText";
import { motion } from "framer-motion";
import { animation } from "../Helpers";

export default function Projects() {
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
    <motion.div {...animation}>
      <section className="block w-full bg-persianblue py-40">
        <div className="max-w-5xl mx-auto text-ecru px-[1rem]">
          <h3 className="block font-normal sm:pb-[1rem] font-lexend text-[24px] md:pb-[2rem]">
            Selected Projects
          </h3>
        </div>
        {projects.map((p, i) => (
          <RollingText key={"projects_" + i} {...p} reverse={i % 2 == 0} />
        ))}
      </section>
    </motion.div>
  );
}
