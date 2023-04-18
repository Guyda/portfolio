import Cloud from "./Cloud";
import RollingText from "./RollingText";

export default function Intro() {
  return (
    <div className="relative box-border block w-screen min-h-screen mt-[20vh]">
      <Cloud />
      <div className="relative w-full">
        <RollingText el="introRollingText01" text="Digital" size="25vw" />
        <RollingText
          el="introRollingText02"
          text="Tech Lead"
          size="18vw"
          reverse={true}
        />
      </div>
    </div>
  );
}
