import Footer from "../Components/Footer";
import { SectionTitle } from "../Components/Sections";

export default function Contact() {
  return (
    <div className="bg-pink">
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
