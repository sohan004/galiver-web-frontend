import { configureStore } from "@reduxjs/toolkit";
import cartSideBarReducer from "./features/CartSideBar/CartSideBarSlice";

const store = configureStore({
    reducer:{
        cartSideBar: cartSideBarReducer
    }
})

export default store