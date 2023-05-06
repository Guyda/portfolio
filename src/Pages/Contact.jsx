import Footer from "../Components/Footer";
import SEO from "../Components/SEO";
import { SectionTitle } from "../Components/Sections";

export default function Contact() {
  return (
    <div className="bg-pink">
      <SEO
        title="Contact - Guyda Bru, Full-Stack Developer"
        description="20 years experience designing, developing, deploying"
        name="guyda.com"
        type="website"
      />
      <SectionTitle
        titles={{
          title1: "Contact",
          color1: "text-ecru",
        }}
      />
      <Footer />
    </div>
  );
}
