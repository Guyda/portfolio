import SEO from "../../Components/SEO";
import { ProjectIntro, ProjectPreview } from "../../Components/Sections";
import Footer from "../../Components/Footer";
import ProjectText from "../../Components/Sections/ProjectText";

export default function Johnson() {
  return (
    <div className="bg-ecru">
      <SEO
        title="JGJ Publication - Guyda Bru, Full-Stack Developer"
        description="As the primary developer on the project, I led the development of the Johnson Publication, Philamuseum of Art's first digital publication. The objective was to create a Single-Page React application that included a range of advanced functionalities, such as zoomable images for comparisons using a IIIF server, dynamic footnotes within the text, chapter-based navigation, and an archival section containing 14,000 items."
        name="JGJ Publication"
        type="website"
      />
      <ProjectIntro
        content={{
          title: "JGJ Publication",
          years: "2018–2023",
          description:
            "As the primary developer on the project, I led the development of the Johnson Publication, Philamuseum of Art's first digital publication. The objective was to create a Single-Page React application that included a range of advanced functionalities, such as zoomable images for comparisons using a IIIF server, dynamic footnotes within the text, chapter-based navigation, and an archival section containing 14,000 items.",
          role: "UX/UI, Development",
          preview: null,
        }}
      />

      <ProjectPreview
        classes="preview1"
        content={[
          {
            image: "/assets/jgj/jgj-environment.png",
            alt: "Screen preview 1",
          },
          {
            image: "/assets/jgj/jgj-homepage.jpg",
            alt: "Screen preview PMA homepage",
          },
        ]}
      />

      <ProjectText
        title="Features"
        text={
          <>
            <p className="font-zilla text-[18px] mb-[1rem] text-dark text-center leading-relaxed">
              The publication's development included a comparative zoomable
              images, ElasticSearch and search filters.
            </p>
          </>
        }
      />

      <ProjectPreview
        classes="preview2"
        content={[
          {
            image: "/assets/jgj/jgj-detail1.jpg",
            alt: "Screen preview detail 1",
          },
          {
            image: "/assets/jgj/jgj-detail2.jpg",
            alt: "Screen preview detail 2",
          },
          {
            image: "/assets/jgj/jgj-detail3.jpg",
            alt: "Screen preview detail 3",
          },
        ]}
      />

      <ProjectText
        title="Archives"
        text={
          <>
            <p className="font-zilla text-[18px] mb-[1rem] text-dark text-center leading-relaxed">
              To enable users to explore the 14,000 archival documents collected
              by John G. Johnson over the years, we implemented a chapter-based
              navigation system for the Johnson Publication's Archives.
            </p>
          </>
        }
      />

      <ProjectPreview
        classes="preview3"
        content={[
          {
            image: "/assets/jgj/jgj-archive.jpg",
            alt: "Screen preview archive",
          },
        ]}
      />

      <Footer />
    </div>
  );
}
