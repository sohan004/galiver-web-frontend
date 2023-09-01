import { Swiper, SwiperSlide } from 'swiper/react';

import carusalImg1 from '../../assets/carusalIMG/405f1ed5-6be1-41ff-9b5d-8bf1f66772b6.jpg'
import carusalImg2 from '../../assets/carusalIMG/9252c791-78ee-4ff2-a5d1-d3e37ff4565b.jpg_1200x1200.jpg'
import carusalImg3 from '../../assets/carusalIMG/a404c81b-0922-4208-883e-9bb3710e7f12.jpg'
import carusalImg4 from '../../assets/carusalIMG/eddc9b79-3e5e-497b-8349-ff7257cd8a2c.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Sec1 = () => {
    return (
        <div className='bg-[#ffdaaa62]'>
            <div className="max-w-[1188px] mx-auto">
                <Swiper centeredSlides={true} autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
                    <SwiperSlide>
                        <img src={carusalImg1} className='w-full' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={carusalImg2} className='w-full' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={carusalImg3} className='w-full' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={carusalImg4} className='w-full' alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Sec1;