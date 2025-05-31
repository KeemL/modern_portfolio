import { Project } from "../projects/projectData";

interface ProjectCardProps {
  project: Project;
}

//ProjectCard to give info about my past projects
// Title, video clip, description of implementation, tech stack
export default function ProjectCard({ project }: ProjectCardProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title, stack, description, video, imageUrl, link } = project;
  return (
    <div className="flex">
      <div className="">
        <h1> {title}</h1>
      </div>
      <img src={video} />

      <h2> {stack}</h2>
      <h3> {description}</h3>
    </div>
  );
}
