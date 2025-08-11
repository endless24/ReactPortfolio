export default function useExperienceData() {
  const experienceTitle = {
    title: "Experience",
  };

  const experienceLeftData = {
    title: "since 2022",
    yearsnum: "2+",
    yearsText: "yesrs",
    webText: "website",
    numWebsite: "11",
    text: "With 2 years of experience building dynamic and user-friendly web applications.",
    textBuget: "max budget",
    bugetNum: "$100k",
  };

  const experienceMiddleData = {
    image: "../../public/images/experience-image.png",
  };

  const experienceRightData = {
    title: (
      <>
        I specialize in {""}
        <span className="font-bold text-white">
          React and modern JavaScript
        </span>
        , leveraging best practices to create scalable and maintainable
        solutions.My experience spans working on diverse projects, from small
        business websites to
        <span className="font-bold text-white"> complex front-end systems</span>
        , always aiming for clean code and exceptional user experiences.
      </>
    ),
  };

  const experiences = [
    {
      job: "Front-End Developer",
      company: "Alex Apps",
      date: "2022 - Present",
      responsibilities: [
        "Implementing reusable components.",
        "Participating in large scale application.",
        "Working on the performance of web applications.",
        "Generating new ideas for better user experience.",
      ],
    },
    {
      job: "Course Instructor",
      company: "Nucamp",
      date: "2023 - Present",
      responsibilities: [
        "Explaining and facilitating web development concepts.",
        "Help students with their assignments and grade them weekly.",
        "Provide support for students through their learning journey.",
      ],
    },
    {
      job: "Course Instructor",
      company: "Sprints",
      date: "2024 - Present",
      responsibilities: [
        "Teaching JavaScript, React and TailwindCSS.",
        "Participating in preparing course materials.",
        "Helping students through their way in learning web development technologies.",
      ],
    },
  ];

  return {
    experienceTitle,
    experienceLeftData,
    experienceMiddleData,
    experienceRightData,
    experiences,
  };
}
