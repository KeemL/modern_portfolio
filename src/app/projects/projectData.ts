export type ProjectCategory =
  | "Applications"
  | "Game Dev"
  | "Animation"
  | "Design"
  | "All";

// const categories: ProjectCategory[] = [
//   "All",
//   "Applications",
//   "Games",
//   "Animation",
// ];

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
    title: "Environmental Pollutant Severity App",
    stack: ["React", " Java", " Javascript", " Spring Boot"],
    description:
      "Health application that identifies and assists patients affected by environmental pollutants by alerting the severity of nearby locations based on their individual afflictions. Uses Google's Geocoding API to find current location through coordinates and Meersen's API to determine and calculate relevant pollutants and their severity levels.",
    category: "Applications",
    video: "https://www.youtube.com/watch?v=DawXx5WNeyE",
    imageUrl: "/images/meeps_photo.png",
  },
  {
    id: "proj2",
    title: "Bookie",
    description:
      "Library book app that individualizes the experience for each user through personal wishlists, current reading lists and recommendations based on their interests. Uses OpenLibrary's API for access to a collection of books.",
    category: "Applications",
    stack: ["React", " Java", " Spring Boot"],
    link: "",
    imageUrl: "/images/bookie_photo.png",
  },

  // {
  //   id: "proj3",
  //   title: "",
  //   description: "",
  //   category: "Applications",
  //   stack: [],
  // }
  {
    id: "proj4",
    title: "Interactive Retail Experience Game",
    description:
      "A Unity-3D game where the player collects coins and completes QTEs to navigate a tense fast food situation.",
    category: "Game Dev",
    stack: ["Unity", "C#"],
    link: "https://drive.google.com/drive/folders/16lUtmPXGmNUISQCMeHnSDKGXo9XdSmJ0?usp=sharing",
    imageUrl: "/images/mcds.png",
  },
  {
    id: "proj5",
    title: "Rocket Drive",
    description:
      "A Unity-3D sandbox game where players explore a trap-filled island using physics-driven rocket cars to boost, bounce, and interact with the environment.",
    category: "Game Dev",
    stack: ["Unity", "C#", "Blender"],
    link: "https://drive.google.com/drive/folders/1QwtumkBVrWu5493Z4XrVKNqIklbKNtDq?usp=sharing",
    imageUrl: "/images/rocketdrive.png",
  },
  {
    id: "proj6",
    title: "ColorCraft",
    description:
      "An Unreal Engine game where players extract color from a vibrant island to repair their ship, exploring themes of postcolonialism and environmental sustainability.",
    category: "Game Dev",
    stack: ["Unreal Engine", "C++"],
    link: "https://drive.google.com/drive/folders/1GdjjQrqcWVMA-3JvkDyPUbDdt3i8lAA4?usp=drive_link",
    imageUrl: "/images/colorcraft.png",
  },
  {
    id: "proj7",
    title: "Avengers: New Game",
    description:
      "Created using using C++ in Visual Studio Code for an MGBA(Gameboy) emulator.",
    category: "Game Dev",
    stack: ["C", "Docker"],
    video: "https://youtu.be/SMDauKcvD0k",
    imageUrl: "/images/avengers.png",
  },
  {
    id: "proj8",
    title: "CODENAME Brenda",
    description:
      "Live action script transformed into a vibration animation in Unreal Engine using originally made characters, props and processes supplemented with pre-made background assets.",
    category: "Animation",
    stack: ["Unreal Engine", "Blender", "Photoshop"],
    video: "https://youtu.be/eXM4xO3hd6g",
    imageUrl: "/images/brenda.png",
  },
];
