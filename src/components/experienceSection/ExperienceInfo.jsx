import PropTypes from "prop-types";

function ExperienceInfo({ text, number }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-bold text-cyan text-6xl">{number}</p>
      <p className="text-xl font-bold text-lightGrey uppercase -mt-4">{text}</p>
    </div>
  );
}

ExperienceInfo.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ExperienceInfo;
