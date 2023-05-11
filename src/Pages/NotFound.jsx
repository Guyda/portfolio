import Footer from "../Components/Footer";
import SEO from "../Components/SEO";

export default function NotFound() {
  return (
    <div>
      <SEO
        title="404 - Guyda Bru, Full-Stack Developer"
        description="20 years experience designing, developing, deploying"
        name="guyda.com"
        type="website"
      />
      <section className="block min-h-screen bg-dark">
        <div className="intro-section relative box-border py-[40vh] flex flex-col items-center z-100 ">
          <div className="intro-content block w-full text-center font-lexend select-none z-10">
            <h1 className="whitespace-nowrap block relative box-border text-[0] font-bold overflow-hidden ">
              <span className="text1 block tewxt-ecru leading-none text-titlesr page-title ">
                NotFound
              </span>
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
