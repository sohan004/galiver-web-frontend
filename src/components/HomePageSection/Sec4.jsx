import React from 'react';
import img from '../../assets/carusalIMG/productIMg2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';



// import required modules
import { Grid, Pagination } from 'swiper/modules';
const Sec4 = () => {
    return (
        <div className='px-3 max-w-6xl mx-auto  mt-5 lg:mt-8'>
            <div className=' bg-white pt-3 '>
                <div className='flex justify-between items-end border-b px-3 pb-2'>
                    <div>
                        <h1 className=' font-medium lg:text-2xl '>Top Selling Product</h1>
                        <p className='text-xs lg:text-sm opacity-80'>Popular Item</p>
                    </div>
                    <div>
                        <p className='text-sm cursor-pointer text-orange-600 lg:text-base'>{`show all product >`}</p>
                    </div>
                </div>
                <Swiper
                    breakpoints={{
                        // when window width is >= 640px
                        44: {
                            slidesPerView: 2.5,
                            // spaceBetween: 1,

                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 5.5,
                            // spaceBetween: 1
                        },
                    }}

                    modules={[Grid, Pagination]}
                    className="mySwiper cursor-pointer "
                >
                    <SwiperSlide>
                        <div className='w-full p-2 border-e group hover:scale-105 duration-150 hover:shadow-lg'>
                            <div className='h-28 lg:h-44 w-full overflow-hidden relative'>
                                <img src={img} className='w-full h-full group-hover:scale-125 duration-300 ' alt="" />
                                <p className='text-[10px] lg:text-xs absolute top-0 left-0 bg-orange-600 text-white py-[2px] rounded-se-lg rounded-es-md px-1'><s className='opacity-60'>$30</s> <span className=''>-25%</span></p>
                            </div>
                            <p className='text-sm  mt-2'>men watch. t shirt, trimmer ,  t shirt, trimmer</p>
                            <div className='flex gap-1 items-center'>
                                <p className='text-lg text-orange-600 font-medium'>$88</p>
                                <s className='text-sm opacity-70'>$150</s>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full p-2 border-e group hover:scale-105 duration-150 hover:shadow-lg'>
                            <div className='h-28 lg:h-44 w-full overflow-hidden relative'>
                                <img src={img} className='w-full h-full group-hover:scale-125 duration-300 ' alt="" />
                                <p className='text-[10px] lg:text-xs absolute top-0 left-0 bg-orange-600 text-white py-[2px] rounded-se-lg rounded-es-md px-1'><s className='opacity-60'>$30</s> <span className=''>-25%</span></p>
                            </div>
                            <p className='text-sm  mt-2'>men watch. t shirt, trimmer ,  t shirt, trimmer</p>
                            <div className='flex gap-1 items-center'>
                                <p className='text-lg text-orange-600 font-medium'>$88</p>
                                <s className='text-sm opacity-70'>$150</s>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full p-2 border-e group hover:scale-105 duration-150 hover:shadow-lg'>
                            <div className='h-28 lg:h-44 w-full overflow-hidden relative'>
                                <img src={img} className='w-full h-full group-hover:scale-125 duration-300 ' alt="" />
                                <p className='text-[10px] lg:text-xs absolute top-0 left-0 bg-orange-600 text-white py-[2px] rounded-se-lg rounded-es-md px-1'><s className='opacity-60'>$30</s> <span className=''>-25%</span></p>
                            </div>
                            <p className='text-sm  mt-2'>men watch. t shirt, trimmer ,  t shirt, trimmer</p>
                            <div className='flex gap-1 items-center'>
                                <p className='text-lg text-orange-600 font-medium'>$88</p>
                                <s className='text-sm opacity-70'>$150</s>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full p-2 border-e group hover:scale-105 duration-150 hover:shadow-lg'>
                            <div className='h-28 lg:h-44 w-full overflow-hidden relative'>
                                <img src={img} className='w-full h-full group-hover:scale-125 duration-300 ' alt="" />
                                <p className='text-[10px] lg:text-xs absolute top-0 left-0 bg-orange-600 text-white py-[2px] rounded-se-lg rounded-es-md px-1'><s className='opacity-60'>$30</s> <span className=''>-25%</span></p>
                            </div>
                            <p className='text-sm  mt-2'>men watch. t shirt, trimmer ,  t shirt, trimmer</p>
                            <div className='flex gap-1 items-center'>
                                <p className='text-lg text-orange-600 font-medium'>$88</p>
                                <s className='text-sm opacity-70'>$150</s>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full p-2 border-e group hover:scale-105 duration-150 hover:shadow-lg'>
                            <div className='h-28 lg:h-44 w-full overflow-hidden relative'>
                                <img src={img} className='w-full h-full group-hover:scale-125 duration-300 ' alt="" />
                                <p className='text-[10px] lg:text-xs absolute top-0 left-0 bg-orange-600 text-white py-[2px] rounded-se-lg rounded-es-md px-1'><s className='opacity-60'>$30</s> <span className=''>-25%</span></p>
                            </div>
                            <p className='text-sm  mt-2'>men watch. t shirt, trimmer ,  t shirt, trimmer</p>
                            <div className='flex gap-1 items-center'>
                                <p className='text-lg text-orange-600 font-medium'>$88</p>
                                <s className='text-sm opacity-70'>$150</s>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full p-2 border-e group hover:scale-105 duration-150 hover:shadow-lg'>
                            <div className='h-28 lg:h-44 w-full overflow-hidden relative'>
                                <img src={img} className='w-full h-full group-hover:scale-125 duration-300 ' alt="" />
                                <p className='text-[10px] lg:text-xs absolute top-0 left-0 bg-orange-600 text-white py-[2px] rounded-se-lg rounded-es-md px-1'><s className='opacity-60'>$30</s> <span className=''>-25%</span></p>
                            </div>
                            <p className='text-sm  mt-2'>men watch. t shirt, trimmer ,  t shirt, trimmer</p>
                            <div className='flex gap-1 items-center'>
                                <p className='text-lg text-orange-600 font-medium'>$88</p>
                                <s className='text-sm opacity-70'>$150</s>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full p-2 border-e group hover:scale-105 duration-150 hover:shadow-lg'>
                            <div className='h-28 lg:h-44 w-full overflow-hidden relative'>
                                <img src={img} className='w-full h-full group-hover:scale-125 duration-300 ' alt="" />
                                <p className='text-[10px] lg:text-xs absolute top-0 left-0 bg-orange-600 text-white py-[2px] rounded-se-lg rounded-es-md px-1'><s className='opacity-60'>$30</s> <span className=''>-25%</span></p>
                            </div>
                            <p className='text-sm  mt-2'>men watch. t shirt, trimmer ,  t shirt, trimmer</p>
                            <div className='flex gap-1 items-center'>
                                <p className='text-lg text-orange-600 font-medium'>$88</p>
                                <s className='text-sm opacity-70'>$150</s>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full p-2 border-e group hover:scale-105 duration-150 hover:shadow-lg'>
                            <div className='h-28 lg:h-44 w-full overflow-hidden relative'>
                                <img src={img} className='w-full h-full group-hover:scale-125 duration-300 ' alt="" />
                                <p className='text-[10px] lg:text-xs absolute top-0 left-0 bg-orange-600 text-white py-[2px] rounded-se-lg rounded-es-md px-1'><s className='opacity-60'>$30</s> <span className=''>-25%</span></p>
                            </div>
                            <p className='text-sm  mt-2'>men watch. t shirt, trimmer ,  t shirt, trimmer</p>
                            <div className='flex gap-1 items-center'>
                                <p className='text-lg text-orange-600 font-medium'>$88</p>
                                <s className='text-sm opacity-70'>$150</s>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full p-2 border-e group hover:scale-105 duration-150 hover:shadow-lg'>
                            <div className='h-28 lg:h-44 w-full overflow-hidden relative'>
                                <img src={img} className='w-full h-full group-hover:scale-125 duration-300 ' alt="" />
                                <p className='text-[10px] lg:text-xs absolute top-0 left-0 bg-orange-600 text-white py-[2px] rounded-se-lg rounded-es-md px-1'><s className='opacity-60'>$30</s> <span className=''>-25%</span></p>
                            </div>
                            <p className='text-sm  mt-2'>men watch. t shirt, trimmer ,  t shirt, trimmer</p>
                            <div className='flex gap-1 items-center'>
                                <p className='text-lg text-orange-600 font-medium'>$88</p>
                                <s className='text-sm opacity-70'>$150</s>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full p-2 border-e group hover:scale-105 duration-150 hover:shadow-lg'>
                            <div className='h-28 lg:h-44 w-full overflow-hidden relative'>
                                <img src={img} className='w-full h-full group-hover:scale-125 duration-300 ' alt="" />
                                <p className='text-[10px] lg:text-xs absolute top-0 left-0 bg-orange-600 text-white py-[2px] rounded-se-lg rounded-es-md px-1'><s className='opacity-60'>$30</s> <span className=''>-25%</span></p>
                            </div>
                            <p className='text-sm  mt-2'>men watch. t shirt, trimmer ,  t shirt, trimmer</p>
                            <div className='flex gap-1 items-center'>
                                <p className='text-lg text-orange-600 font-medium'>$88</p>
                                <s className='text-sm opacity-70'>$150</s>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full p-2 border-e group hover:scale-105 duration-150 hover:shadow-lg'>
                            <div className='h-28 lg:h-44 w-full overflow-hidden relative'>
                                <img src={img} className='w-full h-full group-hover:scale-125 duration-300 ' alt="" />
                                <p className='text-[10px] lg:text-xs absolute top-0 left-0 bg-orange-600 text-white py-[2px] rounded-se-lg rounded-es-md px-1'><s className='opacity-60'>$30</s> <span className=''>-25%</span></p>
                            </div>
                            <p className='text-sm  mt-2'>men watch. t shirt, trimmer ,  t shirt, trimmer</p>
                            <div className='flex gap-1 items-center'>
                                <p className='text-lg text-orange-600 font-medium'>$88</p>
                                <s className='text-sm opacity-70'>$150</s>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full p-2 border-e group hover:scale-105 duration-150 hover:shadow-lg'>
                            <div className='h-28 lg:h-44 w-full overflow-hidden relative'>
                                <img src={img} className='w-full h-full group-hover:scale-125 duration-300 ' alt="" />
                                <p className='text-[10px] lg:text-xs absolute top-0 left-0 bg-orange-600 text-white py-[2px] rounded-se-lg rounded-es-md px-1'><s className='opacity-60'>$30</s> <span className=''>-25%</span></p>
                            </div>
                            <p className='text-sm  mt-2'>men watch. t shirt, trimmer ,  t shirt, trimmer</p>
                            <div className='flex gap-1 items-center'>
                                <p className='text-lg text-orange-600 font-medium'>$88</p>
                                <s className='text-sm opacity-70'>$150</s>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full p-2 border-e group hover:scale-105 duration-150 hover:shadow-lg'>
                            <div className='h-28 lg:h-44 w-full overflow-hidden relative'>
                                <img src={img} className='w-full h-full group-hover:scale-125 duration-300 ' alt="" />
                                <p className='text-[10px] lg:text-xs absolute top-0 left-0 bg-orange-600 text-white py-[2px] rounded-se-lg rounded-es-md px-1'><s className='opacity-60'>$30</s> <span className=''>-25%</span></p>
                            </div>
                            <p className='text-sm  mt-2'>men watch. t shirt, trimmer ,  t shirt, trimmer</p>
                            <div className='flex gap-1 items-center'>
                                <p className='text-lg text-orange-600 font-medium'>$88</p>
                                <s className='text-sm opacity-70'>$150</s>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full p-2 border-e group hover:scale-105 duration-150 hover:shadow-lg'>
                            <div className='h-28 lg:h-44 w-full overflow-hidden relative'>
                                <img src={img} className='w-full h-full group-hover:scale-125 duration-300 ' alt="" />
                                <p className='text-[10px] lg:text-xs absolute top-0 left-0 bg-orange-600 text-white py-[2px] rounded-se-lg rounded-es-md px-1'><s className='opacity-60'>$30</s> <span className=''>-25%</span></p>
                            </div>
                            <p className='text-sm  mt-2'>men watch. t shirt, trimmer ,  t shirt, trimmer</p>
                            <div className='flex gap-1 items-center'>
                                <p className='text-lg text-orange-600 font-medium'>$88</p>
                                <s className='text-sm opacity-70'>$150</s>
                            </div>

                        </div>
                    </SwiperSlide>
                   
                </Swiper>
            </div>
        </div>
    );
};

export default Sec4;