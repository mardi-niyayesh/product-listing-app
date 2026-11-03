import { useState } from "react";
import type { Product } from "../types/product.types";
import type { SortOption } from "../components/SortFilter";

const PRODUCTS_PER_PAGE = 8;

export const useProductFilter = (products: Product[]) => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [...new Set(products.map((product) => product.category))];

  let filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.trim().toLowerCase()),
  );

  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory,
    );
  }

  if (minPrice !== "") {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= Number(minPrice),
    );
  }

  if (maxPrice !== "") {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= Number(maxPrice),
    );
  }

  if (sortBy === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating-desc") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "rating-asc") {
    filteredProducts.sort((a, b) => a.rating - b.rating);
  }

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  const resetPage = () => setCurrentPage(1);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    resetPage();
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    resetPage();
  };

  const handleMinPriceChange = (value: string) => {
    setMinPrice(value);
    resetPage();
  };

  const handleMaxPriceChange = (value: string) => {
    setMaxPrice(value);
    resetPage();
  };

  const handleSortChange = (value: SortOption) => {
    setSortBy(value);
    resetPage();
  };

  return {
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
  };
};
