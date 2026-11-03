
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
      >
        قبلی
      </button>

      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`h-10 w-10 rounded-lg text-sm font-medium transition ${
              currentPage === page
                ? "bg-violet-600 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-violet-50"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
      >
        بعدی
      </button>
    </div>
  );
}
