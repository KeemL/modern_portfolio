interface Skill {
    title: string;
    level: string;
}

interface SkillGroup {
    header: string;

    //array of skills
    skills: Skill[];
}

//use type to define primitive types

// Constant of SkillGroup arrays with a header string + skills array, 
const skillGroup: SkillGroup[] = [
    { 
        header: "Languages and Frameworks",
        skills: [
            { title: "Java", level: "Experienced" },
            { title: "Python", level: "Intermediate" },
            // { title: "C+", level: "Competent" },
            { title: "Javascript", level: "Experienced"},
            { title: "Spring Boot", level: "Experienced"}
            ]
    },
    {
        header: "Languages",
        skills: [
            { title: "Java", level: "Experienced" },
            { title: "Python", level: "Intermediate" },
            // { title: "C+", level: "Competent" },
            ]
    }
]

const skillTitle = skillGroup[0];
const skillType = skillGroup[1];

export default function SkillCard({header, skills}: SkillGroup) {
    return (
     <div>
        {header}
        {skills.map((skill, index) => <div className="text-3xl font-bold underline .bg-red-500" key={index} >
            <li> {skill.title}: {skill.level}</li>
        </div>)}
    </div>
   
    )
}


