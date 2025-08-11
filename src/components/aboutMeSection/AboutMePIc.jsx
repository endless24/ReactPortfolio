import { fadeIn } from "../../Motion/Vairants";
import { motion } from "framer-motion";
import useAboutMeData from "./useAboutMeData";
function AboutMePIc() {
  const { aboutMeData } = useAboutMeData();

  const { image } = aboutMeData;

  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-[500px] w-[300px] relative"
    >
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
          src={image}
          alt="about me"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="h-[500px] w-[250px] bg-yellow absolute botton-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </motion.div>
  );
}

export default AboutMePIc;
