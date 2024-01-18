import { RiShoppingCartFill } from "react-icons/ri";
import OrderCard from "../OrderCard/OrderCard";
import { FaShoppingBag } from "react-icons/fa";


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

    // scale-100 opacity-100
    // scale-0 opacity-0

    // right-0
    // 'right-[-100%] md:-right-[400px]

    return (
        <>
            <div id="cartSideBar-parent" onClick={() => toggleCartSideBar()} className={`fixed   backdrop-blur-sm   bg-black bg-opacity-50 z-[9998] scale-0 opacity-0 top-0 left-0 w-full h-full `}> </div>
            
            <div id="cart-sidebar-child" className={`bg-white fixed duration-500 transition-all z-[99999]  flex flex-col top-0 w-[280px] md:w-[350px] right-[-280px] md:right-[-350px]  h-full overflow-y-auto`}>
                {/* content */}
                <div className="flex-grow overflow-hidden overflow-y-auto">
                    <p className=" bg-orange-500 text-white text-center flex items-center gap-2 justify-center font-semibold text-base md:text-lg p-3"> <RiShoppingCartFill className="text-2xl" />Shopping Cart</p>

                    <div className="flex flex-col ">
                        {new Array(5).fill(0).map((iitem, i) => <OrderCard key={i} />)}
                    </div>

                </div>

                <div className="grid grid-cols-2 border-t">
                    <div className="flex  items-center justify-center">
                        <p className="text-black font-medium text-md "><span>Total:</span> <span className="opacity-70">$120</span></p>
                    </div>
                    <button className="bg-orange-600 text-xs md:text-sm hover:bg-orange-700 duration-200 font-medium flex justify-center items-center gap-2 text-white p-3"><FaShoppingBag className="text-xl" /> Procced Order</button>
                </div>

            </div>
        </>
    );
};

export default CartSideBar;