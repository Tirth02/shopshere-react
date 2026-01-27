import { apiClient } from './client';

export const fetchProducts = () => {
  return apiClient('/products');
};

export const fetchProductById = (id) => {
  return apiClient(`/products/${id}`);
};
