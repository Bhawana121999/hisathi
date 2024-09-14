'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import works from '@/assets/Images/works.webp'
import style from '@/components/How_Work/How_Work.module.scss';
import step1 from '@/assets/Images/step1.png'
import step2 from '@/assets/Images/step2.png'
import step3 from '@/assets/Images/step3.png'



export default function How_Work() {

    return (

        <div className={style.work_sec}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h2 className={style.heading}>How it works</h2>
                        <p className={style.para}>Book your wedding service in 3 easy steps</p>
                    </div>


                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className={`row mt-4 pt-5 justify-content-center align-items-center ${style.rows}`}>
                            <div className="col-lg-7 col-md-7 col-sm-12">
                                <div className={style.box}>
                                    <h6 className={style.step}>1</h6>
                                    <div className={style.main_content}>
                                        <h4 className={style.head}>Share your requirements</h4>
                                        <p className={style.para1}>Tell us your event date, budget, location, type of venue, guest count, etc.</p>
                                    </div>
                                </div>

                                <div className={style.box}>
                                    <h6 className={style.step}>2</h6>
                                    <div className={style.main_content}>
                                        <h4 className={style.head}>Get a personalised proposal</h4>
                                        <p className={style.para1}>Get the best deals on venue, catering, and decor as per your preferences.</p>
                                    </div>
                                </div>

                                <div className={style.box}>
                                    <h6 className={style.step}>3</h6>
                                    <div className={style.main_content}>
                                        <h4 className={style.head}>Confirm and book</h4>
                                        <p className={style.para1}>Pay a minimum amount & lock the deal within 7 days. Leave the rest to us.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-5 col-md-5 col-sm-12'>
                                <Swiper
                                    loop={true}
                                    rewind={false}
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    // autoplay={{
                                    //     delay: 3000,
                                    //     disableOnInteraction: false,
                                    // }}
                                    // modules={[Autoplay]}
                                    className={`mySwiper ${style.background_img}`}
                                >

                                    <SwiperSlide className={style.slide}>
                                        <h6 className={style.number}>1</h6>
                                        <div className={style.image}>
                                            <Image src={step1} alt='' fill priority />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className={style.slide}>
                                        <h6 className={style.number}>2</h6>
                                        <div className={style.image}>
                                            <Image src={step2} alt='' fill priority />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className={style.slide}>
                                        <h6 className={style.number}>3</h6>
                                        <div className={style.image}>
                                            <Image src={step3} alt='' fill priority />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}
