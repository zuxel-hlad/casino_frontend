import { BASE_URL } from '@/app/config/network';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

enum TAGS {
    BALANCE = 'Balance',
}

export const walletApi = createApi({
    reducerPath: 'walletApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: [TAGS.BALANCE],
    endpoints: builder => ({
        getBalance: builder.query({
            query: () => '/wallet',
            providesTags: [TAGS.BALANCE],
        }),
        updateBalance: builder.mutation({
            query: body => ({
                url: '/wallet',
                body,
            }),
            invalidatesTags: [TAGS.BALANCE],
        }),
    }),
});
