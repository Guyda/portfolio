import Footer from "../Components/Footer";
import MagneticButton from "../Components/MagneticButton";
import SEO from "../Components/SEO";
import { SectionTitle } from "../Components/Sections";
import { useEffect, useRef } from "react";

export default function Contact() {
  const contact = useRef(null);
  const contactSpan = useRef(null);

  useEffect(() => {
    const encEmail = "Z3V5ZGF2aWRAZ21haWwuY29t";
    if (typeof window !== "undefined") {
      contact.current.setAttribute("href", "mailto:".concat(atob(encEmail)));
      contactSpan.current.innerHTML = "".concat(atob(encEmail));
    }
  }, []);

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
          title1: "Let's be",
          color1: "text-ecru",
          title2: "in touch",
          color2: "text-daisybush",
          subtitle: (
            <>
              <MagneticButton
                scale={2}
                tollerance={0.8}
                speed={0.3}
                borderRadius="50%"
                className="magnetic-button p-0 bg-tranparent touch-none p-[3rem] flex items-center justify-center page-fadein"
              >
                <a
                  href="#"
                  ref={contact}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="bg-daisybush px-[1.75rem] py-[1.25rem] rounded-lg flex flex-col justify-center items-center transform transition-all text-ecru ring-0 ring-gray-300 hover:ring-8 hover:bg-goldenyellow group-focus:ring-4 ring-opacity-30 duration-300 delay-150 hover:text-dark text-[18px]">
                    <span ref={contactSpan}></span>
                  </button>
                </a>
              </MagneticButton>
            </>
          ),
        }}
      />
      {/* <section className="min-h-screen flex items-center justify-center flex-col pb-24 space-between text-center">
        <p className="max-w-prose text-darker font-zilla text-[18px] px-[1rem] page-fadein">
          My inbox is always open like a welcoming home screen, ready and
          waiting for your questions, ideas, or even just a casual "hello
          world." So don't be a stranger - hit me up and let's chat about all
          things web-related!
        </p>
      </section> */}
      <Footer />
    </div>
  );
}
