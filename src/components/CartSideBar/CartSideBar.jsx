import { RiShoppingCartFill } from "react-icons/ri";
import OrderCard from "../OrderCard/OrderCard";
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";
import useFetchCartProductDetails from "../../Hooks/useFetchCartProductDetails";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { LuLoader } from "react-icons/lu";
import { useNavigate } from "react-router-dom";



// eslint-disable-next-line react-refresh/only-export-components
export const toggleCartSideBar = (e) => {
    const parent = document.getElementById('cartSideBar-parent');
    const child = document.getElementById('cart-sidebar-child');

    if (e === 'open') {
        parent.classList.remove('scale-0', 'opacity-0');
        parent.classList.add('scale-100', 'opacity-100');
        child.classList.remove('right-[-280px]', 'md:right-[-350px]');
        child.classList.add('right-0');
    }
    else {
        parent.classList.remove('scale-100', 'opacity-100');
        parent.classList.add('scale-0', 'opacity-0');
        child.classList.remove('right-0');
        child.classList.add('right-[-280px]', 'md:right-[-350px]');
    }
}



const CartSideBar = () => {


    const cart = useSelector(state => state.cartSideBar.cart)
    const [product, loading] = useFetchCartProductDetails(cart)
    const navigate = useNavigate()

    const getTotalPrice = () => {
        const totalPrice = product.reduce((acc, item) => {
            return acc + ((item.price - item.discount) * item.cart.quantity)
        }, 0)
        return totalPrice
    }

    return (
        <>
            <div id="cartSideBar-parent" onClick={() => toggleCartSideBar()} className={`fixed   backdrop-blur-sm   bg-black bg-opacity-50 z-[9998] scale-0 opacity-0 top-0 left-0 w-full h-full `}> </div>

            <div id="cart-sidebar-child" className={`bg-white fixed duration-500 transition-all z-[99999]  flex flex-col top-0 w-[280px] md:w-[350px] right-[-280px] md:right-[-350px]  h-full overflow-y-auto`}>
                {/* content */}
                <div className="flex-1 overflow-hidden overflow-y-auto flex flex-col">
                    <p className=" bg-orange-500 text-white text-center flex items-center gap-2 justify-center font-semibold text-base md:text-lg p-3"> <RiShoppingCartFill className="text-2xl" />Shopping Cart</p>

                    {loading && <div className="flex-1  flex justify-center items-center">
                        <LuLoader className="text-3xl text-orange-500 animate-spin duration-300" />
                    </div>}
                    {product.length === 0 && <div className="flex-1  flex justify-center items-center">
                        <MdOutlineRemoveShoppingCart className="text-3xl text-orange-500" />
                        <p className="text-gray-500">Cart is Empty</p>
                    </div>}
                    {product.length > 0 && !loading && <div className="flex flex-col flex-1 overflow-y-auto">
                        {product.map((item, i) => <OrderCard item={item} key={i} />)}
                    </div>}

                </div>

                <div className="grid grid-cols-2 border-t">
                    <div className="flex  items-center justify-center">
                        <p className="text-black font-medium text-md "><span>Total:</span> <span className="opacity-70">৳{getTotalPrice()}</span></p>
                    </div>
                    <button
                        onClick={() => navigate('/place-order')}
                        className="bg-orange-600 text-xs md:text-sm hover:bg-orange-700 duration-200 font-medium flex justify-center items-center gap-2 text-white p-3"><FaShoppingBag className="text-xl" /> Proceed Order</button>
                </div>

            </div>
        </>
    );
};

export default CartSideBar;