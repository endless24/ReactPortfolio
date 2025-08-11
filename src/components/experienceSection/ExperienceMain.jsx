import AllExperience from "./AllExperience";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";

function ExperienceMain() {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4 ">
      <ExperienceText />
      <ExperienceTop />
      <div className="w-full h-1 bg-lightBrown mt-4 lg:block sm:hidden"></div>
      <AllExperience />
    </div>
  );
}

export default ExperienceMain;
