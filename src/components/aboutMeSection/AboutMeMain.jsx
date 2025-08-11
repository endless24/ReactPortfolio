import { fadeIn } from "../../Motion/Vairants";
import { motion } from "framer-motion";
import AboutMePIc from "./AboutMePIc";
import AboutMeText from "./AboutMeText";

function AboutMeMain() {
  return (
    <motion.div
      variants={fadeIn("up", 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      id="about"
      className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto items-center justify-between relative px-4 gap-12 mt-[100px]"
    >
      <div>
        <AboutMeText />
      </div>
      <div>
        <AboutMePIc />
      </div>
    </motion.div>
  );
}

export default AboutMeMain;
