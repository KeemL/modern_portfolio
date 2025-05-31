"use client";
import ProjectCard from "@/app/components/ProjectCard";
import { Project, ProjectCategory } from "./projectData";
import FilteredProjects from "./projects";
import { useState } from "react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("Animation");

  function handleClick(category: ProjectCategory) {
    setSelectedCategory(category);
  }

  return (
    <div>
      <div className="flex gap-4 bg-pink-400">
        <button>HEY</button>
        <button
          className="rounded bg-blue-600 px-4 py-2 text-white"
          onClick={() => handleClick("Applications")}
        >
          Applications
        </button>
        <button
          className="rounded bg-blue-600 px-4 py-2 text-white"
          onClick={() => handleClick("Games")}
        >
          Games
        </button>
        <button
          className="rounded bg-blue-600 px-4 py-2 text-white"
          onClick={() => handleClick("Animation")}
        >
          Animation
        </button>
        <button
          className="rounded bg-blue-600 px-4 py-2 text-white"
          onClick={() => handleClick("All")}
        >
          All
        </button>
      </div>
      <div className="bg-sky-600">
        {" "}
        <FilteredProjects category={selectedCategory} />
      </div>
    </div>
  );
}
