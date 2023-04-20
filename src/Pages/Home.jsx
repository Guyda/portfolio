import Intro from "../Components/Intro";
import Projects from "../Components/Projects";

export default function Home() {
  return (
    <div className="block w-full h-full overflow-hidden m-0 p-0 bg-tomato">
      <Intro />
      <Projects />
    </div>
  );
}
