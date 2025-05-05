import { configureStore } from "@reduxjs/toolkit";

import categoriesSlise from './categories/categoriesSlice';
import productsSlise from './products/productsSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesSlise,
        products: productsSlise,
    },
    devTools: true,
});