import useExperienceData from "./useExperienceData";

function ExperienceTopMiddle() {
  const { experienceMiddleData } = useExperienceData();

  const { image } = experienceMiddleData;

  return (
    <div className="lg:w-[35%] md:w-[50%] sm:w-[80%]">
      <img src={image} alt="Experience Top Middle" />
    </div>
  );
}

export default ExperienceTopMiddle;
