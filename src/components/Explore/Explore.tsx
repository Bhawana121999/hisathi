import React from 'react'
import style from '@/components/Explore/Explore.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import explore1 from '@/assets/Images/explore1.webp'
import explore2 from '@/assets/Images/explore2.webp'
import explore3 from '@/assets/Images/explore3.webp'
import explore4 from '@/assets/Images/explore4.webp'
import explore5 from '@/assets/Images/explore5.webp'
import explore6 from '@/assets/Images/explore6.webp'
import { MdArrowForwardIos } from 'react-icons/md'


export default function Explore() {

    return (


        <div className={style.explore}>
            <div className="container">
                <div className="row">
                    <div className={`col-lg-12 col-md-12 col-sm-12 mb-5 pb-5 ${style.padding}`}>
                        <h2 className={style.heading}>Explore wedding ideas</h2>
                        <p className={style.para}>10,000+ unique wedding ideas for your
                            special day. Create your ideabook!</p>
                    </div>
                </div>

                <div className={`row ${style.rows}`}>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                        <Link href='#' className={style.content}>
                            <div className={style.image}>
                                <Image src={explore1} alt='' fill priority />
                            </div>
                            <h4>Lehenga <MdArrowForwardIos /></h4>
                        </Link>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                        <Link href='#' className={style.content}>
                            <div className={style.image}>
                                <Image src={explore5} alt='' fill priority />
                            </div>
                            <h4>Hairstyles <MdArrowForwardIos /></h4>
                        </Link>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                        <Link href='#' className={style.content}>
                            <div className={style.image}>
                                <Image src={explore3} alt='' fill priority />
                            </div>
                            <h4>Makeup <MdArrowForwardIos /></h4>
                        </Link>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                        <Link href='#' className={style.content}>
                            <div className={style.image}>
                                <Image src={explore4} alt='' fill priority />
                            </div>
                            <h4>Mehendi <MdArrowForwardIos /></h4>
                        </Link>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                        <Link href='#' className={style.content}>
                            <div className={style.image}>
                                <Image src={explore2} alt='' fill priority />
                            </div>
                            <h4>Decor <MdArrowForwardIos /></h4>
                        </Link>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                        <Link href='#' className={style.content}>
                            <div className={style.image}>
                                <Image src={explore6} alt='' fill priority />
                            </div>
                            <h4>Photography <MdArrowForwardIos /></h4>
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
