import { Swiper } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css';

const ImageSwiper = ({ children }) => {
    return (
        <Swiper className='rounded-lg z-20'
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{ delay: 2300, disableOnInteraction: false }}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{ clickable: true, el: '.swiper-pagination' }}
        >
                {children}
                <div className='swiper-pagination !relative !bottom-0 mt-2'></div>
        </Swiper>
    )
}

export default ImageSwiper