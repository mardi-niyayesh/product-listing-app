
export type SortOption =
  | "default"
  | "price-asc"
  | "price-desc"
  | "rating-desc"
  | "rating-asc";

interface SortFilterProps {
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
}

export default function SortFilter({
  sortBy,
  onSortChange,
}: SortFilterProps) {
  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold text-slate-700">
        مرتب‌سازی بر اساس
      </h2>

      <select
        value={sortBy}
        onChange={(event) =>
          onSortChange(event.target.value as SortOption)
        }
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-violet-500"
      >
        <option value="default">پیش‌فرض</option>
        <option value="price-asc">قیمت: کم به زیاد</option>
        <option value="price-desc">قیمت: زیاد به کم</option>
        <option value="rating-desc">بالاترین امتیاز</option>
        <option value="rating-asc">پایین‌ترین امتیاز</option>
      </select>
    </div>
  );
}
