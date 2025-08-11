import PropTypes from "prop-types";

function SingleSkill({ text, iconSvg }) {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500">
      <div className="flx flex-col items-center  relative gap-2">
        <div className="bg-white text-cyan rounded-full h-[100px] w-[100px] flex items-center justify-center hover:text-darkGrey hover:scale-105 transition-all duration-500 transform border-4 border-yellow text-6xl">
          {iconSvg}
        </div>
        <p className="text-white py-1 text-center font-bold rounded-br-lg rounded-tl-xl mt-2 border-[1px] border-cyan bg-darkGrey">
          {text}
        </p>
      </div>
      <div className="bg-yellow w-[100px]  h-[200px] absolute top-[50px] -z-10"></div>
    </div>
  );
}

SingleSkill.propTypes = {
  text: PropTypes.string.isRequired,
  iconSvg: PropTypes.element.isRequired,
};

export default SingleSkill;
