interface ProjectCardProps {
    title: string;
    stack: string;
    description: string
    image: string
}


//ProjectCard to give info about my past projects
// Title, video clip, description of implementation, tech stack
export default function ProjectCard({title, stack, description, image}: ProjectCardProps) {
    return (
        <div>
            <div className="text-center">
            <h1> {title}</h1>
            </div>
            
            <h2> {stack}</h2>
            <h3> {description}</h3>
        </div>
    );
}