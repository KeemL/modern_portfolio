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
    <div className="bg-vandyke m-4 flex h-full w-4/5 flex-col items-center gap-4 rounded-lg p-4 text-left md:shrink">
      <div className="min-h-25">
        <div className="bg-foreground flex max-h-fit max-w-fit items-center justify-self-center rounded-lg p-3">
          <h1 className="text-center text-4xl font-bold text-black md:shrink">
            {title}
          </h1>
        </div>
      </div>
      {/* <img src={video} /> */}

      <div>
        <h2 className="bg-dodgerblue flex max-h-fit w-fit max-w-fit gap-x-4 justify-self-center rounded px-2 py-1 pl-2 text-xl font-semibold text-black">
          {stack.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </h2>
      </div>

      <h1 className="bg-olive min-h-30 gap-y-2 rounded p-2 text-xl text-pretty">
        {description}
      </h1>

      <a className="flex w-fit self-start rounded-sm bg-white p-2 font-semibold text-black">
        Learn More{" "}
      </a>
    </div>
  );
}
