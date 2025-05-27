import ProjectCard from "@/app/components/ProjectCard";

export default function Projects() {
  return (
    <div>
      <ProjectCard
        title="MEEPS - Managing Emerging Environmental Pollutant Severity"
        stack={["React", "Java,", "Spring Boot"]}
        description="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore atque delectus molestias pariatur consectetur non eaque minima hic, inventore aut obcaecati enim possimus aliquam perspiciatis reprehenderit omnis asperiores repellat? Delectus.</p>"
        video="test.mp4"
      />
    </div>
  );
}
