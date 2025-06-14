import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BASE_URL } from "../../utils/constants";


export const createUser = createAsyncThunk(
    'users/createUser', 
    async (payload, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/users`, payload);
            return res.data;
        } catch(err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);

export const loginUser = createAsyncThunk(
    'users/loginUser', 
    async (payload, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/auth/login`, payload);
            const login = await axios(`${BASE_URL}/auth/profile`, {
                headers: {
                    Authorization: `Bearer ${res.data.access_token}`,
                },
            });

            return login.data;
        } catch(err) {
            console.log(err);
            return thunkAPI.rejectWithValue(
                err.response?.data?.message || err.message || "Something went wrong");
        }
    }
);

export const updateUser = createAsyncThunk(
    'users/updateUser', 
    async (payload, thunkAPI) => {
        try {
            const res = await axios.put(`${BASE_URL}/users/${payload.id}`, payload);
            return res.data;
        } catch(err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);

const setToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const addCurrentUser = (state, { payload }) => {
    state.currentUser = payload;
    setToLocalStorage('currentUser', payload);
};

const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: getFromLocalStorage('currentUser') || null,
        cart: getFromLocalStorage('cart') || [],
        favorites: getFromLocalStorage('favorites') || [],
        isLoading: false,
        formType: "signup",
        showForm: false,
    }, 

    reducers: {
        addItemToCart: (state, { payload }) => {
            let newCart = [...state.cart];
            const found = state.cart.find((item) => item.id === payload.id);

            if(found) {
                newCart = newCart.map((item) => {
                    return item.id === payload.id 
                    ? { ...item, quantity: payload.quantity || item.quantity + 1 } 
                    : item;
                }) 
            } else newCart.push({ ...payload, quantity: 1})

            state.cart = newCart;
        },

        removeItemFromCart: (state, { payload }) => {
            state.cart = state.cart.filter(({ id }) => id !== payload)
        },

        addItemToFavorites: (state, { payload }) => {
            if(state.favorites.find((item) => item.id === payload.id)) return;
            state.favorites.push(payload);
        }, 

        removeItemFromFavorites: (state, { payload }) => {
            state.favorites = state.favorites.filter(({ id }) => id !== payload)
        },

        removeAllFromFavorites: (state) => {
            state.favorites = [];
        },

        toggleForm: (state, { payload }) => {
            state.showForm = payload;
        },

        toggleFormType: (state, { payload }) => {
            state.formType = payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, addCurrentUser);
        builder.addCase(loginUser.fulfilled, addCurrentUser);
        builder.addCase(updateUser.fulfilled, addCurrentUser);
    },
});

export const { 
    addItemToCart, 
    removeItemFromCart, 
    addItemToFavorites, 
    removeItemFromFavorites, 
    removeAllFromFavorites, 
    toggleForm, 
    toggleFormType 
} = userSlice.actions;

export default userSlice.reducer;