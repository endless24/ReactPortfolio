import PropTypes from "prop-types";

function SingleExperience({ experience }) {
  const { job, company, date, responsibilities } = experience;
  return (
    <div className="md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-yellow border-dashed rounded-2xl mt-12 p-4">
      <p className="font-bold text-cyan">{job}</p>
      <p className="text-yellow">{company}</p>
      <p className="text-lightGrey">{date}</p>
      <ul className="list-disc  mt-4 pl-4 text-lightGrey">
        {responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  );
}

SingleExperience.propTypes = {
  experience: PropTypes.shape({
    job: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default SingleExperience;
