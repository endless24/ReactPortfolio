import { fadeIn } from "../../Motion/Vairants";
import { motion } from "framer-motion";
import useSkillsData from "./useSkillsData";

function AllSkillsSM() {
  const { skills } = useSkillsData();

  return (
    <div className=" grid md:grid-cols-4 sm:grid-cols-2 gap-12  my-12">
      {skills.map((item, index) => (
        <motion.div
          variants={fadeIn("up", `0.${index}`)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          key={index}
          className="flex flex-col items-center"
        >
          <item.icon className="text-7xl text-yellow" />

          <p className="text-center mt-4">{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default AllSkillsSM;
