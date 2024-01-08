import logo from '../../assets/logo/png-04.png'
import profileIcon from '../../assets/SidebarIcon/man.png'
import orderIcon from '../../assets/SidebarIcon/order.png'
import messageIcon from '../../assets/SidebarIcon/speech-bubble.png'
import icon1 from '../../assets/SidebarIcon/barbecue.png'
import icon5 from '../../assets/SidebarIcon/eggs.png'
import icon2 from '../../assets/SidebarIcon/fast-food.png'
import icon3 from '../../assets/SidebarIcon/meat.png'
import Categories from './components/Categories/Categories'
import { NavLink } from 'react-router-dom'


const LeftSidebar = () => {

    const categories = [
        {
            id: 1,
            icon: icon1,
            name: 'Barbecue',
            subCategories: [
                {
                    id: 1,
                    name: 'Barbecue',
                },
                {
                    id: 2,
                    name: 'Barbecue',
                },
                {
                    id: 3,
                    name: 'Barbecue',
                },
            ],
            subSubCategories: [
                {
                    id: 1,
                    name: 'Barbecue',
                },
                {
                    id: 2,
                    name: 'Barbecue',
                },
                {
                    id: 3,
                    name: 'Barbecue',
                },
            ]
        },
        {
            id: 2,
            icon: icon2,
            name: 'Fast Food',
            subCategories: [
                {
                    id: 1,
                    name: 'Fast Food',
                },
                {
                    id: 2,
                    name: 'Fast Food',
                },
                {
                    id: 3,
                    name: 'Fast Food',
                },
            ],
            subSubCategories: [
                {
                    id: 1,
                    name: 'Fast Food',
                },
                {
                    id: 2,
                    name: 'Fast Food',
                },
                {
                    id: 3,
                    name: 'Fast Food',
                },
            ]
        },
        {
            id: 3,
            icon: icon3,
            name: 'Meat',
            subCategories: [
                {
                    id: 1,
                    name: 'Meat',
                },
                {
                    id: 2,
                    name: 'Meat',
                },
                {
                    id: 3,
                    name: 'Meat',
                },
            ],
            subSubCategories: [
                {
                    id: 1,
                    name: 'Meat',
                },
                {
                    id: 2,
                    name: 'Meat',
                },
                {
                    id: 3,
                    name: 'Meat',
                },
            ]
        },
        {
            id: 4,
            icon: icon5,
            name: 'Eggs',
            subCategories: [
                {
                    id: 1,
                    name: 'Eggs',
                },
                {
                    id: 2,
                    name: 'Eggs',
                },
                {
                    id: 3,
                    name: 'Eggs',
                },
            ],
            subSubCategories: [
                {
                    id: 1,
                    name: 'Eggs',
                },
                {
                    id: 2,
                    name: 'Eggs',
                },
                {
                    id: 3,
                    name: 'Eggs',
                },
            ]
        },
        {
            id: 1,
            icon: icon1,
            name: 'Barbecue',
            subCategories: [
                {
                    id: 1,
                    name: 'Barbecue',
                },
                {
                    id: 2,
                    name: 'Barbecue',
                },
                {
                    id: 3,
                    name: 'Barbecue',
                },
            ],
            subSubCategories: [
                {
                    id: 1,
                    name: 'Barbecue',
                },
                {
                    id: 2,
                    name: 'Barbecue',
                },
                {
                    id: 3,
                    name: 'Barbecue',
                },
            ]
        },
        {
            id: 2,
            icon: icon2,
            name: 'Fast Food',
            subCategories: [
                {
                    id: 1,
                    name: 'Fast Food',
                },
                {
                    id: 2,
                    name: 'Fast Food',
                },
                {
                    id: 3,
                    name: 'Fast Food',
                },
            ],
            subSubCategories: [
                {
                    id: 1,
                    name: 'Fast Food',
                },
                {
                    id: 2,
                    name: 'Fast Food',
                },
                {
                    id: 3,
                    name: 'Fast Food',
                },
            ]
        },
        {
            id: 3,
            icon: icon3,
            name: 'Meat',
            subCategories: [
                {
                    id: 1,
                    name: 'Meat',
                },
                {
                    id: 2,
                    name: 'Meat',
                },
                {
                    id: 3,
                    name: 'Meat',
                },
            ],
            subSubCategories: [
                {
                    id: 1,
                    name: 'Meat',
                },
                {
                    id: 2,
                    name: 'Meat',
                },
                {
                    id: 3,
                    name: 'Meat',
                },
            ]
        },
        {
            id: 4,
            icon: icon5,
            name: 'Eggs',
            subCategories: [
                {
                    id: 1,
                    name: 'Eggs',
                },
                {
                    id: 2,
                    name: 'Eggs',
                },
                {
                    id: 3,
                    name: 'Eggs',
                },
            ],
            subSubCategories: [
                {
                    id: 1,
                    name: 'Eggs',
                },
                {
                    id: 2,
                    name: 'Eggs',
                },
                {
                    id: 3,
                    name: 'Eggs',
                },
            ]
        },
        {
            id: 1,
            icon: icon1,
            name: 'Barbecue',
            subCategories: [
                {
                    id: 1,
                    name: 'Barbecue',
                },
                {
                    id: 2,
                    name: 'Barbecue',
                },
                {
                    id: 3,
                    name: 'Barbecue',
                },
            ],
            subSubCategories: [
                {
                    id: 1,
                    name: 'Barbecue',
                },
                {
                    id: 2,
                    name: 'Barbecue',
                },
                {
                    id: 3,
                    name: 'Barbecue',
                },
            ]
        },
        {
            id: 2,
            icon: icon2,
            name: 'Fast Food',
            subCategories: [
                {
                    id: 1,
                    name: 'Fast Food',
                },
                {
                    id: 2,
                    name: 'Fast Food',
                },
                {
                    id: 3,
                    name: 'Fast Food',
                },
            ],
            subSubCategories: [
                {
                    id: 1,
                    name: 'Fast Food',
                },
                {
                    id: 2,
                    name: 'Fast Food',
                },
                {
                    id: 3,
                    name: 'Fast Food',
                },
            ]
        },
        {
            id: 3,
            icon: icon3,
            name: 'Meat',
            subCategories: [
                {
                    id: 1,
                    name: 'Meat',
                },
                {
                    id: 2,
                    name: 'Meat',
                },
                {
                    id: 3,
                    name: 'Meat',
                },
            ],
            subSubCategories: [
                {
                    id: 1,
                    name: 'Meat',
                },
                {
                    id: 2,
                    name: 'Meat',
                },
                {
                    id: 3,
                    name: 'Meat',
                },
            ]
        },
        {
            id: 4,
            icon: icon5,
            name: 'Eggs',
            subCategories: [
                {
                    id: 1,
                    name: 'Eggs',
                },
                {
                    id: 2,
                    name: 'Eggs',
                },
                {
                    id: 3,
                    name: 'Eggs',
                },
            ],
            subSubCategories: [
                {
                    id: 1,
                    name: 'Eggs',
                },
                {
                    id: 2,
                    name: 'Eggs',
                },
                {
                    id: 3,
                    name: 'Eggs',
                },
            ]
        },
    ]

    return (
        <div className="bg-white left-sidebar w-full h-full border-t overflow-y-auto py-4 shadow-xl select-none" >
            <img src={logo} alt="" className='w-36 ms-5 md:hidden mb-7' />
            <div className='flex flex-col border-b pb-3'>
                <p className='flex items-center cursor-pointer gap-2 hover:bg-slate-200 duration-300 px-5 py-3 '><img className='w-6 h-6' src={orderIcon} alt="" /> My Order</p>
                <NavLink to='/profile' className='flex items-center cursor-pointer gap-2 hover:bg-slate-200 duration-300 px-5 py-3 '><img className='w-6 h-6' src={profileIcon} alt="" /> Profile</NavLink>
                <p className='flex items-center  cursor-pointer gap-2 hover:bg-slate-200 duration-300 px-5 py-3 '><img className='w-6 h-6' src={messageIcon} alt="" /> Messenger</p>
            </div>
            <div>
                <p className='text-xl mt-4 mb-3 ml-4'>Categories</p>
                <div>
                    {categories.map((item, i) => <Categories item={item} key={i} />)}
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;