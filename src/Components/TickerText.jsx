export default function TickerText() {
  return (
    <>
      <div className="ticker-text flex justify-center w-1/2 m-0 mx-auto text-[2rem] font-caveat">
        <span className="static text-dark font-normal">
          With a tablespoon or two of
        </span>
        <span className="dynamic font-bold pr-[10px] text-cream relative h-[3rem] overflow-hidden">
          <ul className="m-0 mx-[0.625rem] p-0 animate-ticker">
            <li className="flex items-center justify-start h-[3rem] list-none">
              Full-Stack Dev
            </li>
            <li className="flex items-center justify-start h-[3rem] list-none">
              UX/UI
            </li>
            <li className="flex items-center justify-start h-[3rem] list-none">
              Design
            </li>
            <li className="flex items-center justify-start h-[3rem] list-none">
              Strategy
            </li>
            <li className="flex items-center justify-start h-[3rem] list-none">
              Full-Stack Dev
            </li>
          </ul>
        </span>
      </div>
    </>
  );
}
