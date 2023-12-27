import { useState } from 'react';
import bkash from '../../assets/payment-logo/download.png'
import card from '../../assets/payment-logo/images.png'
import { GiReceiveMoney } from "react-icons/gi";
import Button from '../../components/Button/Button';
import { FaArrowRight } from 'react-icons/fa';


const PaymentMethods = () => {

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
        <div className="max-w-[1188px] bg-white  mx-auto ">
            <h1 className="md:text-xl text-lg py-2 font-semibold text-center bg-green-600 text-white">Select Payment Method</h1>

            <div className='px-3'>
                <div className="px-3 max-w-[300px] flex flex-col gap-5  py-5  rounded-md mt-5 mx-auto">

                    <div
                        onClick={() => setMethod('bkash')}
                        className=' p-2 flex items-center gap-4 cursor-pointer '>
                        <div className='rounded-full  border p-1 border-orange-600'>
                            <p className={`h-3 w-3 rounded-full  ${matchMethod('bkash')}`}></p>
                        </div>
                        <img src={bkash} className='w-20 md:w-28' alt="" />
                    </div>

                    <div
                        onClick={() => setMethod('card')}
                        className=' p-2 flex items-center gap-4 cursor-pointer'>
                        <div className='rounded-full  border p-1 border-orange-600'>
                            <p className={`h-3 w-3 rounded-full  ${matchMethod('card')}`}></p>
                        </div>
                        <img src={card} className='w-20 md:w-28' alt="" />
                    </div>

                    <div
                        onClick={() => setMethod('cash')}
                        className=' p-2 flex items-center gap-4 cursor-pointer'>
                        <div className='rounded-full  border p-1 border-orange-600'>
                            <p className={`h-3 w-3 rounded-full  ${matchMethod('cash')}`}></p>
                        </div>
                        <div className='flex items-end gap-2'>
                            <GiReceiveMoney className='text-2xl  md:text-5xl text-blue-800' />
                            <p className='text-base font-medium md:text-lg'>Cash On Delivary</p>
                        </div>
                    </div>

                    <div className='text-right mt-8 flex justify-center'>
                        <Button w='100%'>
                            Next
                            <FaArrowRight />
                        </Button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PaymentMethods;