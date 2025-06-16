import { Project } from "../projects/projectData";
// import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

//ProjectCard to give info about my past projects
// Title, video clip, description of implementation, tech stack
export default function ProjectCard({ project }: ProjectCardProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title, stack, category, description, video, imageUrl, link } =
    project;
  return (
    <div className="bg-vandyke m-4 flex h-[500px] w-4/5 flex-col justify-between rounded-lg border p-4 text-left md:shrink">
      <div className="flex flex-col gap-4">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`${title} logo`}
            className="h-32 w-auto self-start rounded-md object-contain"
          />
        )}

        <h1 className="inline-block max-h-4/5 min-h-15 min-w-full text-3xl font-bold">
          {title}
        </h1>

        {/* generates each tech stack entry into a div */}
        <div>
          <h2 className="bg-foreground flex max-h-fit w-fit max-w-fit gap-x-4 justify-self-center rounded-lg border px-2 py-1 pl-2 text-lg font-semibold text-black">
            {stack.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </h2>
        </div>

        <h1 className="bg-olive min-h-30 gap-y-2 rounded p-2 text-xl text-pretty">
          {description}
        </h1>
      </div>

      {/* <Link href={`/projects/${project.id}`}> */}
      {link && (
        <Link href={link}>
          <div className="w-fit cursor-pointer rounded-lg border-2 bg-neutral-900 p-2 font-semibold">
            View Project
          </div>
        </Link>
      )}
    </div>
  );
}
