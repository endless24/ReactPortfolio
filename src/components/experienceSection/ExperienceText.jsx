import { fadeIn } from "../../Motion/Vairants";
import { motion } from "framer-motion";
import useExperienceData from "./useExperienceData";

function ExperienceText() {
  const { experienceTitle } = useExperienceData();

  const { title } = experienceTitle;

  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col items-center mt-[100px] justify-center "
    >
      <h2 className="text-cyan capitalize text-6xl mb-10">{title}</h2>
    </motion.div>
  );
}

export default ExperienceText;
