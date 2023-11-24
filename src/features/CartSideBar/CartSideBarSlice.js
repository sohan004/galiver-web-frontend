import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cart: [],
    state: false,
    loading: true,
}


const cartSideBarSlice = createSlice({
    name: 'cartSideBar',
    initialState: initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload
        },
        setState: (state, action) => {
            state.state = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
    }
})

export const { setCart, setState, setLoading } = cartSideBarSlice.actions
export default cartSideBarSlice.reducer