import ExperienceInfo from "./ExperienceInfo";
import useExperienceData from "./useExperienceData";

function ExperienceTopLeft() {
  const { experienceLeftData } = useExperienceData();

  const {
    title,
    text,
    textBuget,
    bugetNum,
    yearsnum,
    yearsText,
    webText,
    numWebsite,
  } = experienceLeftData;

  return (
    <div className="flex flex-col gap-6 w-[300px] ">
      <p className="uppercase text-yellow font-bold text-3xl font-special text-center">
        {title}
      </p>
      <div className="flex items-center gap-4 justify-center">
        <ExperienceInfo number={yearsnum} text={yearsText} />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number={numWebsite} text={webText} />
      </div>
      <p className="text-center">{text}</p>
      <ExperienceInfo number={bugetNum} text={textBuget} />
    </div>
  );
}

export default ExperienceTopLeft;
