import SEO from "../../Components/SEO";
import { ProjectIntro, ProjectPreview } from "../../Components/Sections";
import Footer from "../../Components/Footer";

export default function TollBrothers() {
  return (
    <div className="bg-ecru">
      <SEO
        title="Amerihealth Administrators - Guyda Bru, Full-Stack Developer"
        description="A website to explain how their future student housing would accomodate about 1,000 residents in a self-contained neighborhood with an on-site community center full of premium amenities."
        name="happier holidays"
        type="website"
      />
      <ProjectIntro
        content={{
          title: "Cottages at State College",
          years: "2016",
          description:
            "A website to explain how their future student housing would accomodate about 1,000 residents in a self-contained neighborhood with an on-site community center full of premium amenities.",
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
