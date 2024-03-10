import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../constants/constants.ts';

export interface IDrug {
    id: string
    genericName: string
    brandName: string
    measurementUnit: string
    form: string
    pharmacy: string
    price: number
}

export const drugsApi = createApi({
    reducerPath: 'api/drugs',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),

        endpoints: (builder) => ({
            getPharmacies: builder.query<IDrug[], string | ''>({
                query: (filter) => filter ? `drugs?pharmacy=${filter}` : 'drugs',
            }),
        }),
    });

export const { useGetPharmaciesQuery } = drugsApi;