export default function Footer() {
  const socials = [
    {
      name: "Github",
      url: "/",
      icon: "devicon-github-original",
      class: "text-[22px]",
    },
    {
      name: "LinkedIn",
      url: "/",
      icon: "devicon-linkedin-plain",
      class: "text-[22px]",
    },
    {
      name: "Codepen",
      url: "/",
      icon: "devicon-codepen-plain",
      class: "text-[22px]",
    },
  ];

  return (
    <footer aria-label="Site Footer" className="bg-white dark:bg-gray-900 z-10">
      <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Customise Your Product
          </h2>

          <p className="max-w-sm mx-auto mt-4 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            maiores ipsum eos temporibus ea nihil.
          </p>

          <a
            href="#"
            className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white border border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          >
            Get Started
          </a>
        </div>

        <div className="pt-8 mt-16 border-t border-gray-100 dark:border-gray-800 sm:flex sm:items-center sm:justify-center lg:mt-24">
          <ul className="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">
            {socials.map((k) => (
              <li key={k.name}>
                <a
                  href={k.url}
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <i className={`${k.icon} ${k.class}`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-8 dark:border-gray-800 sm:flex sm:items-center sm:justify-center">
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
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
