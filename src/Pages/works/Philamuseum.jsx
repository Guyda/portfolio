import SEO from "../../Components/SEO";
import { ProjectIntro, ProjectPreview } from "../../Components/Sections";
import Footer from "../../Components/Footer";
import ProjectText from "../../Components/Sections/ProjectText";

export default function Philamuseum() {
  return (
    <div className="bg-ecru">
      <SEO
        title="Philamuseum.org - Guyda Bru, Full-Stack Developer"
        description="My main responsibility in this project was to create the website's front-end. However, I was also heavily involved in the back-end processes, including the architecture of the entire site, the development approach, user-experience, and design reviews. I transformed the previous monolithic architecture into a micro-service architecture by decoupling the front-end and back-end and selecting appropriate web solutions for each challenge. I used React to develop the front-end, with Server-Side Rendering features, and managed the back-end through Sanity. Additionally, I created APIs to provide collection data and search functionality. This project was one of the most significant accomplishments in my career as a developer."
        name="Philamuseum.org"
        type="website"
      />
      <ProjectIntro
        content={{
          title: "Philamuseum.org",
          years: "2018–2023",
          description:
            "My main responsibility in this project was to create the website's front-end. However, I was also heavily involved in the back-end processes, including the architecture of the entire site, the development approach, user-experience, and design reviews. I transformed the previous monolithic architecture into a micro-service architecture by decoupling the front-end and back-end and selecting appropriate web solutions for each challenge. I used React to develop the front-end, with Server-Side Rendering features, and managed the back-end through Sanity. Additionally, I created APIs to provide collection data and search functionality. This project was one of the most significant accomplishments in my career as a developer.",
          role: "UX/UI, Development",
          preview: "https://philamuseum.org",
        }}
      />

      <ProjectPreview
        classes="preview1"
        content={[
          {
            image: "/assets/pma/pma-environment.png",
            alt: "Screen preview 1",
          },
          {
            image: "/assets/pma/pma-homepage.jpg",
            alt: "Screen preview PMA homepage",
          },
        ]}
      />

      <ProjectText
        title="ElasticSearch"
        text={
          <>
            <p className="font-zilla text-[18px] mb-[1rem] text-dark text-center leading-relaxed">
              ElasticSearch has played a crucial role in driving the dynamic
              content and search functionality of the philamuseum.org website.
              While it was primarily utilized as a search tool, it was also
              carefully calibrated to deliver content based on managed scoring
              and relevance. In addition, a combination of front-end and
              back-end API calls were developed to establish a predictive search
              feature.
            </p>
          </>
        }
      />

      <ProjectPreview
        classes="preview2"
        content={[
          {
            image: "/assets/pma/pma-search.jpg",
            alt: "Screen preview search",
          },
          {
            image: "/assets/pma/pma-suggestion.jpg",
            alt: "Screen preview suggestions",
          },
        ]}
      />

      <ProjectText
        title="Calendar"
        text={
          <>
            <p className="font-zilla text-[18px] mb-[1rem] text-dark text-center leading-relaxed">
              ElasticSearch was leveraged to support the calendar feature on the
              website. This involved utilizing its content aggregation, filter,
              and date range capabilities.
            </p>
          </>
        }
      />

      <ProjectPreview
        classes="preview3"
        content={[
          {
            image: "/assets/pma/pma-calendar.jpg",
            alt: "Screen preview calendar",
          },
        ]}
      />

      <ProjectText
        title="Object Page"
        text={
          <>
            <p className="font-zilla text-[18px] mb-[1rem] text-dark text-center leading-relaxed">
              From a technical standpoint, the object pages required a complete
              overhaul. The goal was to enable visitors to zoom in on the
              artwork and encourage them to learn more about it by presenting
              similar objects and additional information. I sourced the data
              from various outlets, with primary object data being obtained from
              Google FireStore through a Cloud Function. The images were served
              via a Micr.io IIIF image server, while ElasticSearch and Sanity.io
              CMS were utilized to manage additional content enhancements.
            </p>
          </>
        }
      />

      <ProjectPreview
        classes="preview4"
        content={[
          {
            image: "/assets/pma/pma-object.jpg",
            alt: "Screen preview object",
          },
        ]}
      />

      <Footer />
    </div>
  );
}
