import { configureStore } from "@reduxjs/toolkit";

import categoriesSlise from './categories/categoriesSlice';
import productsSlise from './products/productsSlice';
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlise,
        products: productsSlise,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
    devTools: true,
});