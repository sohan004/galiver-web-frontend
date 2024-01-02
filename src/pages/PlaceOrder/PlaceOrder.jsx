
import img from '../../assets/categoryImg/6b396809-87e7-435d-ba7b-5d69699371ba.png'
import { BiSolidDiscount } from "react-icons/bi";
import Button from "../../components/Button/Button";
import { GiReceiveMoney } from "react-icons/gi";
import { useState } from "react";
import bkash from '../../assets/payment-logo/download.png'
import card from '../../assets/payment-logo/images.png'
import { FaArrowLeft } from 'react-icons/fa';


const PlaceOrder = () => {

    const [method, setMethod] = useState('bkash')

    const matchMethod = (name) => {
        if (method === name) {
            return 'bg-orange-600'
        }
        else {
            return 'bg-orange-200 '
        }
    }

    return (
        <div className="max-w-[1188px] mx-auto">
            <p className="text-center bg-white sticky top-0 z-50 shadow p-2 font-semibold text-xl">Checkout <span className="text-orange-600">(01)</span></p>
            <p className='flex items-center gap-2 my-3 select-none ms-5 text-sm cursor-pointer duration-300 '><FaArrowLeft className='text-orange-600 '/> Back To Home</p>
            <div className=" gap-3  flex flex-col md:flex-row px-3">
                <div className="w-full md:w-[70%]">
                    <Button w="100%">
                        + add address
                    </Button>
                    <div className="mt-2 rounded-md  p-2 bg-white">
                        {
                            new Array(5).fill(0).map((item, index) => <div key={index} className="flex mt-5 items-center justify-between gap-4 border-b px-3 pb-5 relative">
                                <div className="flex items-center gap-3">
                                    <p className="text-xs md:text-sm">{index + 1}.</p>
                                    <div className="flex gap-4">
                                        <img className="h-7 w-7 md:w-9 md:h-9 rounded-full" src={img} alt="" />
                                        <div>
                                            <p className="text-xs md:text-sm">asdfjsad asdfkasdkf askdfks</p>
                                            <p className="text-xs opacity-50 mt-1">red, xl</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs opacity-70">Qty: 4</p>
                                <p className="text-sm">$150</p>
                            </div>)
                        }
                    </div>
                </div>


                <div className="w-full shadow rounded-md md:w-[30%] bg-white p-3">
                    <div className="  flex flex-col gap-3 rounded-md  mx-auto">
                        <div
                            onClick={() => setMethod('bkash')}
                            className=' p-2 flex items-center gap-4 cursor-pointer '>
                            <div className='rounded-full  border p-1 border-orange-600'>
                                <p className={`h-3 w-3 rounded-full  ${matchMethod('bkash')}`}></p>
                            </div>
                            <img src={bkash} className='w-20 ' alt="" />
                        </div>

                        <div
                            onClick={() => setMethod('card')}
                            className=' p-2 flex items-center gap-4 cursor-pointer'>
                            <div className='rounded-full  border p-1 border-orange-600'>
                                <p className={`h-3 w-3 rounded-full  ${matchMethod('card')}`}></p>
                            </div>
                            <img src={card} className='w-20 ' alt="" />
                        </div>

                        <div
                            onClick={() => setMethod('cash')}
                            className=' p-2 flex items-center gap-4 cursor-pointer'>
                            <div className='rounded-full  border p-1 border-orange-600'>
                                <p className={`h-3 w-3 rounded-full  ${matchMethod('cash')}`}></p>
                            </div>
                            <div className='flex items-end gap-2'>
                                <GiReceiveMoney className='text-2xl  md:text-3xl text-blue-800' />
                                <p className='text-base font-medium md:text-base'>Cash On Delivary</p>
                            </div>
                        </div>
                    </div>

                    <p className="mt-10 font-medium mb-3">Order Summary :</p>

                    <button className="flex items-center gap-1 bg-blue-600 py-1 px-2 justify-center text-white rounded-md mb-3 text-xs active:scale-90 duration-300"><BiSolidDiscount className="text-xl " /> Apply Voucher</button>

                    <div className="mt-7 flex mb-20 flex-col gap-1    ">
                        <p className="text-sm flex items-center justify-between font-semibold"><span>Total Price</span> <span className="font-light">$122</span></p>
                        <p className="text-sm flex items-center justify-between font-semibold"><span>Delivary Charge</span> <span className="font-light">$60</span></p>
                        <p className="text-sm flex items-center justify-between font-semibold"><span>Tax</span> <span className="font-light">$0</span></p>
                        <p className="text-sm flex items-center justify-between font-semibold"><span>Discount</span> <span className="font-light">$5</span></p>
                        <p className="text-sm border-b pb-2 mb-2 flex items-center justify-between font-semibold"><span>Voucher</span> <span className="font-light">$0</span></p>
                        <p className="text-sm flex items-center justify-between font-semibold"><span>Total</span> <span className="font-light">$155</span></p>
                    </div>


                    <button className={`flex items-center w-full gap-2 bg-orange-600 p-4 md:p-2 fixed left-0 md:sticky md:top-full bottom-0 justify-center  select-none hover:bg-orange-700 duration-300 active:scale-90 text-white rounded-none md:rounded-md text-sm`}>Confirm Order</button>

                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;