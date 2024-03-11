import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {BASE_URL} from './constatns.ts';

export interface IPharmacy {
    id: string;
    pharmacy: string;
}

export const pharmaciesApi = createApi({
    reducerPath: 'api/pharmacies',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
        getPharmacies: builder.query<IPharmacy[], void>({
            query: () => 'pharmacies',
        }),
    }),
});

export const { useGetPharmaciesQuery } = pharmaciesApi;
