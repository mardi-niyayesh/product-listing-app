
import ProductCard from "./ProductCard";
import type { Product } from "../../products/types/product.types";

interface ProductListProps {
  products: Product[];
  favorites: number[];
  onToggleFavorite: (productId: number) => void;
}

export default function ProductList({
  products,
  favorites,
  onToggleFavorite,
}: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl bg-white py-16 text-center">
        <p className="text-slate-500">
          محصولی در این دسته‌بندی وجود ندارد.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
