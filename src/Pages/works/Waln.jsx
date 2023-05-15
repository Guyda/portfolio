import SEO from "../../Components/SEO";
import { ProjectIntro, ProjectPreview } from "../../Components/Sections";
import Footer from "../../Components/Footer";

export default function Waln() {
  return (
    <div className="bg-ecru">
      <SEO
        title="Waln Interactive (Philamuseum) - Guyda Bru, Full-Stack Developer"
        description="I developed an iPad kiosk app to improve the visitors' museum experience. My responsibilities included designing and creating two distinct experiences. The first one was a light display control feature, while the second one provided additional information about the displayed art pieces."
        name="Waln Interactive"
        type="website"
      />
      <ProjectIntro
        content={{
          title: "Waln Interactive",
          years: "2016",
          description:
            "I developed an iPad kiosk app to improve the visitors' museum experience. My responsibilities included designing and creating two distinct experiences. The first one was a light display control feature, while the second one provided additional information about the displayed art pieces.",
          role: "UX/UI, Development",
          preview: "https://dev.guyda.com/waln-cabinet/",
          bg: "bg-waln",
        }}
      />
      <ProjectPreview
        content={[
          {
            image: "/assets/waln/pma-environment.png",
            alt: "Screen preview 1",
          },
          {
            image: "/assets/waln/pma-design2.jpg",
            alt: "Screen preview 2",
          },
          {
            image: "/assets/waln/pma-design3.jpg",
            alt: "Screen preview 3",
          },
          {
            image: "/assets/waln/pma-design4.jpg",
            alt: "Screen preview 4",
          },
          {
            image: "/assets/waln/pma-design5.jpg",
            alt: "Screen preview 5",
          },
          {
            image: "/assets/waln/pma-design6.jpg",
            alt: "Screen preview 6",
          },
        ]}
      />

      <Footer />
    </div>
  );
}
