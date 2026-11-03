interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-lg font-bold text-slate-800">
        دسته‌بندی محصولات
      </h2>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onCategoryChange("all")}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
            selectedCategory === "all"
              ? "bg-violet-600 text-white"
              : "border border-slate-200 bg-white text-slate-600 hover:border-violet-400"
          }`}
        >
          همه
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
              selectedCategory === category
                ? "bg-violet-600 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:border-violet-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
