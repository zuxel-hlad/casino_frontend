import { BASE_URL } from '@/app/config/network';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '@/entities/user/model/User';

interface IRequestGetUser {
    userId: string;
}

interface IResponseGetUser extends Pick<IUser, 'name' | 'nickname'> {}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: builder => ({
        getUser: builder.query<IResponseGetUser, IRequestGetUser>({
            query: ({ userId }) => `user/${userId}`,
        }),
    }),
});

export const { useGetUserQuery } = userApi;
