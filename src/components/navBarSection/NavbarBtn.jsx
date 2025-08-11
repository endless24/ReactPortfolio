import { LuArrowDownRight } from "react-icons/lu";

function NavbarBtn() {
  return (
    <button className="px-4 py-2  rounded-full text-xl font-bold border-cyan border flex items-center gap-1 bg-gradient-to-r from-black to-yellow hover:border-yellow  hover:scale-95 transition duration-500 hover:shadow-cyanShadow">
      Hire Me
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
}

export default NavbarBtn;
