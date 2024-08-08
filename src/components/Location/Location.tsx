import React from 'react'
import style from '@/components/Location/Location.module.scss'
import Image from 'next/image'
import state1 from '@/assets/Images/state1.webp'
import state2 from '@/assets/Images/state2.webp'
import state3 from '@/assets/Images/state3.webp'
import state4 from '@/assets/Images/state4.webp'
import state5 from '@/assets/Images/state5.webp'
import state6 from '@/assets/Images/state6.webp'
import state7 from '@/assets/Images/state7.webp'
import state8 from '@/assets/Images/state8.webp'
import Link from 'next/link'



export default function Location() {

    return (

        <div className={style.location}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h2 className={style.heading}>Any location in mind?</h2>
                        <p className={style.para}>Choose a wedding venue in your city</p>
                    </div>

                    <div className={style.list}>
                        <Link href='#' className={style.item}>
                            <div className={style.circle}>
                                <div className={style.image}>
                                    <Image src={state1} alt='' fill priority />
                                </div>
                            </div>
                            <h6>Bengaluru</h6>
                        </Link>

                        <Link href='' className={style.item}>
                            <div className={style.circle}>
                                <div className={style.image}>
                                    <Image src={state2} alt='' fill priority />
                                </div>
                            </div>
                            <h6>Delhi</h6>
                        </Link>

                        <Link href='#' className={style.item}>
                            <div className={style.circle}>
                                <div className={style.image}>
                                    <Image src={state3} alt='' fill priority />
                                </div>
                            </div>
                            <h6>Mumbai</h6>
                        </Link>

                        <Link href='#' className={style.item}>
                            <div className={style.circle}>
                                <div className={style.image}>
                                    <Image src={state4} alt='' fill priority />
                                </div>
                            </div>
                            <h6>Goa</h6>
                        </Link>

                    </div>


                    <div className={style.list}>
                        <Link href='#' className={style.item}>
                            <div className={style.circle}>
                                <div className={style.image}>
                                    <Image src={state5} alt='' fill priority />
                                </div>
                            </div>
                            <h6>Nodia</h6>
                        </Link>

                        <Link href='#' className={style.item}>
                            <div className={style.circle}>
                                <div className={style.image}>
                                    <Image src={state6} alt='' fill priority />
                                </div>
                            </div>
                            <h6>Gurugram</h6>
                        </Link>

                        <Link href='#' className={style.item}>
                            <div className={style.circle}>
                                <div className={style.image}>
                                    <Image src={state7} alt='' fill priority />
                                </div>
                            </div>
                            <h6>Jaipur</h6>
                        </Link>

                        <Link href='#' className={style.item}>
                            <div className={style.circle}>
                                <div className={style.image}>
                                    <Image src={state8} alt='' fill priority />
                                </div>
                            </div>
                            <h6>Udaipur</h6>
                        </Link>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 d-flex flex-row align-items-center justify-content-center">
                        <Link href='#' className={style.btn1}>View All</Link>
                    </div>

                </div>
            </div>
        </div >


    )
}
