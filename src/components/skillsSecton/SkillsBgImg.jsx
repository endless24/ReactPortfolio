import useSkillsData from "./useSkillsData";

function SkillsBgImg() {
  const { SkillsBgImg } = useSkillsData();

  const { image } = SkillsBgImg;

  return (
    <div className="border border-lightGrey relative  lg:block hidden">
      <div className="absolute bg-gradient-to-r from-yellow to-cyan opacity-50 w-full h-full"></div>
      <img src={image} alt="Skills Background" />
    </div>
  );
}

export default SkillsBgImg;
