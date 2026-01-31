import { apiClient } from './client';

export const fetchProducts = (page = 1) => {
  return apiClient(`/products?page=${page}&limit=10`);
};

export const fetchProductById = (id) => {
  return apiClient(`/products/${id}`);
};

export const createProduct = (data) => {
  return apiClient("/products", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
