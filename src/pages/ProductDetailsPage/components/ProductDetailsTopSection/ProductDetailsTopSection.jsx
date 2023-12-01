import { useState } from "react";
import ImgMegnify from "../../../../components/ImgMegnify/ImgMegnify";
import img from '../../../../assets/carusalIMG/405f1ed5-6be1-41ff-9b5d-8bf1f66772b6.jpg'
import { FaMinus, FaPlus, FaStar, FaStarHalfAlt } from "react-icons/fa";
import ColorSelector from "../ColorSelector/ColorSelector";
import SizeSelector from "../SizeSelector/SizeSelector";

const ProductDetailsTopSection = () => {
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
        <>
           <div className='flex bg-white flex-col p-3 lg:flex-row gap-x-5 gap-y-3 select-none'>
                <div className='w-full md:w-[60%] '>
                    <div className='h-[200px] md:h-[350px]'>
                        <ImgMegnify img={img}></ImgMegnify>
                    </div>
                    <div className='mt-4 flex items-center gap-2 '>
                        <img className='h-14 hover:border-orange-500 cursor-pointer border w-14 p-2' src={img} alt="" />
                        <img className='h-14 hover:border-orange-500 cursor-pointer border w-14 p-2' src={img} alt="" />
                        <img className='h-14 hover:border-orange-500 cursor-pointer border w-14 p-2' src={img} alt="" />
                        <img className='h-14 hover:border-orange-500 cursor-pointer border w-14 p-2' src={img} alt="" />
                    </div>
                </div>
                <div className='w-full md:w-[40%]'>
                    <h1 className='text-xl lg:text-2xl '>Gulabari Premium Rose Water 120 ml (Pack of 4)</h1>
                    <div className='flex items-center gap-2 mt-3 '>
                        <div className='flex items-center text-sm text-yellow-500'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        <p className='hover:underline text-xs cursor-pointer text-blue-500'>2 ratings</p>
                    </div>
                    <div className='pt-3 border-b pb-3'>
                        <p className='text-3xl font-bold text-orange-600'>$200</p>
                        <p className='text-base text-gray-500 line-through'>$250</p>
                    </div>
                    <div className='py-5 border-b'>
                        <ColorSelector />
                        <SizeSelector />
                    </div>
                    <div className='py-5 border-b flex items-center gap-5'>
                        <p className='text-lg'>Quantity </p>
                        <div className='flex items-center gap-3'>
                            <button
                                disabled={quantity === 1}
                                onClick={() => handleQuantity('-')}
                                className='h-7 w-7 flex justify-center cursor-pointer items-center active:bg-orange-500 active:text-white bg-slate-200 disabled:opacity-30 disabled:bg-slate-200 disabled:text-black disabled:cursor-not-allowed hover:bg-slate-400 p-2'>
                                <FaMinus />
                            </button>
                            <p>{quantity}</p>
                            <button
                                disabled={quantity === 5}
                                onClick={() => handleQuantity('+')}
                                className='h-7 w-7 flex justify-center cursor-pointer items-center active:bg-orange-500 active:text-white bg-slate-200 disabled:opacity-30 disabled:bg-slate-200 disabled:text-black disabled:cursor-not-allowed hover:bg-slate-400  p-2'>
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-2 left-0 bg-white p-3 md:p-0 z-40 md:static fixed w-full bottom-0'>
                        <button className=" bg-cyan-400 w-2/4 hover:bg-cyan-500 duration-300 active:scale-90 py-3 border-0 ">Buy Now</button>
                        <button className=" bg-orange-600 w-2/4 hover:bg-orange-700 duration-300 active:scale-90 py-3 text-white border-0 ">Add Cart</button>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default ProductDetailsTopSection;