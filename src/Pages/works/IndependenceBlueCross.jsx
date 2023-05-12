import SEO from "../../Components/SEO";
import { ProjectIntro, ProjectPreview } from "../../Components/Sections";
import Footer from "../../Components/Footer";

export default function IndependenceBlueCross() {
  return (
    <div className="bg-ecru">
      <SEO
        title="Changing the Game (IBX) - Guyda Bru, Full-Stack Developer"
        description="inform people of the recent changes in health care, following the new health reforms"
        name="changing the game - ibx"
        type="website"
      />
      <ProjectIntro
        content={{
          title: "Changing the Game",
          years: "2011",
          description:
            "My involvement in this Independence Blue Cross project centered around educating people about the latest health care changes brought about by recent reforms. As a designer and developer, I was tasked with creating an original experience that featured simple interactions, aesthetically pleasing visuals, and responsiveness.",
          role: "UX/UI, Development",
          preview: null,
          bg: "bg-ibx",
        }}
      />
      <ProjectPreview
        content={[
          {
            image: "/assets/ibx/ibx-environment.png",
            alt: "Preview in computer screen",
          },
          {
            image: "/assets/ibx/ibx-design-sample1.jpg",
            alt: "Screen preview 1",
          },
          {
            image: "/assets/ibx/ibx-design-sample2.jpg",
            alt: "Screen preview 2",
          },
          {
            image: "/assets/ibx/ibx-design-sample3.jpg",
            alt: "Screen preview 3",
          },
        ]}
      />

      <Footer />
    </div>
  );
}
