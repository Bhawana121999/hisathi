"use client"
import React, { useState } from 'react'
import style from '@/components/Banner/Banner.module.scss'
import Image from 'next/image'
import main_banner from '@/assets/Images/main_banner.webp'
import ContactModal from '../Modal/ContactModal'


export default function Banner() {
    const [modalShow, setModalShow] = useState(false)
    return (
        <>
            <div className={style.banner}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className={style.image}>
                                <Image src={main_banner} alt='' fill priority />
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-7 col-sm-7 d-flex flex-column justify-content-center" >
                            <h1>We Plan Perfect Weddings</h1>
                            <p>Our wedding experts plan your wedding day better than you ever imagined From stunning
                                venues and exquisite décor to seamless coordination and personalized touches, we transform
                                your dreams into an unforgettable reality. </p>

                            <button className={style.btn1} onClick={()=>setModalShow(!modalShow)} >Get Free Quote </button>
                        </div>
                    </div>
                </div>
            </div>
            <ContactModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}
