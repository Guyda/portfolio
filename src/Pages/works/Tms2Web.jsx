import SEO from "../../Components/SEO";
import { ProjectIntro, ProjectPreview } from "../../Components/Sections";
import Footer from "../../Components/Footer";

export default function TMS2WEB() {
  return (
    <div className="bg-ecru">
      <SEO
        title="TMS to Web - Guyda Bru, Full-Stack Developer"
        description="React/NodeJS application that could facilitate the transfer of data from PMA's internal Collection database to Google Firestore. Tool that also uploads high-resolution JPG images to our online IIIF server (micr.io)."
        name="Waln Interactive"
        type="website"
      />
      <ProjectIntro
        content={{
          title: "TMS to Web",
          years: "2020–2021",
          description:
            "React/NodeJS application that could facilitate the transfer of data from PMA's internal Collection database to Google Firestore. Tool that also uploads high-resolution JPG images to our online IIIF server (micr.io).",
          role: "UX/UI, Development",
          preview: null,
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
