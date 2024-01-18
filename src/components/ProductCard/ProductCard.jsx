import { Rating } from '@smastrom/react-rating'
import img from '../../assets/carusalIMG/productIMg2.jpg'
import '@smastrom/react-rating/style.css'
import { useNavigate } from 'react-router-dom';

const ProductCard = () => {
    const navigate = useNavigate()
    return (
        <>
            <div onClick={()=>navigate('/product/dsfdfsf')} className='w-full relative bg-white p-2 cursor-pointer  group hover:scale-105 duration-150 hover:shadow-lg'>
                <div className='h-36 lg:h-56 w-full overflow-hidden relative'>
                    <img src={img} className='w-full h-full group-hover:scale-125 duration-300 ' alt="" />
                    <p className='text-xs absolute top-0 left-0 bg-orange-600 text-white py-[2px] rounded-se-lg rounded-es-md px-1'><s className='opacity-60'>$30</s> <span className=''>-25%</span></p>
                </div>
                <p className='text-sm  mt-2'>men watch. t shirt, trimmer ,  t shirt, trimmer</p>
                <div className='flex gap-1 items-center'>
                    <p className='text-lg text-orange-600 font-medium'>$88</p>
                    <s className='text-sm opacity-70'>$150</s>
                </div>
                <div className='flex gap-1 items-center'>
                    <Rating readOnly className='max-w-[70px]' value={4.5} />
                    <p className='text-xs opacity-60'>(20)</p>
                </div>
            </div>
        </>
    );
};

export default ProductCard;