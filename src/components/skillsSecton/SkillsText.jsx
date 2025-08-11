import { fadeIn } from "../../Motion/Vairants";
import useSkillsData from "./useSkillsData";
import { motion } from "framer-motion";

function SkillsText() {
  const { SkillsText } = useSkillsData();

  const { title, description } = SkillsText;

  return (
    <div className="flex flex-col items-center mt-[100px]">
      <motion.h2
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-6xl text-cyan mb-10 capitalize"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-lg text-center "
      >
        {description}
      </motion.p>
    </div>
  );
}

export default SkillsText;
