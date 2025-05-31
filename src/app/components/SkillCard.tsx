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

// SkillGroup arrays with a header string + skills array
const skillGroup: SkillGroup[] = [
  {
    header: "Languages and Frameworks",
    skills: [
      { title: "Java", level: "Experienced" },
      { title: "Python", level: "Intermediate" },
      // { title: "C+", level: "Competent" },
      { title: "Javascript", level: "Experienced" },
      { title: "Spring Boot", level: "Experienced" },
    ],
  },
  {
    header: "Languages",
    skills: [
      { title: "Java", level: "Experienced" },
      { title: "Python", level: "Intermediate" },
      // { title: "C+", level: "Competent" },
    ],
  },
];

const skillTitle = skillGroup[0];
const skillType = skillGroup[1];


export default function SkillCard({ header, skills }: SkillGroup) {
  return (
    // entire div holding the header and skill/title div
    <div className="bg-foreground mb-10 w-2/5 rounded-lg border-3 border-black p-3 pb-0 shadow-sm">
      <h1 className="pt-1 text-center text-3xl font-bold text-black">
        {header}
      </h1>
      {/* removed the bg-amber-300 */}
      <div className="grid grid-cols-2 gap-2 place-content-center rounded-md">
        {skills.map((skill, index) => (
          // individual, matching skill title div
          <div
            key={index}
            className="w-3/4 flex place-self-center space-x-2 my-6"
          >
            {/* checkmark image icon */}
            <img
              className="h-16 w-16"
              src="/images/checkmark.png"
              alt={`Checkmark icon for ${skill.title}`}
            />
            {/* skill title and level text */}
            <div>
              <h3 className="min-w-lg text-xl font-semibold text-gray-800">
                {skill.title}
              </h3>
              <p className="font-light text-gray-600">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
