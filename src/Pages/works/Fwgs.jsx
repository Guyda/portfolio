import SEO from "../../Components/SEO";
import { ProjectIntro, ProjectPreview } from "../../Components/Sections";
import Footer from "../../Components/Footer";

export default function Fwgs() {
  return (
    <div className="bg-ecru">
      <SEO
        title="Fine Wine & Good Spirits - Guyda Bru, Full-Stack Developer"
        description="In Response to an advertising pitch, I revamped FWGS's homepage using the latest web design techniques. My approach involved repurposing existing content and proposing innovative ways to enhance the overall user experience."
        name="Fine Wine & Good Spirits"
        type="website"
      />
      <ProjectIntro
        content={{
          title: "Fine Wine & Good Spirits",
          years: "2016",
          description:
            "In Response to an advertising pitch, I revamped FWGS's homepage using the latest web design techniques. My approach involved repurposing existing content and proposing innovative ways to enhance the overall user experience.",
          role: "UX/UI",
          preview: null,
          bg: "bg-fwgs",
        }}
      />
      <ProjectPreview
        content={[
          {
            image: "/assets/fwgs/fwgs-screens.png",
            alt: "Screen preview 1",
          },
          {
            image: "/assets/fwgs/fwgs_ui.jpg",
            alt: "Screen preview 2",
          },
        ]}
      />

      <Footer />
    </div>
  );
}
