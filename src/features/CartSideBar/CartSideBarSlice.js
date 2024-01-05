import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cart: [],
    loading: true,
}


const cartSideBarSlice = createSlice({
    name: 'cartSideBar',
    initialState: initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
    }
})

export const { setCart, setLoading } = cartSideBarSlice.actions
export default cartSideBarSlice.reducer