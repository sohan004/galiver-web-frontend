import { useState } from 'react';
import img from '../../assets/categoryImg/6b396809-87e7-435d-ba7b-5d69699371ba.png'
import { FaMinus, FaPlus } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

const OrderCard = () => {
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

    return (
        <div  className="flex items-start gap-2 border-b p-3 relative">
        <img className="h-12 w-12 md:h-16 md:w-16" src={img} alt="" />
        <div>
            <p className="cursor-pointer text-sm md:text-base hover:underline">Lorem ipsum . Dignissimos!</p>
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
    </div>
    );
};

export default OrderCard;