import { ProjectCategory } from "../projects/projectData";

type CategoryButtonProps = {
  category: ProjectCategory;
  selectedCategory: ProjectCategory;
  onClick: (category: ProjectCategory) => void;
};

export default function CategoryButton({
  category,
  selectedCategory,
  onClick,
}: CategoryButtonProps) {
  const base = "w-40 rounded px-4 py-2 text-white transition";
  const active = "bg-accent";
  const inactive = "bg-primary hover:bg-surface";

  const buttonClass = `${base} ${selectedCategory === category ? active : inactive}`;

  return (
    <button className={buttonClass} onClick={() => onClick(category)}>
      {category}
    </button>
  );
}
