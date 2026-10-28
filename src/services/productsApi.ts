import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
}
export interface Responses {
  skip: number;
  limit: number;
  sortBy: "id" | "title" | "price";
  order: "asc" | "desc";
  search: string;
}
interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
  sortBy: "id" | "title" | "price";
  order: "asc" | "desc";
  search: string;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, {skip: Responses["skip"], limit: Responses["limit"], sortBy: Responses["sortBy"], order: Responses["order"], search: Responses["search"]}>({
      query: (params) => `products?limit=${params.limit}&skip=${params.skip}&sortBy=${params.sortBy}&order=${params.order}&search=${params.search}`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;