/* eslint-disable react/prop-types */
import { useState } from 'react';
import img from '../../assets/categoryImg/6b396809-87e7-435d-ba7b-5d69699371ba.png'
import { FaMinus, FaPlus } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { getAttrebute, increaseQuantity, reduceQuantity, removeFromCart } from '../../utilities/cart';
import useGetProductDetails from '../../Hooks/useGetProductDetails';
import getMedia from '../../utilities/getMedia';


const OrderCard = ({ item }) => {
    console.log(item);
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const handleQuantity = (e) => {
        if (e === '+') {
            increaseQuantity(dispatch, item?.cart?.id)
        } else {
            console.log(item?.quantity);
            if (item?.cart?.quantity > 1) {
                reduceQuantity(dispatch, item?.cart?.id)
            }
        }
    }
    


    return (
        <div className="flex items-center gap-3 border-b px-5 py-7 relative">
            <img className="h-8 w-8 md:h-10 md:w-10 rounded-lg" src={getMedia(item?.media[0]?.name || '')} alt="" />
            <div>
                <p className="cursor-pointer text-xs md:text-sm hover:underline">
                    {item?.title?.slice(0, 30)}
                </p>
                <p className='text-xs text-gray-600'>{getAttrebute(item)}</p>
                <div className="flex items-center gap-4">
                    <div className='flex items-center mt-1 gap-3'>
                        <button
                            onClick={() => handleQuantity('-')}
                            className='h-4 w-4 flex justify-center cursor-pointer items-center active:bg-orange-500 active:text-white bg-slate-200 disabled:opacity-30 disabled:bg-slate-200 disabled:text-black disabled:cursor-not-allowed hover:bg-slate-400 p-1 text-[8px]'>
                            <FaMinus />
                        </button>
                        <p className='text-xs'>{item?.cart?.quantity}</p>
                        <button
                            onClick={() => handleQuantity('+')}
                            className='h-4 w-4 flex justify-center cursor-pointer items-center active:bg-orange-500 active:text-white bg-slate-200 disabled:opacity-30 disabled:bg-slate-200 disabled:text-black disabled:cursor-not-allowed hover:bg-slate-400  p-1 text-[8px]'>
                            <FaPlus />
                        </button>
                    </div>
                    <p className="mt-2 text-gray-500 text-xs">
                        (৳{(item?.price - item?.discount) * item?.cart?.quantity || 0})
                    </p>
                </div>

            </div>
            <AiFillDelete
                onClick={() => removeFromCart(dispatch, item?.cart?.id)}
                className="text-xl absolute top-2/4 cursor-pointer hover:text-red-700 text-red-600 right-3 -translate-y-2/4" />
        </div>
    );
};

export default OrderCard;