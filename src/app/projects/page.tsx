"use client";
import CategoryButton from "../components/CategoryButton";
import { ProjectCategory } from "./projectData";
import FilteredProjects from "./projects";
import { useState } from "react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");

  // function handleClick(category: ProjectCategory) {
  //   setSelectedCategory(category);
  // }

  return (
    <div>
      <div className="flex gap-4 py-4 text-2xl">
        <h1 className="text-accent ml-14 place-self-center font-bold">
          Filter:
        </h1>
        <CategoryButton
          category="All"
          selectedCategory={selectedCategory}
          onClick={setSelectedCategory}
        />
        <CategoryButton
          category="Applications"
          selectedCategory={selectedCategory}
          onClick={setSelectedCategory}
        />
        <CategoryButton
          category="Game Dev"
          selectedCategory={selectedCategory}
          onClick={setSelectedCategory}
        />
        <CategoryButton
          category="Animation"
          selectedCategory={selectedCategory}
          onClick={setSelectedCategory}
        />
      </div>
      <div className="">
        <FilteredProjects category={selectedCategory} />
      </div>
    </div>
  );
}
