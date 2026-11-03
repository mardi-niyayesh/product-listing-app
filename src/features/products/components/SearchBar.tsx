import { Search } from "lucide-react";

interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({ search, onSearchChange }: SearchBarProps) {
  return (
    <div className="relative mb-6">
      <Search
        size={20}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="جستجوی نام محصول..."
        className="w-full rounded-xl border border-slate-200 bg-white py-3 pr-12 pl-4 text-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
      />
    </div>
  );
}
