import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import useProjectData from "./useProjectData";

function ProjectMain() {
  const { projects } = useProjectData();

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 py-10">
      <ProjectText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-32">
        {projects.map((project, index) => (
          <SingleProject key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectMain;
