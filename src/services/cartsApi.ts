import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//file was created for practicing mutations
interface AddCartRequest {
    userId: number,
    products: {
        id: number,
        quantity: number
    }[]
}

interface CartResponse {
    id: number,
    products: {
        id: number,
        title: string,
        price: number,
        quantity: number,
        total: number,
        discountPercentage: number,
        discountedPrice: number,
        thumbnail: string
    }[],
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number
}

export const cartsApi = createApi({
    reducerPath: 'cartsApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        addCart: builder.mutation<CartResponse,AddCartRequest> ({
            query: (cart) => ({
                url: 'carts/add',
                method: 'POST',
                body: cart
            })
        })
    })
});

export const {useAddCartMutation} = cartsApi;