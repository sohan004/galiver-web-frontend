
import img from '../../../assets/carusalIMG/product.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import { Grid, Pagination } from 'swiper/modules';

const Sec3 = () => {
    return (
        <div className='max-w-[1188px] mx-auto px-3 mt-5 lg:mt-8'>
            <div className='flex justify-between items-end'>
                <div>
                    <h1 className=' font-medium lg:text-2xl '>Categories</h1>
                    <p className='text-xs lg:text-sm opacity-80'>Recommended For You</p>
                </div>
                <div>
                    <p className='text-sm cursor-pointer text-orange-600 lg:text-base'>{`see more >`}</p>
                </div>
            </div>



            <Swiper
            grid={{ rows: 2, fill: 'row' }}
               breakpoints={{
                    // when window width is >= 640px
                    44: {
                      slidesPerView: 3.5,
                      spaceBetween: 2,
                      
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 8,
                      spaceBetween: 2
                    },
                  }}
                 
                  modules={[Grid, Pagination]}
                  className="mySwiper mt-1 lg:mt-2"
            >
                <SwiperSlide>
                    <div className='bg-white p-2 cursor-pointer hover:scale-105 hover:shadow-xl duration-200 hover:bg-slate-200'>
                        <img src={img} className='w-full h-[70px] lg:h-28 p-2' alt="" />
                        <p className='text-center text-sm lg:text-base '>Mobile</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white p-2 cursor-pointer hover:scale-105 hover:shadow-xl duration-200 hover:bg-slate-200'>
                        <img src={img} className='w-full h-[70px] lg:h-28 p-2' alt="" />
                        <p className='text-center text-sm lg:text-base '>Mobile</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white p-2 cursor-pointer hover:scale-105 hover:shadow-xl duration-200 hover:bg-slate-200'>
                        <img src={img} className='w-full h-[70px] lg:h-28 p-2' alt="" />
                        <p className='text-center text-sm lg:text-base '>Mobile</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white p-2 cursor-pointer hover:scale-105 hover:shadow-xl duration-200 hover:bg-slate-200'>
                        <img src={img} className='w-full h-[70px] lg:h-28 p-2' alt="" />
                        <p className='text-center text-sm lg:text-base '>Mobile</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white p-2 cursor-pointer hover:scale-105 hover:shadow-xl duration-200 hover:bg-slate-200'>
                        <img src={img} className='w-full h-[70px] lg:h-28 p-2' alt="" />
                        <p className='text-center text-sm lg:text-base '>Mobile</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white p-2 cursor-pointer hover:scale-105 hover:shadow-xl duration-200 hover:bg-slate-200'>
                        <img src={img} className='w-full h-[70px] lg:h-28 p-2' alt="" />
                        <p className='text-center text-sm lg:text-base '>Mobile</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white p-2 cursor-pointer hover:scale-105 hover:shadow-xl duration-200 hover:bg-slate-200'>
                        <img src={img} className='w-full h-[70px] lg:h-28 p-2' alt="" />
                        <p className='text-center text-sm lg:text-base '>Mobile</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white p-2 cursor-pointer hover:scale-105 hover:shadow-xl duration-200 hover:bg-slate-200'>
                        <img src={img} className='w-full h-[70px] lg:h-28 p-2' alt="" />
                        <p className='text-center text-sm lg:text-base '>Mobile</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white p-2 cursor-pointer hover:scale-105 hover:shadow-xl duration-200 hover:bg-slate-200'>
                        <img src={img} className='w-full h-[70px] lg:h-28 p-2' alt="" />
                        <p className='text-center text-sm lg:text-base '>Mobile</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white p-2 cursor-pointer hover:scale-105 hover:shadow-xl duration-200 hover:bg-slate-200'>
                        <img src={img} className='w-full h-[70px] lg:h-28 p-2' alt="" />
                        <p className='text-center text-sm lg:text-base '>Mobile</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white p-2 cursor-pointer hover:scale-105 hover:shadow-xl duration-200 hover:bg-slate-200'>
                        <img src={img} className='w-full h-[70px] lg:h-28 p-2' alt="" />
                        <p className='text-center text-sm lg:text-base '>Mobile</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white p-2 cursor-pointer hover:scale-105 hover:shadow-xl duration-200 hover:bg-slate-200'>
                        <img src={img} className='w-full h-[70px] lg:h-28 p-2' alt="" />
                        <p className='text-center text-sm lg:text-base '>Mobile</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white p-2 cursor-pointer hover:scale-105 hover:shadow-xl duration-200 hover:bg-slate-200'>
                        <img src={img} className='w-full h-[70px] lg:h-28 p-2' alt="" />
                        <p className='text-center text-sm lg:text-base '>Mobile</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white p-2 cursor-pointer hover:scale-105 hover:shadow-xl duration-200 hover:bg-slate-200'>
                        <img src={img} className='w-full h-[70px] lg:h-28 p-2' alt="" />
                        <p className='text-center text-sm lg:text-base '>Mobile</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white p-2 cursor-pointer hover:scale-105 hover:shadow-xl duration-200 hover:bg-slate-200'>
                        <img src={img} className='w-full h-[70px] lg:h-28 p-2' alt="" />
                        <p className='text-center text-sm lg:text-base '>Mobile</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white p-2 cursor-pointer hover:scale-105 hover:shadow-xl duration-200 hover:bg-slate-200'>
                        <img src={img} className='w-full h-[70px] lg:h-28 p-2' alt="" />
                        <p className='text-center text-sm lg:text-base '>Mobile</p>
                    </div>
                </SwiperSlide>
            </Swiper>


        </div>
    );
};

export default Sec3;