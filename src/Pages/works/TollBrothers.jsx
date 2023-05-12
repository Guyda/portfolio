import SEO from "../../Components/SEO";
import { ProjectIntro, ProjectPreview } from "../../Components/Sections";
import Footer from "../../Components/Footer";

export default function TollBrothers() {
  return (
    <div className="bg-ecru">
      <SEO
        title="Amerihealth Administrators - Guyda Bru, Full-Stack Developer"
        description="Designed and developed a website to showcase Penn State's upcoming student housing project. The development would cater to around 1,000 residents and offer a self-contained neighborhood concept, complete with a community center featuring high-end amenities."
        name="happier holidays"
        type="website"
      />
      <ProjectIntro
        content={{
          title: "Cottages at State College",
          years: "2016",
          description:
            "Designed and developed a website to showcase Penn State's upcoming student housing project. The development would cater to around 1,000 residents and offer a self-contained neighborhood concept, complete with a community center featuring high-end amenities.",
          role: "UX/UI, Development",
          preview: null,
          bg: "bg-tb",
        }}
      />
      <ProjectPreview
        content={[
          {
            image: "/assets/tollbrothers/tb-design-sample1.jpg",
            alt: "Screen preview 1",
          },
        ]}
      />

      <Footer />
    </div>
  );
}
