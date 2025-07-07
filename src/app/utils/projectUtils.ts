import { notFound } from "next/navigation";

import {
  Project,
  ProjectCategory,
  projectsData,
} from "../projects/projectData";

export function validProjects(category: ProjectCategory): Project[] {
  let projs: Project[] = [];
  //   console.log(projs.length);
  //   console.log(projectsData.length);
  projs = projectsData.filter((projectsData) =>
    checkCategory(projectsData, category),
  );
  //   console.log(projs.length);
  return projs;
}

function checkCategory(project: Project, category: ProjectCategory) {
  if (category === "All") {
    return project;
  }

  if (project["category"] === category) {
    return project;
  }
}

export function getProjectById(id: string): Project {
  const project = projectsData.find((p) => p.id === id);
  // if (!project) {
  //   return "{ notFound: true }";
  // }
  if (project === undefined) {
    notFound();
  }
  return project;
}

// function checkProjectID(projectid: String);
