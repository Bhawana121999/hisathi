"use client";

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import style from "@/components/Banner/Banner.module.scss";
import { addDataByUser } from "@/services/userQuery.services";
import { toastError, toastSuccess } from "@/utils/toast";

export default function ContactModal(props: any) {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleOnclick = async () => {
        console.log("first");
        try {
            if (!name) {
                toastError("Name is Mandatory");
                return;
            }
            if (!phoneNumber) {
                toastError("Phone Number is Mandatory");
                return;
            }
            if (!email) {
                toastError("Email is Mandatory");
                return;
            } else {
                let obj = {
                    name,
                    message,
                    phoneNumber: parseInt(phoneNumber),
                    email,
                };


                const res: any = await addDataByUser(obj);
                console.log(res, "resresresresresres");

                // Close the modal after successful submission
                if (res?.data) {
                    toastSuccess("Submission successful!");
                    props.onHide();
                }
            }
            setEmail("")
            setPhoneNumber("")
            setMessage("")
            setName("")
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Connect with Us
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className={style.inputs}>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 mb-2">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className={`${style.control} form-control`}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className={`${style.control} form-control`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className={`${style.control} form-control`}
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                            <textarea
                                placeholder="Write Your Message"
                                className={`${style.control} form-control`}
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={handleOnclick}
                    style={{
                        width: "100%",
                        color: "#fff",
                        backgroundColor: "#fd3ca4",
                        border: "1px solid #fd3ca4",
                    }}
                >
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
