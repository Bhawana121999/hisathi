'use client'

import React, { useState } from 'react'
import style from './contact.module.scss'
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdSupportAgent } from "react-icons/md";
import Link from 'next/link';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from 'react-icons/io5';


export default function page() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [phone, setphone] = useState("");
    const [message, setmessage] = useState("");



    return (
        <>
            <div className={style.contact}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h1 className={style.heading}>Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.loaction}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-12 col-sm-12 text-center">
                            <div className={style.head_content}>
                                <span className={style.title}>Our Location</span>
                                <h6 className={style.head}>Our Office Address</h6>
                            </div>
                            <p className={style.desc}>
                                Wabi Sabi Stays, Landour, Kulri, near Picture Palace,
                                Mussoorie, Uttarakhand 248179
                            </p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-12 col-sm-12">
                            <div className="row">
                                <div className={`${style.border} col-lg-4 col-md-4 col-sm-4`}>
                                    <div className={style.contact_box}>
                                        <MdOutlineLocalPhone />
                                        <h6 className={style.name}>Make a Call</h6>
                                        <Link href="tel:+918267851405" className={style.link}>
                                            +91 8267851405
                                        </Link>
                                    </div>
                                </div>
                                <div className={`${style.border} col-lg-4 col-md-4 col-sm-4`}>
                                    <div className={style.contact_box}>
                                        <HiOutlineMailOpen />
                                        <h6 className={style.name}>Send a Mail</h6>
                                        <Link href="mailto:contact@hisathi.com" className={style.link}>
                                            contact@hisathi.com
                                        </Link>
                                    </div>
                                </div>
                                <div className={`${style.border} col-lg-4 col-md-4 col-sm-4`}>
                                    <div className={style.contact_box}>
                                        <IoLocationOutline />
                                        <h6 className={style.name}>Location</h6>
                                        <Link href="https://www.google.com/maps/search/2+Tehri+Nagar,+Doon+University+Road,+Kedarpuram,+Dehradun,+Uttarakhand-248001/@30.2759263,78.0259369,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D" className={style.link}>
                                            2 Tehri Nagar, Doon University Road, Kedarpuram, Dehradun, Uttarakhand-248001
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.form_sec}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-12 col-sm-12">
                            <div className={style.form}>
                                <div className={style.top_content}>
                                    <div className={style.left_side}>
                                        <h6 className={style.title}>Send Your Message</h6>
                                        <p className={style.para}>
                                            Please Fill Free to get in touch using the form below.
                                        </p>
                                        <p className={style.para}>We’d love to hear for you.</p>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <Form.Group
                                            className={style.mb_4}
                                            controlId="exampleForm.ControlInput1"
                                        >
                                            <Form.Label className={style.label}>
                                                First Name*
                                            </Form.Label>
                                            <div className={style.icon}>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter  Name"
                                                    className={style.form_control}
                                                    value={name}
                                                    onChange={(e: any) => setName(e.target.value)}
                                                />
                                                <AiOutlineUser />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <Form.Group
                                            className={style.mb_4}
                                            controlId="exampleForm.ControlInput1"
                                        >
                                            <Form.Label className={style.label}>
                                                Mobile Number*
                                            </Form.Label>
                                            <div className={style.icon}>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Enter Mobile Number"
                                                    className={style.form_control}
                                                    value={phone}
                                                    onChange={(e: any) => setphone(e.target.value)}
                                                />
                                                <MdOutlinePhone />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <Form.Group
                                            className={style.mb_4}
                                            controlId="exampleForm.ControlInput1"
                                        >
                                            <Form.Label className={style.label}>E-mail*</Form.Label>
                                            <div className={style.icon}>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter E-mail Address"
                                                    className={style.form_control}
                                                    value={email}
                                                    onChange={(e: any) => setEmail(e.target.value)}
                                                />
                                                <MdOutlineEmail />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <Form.Group
                                            className={style.mb_4}
                                            controlId="exampleForm.ControlInput1"
                                        >
                                            <Form.Label className={style.label}>Title</Form.Label>
                                            <div className={style.icon}>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Your Subject"
                                                    className={style.form_control}
                                                    value={title}
                                                    onChange={(e: any) => setTitle(e.target.value)}
                                                />
                                                <AiOutlineUser />
                                            </div>
                                        </Form.Group>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <Form.Group
                                            className={style.mb_4}
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Label className={style.label}>Message</Form.Label>
                                            <div className={style.icon}>
                                                <Form.Control
                                                    as="textarea"
                                                    onChange={(e: any) => setmessage(e.target.value)}
                                                    value={message}
                                                    placeholder="Enter your Message"
                                                    rows={3}
                                                    className={style.form_control}
                                                />
                                            </div>
                                        </Form.Group>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-xl-4 col-lg-4 col-md-4 d-flex flex-row justify-content-center">
                                            <button
                                                className={`${style.btn4} btn`}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}