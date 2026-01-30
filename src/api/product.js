import { apiClient } from './client';

export const fetchProducts = () => {
  return apiClient('/products?page=1&limit=10');
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
