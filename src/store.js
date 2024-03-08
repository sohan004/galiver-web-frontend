import { configureStore } from "@reduxjs/toolkit";
import cartSideBarReducer from "./features/CartSideBar/CartSideBarSlice";
import authUserReducer from "./features/auth/authUserSlice";
import categoryListReducer from "./features/categoryList/categoryListSlice";

const store = configureStore({
    reducer:{
        auth: authUserReducer,
        cartSideBar: cartSideBarReducer,
        categoryList: categoryListReducer,
    }
})

export default store