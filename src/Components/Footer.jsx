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
    <footer aria-label="Site Footer" className="bg-dark z-10">
      <div className="max-w-screen-xl px-4 pt-4 pb-8 mx-auto">
        <div className="pt-8 sm:flex sm:items-center sm:justify-center">
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
