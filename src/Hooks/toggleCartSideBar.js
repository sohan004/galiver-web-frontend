import { setState } from "../features/CartSideBar/CartSideBarSlice"

const toggleCartSideBar = (dispatch, e = false) => {
    e === 'open'
        ? dispatch(setState(true))
        : dispatch(setState(false))
}

export default toggleCartSideBar