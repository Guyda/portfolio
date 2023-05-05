import Footer from "../Components/Footer";
import RollingText from "../Components/RollingText";
import { projects } from "../Helpers";

export default function Projects() {
  return (
    <div className="bg-persianblue">
      <section className="block h-screen ">
        <div className="intro-section relative box-border z-100 ">
          <div className="intro-content block w-full text-center select-none z-10 h-screen flex flex-col items-center justify-center">
            <h1 className="whitespace-nowrap w-full overflow-hidden relative box-border font-lexend  text-[0] font-bold flex flex-col">
              <span className="text1 block text-ecru leading-none text-titlesr page-title ">
                Selected
              </span>
              <span className="text2 block leading-none pb-[1rem] text-title mt-[-.5rem] md:mt-[-1rem] page-title-delayed text-pearlaqua">
                Projects
              </span>
            </h1>
            <div className="absolute top-0 left-0 w-full h-screen z-0 opacity-50 bg-hero-bg bg-repeat-x bg-contain" />
          </div>
        </div>
      </section>
      <section className={"block w-full py-40"}>
        <div className="max-w-prose mx-auto text-ecru px-[1rem]">
          <p className="font-zilla text-[18px] mb-[1rem]  text-center leading-relaxed">
            Quisque consectetur ex sapien, eu tincidunt est vulputate non. Sed
            hendrerit purus arcu, et ultricies leo viverra congue. Morbi
            hendrerit, mauris vel bibendum efficitur, nibh nisi aliquet urna,
            nec egestas lectus nisl et mi. Vivamus id felis quis enim iaculis
            fringilla. Donec fermentum vitae nibh at condimentum.
          </p>
        </div>
      </section>
      <section className="block w-full py-40">
        <div className="max-w-5xl mx-auto text-ecru px-[1rem]">
          {/* <h3 className="block font-normal sm:pb-[1rem] font-lexend text-[24px] md:pb-[2rem] page-title page-title overflow-hidden ">
            Selected Projects
          </h3> */}
        </div>
        {projects.map((p, i) => (
          <RollingText key={"projects_" + i} {...p} reverse={i % 2 == 0} />
        ))}
      </section>
      <Footer />
    </div>
  );
}
