import RollingText from "../Components/RollingText";
import { projects } from "../Helpers";

export default function Projects({ bg, accent }) {
  return (
    <div className={"bg-" + bg}>
      <section className="block w-full py-40">
        <div className="max-w-5xl mx-auto text-ecru px-[1rem]">
          <h3 className="block font-normal sm:pb-[1rem] font-lexend text-[24px] md:pb-[2rem] page-title page-title overflow-hidden ">
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
