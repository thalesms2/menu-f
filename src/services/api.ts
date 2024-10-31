import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IMenu, IItemsFromMenu } from '../types/menu';
import type { IReservation } from '../types/reservation';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders(headers) {
      headers.set('Authorization', import.meta.env.VITE_API_KEY);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getMenu: build.query<IItemsFromMenu, void>({
      query: () => '/menu',
      keepUnusedDataFor: 240,
      transformResponse: (response: IMenu[]) => {
        const res: IItemsFromMenu = {ENTRY: [], MAIN_DISH: [], DESSERT: [], DRINK: []};
        response.forEach((item) => {
          res[item.category].push(item)
        })
        return res;
      }
    }),
    postReservation: build.query<string, IReservation>({
      query: (body) => ({
        url: '/reservation',
        method: 'POST',
        body,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetMenuQuery, useLazyPostReservationQuery } = api