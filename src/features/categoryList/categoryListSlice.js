import { createSlice } from "@reduxjs/toolkit";

const categoryListSlice = createSlice({
    name: "categoryList",
    initialState: {
        categoryList: [],
        loading: true,
    },
    reducers: {
        setCategoryList: (state, action) => {
            state.categoryList = action.payload;
            state.loading = false;
        },
    }
});

export const { setCategoryList } = categoryListSlice.actions;
export default categoryListSlice.reducer;