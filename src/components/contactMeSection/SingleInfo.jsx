import PropTypes from "prop-types";

function SingleInfo({ info }) {
  const { Icon, text } = info;
  return (
    <div className="flex gap-4 items-center justify-start ">
      <Icon className="text-3xl text-yellow " />
      <p className="text-white text-lg">{text}</p>
    </div>
  );
}

SingleInfo.propTypes = {
  info: PropTypes.shape({
    Icon: PropTypes.elementType.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleInfo;
