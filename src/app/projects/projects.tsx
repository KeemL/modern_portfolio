import { Project, ProjectCategory } from "./projectData";
import { validProjects } from "./projectUtils";
import ProjectCard from "@/app/components/ProjectCard";

interface ProjectsProps {
  category: ProjectCategory;
}

export default function FilteredProjects({ category }: ProjectsProps) {
  const projects: Project[] = validProjects(category);
  //   console.log("Rendering category:", category);

  // const { title, stack, description, video, imageUrl, link } = project;
  return (
    <div className="">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
