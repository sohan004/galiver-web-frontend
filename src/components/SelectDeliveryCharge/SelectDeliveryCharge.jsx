import React, { useState } from 'react';

const SelectDeliveryCharge = ({ setDeliveryCharge, showModal, setShowModal }) => {
    const select = (tk) => {
        setDeliveryCharge(tk)
        setShowModal(false)
    }
    return (
        <div>
            <div className={`z-50 fixed top-0 left-0 w-full h-full bg-black duration-300  bg-opacity-50 ${showModal ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            </div>
            <div
                className={`fixed top-2/4 z-50 left-2/4 overflow-hidden -translate-x-2/4 -translate-y-2/4 bg-white max-w-[80%]  md:max-w-[400px] w-full flex flex-col rounded  duration-300  ${showModal ? 'scale-100 opacity-100 visible' : 'scale-75 opacity-0 invisible'}`}>
                <p className='text-xl mt-2 mb-3 font-bold px-6 py-3'>Select Delivery Charge...</p>
                <div
                    onClick={() => select(70)}
                    className='px-6 flex items-center cursor-pointer hover:bg-gray-100 duration-150  gap-3 py-3 border-b  font-medium'>
                    <p className='w-3 h-3 bg-blue-500 rounded-full'></p>
                    <p>Inside Dhaka ৳70</p>
                </div>
                <div
                    onClick={() => select(130)}
                    className='px-6 flex items-center cursor-pointer hover:bg-gray-100 duration-150 gap-3 py-3 border-b  font-medium'>
                    <p className='w-3 h-3 bg-green-500 rounded-full'></p>
                    <p>Outside Dhaka ৳130</p>
                </div>
            </div>
        </div>
    );
};

export default SelectDeliveryCharge;