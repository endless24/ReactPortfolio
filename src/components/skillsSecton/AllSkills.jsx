import { fadeIn } from "../../Motion/Vairants";
import { motion } from "framer-motion";
import SingleSkill from "./SingleSkill";
import useSkillaData from "./useSkillsData";

function AllSkills() {
  const { skills } = useSkillaData();

  return (
    <div className="flex items-center justify-center gap-2 relative max-w-[1200px] mx-auto">
      {skills.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", `0.${index}`)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <SingleSkill text={item.skill} iconSvg={<item.icon />} />
        </motion.div>
      ))}
    </div>
  );
}

export default AllSkills;
