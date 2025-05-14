import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

import categoriesSlise from './categories/categoriesSlice';
import productsSlise from './products/productsSlice';
import userSlice from './user/userSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesSlise,
        products: productsSlise,
        user: userSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
    devTools: true,
});