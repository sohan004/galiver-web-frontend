import logo from '../../assets/logo/png-04.png'
import profileIcon from '../../assets/SidebarIcon/man.png'
import orderIcon from '../../assets/SidebarIcon/order.png'
import messageIcon from '../../assets/SidebarIcon/speech-bubble.png'
import notify from '../../assets/SidebarIcon/notification-bell.png'
import Categories from './components/Categories/Categories'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { BACKEND_URL } from '../../App'
import { setCategoryList } from '../../features/categoryList/categoryListSlice'
import { useDispatch, useSelector } from 'react-redux'
import SidebarSkleton from '../SidebarSkleton/SidebarSkleton'


const LeftSidebar = () => {

    const { categoryList: category, loading } = useSelector(state => state.categoryList)
    const dispatch = useDispatch()

    useEffect(() => {
        if (category.length > 0) return
        fetch(`${BACKEND_URL}/api/v1/category/get-category-list`)
            .then(res => res.json())
            .then(data => {
                if (data.category) {
                    dispatch(setCategoryList(data.category))
                }
            })
            .catch(() => {
                dispatch(setCategoryList([]))
            })
    }, [])

    return (
        <div className="bg-white left-sidebar w-full h-full border-t overflow-y-auto py-4 shadow-xl select-none" >
            <img src={logo} alt="" className='w-36 ms-5 md:hidden mb-7' />
            {/* <div className='flex flex-col border-b pb-3'>
                <NavLink to='/profile' className='flex items-center cursor-pointer gap-2 hover:bg-slate-200 duration-300 px-5 py-3  md:hidden'><img className='w-6 h-6' src={profileIcon} alt="" />Profile</NavLink>
                <NavLink to='/my-order' className='flex items-center cursor-pointer gap-2 hover:bg-slate-200 duration-300 px-5 py-3 '><img className='w-6 h-6' src={orderIcon} alt="" />Order</NavLink>
                <NavLink to='/my-order' className='flex items-center cursor-pointer gap-2 hover:bg-slate-200 duration-300 px-5 py-3  md:hidden'><img className='w-6 h-6' src={notify} alt="" />Notification</NavLink>
                <p className='flex items-center  cursor-pointer gap-2 hover:bg-slate-200 duration-300 px-5 py-3 '><img className='w-6 h-6' src={messageIcon} alt="" /> Messenger</p>
            </div> */}
            <div>
                <p className='text-xl  mb-3 ml-4'>Categories</p>
                <div>
                    {!loading ? category.map((item, i) => <Categories item={item} key={i} />)
                        : <SidebarSkleton></SidebarSkleton>}
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;