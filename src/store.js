import { configureStore } from "@reduxjs/toolkit";
import cartSideBarReducer from "./features/cartSideBar/CartSideBarSlice";
import authUserReducer from "./features/auth/authUserSlice";
import categoryListReducer from "./features/categoryList/categoryListSlice";
import homeProductReducer from "./features/HomeProduct/HomeProductSlice";
import searchProductReducer from "./features/searchProduct/searchProductSlice";

const store = configureStore({
    reducer:{
        auth: authUserReducer,
        cartSideBar: cartSideBarReducer,
        categoryList: categoryListReducer,
        homeProduct: homeProductReducer,
        searchProduct: searchProductReducer
    }
})

export default store