import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BASE_URL } from "../../utils/constants";
import { shuffle } from "../../utils/common";


export const getProducts = createAsyncThunk('products/getProducts', 
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/products`);
            return res.data;
        } catch(err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);

const productsSlice = createSlice({

    name: 'products',
    initialState: {
        list: [],
        filtered: [],
        related: [],
        isLoading: false
    }, 

    reducers: {
        filterByPrice: (state, action) => {
            state.filtered = state.list.filter((product) => product.price < action.payload); 
        }, 

        getRelatedProducts: (state, action) => {

            const list = state.list.filter((item) => item.category.id === action.payload )
            state.related = shuffle(list);
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const { filterByPrice, getRelatedProducts } = productsSlice.actions;

export default productsSlice.reducer;