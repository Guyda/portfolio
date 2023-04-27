import MagneticButton from "./MagneticButton";

export default function Footer() {
  const socials = [
    {
      name: "Github",
      url: "/",
      icon: "devicon-github-original",
      class: "text-[32px]",
    },
    {
      name: "LinkedIn",
      url: "/",
      icon: "devicon-linkedin-plain",
      class: "text-[32px]",
    },
    {
      name: "Codepen",
      url: "/",
      icon: "devicon-codepen-plain",
      class: "text-[32px]",
    },
  ];

  return (
    <footer aria-label="Site Footer" className="bg-persianblue z-10">
      <div className="max-w-xl px-4 pt-16 pb-16 mx-auto sm:px-6 lg:px-8 lg:pt-32">
        <div className="flex items-center justify-center flex-col py-24 space-between text-center">
          <h2 className="text-ecru font-lexend text-[2rem] sm:text-[3rem] pb-[1rem]">
            Let's Keep in Touch!
          </h2>
          <p className="text-ecru font-zilla text-[1rem] px-[1rem]">
            My inbox is always open like a welcoming home screen, ready and
            waiting for your questions, ideas, or even just a casual "hello
            world." So don't be a stranger - hit me up and let's chat about all
            things web-related!
          </p>
          <MagneticButton
            scale={2}
            tollerance={0.8}
            speed={0.3}
            borderRadius="50%"
            className="magnetic-button p-0 bg-tranparent touch-none p-[3rem] flex items-center justify-center"
          >
            <button className="bg-watermelon px-[1.75rem] py-[1.25rem] rounded-lg flex flex-col justify-center items-center transform transition-all text-ecru ring-0 ring-gray-300 hover:ring-8 hover:bg-goldenyellow group-focus:ring-4 ring-opacity-30 duration-300 delay-150 hover:text-dark">
              contact@guyda.com
            </button>
          </MagneticButton>
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex justify-center gap-6 mt-8 sm:mt-0">
            {socials.map((k) => (
              <li key={k.name}>
                <a
                  href={k.url}
                  rel="noreferrer"
                  target="_blank"
                  className="text-ecru transition hover:opacity-75"
                >
                  <i className={`${k.icon} ${k.class}`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-8 border-dark flex items-center justify-center">
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
              <li>
                <a
                  href="#"
                  className="font-lexend text-ecru transition hover:opacity-75"
                >
                  &copy;guyda.com 2023
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
