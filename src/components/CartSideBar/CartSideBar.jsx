import { useDispatch, useSelector } from "react-redux";
import toggleCartSideBar from "../../Hooks/toggleCartSideBar";


const CartSideBar = () => {
    const { state } = useSelector(state => state.cartSideBar);
    const dispatch = useDispatch();

    const closeSideBar = () => {
        toggleCartSideBar(dispatch, false)
    }


    return (
        <>
            <div onClick={closeSideBar} className={`fixed tt  backdrop-blur-sm bg  bg-black bg-opacity-50 z-[9998] ${state ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} top-0 left-0 w-full h-full `}> </div>
            <div className={`bg-white fixed duration-700 transition-all z-[99999] ${state ? 'right-0 translate-x-0' : 'right-0 translate-x-[100%] md:translate-x-[400px]'} top-0 w-[80%] md:w-[400px]  h-full overflow-y-auto`}>
                {/* content */}
            </div>
        </>
    );
};

export default CartSideBar;