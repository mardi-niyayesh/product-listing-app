import { Star, Heart } from "lucide-react";
import type { Product } from "../../products/types/product.types";

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (productId: number) => void;
}

export default function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
}: ProductCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <button
        type="button"
        onClick={() => onToggleFavorite(product.id)}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110"
      >
        <Heart
          size={21}
          className={
            isFavorite ? "fill-red-500 text-red-500" : "text-slate-500"
          }
        />
      </button>

      <div className="h-56 overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.title}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = "/images/product-placeholder.svg";
          }}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <span className="inline-block rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">
          {product.category}
        </span>

        <h3 className="mt-3 line-clamp-1 text-lg font-bold text-slate-900">
          {product.title}
        </h3>

        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-6 text-slate-500">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-slate-900">${product.price}</span>

          <div className="flex items-center gap-1">
            {Array.from({
              length: Math.round(product.rating),
            }).map((_, index) => (
              <Star
                key={index}
                size={16}
                className="fill-amber-400 text-amber-400"
              />
            ))}

            <span className="mr-1 text-sm font-medium text-slate-600">
              {Math.round(product.rating)}
            </span>
          </div>
        </div>

        <div className="mt-4 border-t border-slate-100 pt-4">
          <p className="text-sm text-slate-500">
            فروشنده:
            <span className="mr-1 font-semibold text-slate-700">
              {product.seller.name}
            </span>
          </p>
        </div>
      </div>
    </article>
  );
}
