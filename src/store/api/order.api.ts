import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants.ts";
import { ICartItem } from "../slices/cart.slice.ts";

export interface ICustomer {
    name: string;
    email: string;
    phone: string;
    address: string;
}

export interface IOrder {
    customer: ICustomer;
    order: ICartItem[];
    totalPrice: number;
    id?: string;
}

export const orderApi = createApi({
    reducerPath: "api/order",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: ["Order"],
    endpoints: (builder) => ({

        createOrder: builder.mutation<string, IOrder>({
            query: (order) => ({
                url: "order",
                method: "POST",
                body: order,
            }),
        }),

        getOrder: builder.query<IOrder[], { email: string, phone: string }>({
            query: ({email, phone}) => ({
                url: `order?customer.email=${email}&customer.phone=${phone}`,
            }),
            providesTags: ["Order"],
        }),
    }),
});

export const {useCreateOrderMutation, useGetOrderQuery} = orderApi;
