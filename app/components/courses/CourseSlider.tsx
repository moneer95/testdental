'use client';

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper/types';

export default function CourseSlider(): JSX.Element {
    // Use SwiperClass for typing the state of thumbsSwiper
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                } as React.CSSProperties}
                loop={false}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <Image
                        src="/imgs/home/courses/ORECourses.png"
                        alt="Nature 1"
                        width={1000}
                        height={1000}
                        className='w-full h-full object-cover object-center border border-grayBorder rounded-xl'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/imgs/home/courses/ORECourses.png"
                        alt="Nature 2"
                        width={1000}
                        height={1000}
                        className='w-full h-full object-cover object-center border border-grayBorder rounded-xl'
                    />
                </SwiperSlide>


            </Swiper>


            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper my-3"
            >
                <SwiperSlide>
                    <Image
                        src="/imgs/home/courses/ORECourses.png"
                        alt="Nature Thumbnail 1"
                        width={1000}
                        height={1000}
                        className='w-full h-full object-cover object-center border border-grayBorder rounded-xl cursor-pointer '
                    />
                </SwiperSlide>
                <SwiperSlide>

                    <Image
                        src="/imgs/home/courses/ORECourses.png"
                        alt="Nature Thumbnail 2"
                        width={1000}
                        height={1000}
                        className='w-full h-full object-cover object-center  border border-grayBorder rounded-xl cursor-pointer '
                    />
                </SwiperSlide>


            </Swiper>
        </>
    );
}
