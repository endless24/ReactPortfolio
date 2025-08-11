import useNavbarLink from "../navBarSection/useNavbarLink";
import { Link } from "react-scroll";

function FooterMain() {
  const { links } = useNavbarLink();

  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-28 "></div>
      <div className="md:flex  justify-between mt-4 w-[1200px] mx-auto">
        <p className="text-lightGrey text-3xl sm:text-xl uppercase">
          Joseph Iroh
        </p>
        <ul className="flex gap-4 text-lg text-lightGrey">
          {links.map((item, index) => (
            <li key={index}>
              <Link
                href={`#${item.section}`}
                to={item.section}
                smooth={true}
                duration={500}
                offset={-160}
                spy={true}
                className="transition-all duration-500 hover:text-white "
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-lightBrown lg:text-right sm:text-center max-w-[1200px]  mb-12 mt-2 mx-auto text-sm">
        2025 Joseph Iroh | All Rights Reserved.
      </p>
    </div>
  );
}

export default FooterMain;
