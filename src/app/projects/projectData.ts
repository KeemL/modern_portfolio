export type ProjectCategory = "Applications" | "Games" | "Animation" | "All";

export interface Project {
  id: string;
  title: string;
  stack: string[];
  video?: string;
  description: string;
  category: ProjectCategory;
  imageUrl?: string;
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: "proj1",
    title: "MEEPS",
    stack: ["React", " Javascript", " Java", " Spring Boot"],
    description:
      "Application that identifies and assists patients affected by environmental pollutants by alerting the severity of nearby locations based on their individual afflictions. Uses Google's Geocoding API to find current location through coordinates and Meersen's API to determine and calcualte relevant pollutants and their severity levels.",
    category: "Applications",
  },
  {
    id: "proj2",
    title: "Bookie",
    description:
      "Library book app that individualizes the experience for each user through personal wishlists, current reading lists and recommendations based on their interests. Uses OpenLibrary's API for access to a collection of books.",
    category: "Applications",
    stack: ["React", " Java", " Spring Boot"],
  },
  //   {
  //     id: "proj3",
  //     title: "",
  //     description: "",
  //     category: "Applications",
  //     stack: [],
  //   },
];
