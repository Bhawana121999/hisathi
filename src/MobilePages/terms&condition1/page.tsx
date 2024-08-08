import React from 'react'
import style from './terms&condition.module.scss'



export default function page() {


    return (

        <div className={style.guide_sec}>
            <div className="container">
                <div className="row">
                    <h2 className={style.heading}>Terms and Conditions</h2>
                    <p className={style.para}>Welcome to HiSathi.com&#39;s Terms and Conditions (&quot;Terms&quot;). This document is a binding
                        agreement between you and HiSathi.com (parent company &quot;Infinite Forest, Inc.&quot;), outlining your
                        rights and responsibilities before using the HiSathi application (&quot;App&quot;). By accessing, viewing, or
                        using the App on your desktop or smartphone, you agree to be legally bound by these Terms.
                        Please also review our “Privacy Policy” for additional information.</p>

                    <h4>1. HiSathi Rules</h4>
                    <p className={style.para}>To use our App, you must first create an account (&quot;Account&quot;). To register for an account, you
                        must:</p>

                    <ul>
                        <li className={style.para}>Be at least 18 years old; and</li>
                        <li className={style.para}>Be legally allowed to use the App according to the laws of your home country.</li>
                        <li className={style.para}>Be a working professional.</li>
                    </ul>

                    <h4>Deleting Your Account:</h4>
                    <p className={style.para}>While we hope you enjoy using HiSathi, you can delete your Account anytime by going to your
                        Profile tab, clicking &#39;Settings&#39;, and selecting &#39;Delete&#39;. Your account will be deleted immediately,
                        and all associated information will be removed from the App. To reactivate, you must create a
                        new account. Alternatively, you can deactivate your account temporarily by selecting the
                        &#39;Deactivate&#39; option in &#39;Settings&#39;. Infinite Forest, Inc. reserves the right to suspend or terminate
                        any Account at its sole discretion, without prior notice, for any reason, including violation of
                        these Terms.</p>

                    <p className={style.para}>Certain features of the App may be restricted if you do not register for a free Account, but you
                        can unlock these features by upgrading to a premium account.</p>


                    <h4>2. Types of Content</h4>
                    <p className={style.para}>The App contains three types of content:</p>

                    <ul>
                        <li className={style.para}>Your Content: Content that you upload and provide.</li>
                        <li className={style.para}>Member Content: Content provided by other members.</li>
                        <li className={style.para}>HiSathi Content: Content provided by us.</li>
                    </ul>

                    <h6>Prohibited Content:</h6>
                    <p className={style.para}>We encourage free expression but must restrict certain content, including but not limited to
                        content that:</p>

                    <ul>
                        <li className={style.para}>Is offensive, harassing, or likely to annoy others.</li>
                        <li className={style.para}>Is obscene, pornographic, or violent.</li>
                        <li className={style.para}>Promotes racism, sexism, or bigotry.</li>
                        <li className={style.para}>Is defamatory or libelous.</li>
                        <li className={style.para}>Contains spam or malware.</li>
                        <li className={style.para}>Infringes on third-party rights.</li>
                        <li className={style.para}>Lacks consent from the individuals depicted.</li>
                    </ul>

                    <h6>Your Content</h6>
                    <p className={style.para}>You are responsible for the content you upload. Do not display personal or banking information
                        publicly. By posting content on HiSathi, you grant us a non-exclusive, royalty-free, perpetual,
                        nationwide license to use your content. We reserve the right to remove, edit, or restrict access
                        to any content without obligation to display or review it.</p>

                    <h6>Member Content</h6>
                    <p className={style.para}>Other users&#39; content belongs to them and is visible to all members. You may only use this
                        information within the scope of HiSathi&#39;s purpose and not for commercial, spamming, or
                        harassing purposes. Misuse of other users&#39; information can result in account termination.</p>

                    <h6>HiSathi’s Content</h6>
                    <p className={style.para}>All other content on HiSathi, including text, graphics, trademarks, logos, sounds, and artwork, is
                        owned by us and protected by intellectual property laws. You may not use, modify, or sell our
                        content without permission.</p>

                    <h4>3. App Restrictions</h4>
                    <h6>Do’s:</h6>
                    <ul>
                        <li className={style.para}>Comply with all relevant laws and regulations.</li>
                        <li className={style.para}>Use your real name on your profile.</li>
                    </ul>

                    <h6>Don&#39;ts:</h6>
                    <ul>
                        <li className={style.para}>Engage in unlawful, dishonest, abusive, or discriminatory behavior.</li>
                        <li className={style.para}>Misrepresent your identity or qualifications.</li>
                        <li className={style.para}>Disclose information without consent.</li>
                        <li className={style.para}>Create pyramid schemes or other fraudulent activities.</li>
                    </ul>

                    <p className={style.para}>You can report abuse or complaints about Member Content by contacting us. Users attempting
                        to scrape or replicate any part of the App without consent will face legal action.</p>

                    <h4>4. Privacy</h4>
                    <p className={style.para}>For details on how HiSathi collects, uses, and shares your personal data, please review our
                        Privacy Policy. By using HiSathi, you consent to our data practices as described in the Privacy
                        Policy.</p>

                    <h4>5. Third-Party Stores; Premium Services; In-App Purchases</h4>
                    <p className={style.para}>The App may integrate with third-party platforms (e.g., Apple, Google, Facebook). By using
                        these services, you agree to their terms and conditions. HiSathi offers Premium Services and
                        In-App purchases, and additional terms may apply. Payments are non-refundable, and
                        subscriptions automatically renew unless canceled according to the terms of your Mobile
                        Platform Account.</p>

                    <h4>6. Push Notifications; Location-Based Features</h4>
                    <p className={style.para}>HiSathi may send you notifications and alerts. You can manage these settings on your device.
                        Location-based features may also be available, requiring GPS, Bluetooth, or other software to
                        function.</p>

                    <h6>No Lending</h6>
                    <p className={style.para}>HiSathi does not provide loans or credit facilities. Any credit offered through the App is by third-
                        party lenders, and HiSathi is not a party to these agreements. We are not responsible for any
                        aspect of the lending process or outcomes.</p>

                    <h6>Limitation of Liability</h6>
                    <p className={style.para}>Infinite Forest, Inc. and its affiliates are not liable for any direct, indirect, incidental,
                        consequential, or punitive damages arising from your use of the App, even if advised of the
                        possibility of such damages. Our maximum liability is limited to Rs.100.</p>


                    <p className={style.para}>For further information, please refer to our Privacy Policy.</p>
                </div>
            </div>
        </div>
    )
}
