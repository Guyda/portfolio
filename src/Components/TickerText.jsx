export default function TickerText({ text = [] }) {
  return (
    <>
      <div className="ticker-text">
        <span className="static">With a tablespoon or two of</span>
        <span className="dynamic">
          <ul>
            <li>Full-Stack Dev</li>
            <li>UX/UI</li>
            <li>Design</li>
            <li>Strategy</li>
            <li>Full-Stack Dev</li>
          </ul>
        </span>
      </div>
    </>
  );
}
