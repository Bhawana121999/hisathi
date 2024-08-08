import React from 'react'
import style from '@/components/Services/Services.module.scss'
import Image from 'next/image'
import right from '@/assets/Images/right.png'
import main_service from '@/assets/Images/main_service.webp'
import { MdArrowForwardIos } from "react-icons/md";


export default function Services() {

    return (


        <div className={style.service}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-4 col-sm-4">
                        <div className={style.service_img}>
                            <Image src={main_service} alt='' fill priority />
                        </div>
                    </div>

                    <div className={`col-lg-7 col-md-8 col-sm-8 ${style.padding_left}`}>
                        <h2 className={style.heading}>End-to-end services</h2>
                        <p className={style.para}>Your one-stop solution for weddings. From planning to execution.</p>

                        <div className={style.box}>
                            <div className={style.content}>
                                <div className={style.image}>
                                    <Image src={right} alt='' fill priority />
                                </div>
                                <p className={style.main_service}>Wedding planning</p>
                            </div>

                            <div className={style.content}>
                                <div className={style.image}>
                                    <Image src={right} alt='' fill priority />
                                </div>
                                <p className={style.main_service}>Budget optimisation</p>
                            </div>

                            <div className={style.content}>
                                <div className={style.image}>
                                    <Image src={right} alt='' fill priority />
                                </div>
                                <p className={style.main_service}>Event management</p>
                            </div>
                        </div>

                    </div>

                    <button className={style.btn2}>Talk to Wedding Planner <MdArrowForwardIos /></button>
                </div>
            </div>
        </div>

    )
}
