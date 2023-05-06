import Footer from "../Components/Footer";
import { SectionTitle } from "../Components/Sections";

export default function Project() {
  return (
    <div className="bg-dark">
      <SectionTitle
        titles={{
          title1: "Project",
          color1: "text-ecru",
          title2: "XYZ",
          color2: "text-goldenyellow",
        }}
      />
      <Footer />
    </div>
  );
}
