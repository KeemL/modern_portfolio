"use client";
import { getProjectById } from "@/app/utils/projectUtils";

import { use } from "react";

// export default function Page({ params }: paramsType) {
//   // console.log(params);
//   // console.log(params.id);
//   // const project = getProjectById(params.id);
//   // console.log(project);
//   // //   return <div>My id is {params.id}</div>;
//   // return project && <p> Post: {project.id} </p>;
// }

//params is an object with a key called projid of type String
//the projID is a Promise
export default function Page({
  params,
}: {
  params: Promise<{ projid: string }>;
}) {
  const { projid } = use(params);
  const project = getProjectById(projid);
  console.log(project);
  return (
    <div>
      <p className="text-white">{projid}</p>
      <p className="">{project.title}</p>
    </div>
  );
}
