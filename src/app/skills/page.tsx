import SkillCard from "../components/SkillCard";

export default function Skills() {
  return (
    <div className="flex max-h-1/2 place-content-center gap-15 px-30">
      <SkillCard
        header="Languages & Frameworks"
        skills={[
          { title: "Java", level: "Experienced" },
          { title: "Python", level: "Experienced" },
          { title: "C++", level: "Experienced" },
          { title: "JavaScript", level: "Experienced" },
          { title: "TypeScript", level: "Experienced" },
          { title: "SQL", level: "Proficient" },
          { title: "React", level: "Proficient" },
          { title: "Node.js", level: "Proficient" },
          { title: "Spring Boot", level: "Experienced" },
        ]}
      />

      <SkillCard
        header="Development Tools & Infrastructure"
        skills={[
          { title: "Git", level: "Experienced" },
          { title: "Docker", level: "Beginner" },
          { title: "Postman", level: "Beginner" },
          { title: "Figma", level: "Experienced" },
          { title: "GitHub Actions ", level: "Proficient" },
        ]}
      />

      <SkillCard
        header="Creative & Game Development"
        skills={[
          { title: "Unreal Engine", level: "Experienced" },
          { title: "Unity", level: "Experienced" },
          { title: "Photoshop", level: "Experienced" },
          { title: "Premiere Pro", level: "Experienced" },
          { title: "Tailwind CSS", level: "Experienced" },
        ]}
      />
    </div>
  );
}
