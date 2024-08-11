'use client'
import React, { useState } from 'react'
import style from '@/components/Faqs/Faqs.module.scss'
import Accordion from 'react-bootstrap/Accordion';


export default function Faqs() {



    return (

        <div className={style.work_sec}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h2 className={style.heading}>Frequently asked questions</h2>
                    </div>

                    <div className={`col-lg-7 col-md-7 col-sm-7 mt-5 pt-5 ${style.padding}`}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How much does your wedding planning service cost?</Accordion.Header>
                                <Accordion.Body>
                                    Betterhalf charges 2% of the services availed to provide the best experience for you. Rest be assured, we bring the best negotiated deals to you at the best prices to suit your budget.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Do you offer customisable packages to suit different budgets?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, we are committed to provide you all the services tailored to your budget and requirements. Our dedicated planners ensure to turn your dream wedding into reality without turning it heavy on your pockets.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Can you assist with destination weddings or events in different locations?</Accordion.Header>
                                <Accordion.Body>
                                Absolutely, we specialize in destination weddings, ensuring you fully enjoy your special day while we handle everything else
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>How early should we book your services for our wedding?</Accordion.Header>
                                <Accordion.Body>
                                Ideally, the venue recce and booking of the services should be done 9-12 months in advance as all the services sell out fast, especially for auspicious dates.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Are there additional costs we should be aware of beyond the initial service fee?</Accordion.Header>
                                <Accordion.Body>
                                We guarantee transparent pricing with no hidden fees. Committed to delivering the best wedding experience, we tailor our services to fit your budget without any extra costs.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}
