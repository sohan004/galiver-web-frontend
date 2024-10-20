/* eslint-disable react/prop-types */
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useNavigate } from 'react-router-dom';
import getMedia from '../../utilities/getMedia';
import getParentage from '../../utilities/getParcantage';
import logo from '../../assets/logo/png-02.png'
import { pushToDataLayer } from '../../main';

const ProductCard = ({ product }) => {
    const {
        discount,
        media,
        price,
        title,
        _id } = product || {}
    const navigate = useNavigate()


    const clickProduct = () => {
        pushToDataLayer({
            event: 'select_item',
            ecommerce: {
                items: [{
                    item_id: _id, // Product ID
                    item_name: title, // Product Name
                    price: price - discount, // Product Price
                }]
            }
        })
        navigate(`/product/${_id}`)
    }

    const getTitle = () => {
        return title.length > 50 ? title.slice(0, 30) + '...' : title
    }

    return (
        <>
            <div onClick={clickProduct} className='w-full relative bg-white p-2 cursor-pointer  group hover:scale-105 duration-150 hover:shadow-lg'>
                <div className='h-44 lg:h-60 w-full overflow-hidden relative'>
                    <img src={getMedia(media?.name)} className='w-full h-full group-hover:scale-125 duration-300 z-40 relative ' alt="" />
                    <div className='absolute z-30 bg-gradient-to-r from-orange-100 animate-pulse top-0 left-0 w-full h-full flex justify-center items-center'>
                        <img src={logo} className='w-16 md:w-20' alt="" /></div>
                    {discount > 0 && <p className='text-xs absolute top-0 left-0 bg-orange-600 text-white py-[2px] rounded-se-lg rounded-es-md px-1 z-50'><s className='opacity-60'>৳{discount}</s> <span className=''>-{getParentage(discount, price)}%</span></p>}
                </div>
                <p className='text-sm  mt-2'>{getTitle()}</p>
                <div className='flex gap-1 items-center'>
                    <p className='text-lg text-orange-600 font-medium'>৳{price - discount}</p>
                    {discount > 0 && <s className='text-sm opacity-70'>৳{price}</s>}
                </div>
                <div className='flex gap-1 items-center'>
                    <Rating readOnly className='max-w-[70px]' value={5} />
                </div>
            </div>
        </>
    );
};

export default ProductCard;