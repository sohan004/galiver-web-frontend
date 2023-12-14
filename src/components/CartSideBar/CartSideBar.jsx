import { useDispatch, useSelector } from "react-redux";
import toggleCartSideBar from "../../Hooks/toggleCartSideBar";
import { FaMinus, FaPlus, FaShoppingBag } from 'react-icons/fa'
import { RiShoppingCartFill } from "react-icons/ri";
import img from '../../assets/categoryImg/6b396809-87e7-435d-ba7b-5d69699371ba.png'
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const CartSideBar = () => {
    const { state } = useSelector(state => state.cartSideBar);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (e) => {
        if (e === '+') {
            if (quantity < 5) {
                setQuantity(quantity + 1)
            }
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1)
            }
        }
    }

    const closeSideBar = () => {
        toggleCartSideBar(dispatch, false)
    }


    return (
        <>
            <div onClick={closeSideBar} className={`fixed tt  backdrop-blur-sm bg  bg-black bg-opacity-50 z-[9998] ${state ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} top-0 left-0 w-full h-full `}> </div>
            <div className={`bg-white fixed duration-700 transition-all z-[99999] ${state ? 'right-0 translate-x-0' : 'right-0 translate-x-[100%] md:translate-x-[400px]'} flex flex-col top-0 w-[80%] md:w-[400px]  h-full overflow-y-auto`}>
                {/* content */}
                <div className="flex-grow overflow-hidden overflow-y-auto">
                    <p className=" bg-orange-500 text-white text-center flex items-center gap-2 justify-center font-semibold text-base md:text-lg p-3"> <RiShoppingCartFill className="text-2xl" /> Shopping Cart</p>

                    <div className="flex flex-col gap-2">
                        {new Array(8).fill(0).map(i =>
                            <div key={i} className="flex items-start gap-2 border-b p-3 relative">
                                <img className="h-16 w-16 " src={img} alt="" />
                                <div>
                                    <p className="cursor-pointer text-sm md:text-base hover:underline">Lorem ipsum . Dignissimos, porro!</p>
                                    <div className="flex items-center gap-4">
                                        <div className='flex items-center mt-2 gap-3'>
                                            <button
                                                disabled={quantity === 1}
                                                onClick={() => handleQuantity('-')}
                                                className='h-6 w-6 flex justify-center cursor-pointer items-center active:bg-orange-500 active:text-white bg-slate-200 disabled:opacity-30 disabled:bg-slate-200 disabled:text-black disabled:cursor-not-allowed hover:bg-slate-400 p-2'>
                                                <FaMinus />
                                            </button>
                                            <p>{quantity}</p>
                                            <button
                                                disabled={quantity === 5}
                                                onClick={() => handleQuantity('+')}
                                                className='h-6 w-6 flex justify-center cursor-pointer items-center active:bg-orange-500 active:text-white bg-slate-200 disabled:opacity-30 disabled:bg-slate-200 disabled:text-black disabled:cursor-not-allowed hover:bg-slate-400  p-2'>
                                                <FaPlus />
                                            </button>
                                        </div>
                                        <p className="mt-2 text-gray-400">($120)</p>
                                    </div>
                                </div>
                                <AiFillDelete className="text-xl absolute top-2/4 cursor-pointer hover:text-red-700 text-red-600 right-3 -translate-y-2/4" />
                            </div>)}

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