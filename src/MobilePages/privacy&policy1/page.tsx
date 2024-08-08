import React from 'react'
import style from './privacy&policy.module.scss'
import Link from 'next/link'



export default function page() {

    return (


        <div className={style.guide_sec}>
            <div className="container">
                <div className="row">
                    <h2 className={style.heading}>Privacy Policy</h2>
                    <h4>Our commitment to you</h4>
                    <p className={style.para}>At Hisathi, your privacy is our utmost priority. It forms the foundation of how we build the
                        product you love, ensuring that you can fully trust us and focus on building meaningful
                        connections in your search for a life partner.</p>

                    <p className={style.para}>We deeply appreciate the trust you place in us when you share your personal
                        information, and we do not take this trust for granted.</p>

                    <p className={style.para}>We promise to protect your privacy. Our product is designed with your privacy in mind,
                        leveraging the expertise of professionals in legal, security, engineering, and product
                        design fields. We ensure that no decision impacting your privacy is made without your
                        consent.</p>

                    <h6>Transparency in Data Processing</h6>
                    <p className={style.para}>We strive for transparency in how we process your data. Recognizing that many
                        companies’ privacy policies suffer from insufficient information and overly complicated
                        language, we have taken a different approach: our Privacy Policy and other
                        documentation are written in clear, simple language to provide you with a clear
                        understanding of our practices.</p>

                    <h6>Data Security</h6>
                    <p className={style.para}>We ensure the security of your personal information. Dedicated teams are assigned to
                        protect your data, and we continuously update our security measures to enhance its
                        safety. Rest assured, your data is in secure hands.</p>

                    <p className={style.para}>We do not recommend sharing your contact number or bank account details unless you
                        choose to do so.</p>


                    <h4>Information We Collect</h4>
                    <p className={style.para}>To facilitate meaningful connections, we require some personal information about you,
                        such as basic profile details and your partner preferences. By providing this information,
                        you explicitly consent to our processing of this data. Below, we outline the information
                        we collect, its purpose, and how you can choose to delete it from the platform at any
                        time.</p>

                    <h6>Information You Provide</h6>
                    <ul>
                        <li className={style.para}><b>Sign Up and Account Creation:</b> When you sign up and create an account, you provide us
                            with login credentials, your gender, and date of birth. This information helps us offer
                            improved matches based on your preferences. Your details remain secure with us and
                            are not shared on social media. You can delete this information anytime by deleting your
                            account through the “Delete” account option in your profile settings.</li>

                        <li className={style.para}><b>Profile Completion:</b> You may share additional information such as personality, lifestyle,
                            interests, and photos. Access to your camera or photo album may be required to add
                            photos. This information helps us provide accurate matches. All this information is
                            securely stored and not shared externally. You can delete this information anytime by
                            deleting your account.</li>

                        <li className={style.para}><b>Phone Number Authentication:</b> Your phone number is used for verification and contact
                            purposes if needed. You agree to be contacted for subscribing to premium plans or
                            value-added services. Your contact number is safe with us and not shared or displayed
                            publicly. You can delete this information anytime by deleting your account.</li>

                        <li className={style.para}><b>Paid Services:</b> When you subscribe to a paid service or make a purchase, you provide
                            account details such as your debit or credit card number. This data is used solely for
                            transaction processing and is not stored by us.</li>

                        <li className={style.para}><b>Surveys and Contests:</b> Participation in surveys or contests is voluntary. We use your
                            responses to improve your matching experience and do not share your personal
                            information externally.</li>

                        <li className={style.para}><b>Customer Care:</b> If you contact our customer care team, we only collect the information
                            you provide during the session. Your details are safe with us and not shared with third
                            parties.</li>

                        <li className={style.para}><b>Communication Requests:</b> If you ask us to communicate with other people, we process
                            the information you provide solely to complete your request. Your details remain secure
                            and not shared externally.</li>
                    </ul>

                    <p className={style.para}>We use cookies to improve your experience on our site. By using our site, you consent
                        to the use of cookies.</p>


                    <h6>Sharing Your Data with Lending Partners</h6>
                    <p className={style.para}>1.1. You agree and acknowledge that any information about you, whether provided
                        directly or indirectly, may be collected, compiled, and shared with third parties, after
                        obtaining your explicit consent, solely to render services related to loan applications and
                        your loan journey. This may include lenders, storage providers, data analytics providers,
                        consultants, lawyers, and auditors. Failure to provide consent may prevent us from
                        delivering services to you.</p>

                    <p className={style.para}>1.2. By using our services and creating an account, you authorize us and our partners to
                        contact you via email, phone, or otherwise to ensure you know all service features.</p>

                    <p className={style.para}>1.3. We may share data as required by law or authorities in good faith to comply with
                        legal obligations.</p>


                    <h6>Accessing and Updating Your Data</h6>
                    <p className={style.para}>You warrant that all personal data provided is accurate, up-to-date, and true. We make
                        best efforts to enable you to review and correct inaccurate data, subject to legal
                        requirements.</p>


                    <h6>Links to Third-Party Websites</h6>
                    <p className={style.para}>Our services may include links to third-party services governed by their privacy policies.
                        We do not accept responsibility for these policies or any personal data collected through
                        them. Please review their policies before submitting any personal data.</p>

                    <h6>Changes to Privacy Policy</h6>
                    <ul>
                        <li className={style.para}>1.1. We regularly review and may amend this policy at our sole discretion.</li>

                        <li className={style.para}>1.2. Changes will be posted on this page and, where appropriate, notified by email or
                            SMS.</li>
                    </ul>

                    <p className={style.para}>For any queries or concerns, please contact us anytime at <Link href='#'>contact@hisathi.com</Link></p>


                </div>
            </div>
        </div>
    )
}
