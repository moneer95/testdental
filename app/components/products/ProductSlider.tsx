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

interface ProductSliderProps {
    slugCourse: { images: { image: string }[] }; // Updated type definition
}
// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper/types';

export default function ProductSlider({ slugCourse }: ProductSliderProps): JSX.Element {
    // Use SwiperClass for typing the state of thumbsSwiper
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // console.log(slugCourse);

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
                {slugCourse?.images?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={`${baseUrl}${item.image}`} // Access the 'image' property
                            alt={`Image ${index}`}
                            width={1000}
                            height={1000}
                            className='w-full h-full object-cover object-center border border-grayBorder rounded-xl'
                        />
                    </SwiperSlide>
                ))}
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
                {slugCourse?.images?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={`${baseUrl}${item.image}`} // Access the 'image' property
                            alt={`Thumbnail ${index}`}
                            width={1000}
                            height={1000}
                            className='w-full h-full object-cover object-center border border-grayBorder rounded-xl cursor-pointer'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
