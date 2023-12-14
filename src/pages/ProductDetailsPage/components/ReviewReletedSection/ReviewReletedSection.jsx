
import { PiCarProfileFill, PiKeyReturnFill } from 'react-icons/pi';
import { MdHomeRepairService } from 'react-icons/md';
import { FaShop } from 'react-icons/fa6';
import { IoIosSettings } from 'react-icons/io';
import img from '../../../../assets/categoryImg/6b396809-87e7-435d-ba7b-5d69699371ba.png'
import img2 from '../../../../assets/carusalIMG/9252c791-78ee-4ff2-a5d1-d3e37ff4565b.jpg_1200x1200.jpg'
import ProductCard from '../../../../components/ProductCard/ProductCard';
import ReviewCard from '../../../../components/ReviewCard/ReviewCard';
import { FaAngleRight } from 'react-icons/fa';
//product details page
const ReviewReletedSection = () => {
    return (
        <div className="bg-white flex flex-col md:flex-row  p-3 mt-4 ">
            <div className='w-full md:w-[80%]'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full '>
                    <div className='border rounded bg-slate-100 '>
                        <div className='flex items-center gap-2 justify-center bg-teal-400 p-1  rounded'>
                            <FaShop className='text-xl' />
                            <p>Shop</p>
                        </div>
                        <div className='p-3 '>
                            <div className='flex items-start gap-3'>
                                <img src={img} className='h-9 w-9 rounded-full' alt="" />
                                <div className='flex flex-wrap items-center gap-x-4'>
                                    <p className='cursor-pointer hover:underline'>amar shop</p>
                                    <p className='text-sm  opacity-50'>25 Products</p>
                                    <p className='text-sm mt-1 opacity-50'>6 Reatings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded bg-slate-100 '>
                        <div className='flex items-center gap-2 justify-center bg-teal-400 p-1  rounded'>
                            <PiCarProfileFill className='text-xl' />
                            <p>Delivary</p>
                        </div>
                        <div className='p-3 '>
                            <p className='text-sm text-center'>Delivered within 3-4 days</p>
                        </div>
                    </div>
                    <div className='border rounded bg-slate-100 '>
                        <div className='flex items-center gap-2 justify-center bg-teal-400 p-1  rounded'>
                            <IoIosSettings className='text-xl' />
                            <p>Service</p>
                        </div>
                        <div className='p-3 flex flex-col gap-1'>
                            <p className='text-sm flex items-center gap-2'><PiKeyReturnFill className='text-purple-500' /> 14 days free & easy return</p>
                            <p className='text-sm flex items-center gap-2'><MdHomeRepairService className='text-blue-600' /> service warranty available</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl mt-5'>Reviews</h1>
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <p className='text-right my-5 flex items-center gap-1 justify-end cursor-pointer hover:underline text-blue-500'>view all reviews <FaAngleRight /></p>
                </div>
                <div className='mb-5'>
                    <h1 className='text-xl mt-5 mb-3'>Description</h1>
                    <p className='text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nostrum culpa dolor fuga accusantium, hic veniam alias perspiciatis nam perferendis quae odio eveniet unde facilis quidem vitae saepe tempore officiis.</p>
                </div>
                <div className='mb-5 grid grid-cols-1 gap-5'>
                    <img src={img2} className='w-full p-5' alt="" />
                    <img src={img2} className='w-full p-5' alt="" />
                    <img src={img2} className='w-full p-5' alt="" />
                </div>
                <div className='grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <div className='w-full md:w-[20%] '>
                <div className='grid grid-cols-2 gap-1 md:grid-cols-1'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>

        </div>
    );
};

export default ReviewReletedSection;