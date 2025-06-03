import { Project, ProjectCategory, projectsData } from "./projectData";

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
