import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://nyx.vima.ekt.gr:3000',
  }),
  endpoints: (builder) => ({
    getBooks: builder.mutation({
      query: (body) => (
        {
        url: '/api/books',
        method: 'POST',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
        body
      }),
    }),
  }),
});
export const { useGetBooksMutation } = booksApi;
