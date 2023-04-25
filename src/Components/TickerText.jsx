export default function TickerText() {
  let list = [
    "Full-Stack Dev",
    "UX/UI",
    "Design",
    "Strategy",
    "Full-Stack Dev",
  ];

  return (
    <>
      <div className="ticker-text flex justify-center w-1/2 m-0 mx-auto mt-[20px] sm:text-[1rem] md:text-[22px] font-zilla text-ecru w-full">
        <span className="static font-normal">With a tablespoon or two of</span>
        <span className="dynamic font-bold pr-[10px] relative h-[30px] overflow-hidden">
          <ul className="m-0 ml-[10px] p-0 animate-ticker">
            {list.map((l, i) => (
              <li
                key={"ticker_" + i}
                className="flex items-center justify-start h-[30px] list-none"
              >
                {l}
              </li>
            ))}
          </ul>
        </span>
      </div>
    </>
  );
}
