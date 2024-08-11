'use client'

import React from 'react'
import style from '@/components/Patnered/Patnered.module.scss'
import slide1 from '@/assets/Images/slide1.webp'
// import slide4 from '@/assets/Images/slide4.webp'
import slide3 from '@/assets/Images/slide3.webp'
import slide4 from '@/assets/Images/slide4.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';


export default function Patnered() {


    const responsive = {
        0: {
            slidesPerView: 2.5,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    }



    return (

        <div className={style.work_sec}>
            <div className="container">
                <div className="row">
                    <div className={`col-lg-12 col-md-12 col-sm-12 mb-5 pb-5 ${style.padding}`}>
                        <h2 className={style.heading}>Partnered with the best in the industry</h2>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <Swiper
                            loop={true}
                            rewind={true}
                            slidesPerView={6}
                            spaceBetween={30}
                            breakpoints={responsive}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            className={`mySwiper ${style.swiper}`}
                        >

                            <SwiperSlide>
                                <div className={style.image}>
                                    <Image src={slide1} alt='' fill priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={style.image}>
                                    <Image src={slide4} alt='' fill priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={style.image}>
                                    <Image src={slide3} alt='' fill priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={style.image}>
                                    <Image src={slide4} alt='' fill priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={style.image}>
                                    <Image src={slide3} alt='' fill priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={style.image}>
                                    <Image src={slide4} alt='' fill priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={style.image}>
                                    <Image src={slide1} alt='' fill priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={style.image}>
                                    <Image src={slide4} alt='' fill priority />
                                </div>
                            </SwiperSlide> <SwiperSlide>
                                <div className={style.image}>
                                    <Image src={slide1} alt='' fill priority />
                                </div>
                            </SwiperSlide> <SwiperSlide>
                                <div className={style.image}>
                                    <Image src={slide4} alt='' fill priority />
                                </div>
                            </SwiperSlide> <SwiperSlide>
                                <div className={style.image}>
                                    <Image src={slide3} alt='' fill priority />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
