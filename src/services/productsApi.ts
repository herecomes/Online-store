import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
}

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, {skip: ProductsResponse["skip"], limit: ProductsResponse["limit"]}>({
      query: (params) => `products?limit=${params.limit}&skip=${params.skip}`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;