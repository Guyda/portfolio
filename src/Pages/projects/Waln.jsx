import SEO from "../../Components/SEO";
import { ProjectIntro, ProjectPreview } from "../../Components/Sections";
import Footer from "../../Components/Footer";

export default function Waln() {
  return (
    <div className="bg-ecru">
      <SEO
        title="Waln Interactive (Philamuseum) - Guyda Bru, Full-Stack Developer"
        description="This iPad kiosk app was done in partnership with the Philadelphia Art Museum's interactive department. The goal was to create some interactivity to the museum's visitors experience. My role was to design, and develop 2 type of experiences, the 1st one was to control a light display, and the other one was about giving more information about the art on display."
        name="Waln Interactive"
        type="website"
      />
      <ProjectIntro
        content={{
          title: <>Waln Interactive</>,
          years: "2016",
          description:
            "This iPad kiosk app was done in partnership with the Philadelphia Art Museum's interactive department. The goal was to create some interactivity to the museum's visitors experience. My role was to design, and develop 2 type of experiences, the 1st one was to control a light display, and the other one was about giving more information about the art on display.",
          role: "UX/UI, Development",
          preview: null,
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
