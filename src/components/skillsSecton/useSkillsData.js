import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrap } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";

export default function useSkillsData() {
  const skills = [
    {
      skill: "HTML",
      icon: FaHtml5,
    },
    {
      skill: "CSS",
      icon: FaCss3Alt,
    },
    {
      skill: "JavaScript",
      icon: IoLogoJavascript,
    },
    {
      skill: "Jquery",
      icon: DiJqueryLogo,
    },
    {
      skill: "ReactJS",
      icon: FaReact,
    },
    {
      skill: "Redux",
      icon: SiRedux,
    },
    {
      skill: "NextJS",
      icon: SiNextdotjs,
    },
    {
      skill: "TailwindCSS",
      icon: RiTailwindCssFill,
    },
    {
      skill: "Bootstrap",
      icon: BsBootstrap,
    },
  ];

  const SkillsText = {
    title: "my Skills",
    description:
      "I not only work with these technologies but excellent in using them with best practices to deliver high-quality results, I have been working with all these skills to build my portfolio projects and I am always eager to learn new technologies and improve my skills.",
  };
  const SkillsBgImg = {
    image: "../../public/images/subSkills.jpg",
  };

  return { skills, SkillsText, SkillsBgImg };
}
