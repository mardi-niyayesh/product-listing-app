import axios from "axios";
import type { Product } from "../types/product.types";

const API_URL = "https://product-listing-app-jd72.onrender.com";

export const getProducts = async () => {
  const response = await axios.get<Product[]>(`${API_URL}/products`);

  return response.data;
};