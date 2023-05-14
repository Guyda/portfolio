import SEO from "../../Components/SEO";
import { ProjectIntro, ProjectPreview } from "../../Components/Sections";
import Footer from "../../Components/Footer";
import ProjectText from "../../Components/Sections/ProjectText";

export default function TMS2WEB() {
  return (
    <div className="bg-ecru">
      <SEO
        title="TMS to Web - Guyda Bru, Full-Stack Developer"
        description="NodeJS/React application that has significantly streamlined the data flow between our internal collection database system and the website's collection object pages."
        name="Waln Interactive"
        type="website"
      />
      <ProjectIntro
        content={{
          title: "TMS to Web",
          years: "2020–2021",
          description:
            "I developed a NodeJS/React application that has significantly streamlined the data flow between our internal collection database system and the website's collection object pages. The purpose of this application is to speed up and facilitate the process, and I am proud to say that I have achieved this goal. Previously, the workflow used to take between 2 to 3 hours, but my application has trimmed that time down to only 15 - 20 minutes, including images, and 1 to 2 minutes when only data is being pushed. The app pushes recently approved collection objects from TMS, the internal asset management system of the Philadelphia Museum of Art, to Google Firestore. TMS is a MSSQL database, and my app transforms MSSQL tables into JSON in order to import them into FireStore. Finally, the PMA website then consumes the FireStore collections via Google Cloud Functions API. Overall, this application has revolutionized this data flow process and has made it much more efficient and effective.",
          role: "UX/UI, Development",
          preview: null,
        }}
      />
      <ProjectPreview
        classes="tms2web1"
        content={[
          {
            image: "/assets/tms/tms-detail1.jpg",
            alt: "Screen preview 1",
          },
          {
            image: "/assets/tms/tms-detail2.jpg",
            alt: "Screen preview 2",
          },
        ]}
      />

      <ProjectText
        title="Check-ins"
        text={
          <>
            <p className="font-zilla text-[18px] mb-[1rem] text-dark text-center leading-relaxed">
              Via the interface I constructed, content managers can utilize the
              React front-end to verify the recently pushed data of each content
              update.
            </p>
          </>
        }
      />

      <ProjectPreview
        classes="tms2web2"
        content={[
          {
            image: "/assets/tms/tms-detail3.jpg",
            alt: "Screen preview 1",
          },
          {
            image: "/assets/tms/tms-detail4.jpg",
            alt: "Screen preview 2",
          },
        ]}
      />

      <Footer />
    </div>
  );
}
