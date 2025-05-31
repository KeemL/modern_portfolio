import SkillCard from "@/app/components/SkillCard";


export default function Experiences() {
    return (
        <div className="flex place-content-center max-h-1/2 px-30 gap-15">
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
                    { title: "After Effects", level: "Experienced" },
                    { title: "Premiere Pro", level: "Experienced" },
                    { title: "Photoshop", level: "Experienced" },
                    { title: "Git", level: "Experienced" },
                  ]}
                />
            </div>
    )
}