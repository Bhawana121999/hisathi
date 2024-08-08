import React from 'react'
import style from '@/components/Video/Video.module.scss'
import { IoIosArrowForward } from "react-icons/io";

export default function Video() {

  return (

    <>

      <div className={style.video_sec}>
        <video className={style.video} autoPlay muted loop>
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className={style.content}>
          <h2>Book your venue</h2>
          <p>Pick your date. Set your budget. Choose your venue.</p>
          <button className={style.btn}>Check Availability  <IoIosArrowForward /></button>
        </div>
      </div>

    </>
    
  )
}
