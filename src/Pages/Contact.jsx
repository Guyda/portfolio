import { motion } from "framer-motion";
import { animation } from "../Helpers";

export default function Contact() {
  return (
    <motion.div {...animation}>
      <section className="block min-h-screen bg-goldenyellow">
        <div className="intro-section relative box-border py-[15vh] flex flex-col items-center z-100 ">
          <div className="intro-content block w-full text-center font-lexend select-none z-10">
            <h1 className="whitespace-nowrap block relative box-border text-[0] font-bold">
              <span className="text1 block text-ecru leading-none text-titlesr">
                Contact
              </span>
            </h1>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
