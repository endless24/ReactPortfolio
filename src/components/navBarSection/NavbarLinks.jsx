import useNavbarLink from "./useNavbarLink";
import { Link } from "react-scroll";

function NavbarLinks() {
  const { links } = useNavbarLink();

  return (
    <ul className="flex  gap-6 font-semibold text-center   lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-1/2 -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/25 backdrop-blur-lg sm:w-full lg:bg-black py-0">
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
            to={link.section}
            smooth={true}
            duration={500}
            offset={-160}
            spy={true}
            activeClass="active"
            className=" hover:text-cyan transition-all duration-500"
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-yellow w-0 group-hover:w-full h-[1px] transition-all duration-500 "></div>
        </li>
      ))}
    </ul>
  );
}

export default NavbarLinks;
