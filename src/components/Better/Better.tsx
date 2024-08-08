import React from 'react'
import style from '@/components/Better/Better.module.scss'
import Image from 'next/image'
import better1 from '@/assets/Images/better1.webp'
import better2 from '@/assets/Images/better2.webp'
import better3 from '@/assets/Images/better3.webp'



export default function Better() {

    return (

        <div className={style.better_sec}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h2 className={style.heading}>Why are we better?</h2>
                        <p className={style.para}>Because we bring our years of
                            experience in planning your wedding.</p>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className={style.box}>
                            <div className={style.image}>
                                <Image src={better1} alt='' fill priority />
                            </div>
                            <h4>Exclusive Deals</h4>
                            <p>Best deals made only for you tailored to your preferences.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className={style.box}>
                            <div className={style.image}>
                                <Image src={better2} alt='' fill priority />
                            </div>
                            <h4>Expert Insights</h4>
                            <p>Our wedding experts know how to craft the best for you.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className={style.box}>
                            <div className={style.image}>
                                <Image src={better3} alt='' fill priority />
                            </div>
                            <h4>Stress-free Experience</h4>
                            <p>From venue recce to last second of your wedding, we’ll be with you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
