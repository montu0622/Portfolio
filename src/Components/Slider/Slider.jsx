import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
    return (
        <>



            <div className='testimonial'>
                <h1>FONTEND DEVELOPER</h1>
                <p>Highly motivated and passionate Front-End Developer seeking an opportunity to leverage my skills and knowledge to contribute to the success of a dynamic organization. Eager to apply my expertise in HTML, CSS, JavaScript, and modern front-end frameworks to create visually appealing and user-friendly web applications.</p>
            </div>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
                spaceBetween={2}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },

                    990: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },

                    1472: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    }

                }}
            >

                <SwiperSlide ><div className="slider-item"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum odio, perspiciatis dolorum repellat asperiores debitis optio, aliquid enim facere eos praesentium nobis. Ad numquam, sed assumenda sint ullam nobis!</p><h2 className="Fanny">FANNY SPENCER</h2></div></SwiperSlide>
                <SwiperSlide ><div className="slider-item"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum odio, perspiciatis dolorum repellat asperiores debitis optio, aliquid enim facere eos praesentium nobis. Ad numquam, sed assumenda sint ullam nobis!</p><h2 className="Fanny">FANNY SPENCER</h2></div></SwiperSlide>
                <SwiperSlide ><div className="slider-item"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum odio, perspiciatis dolorum repellat asperiores debitis optio, aliquid enim facere eos praesentium nobis. Ad numquam, sed assumenda sint ullam nobis!</p><h2 className="Fanny">FANNY SPENCER</h2></div></SwiperSlide>
                <SwiperSlide ><div className="slider-item"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum odio, perspiciatis dolorum repellat asperiores debitis optio, aliquid enim facere eos praesentium nobis. Ad numquam, sed assumenda sint ullam nobis!</p><h2 className="Fanny">FANNY SPENCER</h2></div></SwiperSlide>
                <SwiperSlide ><div className="slider-item"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum odio, perspiciatis dolorum repellat asperiores debitis optio, aliquid enim facere eos praesentium nobis. Ad numquam, sed assumenda sint ullam nobis!</p><h2 className="Fanny">FANNY SPENCER</h2></div></SwiperSlide>
                <SwiperSlide ><div className="slider-item"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum odio, perspiciatis dolorum repellat asperiores debitis optio, aliquid enim facere eos praesentium nobis. Ad numquam, sed assumenda sint ullam nobis!</p><h2 className="Fanny">FANNY SPENCER</h2></div></SwiperSlide>
                <SwiperSlide ><div className="slider-item"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum odio, perspiciatis dolorum repellat asperiores debitis optio, aliquid enim facere eos praesentium nobis. Ad numquam, sed assumenda sint ullam nobis!</p><h2 className="Fanny">FANNY SPENCER</h2></div></SwiperSlide>


            </Swiper>

        </>
    )
}

export default Slider;