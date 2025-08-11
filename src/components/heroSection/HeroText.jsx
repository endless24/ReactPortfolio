import useHeroData from "./useHeroData";
import { motion } from "framer-motion";
import { fadeIn } from "../../Motion/Vairants";

function HeroText() {
  const { heroData } = useHeroData();

  const { heroText, heroName, heroDescription, heroButtonText } = heroData;

  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-cyan"
      >
        {heroText}
      </motion.h2>

      <motion.h1
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-yellow font-bold uppercase"
      >
        {heroName}
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className=" md:whitespace-pre-line text-lg  md:items-start sm:items-center"
      >
        {heroDescription}
      </motion.p>

      <button className="border border-cyan rounded-full py-2 px-4 text-lg flex items-center mt-4 bg-gradient-to-r from-black to-yellow hover:border-yellow hover:bg-yellow capitalize font-semibold md:self-start sm:self-center transition-all duration-500 hover:scale-95">
        {heroButtonText}
      </button>
    </div>
  );
}

export default HeroText;
