export default function useProjectData() {
  const projectText = {
    title: "Projects",
    description:
      "I have worked on a variety of web development projects, ranging from responsive websites for small businesses to mobile applications and complex front-end interfaces.",
  };

  const projects = [
    {
      name: "Vacation of Africa",
      year: "Mar2022",
      align: "right",
      image: "../../public/images/website-img-1.jpg",
      link: "#",
    },
    {
      name: "Moola App",
      year: "Sept2022",
      align: "left",
      image: "../../public/images/website-img-2.webp",
      link: "#",
    },
    {
      name: "Tourzania",
      year: "Jan2023",
      align: "right",
      image: "../../public/images/website-img-3.jpg",
      link: "#",
    },
    {
      name: "Bank of Luck",
      year: "May2024",
      align: "left",
      image: "../../public/images/website-img-4.jpg",
      link: "#",
    },
  ];

  return { projectText, projects };
}
