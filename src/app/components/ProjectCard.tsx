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
    <div className="m-4 grid gap-x-4 rounded-lg bg-amber-700 p-4">
      <div className="">
        <h1 className="text-3xl font-bold"> {title}</h1>
      </div>
      <img src={video} />

      <div className="rounded">
        <h2 className="text-4x1 font-semibold text-black"> {stack}</h2>
      </div>

      <h1 className="text-3x1 gap-y-2 pt-2 text-pretty hyphens-none md:text-balance">
        {description}
      </h1>
    </div>
  );
}
