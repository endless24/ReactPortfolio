import { fadeIn } from "../../Motion/Vairants";
import { motion } from "framer-motion";
import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopMiddle from "./ExperienceTopMiddle";
import ExperienceTopRight from "./ExperienceTopRight";

function ExperienceTop() {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex lg:flex-row sm:flex-col gap-4 items-center j"
    >
      <ExperienceTopLeft />
      <ExperienceTopMiddle />
      <ExperienceTopRight />
    </motion.div>
  );
}

export default ExperienceTop;
