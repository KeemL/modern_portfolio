import SkillCard from "../components/SkillCard";

export default function Skills() {
  return (
    <div className="flex max-h-1/2 place-content-center gap-15 px-30">
      <SkillCard
        header="Languages & Frameworks"
        skills={[
          {
            title: "Java",
            level: "Experienced",
            imageUrl: "images/skills_logos/java.svg",
          },
          {
            title: "Python",
            level: "Experienced",
            imageUrl: "images/skills_logos/python.svg",
          },
          {
            title: "C++",
            level: "Experienced",
            imageUrl: "images/skills_logos/cplusplus.svg",
          },
          {
            title: "JavaScript",
            level: "Experienced",
            imageUrl: "images/skills_logos/javascript.svg",
          },
          {
            title: "TypeScript",
            level: "Experienced",
            imageUrl: "images/skills_logos/typescript.svg",
          },
          {
            title: "SQL",
            level: "Proficient",
            imageUrl: "images/skills_logos/sql.svg",
          },
          {
            title: "React",
            level: "Proficient",
            imageUrl: "images/skills_logos/react.svg",
          },
          {
            title: "Tailwind CSS",
            level: "Experienced",
            imageUrl: "images/skills_logos/tailwindcss.svg",
          },
          {
            title: "Spring Boot",
            level: "Experienced",
            imageUrl: "images/skills_logos/springboot.svg",
          },
        ]}
      />

      <SkillCard
        header="Tools & Infrastructure"
        skills={[
          {
            title: "Git",
            level: "Experienced",
            imageUrl: "images/skills_logos/git.svg",
          },
          {
            title: "Docker",
            level: "Beginner",
            imageUrl: "images/skills_logos/docker.svg",
          },
          {
            title: "Node.js",
            level: "Proficient",
            imageUrl: "images/skills_logos/nodedotjs.svg",
          },
          {
            title: "Postman",
            level: "Beginner",
            imageUrl: "images/skills_logos/postman.svg",
          },

          {
            title: "GitHub Actions",
            level: "Proficient",
            imageUrl: "images/skills_logos/githubactions.svg",
          },
          {
            title: "Vercel",
            level: "Beginner",
            imageUrl: "images/skills_logos/vercel.svg",
          },
          {
            title: "Microsoft Excel",
            level: "Intermediate",
            imageUrl: "/images/skills_logos/ms-excel.png",
          },
          {
            title: "Apache Maven",
            level: "Beginner",
            imageUrl: "images/skills_logos/apachemaven.svg",
          },
          {
            title: "Trello",
            level: "Proficient",
            imageUrl: "images/skills_logos/trello.svg",
          },
        ]}
      />

      <SkillCard
        header="Creative & Game Development"
        skills={[
          {
            title: "Unreal Engine",
            level: "Experienced",
            imageUrl: "images/skills_logos/unrealengine.svg",
          },
          {
            title: "Unity",
            level: "Experienced",
            imageUrl: "images/skills_logos/unity.svg",
          },
          {
            title: "Photoshop",
            level: "Experienced",
            imageUrl: "images/skills_logos/photoshop.svg",
          },
          {
            title: "Premiere Pro",
            level: "Experienced",
            imageUrl: "images/skills_logos/premierepro.svg",
          },

          {
            title: "Blender",
            level: "Experienced",
            imageUrl: "images/skills_logos/blender.svg",
          },
          {
            title: "Autodesk Maya",
            level: "Beginner",
            imageUrl: "images/skills_logos/autodeskmaya.svg",
          },
          {
            title: "Figma",
            level: "Experienced",
            imageUrl: "images/skills_logos/figma.svg",
          },
        ]}
      />
    </div>
  );
}
