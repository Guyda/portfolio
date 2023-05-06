import Footer from "../Components/Footer";
import SEO from "../Components/SEO";
import { SectionTitle } from "../Components/Sections";

export default function Project() {
  return (
    <div className="bg-dark">
      <SEO
        title="Project XYZ - Guyda Bru, Full-Stack Developer"
        description="20 years experience designing, developing, deploying"
        name="guyda.com"
        type="website"
      />
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
