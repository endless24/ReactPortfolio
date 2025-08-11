import { fadeIn } from "../../Motion/Vairants";
import SingleExperience from "./SingleExperience";
import useExperienceData from "./useExperienceData";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

function AllExperience() {
  const { experiences } = useExperienceData();

  return (
    <motion.div
      variants={fadeIn("right", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex md:flex-row sm:flex-col justify-between items-center gap-4"
    >
      {experiences.map((experience, index) => (
        <div className="flex items-center " key={index}>
          <SingleExperience experience={experience} />
          {index < 2 ? (
            <motion.div
              variants={fadeIn("right", 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
            >
              <HiArrowRight className="text-yellow text-6xl lg:block sm:hidden ml-20" />
            </motion.div>
          ) : (
            ""
          )}
        </div>
      ))}
    </motion.div>
  );
}

export default AllExperience;
