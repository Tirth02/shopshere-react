import { apiClient } from './client';

export const fetchProducts = () => {
  return apiClient('/products');
};

export const fetchProductById = (id) => {
  console.log("In fetch",id);
  return apiClient(`/products/${id}`);
};
