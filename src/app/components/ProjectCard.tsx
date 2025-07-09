import { Project } from "../projects/projectData";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
}

//ProjectCard to give info about my past projects
// Title, video clip, description of implementation, tech stack
export default function ProjectCard({ project }: ProjectCardProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, title, stack, category, description, video, imageUrl, link } =
    project;
  const router = useRouter();
  const [isFlipped, setFlipped] = useState(false);
  return (
    <div className="bg-surface relative m-4 flex h-fit flex-col justify-between rounded-lg border p-4 text-left md:shrink">
      <div className="border-primary bg-primary text-background absolute top-4 right-4 m-2.5 rounded-md border-2 px-4 py-2 text-sm font-semibold shadow-[0_0_20px_6px_#007ea7]">
        {category}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg bg-white">
          {imageUrl && (
            <Image
              className="object-contain"
              src={imageUrl}
              alt={`${title} logo`}
              width={16} // Aspect ratio width
              height={9} // Aspect ratio height
              layout="responsive"
              loading="lazy"
              onClick={() => router.push(`/projects/${id}`)}
            />
          )}
        </div>

        <div className="flex flex-col gap-y-3 px-1 text-left">
          <h1 className="text-xl font-bold sm:text-2xl">{title}</h1>

          {/* generates each tech stack entry into a div */}
          <h2 className="flex flex-wrap gap-2 text-sm font-medium sm:text-base">
            {stack.map((tech, i) => (
              <div
                className="border-muted text-secondary rounded-lg border bg-[rgba(0,126,167,0.3)] px-2 py-1"
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
        {/* for projects with video links to YouTube demos */}
        <div className="flex gap-x-4">
          {video && (
            <Link
              href={video}
              target="_blank"
              rel="noopener noreferrer"
              title="Watch a YouTube demo video!"
            >
              <div className="hover:bg-primary text-text hover:text-background mt-2 flex h-16 w-42 cursor-pointer rounded-lg border-2 bg-neutral-800 pl-2 font-semibold hover:translate-y-1">
                <div className="relative h-16 w-16 rounded-full fill-white">
                  <Image
                    src={"/images/youtube-button.svg"}
                    alt={"YouTube Play Button Icon"}
                    fill={true}
                    className="fill-white"
                  />
                </div>
                <div className="flex self-center">View Demo</div>
              </div>
            </Link>
          )}
          {/* for projects in the Game Dev category, display another button to Play the Game */}
          {link && category == "Game Dev" && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title="Download the game.exe zip files and play yourself!"
            >
              <div className="hover:bg-primary text-text hover:text-background mt-2 flex h-16 w-42 cursor-pointer rounded-lg border-2 bg-neutral-800 pl-2 font-semibold hover:translate-y-1">
                <div className="relative flex h-16 w-16 self-center rounded-full fill-white">
                  <Image
                    src={"/images/download-button.png"}
                    alt={"YouTube Play Button Icon"}
                    fill={true}
                    className="fill-white"
                  />
                </div>
                <div className="flex self-center">Play Game</div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
