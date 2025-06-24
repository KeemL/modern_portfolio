import { Project } from "../projects/projectData";
import Image from "next/image";
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
    <div className="bg-vandyke m-4 flex h-fit w-4/5 flex-col justify-between rounded-lg border p-4 text-left md:shrink">
      <div className="flex flex-col gap-4">
        <div>
          {imageUrl && (
            <Image
              className="flex justify-self-center rounded-lg bg-amber-300"
              src={imageUrl}
              alt={`${title} logo`}
              // fill={true}
              width={400}
              height={300}
              loading="lazy"
              // className="h-32 w-auto self-start rounded-md object-contain"
            />
          )}
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="min-w-full pl-2 text-2xl font-bold">{title}</h1>

          {/* generates each tech stack entry into a div */}

          <h2 className="flex w-fit gap-x-2 pl-2 text-lg font-medium">
            {stack.map((tech, i) => (
              <div
                className="text-b text-dodgerblue rounded-lg border bg-white px-2"
                key={i}
              >
                {tech}
              </div>
            ))}
          </h2>
        </div>

        {/* <h1 className="min-h-30 gap-y-2 rounded-md bg-amber-900 p-2 pl-2 text-xl text-pretty">
          {description}
        </h1> */}
        {/* <Link href={`/projects/${project.id}`}> */}
        {link && (
          <Link href={link}>
            <div className="w-fit cursor-pointer rounded-lg border-2 bg-neutral-900 p-2 font-semibold">
              View Project
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
