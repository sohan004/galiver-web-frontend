import { useDispatch, useSelector } from "react-redux";
import { setState } from "../../features/CartSideBar/CartSideBarSlice";


const CartSideBar = () => {
    const { state } = useSelector(state => state.cartSideBar);
    const dispatch = useDispatch();
    const closeCartSidebar = () => {
        dispatch(setState(false))
    }
    return (
        <>
            <div onClick={closeCartSidebar} className={`bg-transparent duration-500 backdrop-blur-sm bg bg-black bg-opacity-70 z-[9998] ${state ? 'fixed' : 'none'} top-0 left-0 w-full h-full `}> </div>
            <div className={`bg-white fixed duration-500 z-[9999] ${state ? 'right-0' : ' -right-[100%]'} top-0 w-full md:w-[400px] h-full `}>

            </div>
        </>
    );
};

export default CartSideBar;