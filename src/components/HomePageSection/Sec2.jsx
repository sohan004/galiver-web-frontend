
import { FaArrowRight } from 'react-icons/fa';
import img from '../../assets/categoryImg/6b396809-87e7-435d-ba7b-5d69699371ba.png'

const Sec2 = () => {
    return (
        <div className="max-w-6xl mx-auto px-3">
            <div className='grid grid-cols-5 gap-4 mt-3 lg:mt-6'>
                <div className='lg:bg-white relative cursor-pointer hover:shadow-lg duration-300 overflow-hidden flex flex-col lg:flex-row p-1 group  items-center gap-1 lg:gap-2 font-semibold lg:rounded-full '>
                    <img className='w-9 rounded-full' src={img} alt="" />
                    <p className='text-xs font-normal   lg:text-base lg:font-semibold'>Mart</p>
                    <FaArrowRight className='absolute text-orange-500 hidden lg:flex group-hover:right-3 duration-300  top-4 -right-20'></FaArrowRight>
                </div>
                <div className='lg:bg-white relative cursor-pointer hover:shadow-lg duration-300 overflow-hidden flex flex-col lg:flex-row p-1 group  items-center gap-1 lg:gap-2 font-semibold lg:rounded-full '>
                    <img className='w-9 rounded-full' src={img} alt="" />
                    <p className='text-xs font-normal   lg:text-base lg:font-semibold'>Mart</p>
                    <FaArrowRight className='absolute text-orange-500 hidden lg:flex group-hover:right-3 duration-300  top-4 -right-20'></FaArrowRight>
                </div>
                <div className='lg:bg-white relative cursor-pointer hover:shadow-lg duration-300 overflow-hidden flex flex-col lg:flex-row p-1 group  items-center gap-1 lg:gap-2 font-semibold lg:rounded-full '>
                    <img className='w-9 rounded-full' src={img} alt="" />
                    <p className='text-xs font-normal   lg:text-base lg:font-semibold'>Mart</p>
                    <FaArrowRight className='absolute text-orange-500 hidden lg:flex group-hover:right-3 duration-300  top-4 -right-20'></FaArrowRight>
                </div>
                <div className='lg:bg-white relative cursor-pointer hover:shadow-lg duration-300 overflow-hidden flex flex-col lg:flex-row p-1 group  items-center gap-1 lg:gap-2 font-semibold lg:rounded-full '>
                    <img className='w-9 rounded-full' src={img} alt="" />
                    <p className='text-xs font-normal   lg:text-base lg:font-semibold'>Mart</p>
                    <FaArrowRight className='absolute text-orange-500 hidden lg:flex group-hover:right-3 duration-300  top-4 -right-20'></FaArrowRight>
                </div>
                <div className='lg:bg-white relative cursor-pointer hover:shadow-lg duration-300 overflow-hidden flex flex-col lg:flex-row p-1 group  items-center gap-1 lg:gap-2 font-semibold lg:rounded-full '>
                    <img className='w-9 rounded-full' src={img} alt="" />
                    <p className='text-xs font-normal   lg:text-base lg:font-semibold'>Mart</p>
                    <FaArrowRight className='absolute text-orange-500 hidden lg:flex group-hover:right-3 duration-300  top-4 -right-20'></FaArrowRight>
                </div>

            </div>
        </div>
    );
};

export default Sec2;