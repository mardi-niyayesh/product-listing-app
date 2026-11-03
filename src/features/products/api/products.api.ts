import axios from "axios";
import type { Product } from "../types/product.types";

const API_URL = "http://localhost:4000";

export const getProducts = async () => {
  const response = await axios.get<Product[]>(`${API_URL}/products`);

  return response.data;
};
