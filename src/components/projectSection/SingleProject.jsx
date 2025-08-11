import PropTypes from "prop-types";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { fadeIn } from "../../Motion/Vairants";
import { motion } from "framer-motion";

function SingleProject({ project }) {
  const { name, image, align, link, year } = project;

  return (
    <motion.div
      variants={fadeIn(align, 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-yellow">{name}</h2>
        <h2
          className={`text-xl font-thin font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <a
          href={link}
          className={`text-lg flex gap-2 items-center text-cyan hover:text-yellow transition duration-500 sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          } `}
        >
          View <BiSolidRightTopArrowCircle />
        </a>
      </div>
      <div className="h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transition duration-500 transform border border-yellow">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt={name} className="w-full h-full" />
      </div>
    </motion.div>
  );
}

SingleProject.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    align: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleProject;
