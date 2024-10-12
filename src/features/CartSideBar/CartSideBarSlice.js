import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cart: {},
    loading: true,
}


const cartSideBarSlice = createSlice({
    name: 'cartSideBar',
    initialState: initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload
            state.loading = false
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        clearCart: (state) => {
            state.cart = {}
        }
    }
})

export const { setCart, setLoading , clearCart} = cartSideBarSlice.actions
export default cartSideBarSlice.reducer