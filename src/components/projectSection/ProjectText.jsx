import { fadeIn } from "../../Motion/Vairants";
import { motion } from "framer-motion";
import useProjectData from "./useProjectData";

function ProjectText() {
  const { projectText } = useProjectData();

  const { title, description } = projectText;

  return (
    <div className=" flex flex-col items-center mt-[100px]">
      <motion.h2
        variants={fadeIn("right", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-6xl text-cyan mb-10"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={fadeIn("left", 0.8)}
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

export default ProjectText;
