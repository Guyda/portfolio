export default function ProjectIntro({ content = {} }) {
  let { years, description, role, preview, title, bg = null } = content;

  // let _bg = bg
  //   ? "block w-full relative h-full py-[240px] bg-dark before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-black before:opacity-60  bg-fixed bg-cover " +
  //     bg
  //   : "block w-full py-[240px] bg-dark";

  return (
    <section className="block w-full py-[150px] sm:py[200px] bg-ecru">
      <div className="max-w-screen-lg mx-auto text-dark px-[1rem] z-[20]">
        <h1 className="whitespace-nowrap w-full overflow-hidden relative box-border font-lexend text-[0] font-bold flex flex-col pb-[2rem]">
          {title && (
            <span className="block text-titlesr page-title ">{title}</span>
          )}
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 pr-[0] md:pr-[6rem] page-fadein">
            <span className="block font-lexend text-[13px] uppercase">
              Description
            </span>
            <p className="font-zilla text-[18px] pb-[2rem] md:pb-[0rem]">
              {description}
            </p>
          </div>

          <div className="page-fadein-delay">
            <span className="block font-lexend text-[13px] uppercase">
              years
            </span>
            <span className="block font-zilla text-[18px] mb-[2rem]">
              {years}
            </span>
            <span className="block font-lexend text-[13px] uppercase">
              role
            </span>
            <span className="block font-zilla text-[18px] mb-[2rem]">
              {role}
            </span>
            {preview && (
              <>
                <span className="block font-lexend text-[13px] uppercase">
                  preview
                </span>
                <span className="block font-zilla text-[18px] mb-[2rem]">
                  {preview}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
