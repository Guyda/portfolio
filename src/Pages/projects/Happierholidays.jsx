import SEO from "../../Components/SEO";
import { ProjectIntro, ProjectPreview } from "../../Components/Sections";
import Footer from "../../Components/Footer";

export default function HappierHolidays() {
  return (
    <div className="bg-ecru">
      <SEO
        title="Happier Holidays - Guyda Bru, Full-Stack Developer"
        description="Designed and developed a website to complete an ad campaign for the end of year's Holidays, on behalf of Fine Wine & Good Spirits. Offering discounted products, giving entertaining tips for parties, educating users on what wine would go better with venison, or finding a gift for a love one. I built a custom-made flat-file CMS for easy manipulations, and quicker turn around."
        name="happier holidays"
        type="website"
      />
      <ProjectIntro
        content={{
          title: "Happier Holidays",
          years: "2014–2016",
          description: (
            <>
              I designed and developed a website to complete an ad campaign for
              the end of year's Holidays, on behalf of Fine Wine & Good Spirits.
              Offering discounted products, giving entertaining tips for
              parties, educating users on what wine would go better with
              venison, or finding a gift for a love one. <br />
              <br />I built a custom-made flat-file CMS for easy manipulations,
              and quicker turn around.
            </>
          ),
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
