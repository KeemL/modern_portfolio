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

// export default function SkillCard({ header, skills }: SkillGroup) {
//   return (
//     <div className="flex flex-col items-center p-4 bg-foreground ">
//       <h1 className=" text-black font-bold text-gray-700 text-2xl">{header}</h1>
//       {skills.map((skill, index) => (
//         <div key={index} className="flex items-center bg-red-100 p-4 rounded-md shadow-sm mb-4 space-x-4 w-full max-w-md" >
//           <img className="w-20 h-20 " src="/images/checkmark.png" alt="Png logo of a checkmark." />
//           <ul>
//             <li>
//               <h3 className="font-bold text-black text-2xl">{skill.title}</h3> <p className="text-black text-2xl text-gray-600/80 font-thin">{skill.level}</p>
//             </li>
//           </ul>
//         </div>
        
//       ))}
//     </div>
//   );
// }

export default function SkillCard({ header, skills }: SkillGroup) {
  return (
    <div className="bg-foreground  rounded-lg  p-6 m-2.5 w-1/2">
      <h1 className=" text-black text-center font-bold text-3xl pb-2">{header}</h1>
      <div className="flex flex-wrap rounded-md  justify-center p-5 gap-6">
      
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center bg-red-200 p-4 rounded-md shadow-sm space-x-2 w-80"
        >
          <img
            className="w-16 h-16"
            src="/images/checkmark.png"
            alt={`Checkmark icon for ${skill.title}`}
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{skill.title}</h3>
            <p className="text-gray-600 font-light">{skill.level}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

