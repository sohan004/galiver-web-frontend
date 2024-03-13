import { createSlice } from "@reduxjs/toolkit";

const searchProductSlice = createSlice({
    name: "searchProduct",
    initialState: {
        products: [],
        loading: true,
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
            state.loading = false;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { setProducts, setLoading } = searchProductSlice.actions;
export default searchProductSlice.reducer;