import { useState } from "react";
import NavbarBtn from "./NavbarBtn";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import { GiHamburgerMenu } from "react-icons/gi";

function NavbarMain() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsMenuOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] translate-x-[-50%]  z-20  flex gap-4 mt-6">
      <div className=" flex  justify-between w-full  max-w-[1200px] mx-auto bg-black items-center  p-4 rounded-3xl border-[0.5px] border-cyan shadow-cyanShadow ">
        <NavbarLogo />
        <div className={`${isOpen ? "sm:block " : "sm:hidden"}  lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div className=" flex lg:hidden sm:block p-4 bg-black items-center justify-center  rounded-full border-[0.5px] border-cyan   shadow-cyanShadow cursor-pointer ">
        <button
          onClick={handleIsMenuOpen}
          className=" text-2xl p-3 border border-cyan rounded-full text-white shadow-cyanShadow "
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
}

export default NavbarMain;
