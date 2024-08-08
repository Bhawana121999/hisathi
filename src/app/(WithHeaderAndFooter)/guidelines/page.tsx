import React from 'react'
import style from '@/app/(WithHeaderAndFooter)/guidelines/guidelines.module.scss'


export default function page() {

    return (


        <div className={style.guide_sec}>
            <div className="container">
                <div className="row">
                    <h2 className={style.heading}>Safety Guidelines</h2>
                    <p className={style.para}>At HiSathi.com, we are committed to creating a secure online community. We urge all our users
                        to follow these guidelines to ensure a safe experience on our platform.</p>

                    <h4>Online Safety</h4>
                    <h6>Protect Your Information</h6>
                    <p className={style.para}>Never disclose personal details such as your home or work address, or specifics about your
                        daily routine (e.g., the gym you visit every Monday) to people you don’t know.</p>

                    <h6>Keep Conversations on the App</h6>
                    <p className={style.para}>Always communicate through the app. Avoid sharing personal information, such as your home
                        or work address, or details about your daily routine (e.g., your regular gym visits) with strangers.</p>

                    <h6>Never Send Money or Share Financial Information</h6>
                    <p className={style.para}>Never send money, especially via bank transfer, even if the person claims to be in an
                        emergency. Transferring money is like sending cash — it’s nearly impossible to reverse the
                        transaction or trace where the money went. Do not share information that could be used to
                        access your financial accounts. If another user asks you for money, report it to us immediately.</p>


                    <h4>Meeting in Person</h4>
                    <h6>Take Your Time</h6>
                    <p className={style.para}>Don’t rush. Get to know the other person before agreeing to meet or chat outside of
                        HiSathi.com. Don’t hesitate to ask questions to identify any red flags. A phone or video call can
                        be a helpful screening tool.</p>

                    <h6>Meet in Public Places</h6>
                    <p className={style.para}>For the first few meetings, choose populated, public places. If your connection pressures you to
                        go to a private location, end the date.</p>

                    <h6>Leave If You Feel Uncomfortable</h6>
                    <p className={style.para}>It’s okay to end the date early if you’re feeling uncomfortable. In fact, it’s encouraged. If your
                        instincts tell you something is wrong or you feel unsafe, seek help from people around you.</p>
                </div>
            </div>
        </div>
    )
}
