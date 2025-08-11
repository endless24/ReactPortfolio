import { fadeIn } from "../../Motion/Vairants";
import { motion } from "framer-motion";
import useHeroData from "./useHeroData";
import { PiHexagonThin } from "react-icons/pi";

function HeroPic() {
  const { heroData } = useHeroData();

  const { heroImage } = heroData;

  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full  items-center justify-center flex"
    >
      <img src={heroImage} alt="JI" className=" h-[400px] w-auto" />
      <div className="absolute flex items-center justify-center -z-10 animate-pulse ">
        <PiHexagonThin className="md:h-[90%] sm:-[120%] min-h-[450px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
}

export default HeroPic;
