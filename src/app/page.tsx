"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

import { useProducts } from "@/features/products/hooks/useProducts";
import { useProductFilter } from "@/features/products/hooks/useProductFilter";

import SearchBar from "@/features/products/components/SearchBar";
import CategoryFilter from "@/features/products/components/CategoryFilter";
import PriceFilter from "@/features/products/components/PriceFilter";
import SortFilter from "@/features/products/components/SortFilter";
import ProductList from "@/features/products/components/ProductList";
import Pagination from "@/features/products/components/Pagination";

export default function Home() {
  const { products, loading } = useProducts();

  const [favorites, setFavorites] = useState<number[]>([]);
  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const {
    categories,
    search,
    selectedCategory,
    minPrice,
    maxPrice,
    sortBy,
    currentPage,
    currentProducts,
    filteredProducts,
    totalPages,
    setCurrentPage,
    handleSearchChange,
    handleCategoryChange,
    handleMinPriceChange,
    handleMaxPriceChange,
    handleSortChange,
  } = useProductFilter(products);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-lg font-medium text-slate-600">
          در حال دریافت محصولات...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            محصولات فروشگاه
          </h1>

          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-red-500">
            <span>
              <Heart />
            </span>
            <span>{favorites.length} محصول در علاقه‌مندی‌ها</span>
          </div>
        </div>

        <div className="mb-8">
          <SearchBar search={search} onSearchChange={handleSearchChange} />
        </div>

        <div className="mb-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        <div className="mb-8 grid grid-cols-1 gap-5 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-2">
          <PriceFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            onMinPriceChange={handleMinPriceChange}
            onMaxPriceChange={handleMaxPriceChange}
          />

          <SortFilter sortBy={sortBy} onSortChange={handleSortChange} />
        </div>

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-800">
            {selectedCategory === "all" ? "همه محصولات" : selectedCategory}
          </h2>

          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
            {filteredProducts.length} محصول
          </span>
        </div>

        <ProductList
          products={currentProducts}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </main>
  );
}
