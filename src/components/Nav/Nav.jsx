/* eslint-disable react/prop-types */
import { FaSearch, } from "react-icons/fa";
import logo3 from '../../assets/logo/png-04.png';
import { useEffect, useState } from "react";
import { toggleCartSideBar } from "../CartSideBar/CartSideBar";
import { toggleSignIn } from "../Modal/components/SignIn/SignIn";
import GlobalLoading, { toggleGlobalLoading } from "../Modal/components/GlobalLoading/GlobalLoading";
import shoppingCartICon from '../../assets/SidebarIcon/shopping-cart.png'
import { RiMenu2Fill } from "react-icons/ri";
import man from '../../assets/SidebarIcon/man.png'
import notification from '../../assets/SidebarIcon/notification-bell.png'
import { toggleAddressModal } from "../Modal/components/AddressModal/AddressModal";
const Nav = ({
    showLeftSideBar,
    setShowLeftSideBar,
}) => {

    const [navShow, setNavShow] = useState(true);
    const [scrollTop, setScrollTop] = useState(0);
    const [navTop, setNavTop] = useState(true);

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
        toggleCartSideBar('open')
    }

    return (
        <div className={`sticky select-none ${navShow ? 'top-0' : '-top-40'} ${navTop ? 'shadow-none' : 'shadow-md'}  left-0 w-full duration-700  z-[80] `}>
            <div className='bg-white py-3'>
                <div className='max-w-7xl mx-auto flex gap-3 lg:justify-between items-center lg:gap-7 px-3'>
                    <div className="flex items-center gap-3">
                        <RiMenu2Fill
                            onClick={() => setShowLeftSideBar(!showLeftSideBar)}
                            className={` text-2xl cursor-pointer duration-200 ${showLeftSideBar ? 'rotate-180' : 'rotate-0'}`} />
                        <img src={logo3} className='w-36 hidden md:block' alt="" />
                    </div>
                    <div className="flex-1 overflow-hidden relative flex items-center bg-slate-100">
                        <input
                            placeholder='search in Galiver'
                            type="text"
                            className="flex-1 bg-transparent px-2 py-2 outline-none " />
                        <div className="absolute right-0 top-0 h-full flex items-center justify-center bg-orange-600 hover:bg-orange-700 cursor-pointer text-white duration-300  p-2 lg:p-3 select-none group"
                        >
                            <FaSearch className="group-active:scale-50 duration-300" />
                        </div>
                    </div>
                    <div className=" flex items-center gap-5">
                        <img
                            onClick={openCartSidebar}
                            src={shoppingCartICon} className="w-6 md:w-7 cursor-pointer duration-150  active:scale-75 select-none" alt="" />
                        <img src={man} className="h-8 w-8 rounded-full hidden md:block" alt="" />
                        <img src={notification} className="h-8 w-8 rounded-full hidden md:block" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;