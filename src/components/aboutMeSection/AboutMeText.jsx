import { fadeIn } from "../../Motion/Vairants";
import { motion } from "framer-motion";
import useAboutMeData from "./useAboutMeData";

function AboutMeText() {
  const { aboutMeData } = useAboutMeData();

  const { title, description, buttonText } = aboutMeData;

  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-6xl text-cyan capitalize mb-10"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        {description}
      </motion.p>
      <button className="border border-cyan rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-cyan capitalize md:self-start sm:self-center transition-all duration-500 bg-gradient-to-r from-black to-yellow hover:border-yellow hover:scale-95 font-bold ">
        {buttonText}
      </button>
    </div>
  );
}

export default AboutMeText;
