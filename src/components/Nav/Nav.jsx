import { FaSearch, } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

import logo3 from '../../assets/logo/png-04.png';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCartSideBar } from "../CartSideBar/CartSideBar";
import { toggleSignIn } from "../Modal/components/SignIn/SignIn";
const Nav = () => {

    const [navShow, setNavShow] = useState(true);
    const [scrollTop, setScrollTop] = useState(0);
    const [navTop, setNavTop] = useState(true);
    const dispatch = useDispatch();

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setScrollTop(scrollY);
        if (scrollY > 200) {
            if (scrollY > scrollTop) {
                setNavShow(false);
            }
            else if (scrollY < scrollTop) {
                setNavShow(true);
            }
        }
        if (scrollY > 0) {
            setNavTop(false);
        }
        else {
            setNavTop(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navShow, scrollTop, navTop]);

    const openCartSidebar = () => {
        toggleCartSideBar(dispatch, 'open')
    }

    return (
        <div className={`sticky ${navShow ? 'top-0' : '-top-40'} ${navTop ? 'shadow-none' : 'shadow-md'}  left-0 w-full duration-700  z-50 `}>
            <div className='bg-[#F5F5F5] hidden lg:block py-1'>
                <div className='max-w-6xl mx-auto flex justify-center gap-16 items-center text-sm'>
                    <p>PROFILE</p>
                    <p>MY MESSAGE</p>
                    <p>HELP CENTER</p>
                    <p>CONTACT US</p>
                    <p>ACCOUNT</p>
                    <p onClick={()=>toggleSignIn('open')}>LOGIN / SIGNUP</p>
                </div>
            </div>

            <div className='bg-white py-3'>
                <div className='max-w-6xl mx-auto flex gap-3 lg:justify-between items-center lg:gap-7 px-3'>
                    <img src={logo3} className='w-36 hidden lg:block' alt="" />
                    <div className='flex items-center bg-slate-100 justify-between flex-grow'>
                        <input placeholder='search in Galiver' type="text" className='bg-transparent px-3 outline-none flex-grow' />
                        <FaSearch className='text-white active:scale-75 cursor-pointer bg-orange-600 hover:bg-orange-700 duration-200 text-3xl lg:text-5xl p-2 lg:p-3 select-none'></FaSearch>
                    </div>
                    <AiOutlineShoppingCart
                        onClick={openCartSidebar}
                        className='lg:text-3xl cursor-pointer duration-150 active:scale-75 select-none text-2xl text-black'></AiOutlineShoppingCart>
                </div>
            </div>
        </div>
    );
};

export default Nav;