import { Project, ProjectCategory } from "./projectData";
import { validProjects } from "../utils/projectUtils";
import ProjectCard from "@/app/components/ProjectCard";

// Created a prop interface since React passes an object of props, never raw values
interface ProjectsProps {
  category: ProjectCategory;
}

// This component calls valid projectrs for a list of projects under a certain category then creates a ProjectCard for each.
export default function FilteredProjects({ category }: ProjectsProps) {
  const projects: Project[] = validProjects(category);

  // const { title, stack, description, video, imageUrl, link } = project;
  return (
    <div className="m-4 mx-auto grid max-w-7xl grid-cols-2 justify-center gap-y-2">
      {projects.map((project) => (
        <div key={project.id} className="">
          <ProjectCard key={project.id} project={project} />
        </div>
      ))}
    </div>
  );
}
