import SkillCard from "../components/SkillCard";

export default function Skills() {
  return (
    <div className="flex max-h-1/2 place-content-center gap-15 px-30">
      <SkillCard
        header="Languages and Frameworks"
        skills={[
          { title: "Java", level: "Experienced" },
          { title: "Python", level: "Experienced" },
          { title: "Spring Boot", level: "Experienced" },
          { title: "Javascript", level: "Experienced" },
          { title: "Tailwind", level: "Experienced" },
          { title: "C+", level: "Experienced" },
        ]}
      />

      <SkillCard
        header="Tools and Programs"
        skills={[
          { title: "Unreal Engine", level: "Experienced" },
          { title: "Unity", level: "Experienced" },
          { title: "Figma", level: "Experienced" },
          { title: "Premiere Pro", level: "Experienced" },
          { title: "Photoshop", level: "Experienced" },
          { title: "Git", level: "Experienced" },
        ]}
      />
    </div>
  );
}
