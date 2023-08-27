import React from 'react';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

import logo from '../../assets/logo/bfe8de2c-b737-42ab-b1f1-576042ab0412.png';
import logo2 from '../../assets/logo/d998019b-9b34-44be-b747-1e6d5a892e2c.png';
import logo3 from '../../assets/logo/png-04.png';

const Nav = () => {
    return (
        <div className='sticky top-0 z-50 shadow-md'>
            <div className='bg-[#F5F5F5] hidden lg:block py-1'>
                <div className='max-w-6xl mx-auto flex justify-center gap-16 items-center text-sm'>
                    <p>PROFILE</p>
                    <p>MY MESSAGE</p>
                    <p>HELP CENTER</p>
                    <p>CONTACT US</p>
                    <p>ACCOUNT</p>
                    <p>LOGIN / SIGNUP</p>
                </div>
            </div>

            <div className='bg-white py-3'>
                <div className='max-w-6xl mx-auto flex gap-3 lg:justify-between items-center lg:gap-7 px-3'>
                    <img src={logo3} className='w-36 hidden lg:block' alt="" />
                    <div className='flex items-center bg-slate-100 justify-between flex-grow'>
                        <input placeholder='search in Galiver' type="text" className='bg-transparent px-3 outline-none flex-grow' />
                        <FaSearch className='text-white cursor-pointer bg-orange-600 hover:bg-orange-700 duration-200 text-3xl lg:text-5xl p-2 lg:p-3'></FaSearch>
                    </div>
                    <AiOutlineShoppingCart className='lg:text-3xl text-2xl text-black'></AiOutlineShoppingCart>
                </div>
            </div>
            
        </div>
    );
};

export default Nav;