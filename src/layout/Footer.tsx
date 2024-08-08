import React from 'react'
import style from '@/layout/layout.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/Images/logo.webp'
import { RiInstagramFill, RiFacebookFill, RiYoutubeFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import { MdMailOutline, MdOutlineLocationOn, MdOutlinePhone } from 'react-icons/md'
import { GrLocation } from 'react-icons/gr'

export default function Footer() {
  return (

    <div className={style.footer}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 d-flex flex-column align-items-center">
            <Link href="/" className="main_logo">
              <Image src={logo} alt='' />
            </Link>
            <h2 className={style.heading}>Plan Your Dream Wedding With Us</h2>
            <p className={style.para}>The Wedding Company is your ultimate destination for end-to-end wedding planning because we make
              it super easy. From selecting the ideal wedding venues to knowing the latest wedding trends, we help
              you in every aspect of your wedding. Let our team handle everything and make your wedding day
              unforgettable.</p>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-3 pt-4">
            <h6 className={style.head}>Company</h6>
            <ul className={style.list}>
              <li className={style.item}>
                <Link href='/guidelines'>Community guidelines</Link>
              </li>
              <li className={style.item}>
                <Link href='/contact'>Contact Us</Link>
              </li>
              <li className={style.item}>
                <Link href='#'>FAQ</Link>
              </li>
              <li className={style.item}>
                <Link href='/privacy&policy'>Privacy Policy</Link>
              </li>
              <li className={style.item}>
                <Link href='/terms&condition'>Terms conditions</Link>
              </li>
              <li className={style.item}>
                <Link href='#'>Register as Partner</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-3 pt-4">
            <h6 className={style.head}>Explore</h6>
            <ul className={style.list}>
              <li className={style.item}>
                <Link href='#'>Wedding Ideas</Link>
              </li>
              <li className={style.item}>
                <Link href='#'>Wedding Venues</Link>
              </li>
              <li className={style.item}>
                <Link href='#'>Wedding Decorators</Link>
              </li>
              <li className={style.item}>
                <Link href='#'>Wedding Photographers</Link>
              </li>
              <li className={style.item}>
                <Link href='#'>Wedding Services</Link>
              </li>
              <li className={style.item}>
                <Link href='/downloadApp'>Matchmaking</Link>
              </li>
            </ul>
          </div>


          <div className="col-lg-3 col-md-3 col-sm-3 pt-4">
            <h6 className={style.head}>Contact Us</h6>
            <p className={style.span}> For Wedding Services</p>

            <ul className={style.list}>
              <li className={style.item}>
                <Link href='tel:+918267851405'><MdOutlinePhone /> +91 8267851405</Link>
              </li>
              <li className={style.item}>
                <Link href='mailto:contact@hisathi.com'><MdMailOutline /> contact@hisathi.com</Link>
              </li>
              <li className={style.item}>
                <Link href='https://www.google.com/maps/search/2+Tehri+Nagar,+Doon+University+Road,+Kedarpuram,+Dehradun,+Uttarakhand-248001/@30.2733804,78.0383729,16z/data=!3m1!4b1?entry=ttu'><GrLocation  /> 2 Tehri Nagar, Doon University Road, Kedarpuram, Dehradun, Uttarakhand-248001</Link>
              </li>
            </ul>
          </div>


          <div className="col-lg-3 col-md-3 col-sm-3 pt-4">
            <h6 className={style.head}>Follow Us On</h6>
            <ul className={style.list}>
              <li className={style.item}>
                <Link href='#'>
                  <div className={style.circle}>
                    <RiInstagramFill />
                  </div>
                  Instagram
                </Link>
              </li>
              <li className={style.item}>
                <Link href='#'>
                  <div className={style.circle}>
                    <RiFacebookFill />
                  </div>
                  Facebook
                </Link>
              </li>
              <li className={style.item}>
                <Link href='#'>
                  <div className={style.circle}>
                    <RiYoutubeFill />
                  </div>
                  Youtube
                </Link>
              </li>
              <li className={style.item}>
                <Link href='#'>
                  <div className={style.circle}>
                    <RiLinkedinFill />
                  </div>
                  LinkedIn
                </Link>
              </li>
              <li className={style.item}>
                <Link href='#'>
                  <div className={style.circle}>
                    <RiTwitterXFill />
                  </div>
                  Twitter
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <p className={style.bottom_text}>Disclaimer: To make your experience better we might use your details for marketing purposes. Our wedding experts might contact to understand your need and help you get high quality wedding services.</p>

      </div>

    </div>
  )
}
