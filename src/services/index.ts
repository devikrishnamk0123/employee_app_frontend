import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('AuthKey');

      if (token) headers.set('Authorization', `Bearer ${token}`);

      console.log(headers);

      return headers;
    }
    //credentials: 'include'
  }),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
  tagTypes: []
});

export default baseApi;
