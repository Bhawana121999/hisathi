"use client"
import React, { useState } from 'react'
import style from '@/components/Vendor/Vendor.module.scss'
import { MdArrowForwardIos } from 'react-icons/md'
import vendors from '@/assets/Images/vendors.webp'
import Image from 'next/image'
import ContactModal from '../Modal/ContactModal'


export default function Vendor() {
    const [modalShow, setModalShow] = useState(false)

    return (
        <>
            <div className={style.work_sec}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-5 col-md-5 col-sm-5 ">
                            <h2 className={style.heading}>Are you a vendor?</h2>
                            <p className={style.para}>Want to list your venue or wedding services
                                here? Join us today!</p>
                            <button className={style.btn2} onClick={() => setModalShow(!modalShow)}>Join Us <MdArrowForwardIos /></button>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.image}>
                                <Image src={vendors} alt='' fill priority />
                            </div>
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

