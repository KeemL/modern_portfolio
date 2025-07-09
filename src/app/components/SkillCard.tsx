import Image from "next/image";

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
// const skillGroup: SkillGroup[] = [
//   {
//     header: "Languages and Frameworks",
//     skills: [
//       { title: "Java", level: "Experienced" },
//       { title: "Python", level: "Intermediate" },
//       // { title: "C+", level: "Competent" },
//       { title: "Javascript", level: "Experienced" },
//       { title: "Spring Boot", level: "Experienced" },
//     ],
//   },
//   {
//     header: "Languages",
//     skills: [
//       { title: "Java", level: "Experienced" },
//       { title: "Python", level: "Intermediate" },
//       // { title: "C+", level: "Competent" },
//     ],
//   },
// ];

export default function SkillCard({ header, skills }: SkillGroup) {
  return (
    // entire div holding the header and skill/title div
    <div className="bg-testcolor max-w-200px w-full rounded-lg border-3 border-black p-3 pb-0 shadow-sm">
      <h1 className="pt-1 text-center text-2xl font-bold text-neutral-100">
        {header}
      </h1>
      {/* removed the bg-amber-300 */}
      <div className="bg-calmblue my-4 grid grid-cols-2 place-content-center items-center gap-2 rounded-md">
        {skills.map((skill, index) => (
          // individual, matching skill title div
          <div key={index} className="my-4 flex space-x-1.5">
            {/* checkmark image icon */}
            <Image
              src="/images/checkmark.png"
              width={56}
              height={56}
              quality={100}
              alt={`Checkmark icon for ${skill.title}`}
            />
            {/* skill title and level text */}
            <div className="flex w-fit self-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {skill.title}
              </h3>
              {/* <p className="font-light text-gray-500">{skill.level}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
