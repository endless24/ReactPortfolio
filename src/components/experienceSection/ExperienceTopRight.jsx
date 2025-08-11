import useExperienceData from "./useExperienceData";

function ExperienceTopRight() {
  const { experienceRightData } = useExperienceData();

  const { title } = experienceRightData;

  return (
    <div className="xl:w-[25%] lg:w-[30%] border border-lightBrown p-4 rounded-xl">
      <p className="text-lg text-center text-lightGrey">{title}</p>
    </div>
  );
}

export default ExperienceTopRight;
