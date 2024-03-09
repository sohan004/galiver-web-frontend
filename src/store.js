import { configureStore } from "@reduxjs/toolkit";
import cartSideBarReducer from "./features/cartSideBar/CartSideBarSlice";
import authUserReducer from "./features/auth/authUserSlice";
import categoryListReducer from "./features/categoryList/categoryListSlice";
import homeProductReducer from "./features/HomeProduct/HomeProductSlice";

const store = configureStore({
    reducer:{
        auth: authUserReducer,
        cartSideBar: cartSideBarReducer,
        categoryList: categoryListReducer,
        homeProduct: homeProductReducer,
    }
})

export default store