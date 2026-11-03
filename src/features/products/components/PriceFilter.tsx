
interface PriceFilterProps {
  minPrice: string;
  maxPrice: string;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
}

export default function PriceFilter({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}: PriceFilterProps) {
  const minValue = Number(minPrice);
  const maxValue = Number(maxPrice);

  const isMinInvalid = minPrice !== "" && minValue < 0;
  const isMaxInvalid = maxPrice !== "" && maxValue < 0;

  const isRangeInvalid =
    minPrice !== "" &&
    maxPrice !== "" &&
    minValue > maxValue;

  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold text-slate-700">
        محدوده قیمت
      </h2>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <input
            type="number"
            min="0"
            value={minPrice}
            onChange={(event) => onMinPriceChange(event.target.value)}
            placeholder="حداقل قیمت"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-violet-500"
          />

          {isMinInvalid && (
            <p className="mt-1 text-xs text-red-500">
              حداقل قیمت نمی‌تواند منفی باشد.
            </p>
          )}
        </div>

        <div>
          <input
            type="number"
            min="0"
            value={maxPrice}
            onChange={(event) => onMaxPriceChange(event.target.value)}
            placeholder="حداکثر قیمت"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-violet-500"
          />

          {isMaxInvalid && (
            <p className="mt-1 text-xs text-red-500">
              حداکثر قیمت نمی‌تواند منفی باشد.
            </p>
          )}
        </div>
      </div>

      {isRangeInvalid && (
        <p className="mt-2 text-xs text-red-500">
          حداقل قیمت نمی‌تواند بیشتر از حداکثر قیمت باشد.
        </p>
      )}
    </div>
  );
}
