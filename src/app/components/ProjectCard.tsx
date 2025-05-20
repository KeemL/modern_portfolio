interface ProjectCardProps {
    title: string;
    stack: string;
    description: string
}


//ProjectCard to give info about my past projects
// Title, video clip, description of implementation, tech stack
export default function ProjectCard({title, stack, description}: ProjectCardProps) {
    return (
        <div> 
            <h1> {title}</h1>
            <h2> {stack}</h2>
            <h3> {description}</h3>
        </div>
    );
}