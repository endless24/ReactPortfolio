import PropTypes from "prop-types";

function SingleContactMeSocial({ social }) {
  const { Icon, url } = social;
  return (
    <div className="text-2xl h-12 w-12 border hover:border-cyan  hover:text-cyan transition-all duration-300 border-yellow rounded-full text-yellow p-3 flex items-center justify-center">
      <a href={url} className="">
        <Icon className=" " />
      </a>
    </div>
  );
}

SingleContactMeSocial.propTypes = {
  social: PropTypes.shape({
    Icon: PropTypes.elementType.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default SingleContactMeSocial;
