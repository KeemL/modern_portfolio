import { notFound } from "next/navigation";

import {
  Project,
  ProjectCategory,
  projectsData,
} from "../projects/projectData";

export function validProjects(category: ProjectCategory): Project[] {
  let projs: Project[] = [];

  //uses filter function to pass every project array entry into the checkCategory function
  projs = projectsData.filter((projectsData) =>
    checkCategory(projectsData, category),
  );

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

  //undefined check otherwise an error is thrown
  // uses default notFound page from Next.js
  if (project === undefined) {
    notFound();
  }
  return project;
}

// function checkProjectID(projectid: String);
