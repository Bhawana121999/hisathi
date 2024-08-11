'use client'

import React from 'react'
import style from '@/components/Works/Works.module.scss'
import speak1 from '@/assets/Images/speak1.webp'
import speak2 from '@/assets/Images/speak2.webp'
import speak3 from '@/assets/Images/speak3.webp'
import speak4 from '@/assets/Images/speak4.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';


export default function Works() {

    const responsive = {
        0: {
            slidesPerView: 1,
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
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h2 className={style.heading}>Our work speaks for us</h2>
                        <p className={style.para}>People love the way we planned their
                            weddings. We made it perfect.</p>
                    </div>
                </div>
            </div>


            <Swiper
                loop={true}
                rewind={false}
                slidesPerView={4}
                spaceBetween={30}
                // autoplay={{
                //     delay: 0,
                //     disableOnInteraction: false,
                // }}
                breakpoints={responsive}
                speed={12000}
                freeMode={true}
                // modules={[Autoplay]}
                className={`mySwiper ${style.slider}`}
            >

                <SwiperSlide className={style.slide}>
                    <div className={style.image}>
                        <Image src={speak1} alt='' fill priority />
                    </div>
                    <div className={style.content}>
                        <h4>Surabhi & Saumyadeep</h4>
                        <span>Bengaluru, Karnataka</span>
                        <p>It was Tyler’s first time experiencing an Indian wedding, and our planner made it so stress-free that we enjoyed a lot. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                    <div className={style.image}>
                        <Image src={speak2} alt='' fill priority />
                    </div>
                    <div className={style.content}>
                        <h4>Krithika & Tyler</h4>
                        <span>Bengaluru, Karnataka</span>
                        <p>It was Tyler’s first time experiencing an Indian wedding, and our planner made it so stress-free that we enjoyed a lot. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                    <div className={style.image}>
                        <Image src={speak3} alt='' fill priority />
                    </div>
                    <div className={style.content}>
                        <h4>Ankita & Bharat</h4>
                        <span>Bengaluru, Karnataka</span>
                        <p>It was Tyler’s first time experiencing an Indian wedding, and our planner made it so stress-free that we enjoyed a lot. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                    <div className={style.image}>
                        <Image src={speak4} alt='' fill priority />
                    </div>
                    <div className={style.content}>
                        <h4>Rupal & Aman</h4>
                        <span>Bengaluru, Karnataka</span>
                        <p>It was Tyler’s first time experiencing an Indian wedding, and our planner made it so stress-free that we enjoyed a lot. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                    <div className={style.image}>
                        <Image src={speak2} alt='' fill priority />
                    </div>
                    <div className={style.content}>
                        <h4>Krithika & Tyler</h4>
                        <span>Bengaluru, Karnataka</span>
                        <p>It was Tyler’s first time experiencing an Indian wedding, and our planner made it so stress-free that we enjoyed a lot. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                    <div className={style.image}>
                        <Image src={speak3} alt='' fill priority />
                    </div>
                    <div className={style.content}>
                        <h4>Ankita & Bharat</h4>
                        <span>Bengaluru, Karnataka</span>
                        <p>It was Tyler’s first time experiencing an Indian wedding, and our planner made it so stress-free that we enjoyed a lot. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                    <div className={style.image}>
                        <Image src={speak1} alt='' fill priority />
                    </div>
                    <div className={style.content}>
                        <h4>Surabhi & Saumyadeep</h4>
                        <span>Bengaluru, Karnataka</span>
                        <p>It was Tyler’s first time experiencing an Indian wedding, and our planner made it so stress-free that we enjoyed a lot. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                    <div className={style.image}>
                        <Image src={speak4} alt='' fill priority />
                    </div>
                    <div className={style.content}>
                        <h4>Rupal & Aman</h4>
                        <span>Bengaluru, Karnataka</span>
                        <p>It was Tyler’s first time experiencing an Indian wedding, and our planner made it so stress-free that we enjoyed a lot. </p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
