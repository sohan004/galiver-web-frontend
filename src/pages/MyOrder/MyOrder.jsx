import img1 from '../../assets/order-page/fast-delivery.png'
import img2 from '../../assets/order-page/shopping-cart (1).png'
import img3 from '../../assets/order-page/cancel.png'
import { useState } from 'react';

const MyOrder = () => {
    const [state, setState] = useState('processing')

    const handleCheck = (e) => {
        return e === state ? true : false
    }

    return (
        <div>
            <div className="bg-white pb-20 duration-500 max-w-[1240px] mx-auto relative  ">
                <div className='grid grid-cols-3 '>
                    <div
                        onClick={() => setState('processing')}
                        className={`flex flex-col justify-center cursor-pointer  items-center  py-2 px-1  ${handleCheck('processing') ? 'bg-orange-600 text-white' : 'bg-orange-100 text-black'}`}>
                        <img src={img1} className='md:w-7 md:h-7 w-5 h-5' alt="" />
                        <h4 className='text-[10px] md:text-sm'>Processing Order</h4>
                    </div>
                    <div
                        onClick={() => setState('cancel')}
                        className={`flex flex-col justify-center cursor-pointer  items-center  py-2 px-1  ${handleCheck('cancel') ? 'bg-orange-600 text-white' : 'bg-orange-100 text-black'}`}>
                        <img src={img3} className='md:w-7 md:h-7 w-5 h-5' alt="" />
                        <h4 className='text-[10px] md:text-sm'>Cancel Order</h4>
                    </div>
                    <div
                        onClick={() => setState('confirm')}
                        className={`flex flex-col justify-center cursor-pointer  items-center  py-2 px-1  ${handleCheck('confirm') ? 'bg-orange-600 text-white' : 'bg-orange-100 text-black'}`}>
                        <img src={img2} className='md:w-7 md:h-7 w-5 h-5' alt="" />
                        <h4 className='text-[10px] md:text-sm'>Complete Order</h4>
                    </div>
                </div>

                <div className='mt-5 px-4 md:px-7 grid grid-cols-1 gap-10'>
                    {new Array(5).fill(0).map((i) =>
                        <div key={i} className='flex items-center justify-between border-b py-2'>
                            <div className='flex items-start gap-2 md:gap-4'>
                                <img src={img2} className='h-9 w-9 p-1 rounded md:w-11 md:h-11 bg-yellow-400' alt="" />
                                <div>
                                    <p className='text-xs md:text-base'>New women bag</p>
                                    <p className='text-xs opacity-50'>xl , green, 4 qty</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-xs md:text-base'>৳ 2000</p>
                            </div>
                            <p className='text-xs text-orange-600'>view details</p>
                        </div>)}
                </div>
            </div>
        </div>
    );
};

export default MyOrder;