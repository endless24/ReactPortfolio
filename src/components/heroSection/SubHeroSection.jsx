import useHeroData from "./useHeroData";

function SubHeroSection() {
  const { heroData } = useHeroData();

  const { subHeroText } = heroData;

  return (
    <div className="w-full border-y border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-6 items-center gag-4 bg-brown ">
      {subHeroText.map((data, index) => (
        <p key={index} className=" sm:hidden md:block">
          {data}
        </p>
      ))}
      <div className="w-full border-y border-lightGrey text-lightGrey justify-center uppercase text-4xl py-6 items-center bg-brown flex md:hidden">
        <p>{subHeroText[subHeroText.length - 1]}</p>
      </div>
    </div>
  );
}

export default SubHeroSection;
