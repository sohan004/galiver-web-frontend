import { createSlice } from "@reduxjs/toolkit";

const homeProductSlice = createSlice({
    name: "homeProduct",
    initialState: {
        products: [],
        loading: true
    },
    reducers: {
        setHomeProduct: (state, action) => {
            state.products = action.payload
            state.loading = false
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
});

export const { setHomeProduct } = homeProductSlice.actions
export default homeProductSlice.reducer