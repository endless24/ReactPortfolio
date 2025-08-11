import HeroPic from "./HeroPic";
import HeroText from "./HeroText";

function HeroMain() {
  return (
    <div className="pt-40">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto items-center justify-between relative px-4 gap-8">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
}

export default HeroMain;
