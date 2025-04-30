import { configureStore } from "@reduxjs/toolkit";

import categoriesSlise from './categories/categoriesSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesSlise,
    },
    devTools: true,
});