"use client";
import ProjectCard from "@/app/components/ProjectCard";
import { Project, ProjectCategory } from "./projectData";
import FilteredProjects from "./projects";
import { useState } from "react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");

  function handleClick(category: ProjectCategory) {
    setSelectedCategory(category);
  }

  return (
    <div>
      <div className="flex gap-4 py-4 text-2xl">
        <h1 className="ml-14 place-self-center font-bold text-black">
          Filter:
        </h1>
        <button
          className="w-26 rounded bg-blue-600 px-4 py-2 text-white"
          onClick={() => handleClick("All")}
        >
          All
        </button>
        <button
          className="w-40 rounded bg-blue-600 px-4 py-2 text-white"
          onClick={() => handleClick("Applications")}
        >
          Applications
        </button>
        <button
          className="w-40 rounded bg-blue-600 px-4 py-2 text-white"
          onClick={() => handleClick("Game Dev")}
        >
          Game Dev
        </button>
        <button
          className="w-40 rounded bg-blue-600 px-4 py-2 text-white"
          onClick={() => handleClick("Animation")}
        >
          Animation
        </button>
      </div>
      <div className="">
        <FilteredProjects category={selectedCategory} />
      </div>
    </div>
  );
}
