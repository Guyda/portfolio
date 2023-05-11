import SEO from "../../Components/SEO";
import { ProjectIntro, ProjectPreview } from "../../Components/Sections";
import Footer from "../../Components/Footer";

export default function Fwgs() {
  return (
    <div className="bg-ecru">
      <SEO
        title="Fine Wine & Good Spirits - Guyda Bru, Full-Stack Developer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non rhoncus arcu. Morbi a commodo tellus, at imperdiet nulla. Ut sed dui dolor. Sed accumsan elementum magna eget blandit. Nam molestie ut augue tempus hendrerit. Suspendisse rhoncus finibus ex eu tincidunt."
        name="Fine Wine & Good Spirits"
        type="website"
      />
      <ProjectIntro
        content={{
          title: "Fine Wine & Good Spirits",
          years: "2016",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non rhoncus arcu. Morbi a commodo tellus, at imperdiet nulla. Ut sed dui dolor. Sed accumsan elementum magna eget blandit. Nam molestie ut augue tempus hendrerit. Suspendisse rhoncus finibus ex eu tincidunt.",
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
