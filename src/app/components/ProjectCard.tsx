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
    <div className="m-4 grid h-full w-4/5 gap-x-4 gap-y-2 rounded-lg bg-blue-600 p-4 text-left md:shrink">
      <div className="max-h-fit bg-green-500">
        <h1 className="place-self-center text-center text-4xl font-bold md:shrink">
          {title}
        </h1>
      </div>
      {/* <img src={video} /> */}

      <div>
        <h2 className="flex max-h-fit w-fit max-w-fit gap-x-6 justify-self-center rounded bg-amber-200 px-2 py-1 pl-2 text-xl font-semibold text-black">
          {stack.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </h2>
      </div>

      <h1 className="max-h-fit gap-y-2 rounded bg-purple-500 p-2 text-xl text-pretty hyphens-none md:text-balance">
        {description}
      </h1>
    </div>
  );
}
