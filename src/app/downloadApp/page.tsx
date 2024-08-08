'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import play from '@/assets/Images/play.webp'
import app from '@/assets/Images/app.webp'
import style from '@/app/downloadApp/downloadApp.module.scss'
import speak1 from '@/assets/Images/speak1.webp'
import speak2 from '@/assets/Images/speak2.webp'
import speak3 from '@/assets/Images/speak3.webp'
import speak4 from '@/assets/Images/speak4.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import app1 from '@/assets/Images/app1.webp';
import img from '@/assets/Images/img.webp';
import img1 from '@/assets/Images/img1.webp';
import app2 from '@/assets/Images/app2.webp';
import app3 from '@/assets/Images/app3.webp';
import logo from '@/assets/Images/logo.webp';


export default function page() {

    return (


        <>

            <div className={style.header}>
                <div className="container">
                    <Link href='/'><Image src={logo} alt='' /></Link>
                </div>
            </div>


            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-6">
                            <div className="banner_content">
                                <p className='para'>Welcome to HiSathi</p>
                                <h1 className='heading'>India's New Age Matrimony App</h1>

                                <div className="d-flex flex-row align-items-center gap-3">
                                    <Link href='https://hisahi.s3.ap-south-1.amazonaws.com/apks/1723097535006-app-release.apk' className='download_btn'>
                                        <Image src={play} alt='' className='btn_image' />
                                    </Link>

                                    <Link href='https://hisahi.s3.ap-south-1.amazonaws.com/apks/1723097535006-app-release.apk' className='download_btn'>
                                        <Image src={app} alt='' className='btn_image' />
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.work_sec}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8">
                            <Swiper
                                loop={true}
                                rewind={false}
                                slidesPerView={2.6}
                                spaceBetween={30}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                }}
                                speed={12000}
                                freeMode={true}
                                modules={[Autoplay]}
                                className={`mySwiper ${style.slider}`}
                            >

                                <SwiperSlide className={style.slide}>
                                    <div className={style.image}>
                                        <Image src={speak1} alt='' fill priority />
                                    </div>
                                    <div className={style.content}>
                                        <h4>Surabhi & Saumyadeep</h4>
                                        <p>It was Tyler’s first time experiencing an Indian wedding, and our planner made it so stress-free that we enjoyed a lot. </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={style.slide}>
                                    <div className={style.image}>
                                        <Image src={speak2} alt='' fill priority />
                                    </div>
                                    <div className={style.content}>
                                        <h4>Krithika & Tyler</h4>
                                        <p>It was Tyler’s first time experiencing an Indian wedding, and our planner made it so stress-free that we enjoyed a lot. </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={style.slide}>
                                    <div className={style.image}>
                                        <Image src={speak3} alt='' fill priority />
                                    </div>
                                    <div className={style.content}>
                                        <h4>Ankita & Bharat</h4>
                                        <p>It was Tyler’s first time experiencing an Indian wedding, and our planner made it so stress-free that we enjoyed a lot. </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={style.slide}>
                                    <div className={style.image}>
                                        <Image src={speak4} alt='' fill priority />
                                    </div>
                                    <div className={style.content}>
                                        <h4>Rupal & Aman</h4>
                                        <p>It was Tyler’s first time experiencing an Indian wedding, and our planner made it so stress-free that we enjoyed a lot. </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={style.slide}>
                                    <div className={style.image}>
                                        <Image src={speak2} alt='' fill priority />
                                    </div>
                                    <div className={style.content}>
                                        <h4>Krithika & Tyler</h4>
                                        <p>It was Tyler’s first time experiencing an Indian wedding, and our planner made it so stress-free that we enjoyed a lot. </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={style.slide}>
                                    <div className={style.image}>
                                        <Image src={speak3} alt='' fill priority />
                                    </div>
                                    <div className={style.content}>
                                        <h4>Ankita & Bharat</h4>
                                        <p>It was Tyler’s first time experiencing an Indian wedding, and our planner made it so stress-free that we enjoyed a lot. </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={style.slide}>
                                    <div className={style.image}>
                                        <Image src={speak1} alt='' fill priority />
                                    </div>
                                    <div className={style.content}>
                                        <h4>Surabhi & Saumyadeep</h4>
                                        <p>It was Tyler’s first time experiencing an Indian wedding, and our planner made it so stress-free that we enjoyed a lot. </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={style.slide}>
                                    <div className={style.image}>
                                        <Image src={speak4} alt='' fill priority />
                                    </div>
                                    <div className={style.content}>
                                        <h4>Rupal & Aman</h4>
                                        <p>It was Tyler’s first time experiencing an Indian wedding, and our planner made it so stress-free that we enjoyed a lot. </p>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 d-flex flex-column justify-content-center">
                            <div className={style.main_content}>
                                <h2 className={style.heading}>Met on Betterhalf and Got Married</h2>
                                <p className={style.para}>People love the way we planned their
                                    weddings. We made it perfect.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.steps}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <div className={style.background}>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className={style.image}>
                                            <Image src={app1} alt='' fill />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6 relative">
                                        <Image src={img} alt='' className={style.bg_image} />
                                        <h2 className={style.head_text}>Match with Profiles who share the same interests.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <div className={style.background}>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6 col-sm-6 relative">
                                        <Image src={img1} alt='' className={style.bg_image1} />
                                        <h2 className={style.head_text}>Get Matches Based on
                                            Language & Community</h2>
                                        <Image src={img1} alt='' className={style.bg_image2} />
                                        <h2 className={style.head_text1}>Meet with Someone who Shares the Same Location</h2>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className={style.image}>
                                            <Image src={app2} alt='' fill />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <div className={style.background}>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className={style.image}>
                                            <Image src={app3} alt='' fill />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6 relative">
                                        <Image src={img} alt='' className={style.bg_image} />
                                        <h2 className={style.head_text}>All profiles at Betterhalf are
                                            Govt. ID and Selfie-verified. </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className={style.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h4 className={style.head}>Download App Now</h4>

                            <div className="d-flex flex-row align-items-center gap-3 justify-content-center">
                                <Link href='https://hisahi.s3.ap-south-1.amazonaws.com/apks/1723097535006-app-release.apk' className={style.download_btn}>
                                    <Image src={play} alt='' className={style.btn_image} />
                                </Link>

                                <Link href='https://hisahi.s3.ap-south-1.amazonaws.com/apks/1723097535006-app-release.apk' className={style.download_btn}>
                                    <Image src={app} alt='' className={style.btn_image} />
                                </Link>
                            </div>

                            <p className={style.para}>© HiSathi Private Limited 2024. All right reserved.</p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
