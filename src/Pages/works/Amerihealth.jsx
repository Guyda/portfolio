import SEO from "../../Components/SEO";
import { ProjectIntro, ProjectPreview } from "../../Components/Sections";
import Footer from "../../Components/Footer";

export default function Amerihealth() {
  return (
    <div className="bg-ecru">
      <SEO
        title="Amerihealth Administrators - Guyda Bru, Full-Stack Developer"
        description="Revamp of Amerihealth Administrator's website. My responsibilities involved modernizing the website's appearance, reorganizing its content, and revisiting its overall architecture and navigation."
        name="happier holidays"
        type="website"
      />
      <ProjectIntro
        content={{
          title: "Amerihealth Administrators",
          years: "2015",
          description:
            "Revamp of Amerihealth Administrator's website. My responsibilities involved modernizing the website's appearance, reorganizing its content, and revisiting its overall architecture and navigation.",
          role: "UX/UI",
          preview: null,
          bg: "bg-aha",
        }}
      />
      <ProjectPreview
        content={[
          {
            image: "/assets/aha/aha-design-environment.png",
            alt: "Preview in computer screen",
          },
          {
            image: "/assets/aha/aha-sample1.jpg",
            alt: "Screen preview 1",
          },
        ]}
      />

      <Footer />
    </div>
  );
}
