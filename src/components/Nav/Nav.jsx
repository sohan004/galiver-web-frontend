/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { FaSearch, } from "react-icons/fa";
import logo3 from '../../assets/logo/png-04.png';
import { useEffect, useRef, useState } from "react";
import { toggleCartSideBar } from "../CartSideBar/CartSideBar";
import { toggleSignIn } from "../Modal/components/SignIn/SignIn";
import GlobalLoading, { toggleGlobalLoading } from "../Modal/components/GlobalLoading/GlobalLoading";
import shoppingCartICon from '../../assets/SidebarIcon/shopping-cart.png'
import { RiMenu2Fill } from "react-icons/ri";
import man from '../../assets/SidebarIcon/man.png'
import notification from '../../assets/SidebarIcon/notification-bell.png'
import { toggleAddressModal } from "../Modal/components/AddressModal/AddressModal";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading, setProducts } from "../../features/searchProduct/searchProductSlice";
const Nav = ({
    showLeftSideBar,
    setShowLeftSideBar,
}) => {

    const [navShow, setNavShow] = useState(true);
    const [scrollTop, setScrollTop] = useState(0);
    const [navTop, setNavTop] = useState(true);
    const searchTextRef = useRef()
    const parentRef = useRef()
    const [inputFocus, setInputFocus] = useState(false)
    const [searchKeyword, setSearchKeyword] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        const search = location.search
        const searchText = new URLSearchParams(search).get('search')
        if (searchText) {
            searchTextRef.current.value = searchText
        }
    }, [location])

    const getKey = () => {
        const key = localStorage.getItem('search-key')
        if (key) {
            setSearchKeyword(key.split(','))
        }
        else {
            setSearchKeyword([])
        }
    }

    const removeKey = (e, index) => {
        e.stopPropagation()
        const key = localStorage.getItem('search-key')
        const toArray = key.split(',')
        toArray.splice(index, 1)
        localStorage.setItem('search-key', toArray.filter(s => {
            if (s) {
                return s
            }
        }).slice(0, 5).join(','))
        getKey()
    }

    useEffect(() => {
        getKey()
    }, [])

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
    }, [handleScroll]);

    const openCartSidebar = () => {
        toggleCartSideBar('open')
    }

    const setNewSearchKey = (text) => {
        const searchKey = localStorage.getItem('search-key') || ''
        const toArray = searchKey.split(',')
        if (toArray.length >= 5 && !toArray.includes(text)) {
            toArray.pop()
            toArray.unshift(text)
        }
        else if (!toArray.includes(text)) {
            toArray.unshift(text)
        }
        localStorage.setItem('search-key', toArray.filter(s => {
            if (s) {
                return s
            }
        }).slice(0, 5).join(','))
        getKey()
    }

    const handleSearch = () => {
        if (searchTextRef.current.value) {
            setNewSearchKey(searchTextRef.current.value)
            dispatch(setProducts([]))
            dispatch(setLoading(true))
            navigate(`/search?search=${searchTextRef.current.value}`)
            searchTextRef.current.blur()
            setInputFocus(false)
        }
    }

    const searchBtn = (e) => {
        e.stopPropagation()
        handleSearch()
    }

    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (!parentRef?.current?.contains(e.target)) {
                setInputFocus(false)
            }
        })
        return () => {
            window.removeEventListener('click', () => {
                setInputFocus(false)
            })
        }
    }, [])

    const clickSearchKey = (e, key) => {
        e.stopPropagation()
        searchTextRef.current.value = key
        handleSearch()
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
                    <div
                        ref={parentRef}
                        onClick={() => setInputFocus(true)}
                        className="flex-1  relative flex items-center bg-slate-100">
                        <input
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            placeholder='search in Galiver'
                            type="text"
                            ref={searchTextRef}
                            className="flex-1 bg-transparent px-2 py-2 outline-none " />
                        <div
                            onClick={searchBtn}
                            className="absolute right-0 top-0 h-full flex items-center justify-center bg-orange-600 hover:bg-orange-700 cursor-pointer text-white duration-300  p-2 lg:p-3 select-none group"
                        ><FaSearch className="group-active:scale-50 duration-300" />
                        </div>
                        {inputFocus && searchKeyword.length > 0 && <div className="absolute text-xs md:text-sm top-full  left-0 w-full p-2 bg-white shadow-lg">
                            <p className="text-xs text-gray-400">Search Key</p>
                            {searchKeyword.map((key, index) => <p key={index} 
                            onClick={e => clickSearchKey(e, key)}
                            className="flex cursor-pointer hover:bg-slate-50 justify-between items-center gap-2 p-2 border-b border-gray-100">{key}<span
                            className="text-gray-400 font-light"
                                onClick={e => removeKey(e, index)}
                            >&#10006;</span></p>)}
                        </div>}
                    </div>
                    {/* <div className=" flex items-center gap-5">
                        <img
                            onClick={openCartSidebar}
                            src={shoppingCartICon} className="w-6 md:w-7 cursor-pointer duration-150  active:scale-75 select-none" alt="" />
                        <img src={man} className="h-8 w-8 rounded-full hidden md:block" alt="" />
                        <img src={notification} className="h-8 w-8 rounded-full hidden md:block" alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Nav;