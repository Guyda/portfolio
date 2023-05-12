import SEO from "../../Components/SEO";
import { ProjectIntro, ProjectPreview } from "../../Components/Sections";
import Footer from "../../Components/Footer";

export default function HappierHolidays() {
  return (
    <div className="bg-ecru">
      <SEO
        title="Happier Holidays - Guyda Bru, Full-Stack Developer"
        description="In support of Fine Wine & Good Spirits' holiday ad campaign, I took on the responsibility of designing and developing a website that would feature discounted products, entertaining party tips, and helpful wine-pairing recommendations, as well as suggestions for gift-giving. To ensure that the process was streamlined and efficient, I created a custom flat-file CMS that enabled easy manipulation and faster turnaround times."
        name="happier holidays"
        type="website"
      />
      <ProjectIntro
        content={{
          title: "Happier Holidays",
          years: "2014 & 2015",
          description:
            "In support of Fine Wine & Good Spirits' holiday ad campaign, I took on the responsibility of designing and developing a website that would feature discounted products, entertaining party tips, and helpful wine-pairing recommendations, as well as suggestions for gift-giving. To ensure that the process was streamlined and efficient, I created a custom flat-file CMS that enabled easy manipulation and faster turnaround times.",
          role: "UX/UI, Development",
          preview: null,
          bg: "bg-hh",
        }}
      />
      <ProjectPreview
        content={[
          {
            image: "/assets/fwgshh/fwgshh-environment.png",
            alt: "Preview in computer screen",
          },
          {
            image: "/assets/fwgshh/fwgshh-sample1.jpg",
            alt: "Screen preview 1",
          },
        ]}
      />

      <Footer />
    </div>
  );
}
