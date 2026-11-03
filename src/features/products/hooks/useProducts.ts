"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import { getProducts } from "../api/products.api";
import type { Product } from "../types/product.types";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const data = await getProducts();

        setProducts(data);
      } catch {
        setProducts([]);
        toast.error("دریافت محصولات با خطا مواجه شد");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return {
    products,
    loading,
  };
};
