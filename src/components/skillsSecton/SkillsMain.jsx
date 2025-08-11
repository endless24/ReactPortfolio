import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";

function SkillsMain() {
  return (
    <div id="skills">
      <div className=" max-w-[1200px] px-4 mx-auto relative min-h-[600px] overflow-hidden">
        <SkillsText />
        <div className="bottom-[50px] absolute left-[50%] -translate-x-1/2 lg:block sm:hidden">
          <AllSkills />
        </div>
        <div className="lg:hidden sm:block">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
}

export default SkillsMain;
