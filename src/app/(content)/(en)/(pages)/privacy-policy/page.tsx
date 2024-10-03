import Navbar from "../../../../../components/en/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AFKology | Privacy Policy - The most precious moments in life happen offline.",
  description: "Read about how AFKology collects, uses, and protects your personal information. Your privacy is important to us.",
  keywords: ['afkology', 'privacy policy', 'data protection', 'user privacy', 'personal information', 'data collection'],
  metadataBase: new URL('https://www.afkology.com'),
  alternates: {
    canonical: '/privacy-policy',
    languages: {
      'en-US': '/privacy-policy',
      'ro-RO': '/ro/politica-de-confidentialitate',
    },
  },
  openGraph: {
    title: 'AFKology | Privacy Policy - The most precious moments in life happen offline.',
    description: 'Discover how AFKology handles your personal information and ensures your privacy is protected.',
    url: 'https://www.afkology.com/privacy-policy',
    siteName: 'AFKology',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.afkology.com/logo.png',
        width: 190,
        height: 107,
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
    apple: [
      { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  // verification: {
  //   google: 'ADDD CODEE',
  // },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AFKology | Privacy Policy - The most precious moments in life happen offline.",
  "description": "Read about how AFKology collects, uses, and protects your personal information. Your privacy is important to us.",
  "url": "https://www.afkology.com/privacy-policy",
  "author": {
    "@type": "Organization",
    "name": "AFKology",
    "url": "https://www.afkology.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AFKology",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.afkology.com/logo.png"
    }
  },
  "mainEntityOfPage": "https://www.afkology.com/privacy-policy"
}

export default function Page() {
  return (
    <div>
      <section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </section>
      <Navbar roUrl="/ro/politica-de-confidentialitate" />
      <main className="flex-grow">



        PRIVACY POLICY
        Last updated: September 29, 2024

        This Privacy Notice for PFA Voicu Nicolae Gabriel (doing business as AFKology) ("<strong>we</strong>,""<strong>us</strong>," or"<strong>our</strong>"), describes how and why we might access, collect, store, use, and/or share ("<strong>process</strong>") your
        personal information when you use our services ("<strong>Services</strong>"), including when you:

        <ul>
          <li>
            Visit our website at <a href="https://www.afkology.com" target="_blank">https://www.afkology.com</a>, or any website of ours that links to this Privacy Notice.
          </li>
        </ul>
        <ul>
          <li>
            Engage with us in other related ways, including any sales, marketing, or events.
          </li>
        </ul>



        <div>
          <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at office@afkology.com.
        </div>


        <div>
          <strong>SUMMARY OF KEY POINTS</strong>
        </div>

        <div>
          <strong><em>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our </em></strong><a href="#toc"><strong><em>table of contents</em></strong></a><strong><em> below to find the section you are looking for.</em></strong>
        </div>

        <div>
          <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <a href="#personalinfo">personal information you disclose to us</a>.
        </div>

        <div>
          <strong>Do we process any sensitive personal information?</strong> Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.
        </div>

        <div>
          <strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.
        </div>

        <div>
          <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. Learn more about <a href="#infouse">how we process your information</a>.
        </div>

        <div>
          <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about <a href="#whoshare">when and with whom we share your personal information</a>.
        </div>

        <div>
          <strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about <a href="#infosafe">how we keep your information safe</a>.
        </div>

        <div>
          <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <a href="#privacyrights">your privacy rights</a>.
        </div>

        <div>
          <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by <a href="https://app.termly.io/notify/a9d766ea-c3d3-4368-a673-267bf08b4250" target="_blank">data subject access request</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
        </div>

        <div>
          Want to learn more about what we do with any information we collect? <a href="#toc">Review the Privacy Notice in full</a>.
        </div>
        <div id="toc">
          <strong>TABLE OF CONTENTS</strong>
        </div>
        <br />
        <div>
          <a href="#infocollect">1. WHAT INFORMATION DO WE COLLECT?</a>
        </div>
        <div>
          <a href="#infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</a>
        </div>
        <div>
          <a href="#whoshare">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>
        </div>
        <div>
          <a href="#3pwebsites">4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</a>
        </div>
        <div>
          <a href="#cookies">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a>
        </div>
        <div>
          <a href="#inforetain">6. HOW LONG DO WE KEEP YOUR INFORMATION?</a>
        </div>
        <div>
          <a href="#infosafe">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</a>
        </div>
        <div>
          <a href="#infominors">8. DO WE COLLECT INFORMATION FROM MINORS?</a>
        </div>
        <div>
          <a href="#privacyrights">9. WHAT ARE YOUR PRIVACY RIGHTS?</a>
        </div>
        <div>
          <a href="#DNT">10. CONTROLS FOR DO-NOT-TRACK FEATURES</a>
        </div>
        <div>
          <a href="#policyupdates">11. DO WE MAKE UPDATES TO THIS NOTICE?</a>
        </div>
        <div>
          <a href="#contact">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
        </div>
        <div>
          <a href="#request">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a>
        </div>
        <br /><br />
      </main>
    </div>
  );
}
{/* <div id="infocollect" style="line-height: 1.5;"><span style="color: rgb(0, 0, 0);"><span
          style="color: rgb(0, 0, 0); font-size: 15px;"><span style="font-size: 15px; color: rgb(0, 0, 0);"><span
              style="font-size: 15px; color: rgb(0, 0, 0);"><span id="control"
                style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">1. WHAT INFORMATION DO WE
                    COLLECT?</span></strong></span></span></span></span></span></div>
    <div style="line-height: 1.5;"><br></div>
    <div id="personalinfo" style="line-height: 1.5;"><span data-custom-class="heading_2"
        style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><strong>Personal information you disclose to
            us</strong></span></span></div>
    <div>
      <div><br></div>
      <div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span
            style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span
                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In
                        Short:</em></strong></span></span></span></span><span data-custom-class="body_text"><span
                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                    data-custom-class="body_text"><strong><em> </em></strong><em>We collect personal information that
                      you provide to us.</em></span></span></span></span></span></span></div>
    </div>
    <div style="line-height: 1.5;"><br></div>
    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
          style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We collect personal
            information that you voluntarily provide to us when you <span style="font-size: 15px;">
              <bdt class="block-component"></bdt>
            </span></span><span data-custom-class="body_text">express an interest in obtaining information about us or
            our products and Services, when you participate in activities on the Services, or otherwise when you contact
            us.</span></span></span></span></div>
    <div style="line-height: 1.5;"><br></div>
    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
          style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span
              style="font-size: 15px;">
              <bdt class="block-component"></bdt>
            </span></span></span></span></span></div>
    <div id="sensitiveinfo" style="line-height: 1.5;"><span style="font-size: 15px;"><span
          data-custom-class="body_text"><strong>Sensitive Information.</strong>
          <bdt class="block-component"></bdt>We do not process sensitive information.
        </span></span></div>
    <div style="line-height: 1.5;"><br></div>
    <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">
          <bdt class="else-block"></bdt>
        </span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
          style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span
              style="font-size: 15px;"><span data-custom-class="body_text">
                <bdt class="block-component">
                  <bdt class="block-component"></bdt>
                </bdt>
              </span></span></span></span>
        <bdt class="block-component">
      </span></span></bdt>
    </div>
    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
          style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">All personal information
            that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such
            personal information.</span></span></span></div>
    <div style="line-height: 1.5;"><br></div>
    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
          style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
            <bdt class="block-component"></bdt>
            </bdt>
          </span></span></span>
      <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
    </div>
    <div style="line-height: 1.5;"><span style="font-size: 15px;"><strong><span data-custom-class="heading_2">Google
            API</span></strong></span></div>
    <div style="line-height: 1.5;"><span style="font-size: 15px;"><br></span></div>
    <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Our use of
          information received from Google APIs will adhere to </span></span><a data-custom-class="link"
        href="https://developers.google.com/terms/api-services-user-data-policy" rel="noopener noreferrer"
        target="_blank"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span
            data-custom-class="body_text">Google API Services User Data Policy</span></span></a><span
        style="font-size: 15px;"><span data-custom-class="body_text">, including the </span></span><a
        data-custom-class="link" href="https://developers.google.com/terms/api-services-user-data-policy#limited-use"
        rel="noopener noreferrer" target="_blank"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span
            data-custom-class="body_text">Limited Use requirements</span></span></a><span style="font-size: 15px;"><span
          data-custom-class="body_text">.</span><br></span></div>
    <div><span style="font-size: 15px;"><br></span></div>
    <div style="line-height: 1.5;">
      <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"></span></bdt><span
        style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
            data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span
                data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span
                    data-custom-class="body_text">
                    <bdt class="statement-end-if-in-editor">
                      <bdt class="block-component"></bdt>
                    </bdt>
                  </span></span></span></span></bdt></span></span></span></span></span></span></span></span><span
        style="font-size: 15px;"><span data-custom-class="body_text">
          <bdt class="block-component"></bdt>
        </span></span>
    </div>
    <div style="line-height: 1.5;"><br></div>
    <div id="infouse" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span
          style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
              style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control"
                style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">2. HOW DO WE PROCESS YOUR
                    INFORMATION?</span></strong></span></span></span></span></span></div>
    <div>
      <div style="line-height: 1.5;"><br></div>
      <div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span
            style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span
                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In
                        Short: </em></strong><em>We process your information to provide, improve, and administer our
                      Services, communicate with you, for security and fraud prevention, and to comply with law. We may
                      also process your information for other purposes with your
                      consent.</em></span></span></span></span></span></span></div>
    </div>
    <div style="line-height: 1.5;"><br></div>
    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
          style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>We process your
              personal information for a variety of reasons, depending on how you interact with our Services,
              including:</strong>
            <bdt class="block-component"></bdt>
          </span></span></span></span></span></span></span></span></span></span></span></span></li>
      </ul>
      <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
            style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
              <bdt class="block-component"></bdt>
            </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
        </li>
        </ul>
        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
              style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                <bdt class="block-component"></bdt>
              </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
          </li>
          </ul>
          <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                  <bdt class="block-component"></bdt>
                </span></span></span></span></span></span></span></span></span></span></span></span></li>
            </ul>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                    <bdt class="block-component"></bdt>
                  </span></span></span></li>
              </ul>
              <div style="line-height: 1.5;">
                <bdt class="block-component"><span style="font-size: 15px;"></bdt>
                </span></span></span></span></span></span></li>
                </ul>
                <div style="line-height: 1.5;">
                  <bdt class="block-component"><span style="font-size: 15px;"></bdt>
                  </span></span></span></span></span></span></span></span></span></li>
                  </ul>
                  <div style="line-height: 1.5;">
                    <bdt class="block-component"><span style="font-size: 15px;"></bdt>
                    </span></span></span></span></span></span></span></span></span></span></span></span></li>
                    </ul>
                    <div style="line-height: 1.5;">
                      <bdt class="block-component"><span style="font-size: 15px;"><span
                            data-custom-class="body_text"></span></span></bdt>
                      </li>
                      </ul>
                      <p style="font-size: 15px; line-height: 1.5;">
                        <bdt class="block-component"><span style="font-size: 15px;"></bdt>
                        </span></span></span></span></span></span></span></span></span></span></span></li>
                        </ul>
                      <p style="font-size: 15px; line-height: 1.5;">
                        <bdt class="block-component"><span style="font-size: 15px;"></bdt>
                        </span></span></span></span></span></span></span></span></span></span></span></li>
                        </ul>
                      <p style="font-size: 15px; line-height: 1.5;">
                        <bdt class="block-component"></bdt>
                        </span></span></span></span></span></span></span></span></span></span></span></li>
                        </ul>
                      <p style="font-size: 15px; line-height: 1.5;">
                        <bdt class="block-component"></bdt>
                        </span></span></span></span></span></span></span></span></span></span></span></li>
                        </ul>
                      <div style="line-height: 1.5;">
                        <bdt class="block-component"><span style="font-size: 15px;"><span
                              data-custom-class="body_text"></span></bdt></span></li>
                        </ul>
                        <div style="line-height: 1.5;">
                          <bdt class="block-component"><span style="font-size: 15px;"></bdt></span></span></span></li>
                          </ul>
                          <div style="line-height: 1.5;">
                            <bdt class="block-component"><span style="font-size: 15px;"></bdt></span></span></span></li>
                            </ul>
                            <div style="line-height: 1.5;"><span style="font-size: 15px;">
                                <bdt class="block-component"><span data-custom-class="body_text"></bdt>
                              </span></span></li>
                              </ul>
                              <div style="line-height: 1.5;">
                                <bdt class="block-component"><span style="font-size: 15px;"><span
                                      data-custom-class="body_text"></bdt></span></span></li>
                                </ul>
                                <div style="line-height: 1.5;">
                                  <bdt class="block-component"><span style="font-size: 15px;"><span
                                        data-custom-class="body_text"></span></span></bdt>
                                  </li>
                                  </ul>
                                  <div style="line-height: 1.5;">
                                    <bdt class="block-component"><span style="font-size: 15px;"><span
                                          data-custom-class="body_text"></span></span></bdt>
                                    </li>
                                    </ul>
                                    <div style="line-height: 1.5;">
                                      <bdt class="block-component"><span style="font-size: 15px;"><span
                                            data-custom-class="body_text"></span></span></bdt>
                                      </li>
                                      </ul>
                                      <div style="line-height: 1.5;">
                                        <bdt class="block-component"><span style="font-size: 15px;"><span
                                              data-custom-class="body_text"></span></span></bdt>
                                        </li>
                                        </ul>
                                        <div style="line-height: 1.5;">
                                          <bdt class="block-component"><span style="font-size: 15px;"><span
                                                data-custom-class="body_text"></span></span></bdt>
                                          </li>
                                          </ul>
                                          <div style="line-height: 1.5;">
                                            <bdt class="block-component"><span style="font-size: 15px;"><span
                                                  data-custom-class="body_text"></span></span></bdt>
                                            </li>
                                            </ul>
                                            <div style="line-height: 1.5;">
                                              <bdt class="block-component"><span style="font-size: 15px;"><span
                                                    data-custom-class="body_text"></bdt></span></span></li>
                                              </ul>
                                              <div style="line-height: 1.5;">
                                                <bdt class="block-component"><span style="font-size: 15px;"><span
                                                      data-custom-class="body_text"></bdt></span></span></li>
                                                </ul>
                                                <div style="line-height: 1.5;">
                                                  <bdt class="block-component"><span style="font-size: 15px;"><span
                                                        data-custom-class="body_text"></bdt></span></span></li>
                                                  </ul>
                                                  <div style="line-height: 1.5;">
                                                    <bdt class="block-component"><span style="font-size: 15px;"><span
                                                          data-custom-class="body_text"></span></span></bdt>
                                                    </li>
                                                    </ul>
                                                    <div style="line-height: 1.5;">
                                                      <bdt class="block-component"><span style="font-size: 15px;"><span
                                                            data-custom-class="body_text"></span></span></bdt>
                                                      <bdt class="block-component"><span style="font-size: 15px;"><span
                                                            data-custom-class="body_text"></bdt></span></span>
                                                      <bdt class="block-component"><span style="font-size: 15px;"><span
                                                            data-custom-class="body_text"></span></span></bdt>
                                                      <bdt class="block-component"><span style="font-size: 15px;"><span
                                                            data-custom-class="body_text"></span></span></bdt>
                                                    </div>
                                                    <div style="line-height: 1.5;"><br></div>
                                                    <div id="whoshare" style="line-height: 1.5;"><span
                                                        style="color: rgb(127, 127, 127);"><span
                                                          style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                            style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                              style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                id="control" style="color: rgb(0, 0, 0);"><strong><span
                                                                    data-custom-class="heading_1">3. WHEN AND WITH WHOM
                                                                    DO WE SHARE YOUR PERSONAL
                                                                    INFORMATION?</span></strong></span></span></span></span></span>
                                                    </div>
                                                    <div style="line-height: 1.5;"><br></div>
                                                    <div style="line-height: 1.5;"><span
                                                        style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                          style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                            data-custom-class="body_text"><strong><em>In
                                                                Short:</em></strong><em> We may share information in
                                                              specific situations described in this section and/or with
                                                              the following <bdt class="block-component"></bdt>third
                                                              parties.</em></span></span></span></div>
                                                    <div style="line-height: 1.5;"><span
                                                        style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                          style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                            data-custom-class="body_text">
                                                            <bdt class="block-component">
                                                          </span></div>
                                                    <div style="line-height: 1.5;"><br></div>
                                                    <div style="line-height: 1.5;"><span style="font-size: 15px;"><span
                                                          data-custom-class="body_text">We <bdt class="block-component">
                                                          </bdt>may need to share your personal information in the
                                                          following situations:</span></span></div>
                                                    <ul>
                                                      <li data-custom-class="body_text" style="line-height: 1.5;"><span
                                                          style="font-size: 15px;"><span
                                                            data-custom-class="body_text"><strong>Business
                                                              Transfers.</strong> We may share or transfer your
                                                            information in connection with, or during negotiations of,
                                                            any merger, sale of company assets, financing, or
                                                            acquisition of all or a portion of our business to another
                                                            company.</span></span></li>
                                                    </ul>
                                                    <div style="line-height: 1.5;"><span style="font-size: 15px;"><span
                                                          data-custom-class="body_text">
                                                          <bdt class="block-component"></bdt>
                                                        </span></span></div>
                                                    <ul>
                                                      <li data-custom-class="body_text" style="line-height: 1.5;"><span
                                                          style="font-size: 15px;"><span
                                                            data-custom-class="body_text"><strong>When we use Google
                                                              Maps Platform APIs.</strong> We may share your information
                                                            with certain Google Maps Platform APIs (e.g.<bdt
                                                              class="block-component"></bdt>,<bdt
                                                              class="statement-end-if-in-editor"></bdt> Google Maps API,
                                                            Places API).</span><span data-custom-class="body_text">
                                                            <bdt class="block-component"> Google Maps uses GPS, Wi-Fi,
                                                              and cell towers to estimate your location. GPS is accurate
                                                              to about 20 meters, while Wi-Fi and cell towers help
                                                              improve accuracy when GPS signals are weak, like indoors.
                                                              This data helps Google Maps provide directions, but it is
                                                              not always perfectly precise.</bdt>
                                                            <bdt class="block-component"></bdt>
                                                            <bdt class="block-component"></bdt>
                                                          </span></span></li>
                                                    </ul>
                                                    <div style="line-height: 1.5;"><span style="font-size: 15px;">
                                                        <bdt class="block-component"><span
                                                            data-custom-class="body_text"></span></bdt>
                                                      </span></li>
                                                      </ul>
                                                      <div style="line-height: 1.5;">
                                                        <bdt class="block-component"><span
                                                            style="font-size: 15px;"><span
                                                              data-custom-class="body_text"></span></span></bdt>
                                                        </li>
                                                        </ul>
                                                        <div style="line-height: 1.5;">
                                                          <bdt class="block-component"><span
                                                              style="font-size: 15px;"><span
                                                                data-custom-class="body_text"></bdt></span></span></li>
                                                          </ul>
                                                          <div style="line-height: 1.5;">
                                                            <bdt class="block-component"><span
                                                                style="font-size: 15px;"><span
                                                                  data-custom-class="body_text"></span></span></bdt>
                                                            </li>
                                                            </ul>
                                                            <div style="line-height: 1.5;">
                                                              <bdt class="block-component"><span
                                                                  style="font-size: 15px;"><span
                                                                    data-custom-class="body_text"></span></span></bdt>
                                                            </div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><strong><span id="3pwebsites"
                                                                  style="font-size: 15px;"><span
                                                                    data-custom-class="heading_1">4. WHAT IS OUR STANCE
                                                                    ON THIRD-PARTY WEBSITES?</span></span></strong>
                                                            </div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px;"><span
                                                                  data-custom-class="body_text"><strong><em>In
                                                                      Short:</em></strong><em> We are not responsible
                                                                    for the safety of any information that you share
                                                                    with third parties that we may link to or who
                                                                    advertise on our Services, but are not affiliated
                                                                    with, our Services.</em></span></span></div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px;"><span
                                                                  data-custom-class="body_text">The Services<bdt
                                                                    class="block-component"></bdt> may link to
                                                                  third-party websites, online services, or mobile
                                                                  applications and/or contain advertisements from third
                                                                  parties that are not affiliated with us and which may
                                                                  link to other websites, services, or applications.
                                                                  Accordingly, we do not make any guarantee regarding
                                                                  any such third parties, and we will not be liable for
                                                                  any loss or damage caused by the use of such
                                                                  third-party websites, services, or applications. The
                                                                  inclusion of a link towards a third-party website,
                                                                  service, or application does not imply an endorsement
                                                                  by us. We cannot guarantee the safety and privacy of
                                                                  data you provide to any third-party websites. Any data
                                                                  collected by third parties is not covered by this
                                                                  Privacy Notice. We are not responsible for the content
                                                                  or privacy and security practices and policies of any
                                                                  third parties, including other websites, services, or
                                                                  applications that may be linked to or from the
                                                                  Services. You should review the policies of such third
                                                                  parties and contact them directly to respond to your
                                                                  questions.</span></span>
                                                              <bdt class="statement-end-if-in-editor"><span
                                                                  style="font-size: 15px;"><span
                                                                    data-custom-class="body_text"></span></span></bdt>
                                                              <span
                                                                style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  style="font-size: 15px;"><span
                                                                    style="color: rgb(89, 89, 89);"><span
                                                                      style="font-size: 15px;"><span
                                                                        style="color: rgb(89, 89, 89);">
                                                                        <bdt class="block-component"><span
                                                                            data-custom-class="heading_1">
                                                                            <bdt class="block-component"></bdt>
                                                                          </span></bdt>
                                                                      </span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div id="cookies" style="line-height: 1.5;"><span
                                                                style="color: rgb(127, 127, 127);"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                    style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                      style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                        id="control"
                                                                        style="color: rgb(0, 0, 0);"><strong><span
                                                                            data-custom-class="heading_1">5. DO WE USE
                                                                            COOKIES AND OTHER TRACKING
                                                                            TECHNOLOGIES?</span></strong></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text"><strong><em>In
                                                                        Short:</em></strong><em> We may use cookies and
                                                                      other tracking technologies to collect and store
                                                                      your information.</em></span></span></span></div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text">We may use cookies and
                                                                    similar tracking technologies (like web beacons and
                                                                    pixels) to gather information when you interact with
                                                                    our Services. Some online tracking technologies help
                                                                    us maintain the security of our Services<bdt
                                                                      class="block-component"></bdt>, prevent crashes,
                                                                    fix bugs, save your preferences, and assist with
                                                                    basic site functions.</span></span></span></div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text">We also permit third
                                                                    parties and service providers to use online tracking
                                                                    technologies on our Services for analytics and
                                                                    advertising, including to help manage and display
                                                                    advertisements, to tailor advertisements to your
                                                                    interests, or to send abandoned shopping cart
                                                                    reminders (depending on your communication
                                                                    preferences). The third parties and service
                                                                    providers use their technology to provide
                                                                    advertising about products and services tailored to
                                                                    your interests which may appear either on our
                                                                    Services or on other websites.</span></span></span>
                                                              <bdt class="block-component"><span
                                                                  style="font-size: 15px;"></bdt></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text">Specific information
                                                                    about how we use such technologies and how you can
                                                                    refuse certain cookies is set out in our Cookie
                                                                    Notice<span
                                                                      style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                        data-custom-class="body_text">
                                                                        <bdt class="block-component"></bdt>.
                                                                      </span></span></span></span></span>
                                                              <bdt class="block-component"><span
                                                                  style="font-size: 15px;"></span></bdt>
                                                            </div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px;"><br></span></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px;"><strong><span
                                                                    data-custom-class="heading_2">Google
                                                                    Analytics</span></strong></span></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px;"><br></span></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px;"><span
                                                                  data-custom-class="body_text">We may share your
                                                                  information with Google Analytics to track and <bdt
                                                                    class="block-component"></bdt>analyze<bdt
                                                                    class="statement-end-if-in-editor"></bdt> the use of
                                                                  the Services.<bdt class="block-component"></bdt> To
                                                                  opt out of being tracked by Google Analytics across
                                                                  the Services, visit <span
                                                                    style="color: rgb(0, 58, 250);"><a
                                                                      data-custom-class="link"
                                                                      href="https://tools.google.com/dlpage/gaoptout"
                                                                      rel="noopener noreferrer"
                                                                      target="_blank">https://tools.google.com/dlpage/gaoptout</a>.</span>
                                                                  <bdt class="block-component"></bdt> For more
                                                                  information on the privacy practices of Google, please
                                                                  visit the <span style="color: rgb(0, 58, 250);"><a
                                                                      data-custom-class="link"
                                                                      href="https://policies.google.com/privacy"
                                                                      rel="noopener noreferrer" target="_blank">Google
                                                                      Privacy & Terms page</a></span>.
                                                                </span></span>
                                                              <bdt class="statement-end-if-in-editor"><span
                                                                  style="font-size: 15px;"></span></bdt><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text"><span
                                                                      style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                        style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                          style="font-size: 15px;"><span
                                                                            style="color: rgb(89, 89, 89);"><span
                                                                              style="font-size: 15px;"><span
                                                                                style="color: rgb(89, 89, 89);"><span
                                                                                  data-custom-class="body_text">
                                                                                  <bdt
                                                                                    class="statement-end-if-in-editor">
                                                                                  </bdt>
                                                                                </span></span></span></span></span></span></span></span></span></span><span
                                                                style="font-size: 15px;">
                                                                <bdt class="block-component"></bdt>
                                                              </span><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text"><span
                                                                      style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                        style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                          style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                            style="font-size: 15px;"><span
                                                                              style="color: rgb(89, 89, 89);"><span
                                                                                style="font-size: 15px;"><span
                                                                                  style="color: rgb(89, 89, 89);"><span
                                                                                    data-custom-class="body_text">
                                                                                    <bdt class="block-component"></bdt>
                                                                                  </span>
                                                                                  <bdt class="block-component"><span
                                                                                      data-custom-class="body_text">
                                                                                      <bdt class="block-component">
                                                                                      </bdt>
                                                                                    </span>
                                                                                </span></span></span></span></span></span></span></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div id="inforetain" style="line-height: 1.5;"><span
                                                                style="color: rgb(127, 127, 127);"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                    style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                      style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                        id="control"
                                                                        style="color: rgb(0, 0, 0);"><strong><span
                                                                            data-custom-class="heading_1">6. HOW LONG DO
                                                                            WE KEEP YOUR
                                                                            INFORMATION?</span></strong></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text"><strong><em>In
                                                                        Short: </em></strong><em>We keep your
                                                                      information for as long as necessary to <bdt
                                                                        class="block-component"></bdt>fulfill<bdt
                                                                        class="statement-end-if-in-editor"></bdt> the
                                                                      purposes outlined in this Privacy Notice unless
                                                                      otherwise required by
                                                                      law.</em></span></span></span></div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text">We will only keep your
                                                                    personal information for as long as it is necessary
                                                                    for the purposes set out in this Privacy Notice,
                                                                    unless a longer retention period is required or
                                                                    permitted by law (such as tax, accounting, or other
                                                                    legal requirements).<bdt class="block-component">
                                                                  </span></span></span></div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text">When we have no
                                                                    ongoing legitimate business need to process your
                                                                    personal information, we will either delete or <bdt
                                                                      class="block-component"></bdt>anonymize<bdt
                                                                      class="statement-end-if-in-editor"></bdt> such
                                                                    information, or, if this is not possible (for
                                                                    example, because your personal information has been
                                                                    stored in backup archives), then we will securely
                                                                    store your personal information and isolate it from
                                                                    any further processing until deletion is
                                                                    possible.<span style="color: rgb(89, 89, 89);">
                                                                      <bdt class="block-component"></bdt>
                                                                    </span></span></span></span></div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div id="infosafe" style="line-height: 1.5;"><span
                                                                style="color: rgb(127, 127, 127);"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                    style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                      style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                        id="control"
                                                                        style="color: rgb(0, 0, 0);"><strong><span
                                                                            data-custom-class="heading_1">7. HOW DO WE
                                                                            KEEP YOUR INFORMATION
                                                                            SAFE?</span></strong></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text"><strong><em>In
                                                                        Short: </em></strong><em>We aim to protect your
                                                                      personal information through a system of <bdt
                                                                        class="block-component"></bdt>organizational<bdt
                                                                        class="statement-end-if-in-editor"></bdt> and
                                                                      technical security
                                                                      measures.</em></span></span></span></div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text">We have implemented
                                                                    appropriate and reasonable technical and <bdt
                                                                      class="block-component"></bdt>organizational<bdt
                                                                      class="statement-end-if-in-editor"></bdt> security
                                                                    measures designed to protect the security of any
                                                                    personal information we process. However, despite
                                                                    our safeguards and efforts to secure your
                                                                    information, no electronic transmission over the
                                                                    Internet or information storage technology can be
                                                                    guaranteed to be 100% secure, so we cannot promise
                                                                    or guarantee that hackers, cybercriminals, or other
                                                                    <bdt class="block-component"></bdt>unauthorized<bdt
                                                                      class="statement-end-if-in-editor"></bdt> third
                                                                    parties will not be able to defeat our security and
                                                                    improperly collect, access, steal, or modify your
                                                                    information. Although we will do our best to protect
                                                                    your personal information, transmission of personal
                                                                    information to and from our Services is at your own
                                                                    risk. You should only access the Services within a
                                                                    secure environment.<span
                                                                      style="color: rgb(89, 89, 89);">
                                                                      <bdt class="statement-end-if-in-editor"></bdt>
                                                                    </span><span
                                                                      style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                        data-custom-class="body_text">
                                                                        <bdt class="block-component"></bdt>
                                                                      </span></span>
                                                                  </span></span></span></div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div id="infominors" style="line-height: 1.5;"><span
                                                                style="color: rgb(127, 127, 127);"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                    style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                      style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                        id="control"
                                                                        style="color: rgb(0, 0, 0);"><strong><span
                                                                            data-custom-class="heading_1">8. DO WE
                                                                            COLLECT INFORMATION FROM
                                                                            MINORS?</span></strong></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text"><strong><em>In
                                                                        Short:</em></strong><em> We do not knowingly
                                                                      collect data from or market to <bdt
                                                                        class="block-component"></bdt>children under 18
                                                                      years of age<bdt class="else-block"></bdt>.</em>
                                                                    <bdt class="block-component"></bdt>
                                                                  </span></span></span></div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text">We do not knowingly
                                                                    collect, solicit data from, or market to children
                                                                    under 18 years of age, nor do we knowingly sell such
                                                                    personal information. By using the Services, you
                                                                    represent that you are at least 18 or that you are
                                                                    the parent or guardian of such a minor and consent
                                                                    to such minor dependent’s use of the Services. If we
                                                                    learn that personal information from users less than
                                                                    18 years of age has been collected, we will
                                                                    deactivate the account and take reasonable measures
                                                                    to promptly delete such data from our records. If
                                                                    you become aware of any data we may have collected
                                                                    from children under age 18, please contact us at
                                                                    <span
                                                                      style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                        data-custom-class="body_text">
                                                                        <bdt class="block-component"></bdt>
                                                                        <bdt class="question">office@afkology.com</bdt>
                                                                        <bdt class="else-block"></bdt>
                                                                      </span></span>.</span><span
                                                                    data-custom-class="body_text">
                                                                    <bdt class="else-block">
                                                                      <bdt class="block-component"></bdt>
                                                                  </span></span></span></span></span></span></div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div id="privacyrights" style="line-height: 1.5;"><span
                                                                style="color: rgb(127, 127, 127);"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                    style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                      style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                        id="control"
                                                                        style="color: rgb(0, 0, 0);"><strong><span
                                                                            data-custom-class="heading_1">9. WHAT ARE
                                                                            YOUR PRIVACY
                                                                            RIGHTS?</span></strong></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text"><strong><em>In
                                                                        Short:</em></strong><em> <span
                                                                        style="color: rgb(89, 89, 89);"><span
                                                                          style="font-size: 15px;"><span
                                                                            data-custom-class="body_text"><em>
                                                                              <bdt class="block-component"></bdt>
                                                                            </em></span></span> </span>You may review,
                                                                      change, or terminate your account at any time,
                                                                      depending on your country, province, or state of
                                                                      residence.</em><span
                                                                      style="color: rgb(89, 89, 89);"><span
                                                                        style="font-size: 15px;">
                                                                        <bdt class="block-component">
                                                                          <bdt class="block-component">
                                                                      </span></span></span></div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div id="withdrawconsent" style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text"><strong><u>Withdrawing
                                                                        your consent:</u></strong> If we are relying on
                                                                    your consent to process your personal information,
                                                                    <bdt class="block-component"></bdt> which may be
                                                                    express and/or implied consent depending on the
                                                                    applicable law,<bdt
                                                                      class="statement-end-if-in-editor"></bdt> you have
                                                                    the right to withdraw your consent at any time. You
                                                                    can withdraw your consent at any time by contacting
                                                                    us by using the contact details provided in the
                                                                    section <bdt class="block-component"></bdt>"<bdt
                                                                      class="statement-end-if-in-editor"></bdt>
                                                                  </span></span></span><a data-custom-class="link"
                                                                href="#contact"><span
                                                                  style="font-size: 15px; color: rgb(0, 58, 250);"><span
                                                                    style="font-size: 15px; color: rgb(0, 58, 250);"><span
                                                                      data-custom-class="body_text">HOW CAN YOU CONTACT
                                                                      US ABOUT THIS
                                                                      NOTICE?</span></span></span></a><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text">
                                                                    <bdt class="block-component"></bdt>"<bdt
                                                                      class="statement-end-if-in-editor"></bdt> below
                                                                    <bdt class="block-component"></bdt>.
                                                                  </span></span></span></div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px;"><span
                                                                  data-custom-class="body_text">However, please note
                                                                  that this will not affect the lawfulness of the
                                                                  processing before its withdrawal nor,<bdt
                                                                    class="block-component"></bdt> when applicable law
                                                                  allows,<bdt class="statement-end-if-in-editor"></bdt>
                                                                  will it affect the processing of your personal
                                                                  information conducted in reliance on lawful processing
                                                                  grounds other than consent.<bdt
                                                                    class="block-component"></bdt></span></span>
                                                              <bdt class="block-component"><span
                                                                  style="font-size: 15px;"><span
                                                                    data-custom-class="body_text"></span></span></bdt>
                                                              <span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text"><span
                                                                      style="font-size: 15px;"><span
                                                                        style="color: rgb(89, 89, 89);"><span
                                                                          style="font-size: 15px;"><span
                                                                            style="color: rgb(89, 89, 89);"><span
                                                                              data-custom-class="body_text"><span
                                                                                style="font-size: 15px;"><span
                                                                                  style="color: rgb(89, 89, 89);">
                                                                                  <bdt class="block-component"></bdt>
                                                                                </span></span></span></span></span></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text"><strong><u>Cookies and
                                                                        similar technologies:</u></strong> Most Web
                                                                    browsers are set to accept cookies by default. If
                                                                    you prefer, you can usually choose to set your
                                                                    browser to remove cookies and to reject cookies. If
                                                                    you choose to remove cookies or reject cookies, this
                                                                    could affect certain features or services of our
                                                                    Services. <bdt class="block-component"></bdt>You may
                                                                    also <span style="color: rgb(0, 58, 250);"><span
                                                                        data-custom-class="body_text"><a
                                                                          data-custom-class="link"
                                                                          href="http://www.aboutads.info/choices/"
                                                                          rel="noopener noreferrer"
                                                                          target="_blank"><span
                                                                            style="color: rgb(0, 58, 250); font-size: 15px;">opt
                                                                            out of interest-based advertising by
                                                                            advertisers</span></a></span></span> on our
                                                                    Services. <span style="font-size: 15px;"><span
                                                                        style="color: rgb(89, 89, 89);"><span
                                                                          data-custom-class="body_text">
                                                                          <bdt class="block-component"></bdt><span
                                                                            style="font-size: 15px;"><span
                                                                              style="color: rgb(89, 89, 89);"><span
                                                                                style="font-size: 15px;"><span
                                                                                  style="color: rgb(89, 89, 89);"><span
                                                                                    style="font-size: 15px;"><span
                                                                                      style="color: rgb(89, 89, 89);">
                                                                                      <bdt
                                                                                        class="statement-end-if-in-editor">
                                                                                      </bdt>
                                                                                    </span></span></span></span></span></span>
                                                                        </span></span></span></span></span></span>
                                                              <bdt class="block-component"><span
                                                                  style="font-size: 15px;"><span
                                                                    data-custom-class="body_text"></span></span></bdt>
                                                            </div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                data-custom-class="body_text"><span
                                                                  style="font-size: 15px;">If you have questions or
                                                                  comments about your privacy rights, you may email us
                                                                  at <bdt class="question">office@afkology.com</bdt>
                                                                  .</span></span>
                                                              <bdt class="statement-end-if-in-editor"><span
                                                                  style="font-size: 15px;"><span
                                                                    data-custom-class="body_text"></span></span></bdt>
                                                            </div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div id="DNT" style="line-height: 1.5;"><span
                                                                style="color: rgb(127, 127, 127);"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                    style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                      style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                        id="control"
                                                                        style="color: rgb(0, 0, 0);"><strong><span
                                                                            data-custom-class="heading_1">10. CONTROLS
                                                                            FOR DO-NOT-TRACK
                                                                            FEATURES</span></strong></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text">Most web browsers and
                                                                    some mobile operating systems and mobile
                                                                    applications include a Do-Not-Track (<bdt
                                                                      class="block-component"></bdt>"DNT"<bdt
                                                                      class="statement-end-if-in-editor"></bdt>) feature
                                                                    or setting you can activate to signal your privacy
                                                                    preference not to have data about your online
                                                                    browsing activities monitored and collected. At this
                                                                    stage, no uniform technology standard for <bdt
                                                                      class="block-component"></bdt>recognizing<bdt
                                                                      class="statement-end-if-in-editor"></bdt> and
                                                                    implementing DNT signals has been <bdt
                                                                      class="block-component"></bdt>finalized<bdt
                                                                      class="statement-end-if-in-editor"></bdt>. As
                                                                    such, we do not currently respond to DNT browser
                                                                    signals or any other mechanism that automatically
                                                                    communicates your choice not to be tracked online.
                                                                    If a standard for online tracking is adopted that we
                                                                    must follow in the future, we will inform you about
                                                                    that practice in a revised version of this Privacy
                                                                    Notice.</span></span></span>
                                                              <bdt class="block-component"><span
                                                                  style="font-size: 15px;"></span></bdt>
                                                            </div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text">
                                                                    <bdt class="block-component"></bdt>
                                                                    </bdt>
                                                                  </span></span></span></span></span></span></span></span></span></span></span>
                                                              </bdt>
                                                              </span></span></span></span></span></span></span></span></span></span>
                                                              <bdt class="block-component"><span
                                                                  style="font-size: 15px;"></bdt></span>
                                                              <bdt class="block-component"><span
                                                                  style="font-size: 15px;"></span></bdt>
                                                            </div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div id="policyupdates" style="line-height: 1.5;"><span
                                                                style="color: rgb(127, 127, 127);"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                    style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                      style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                        id="control"
                                                                        style="color: rgb(0, 0, 0);"><strong><span
                                                                            data-custom-class="heading_1">11. DO WE MAKE
                                                                            UPDATES TO THIS
                                                                            NOTICE?</span></strong></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text"><em><strong>In
                                                                        Short: </strong>Yes, we will update this notice
                                                                      as necessary to stay compliant with relevant
                                                                      laws.</em></span></span></span></div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text">We may update this
                                                                    Privacy Notice from time to time. The updated
                                                                    version will be indicated by an updated <bdt
                                                                      class="block-component"></bdt>"Revised"<bdt
                                                                      class="statement-end-if-in-editor"></bdt> date at
                                                                    the top of this Privacy Notice. If we make material
                                                                    changes to this Privacy Notice, we may notify you
                                                                    either by prominently posting a notice of such
                                                                    changes or by directly sending you a notification.
                                                                    We encourage you to review this Privacy Notice
                                                                    frequently to be informed of how we are protecting
                                                                    your information.</span></span></span></div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div id="contact" style="line-height: 1.5;"><span
                                                                style="color: rgb(127, 127, 127);"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                    style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                      style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                        id="control"
                                                                        style="color: rgb(0, 0, 0);"><strong><span
                                                                            data-custom-class="heading_1">12. HOW CAN
                                                                            YOU CONTACT US ABOUT THIS
                                                                            NOTICE?</span></strong></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text">If you have questions
                                                                    or comments about this notice, you may <span
                                                                      style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                        data-custom-class="body_text">
                                                                        <bdt class="block-component">
                                                                          <bdt class="block-component"></bdt>
                                                                        </bdt>email us at <bdt class="question">
                                                                          office@afkology.com or </bdt>
                                                                        <bdt class="statement-end-if-in-editor">
                                                                          <bdt class="block-component"></bdt>
                                                                        </bdt>
                                                                      </span></span><span
                                                                      style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                        style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                          data-custom-class="body_text">contact us by
                                                                          post
                                                                          at:</span></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text"><span
                                                                      style="font-size: 15px;"><span
                                                                        style="color: rgb(89, 89, 89);"><span
                                                                          style="color: rgb(89, 89, 89);"><span
                                                                            data-custom-class="body_text">
                                                                            <bdt class="question">PFA Voicu Nicolae
                                                                              Gabriel</bdt>
                                                                          </span></span></span></span></span><span
                                                                    data-custom-class="body_text"><span
                                                                      style="color: rgb(89, 89, 89);"><span
                                                                        data-custom-class="body_text">
                                                                        <bdt class="block-component"></bdt>
                                                                        </bdt>
                                                                      </span></span></span></span></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px;"><span
                                                                  data-custom-class="body_text">
                                                                  <bdt class="question">__________</bdt><span
                                                                    style="color: rgb(89, 89, 89);"><span
                                                                      style="font-size: 15px;">
                                                                      <bdt class="block-component"></bdt>
                                                                    </span></span>
                                                                </span></bdt></span></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px;"><span
                                                                  data-custom-class="body_text">
                                                                  <bdt class="question">__________</bdt><span
                                                                    style="color: rgb(89, 89, 89);"><span
                                                                      style="font-size: 15px;">
                                                                      <bdt class="block-component"></bdt>
                                                                      <bdt class="block-component"></bdt>
                                                                      <bdt class="block-component"></bdt>
                                                                    </span></span>
                                                                </span><span data-custom-class="body_text"><span
                                                                    style="color: rgb(89, 89, 89);"><span
                                                                      style="font-size: 15px;">
                                                                      <bdt class="statement-end-if-in-editor"></bdt>
                                                                    </span></span></span></bdt>
                                                              </span></span></span></span><span
                                                                data-custom-class="body_text"><span
                                                                  style="font-size: 15px;"><span
                                                                    data-custom-class="body_text"><span
                                                                      style="color: rgb(89, 89, 89);">
                                                                      <bdt class="statement-end-if-in-editor"><span
                                                                          style="color: rgb(89, 89, 89);"><span
                                                                            style="font-size: 15px;"><span
                                                                              data-custom-class="body_text">
                                                                              <bdt class="block-component">
                                                                                <bdt class="block-component"></bdt>
                                                                            </span></span></span>
                                                                    </span></span></span>
                                                                <bdt class="block-component"><span
                                                                    style="font-size: 15px;"></span></bdt><span
                                                                  style="font-size: 15px;"><span
                                                                    data-custom-class="body_text"><span
                                                                      style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                        style="font-size: 15px;"><span
                                                                          data-custom-class="body_text">
                                                                          <bdt class="statement-end-if-in-editor">
                                                                            <bdt class="block-component"></bdt>
                                                                        </span></span></div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div id="request" style="line-height: 1.5;"><span
                                                                style="color: rgb(127, 127, 127);"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                    style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                      style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                        id="control"
                                                                        style="color: rgb(0, 0, 0);"><strong><span
                                                                            data-custom-class="heading_1">13. HOW CAN
                                                                            YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                                                                            COLLECT FROM
                                                                            YOU?</span></strong></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"><br></div>
                                                            <div style="line-height: 1.5;"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                    data-custom-class="body_text">
                                                                    <bdt class="block-component"></bdt>Based on the
                                                                    applicable laws of your country, you may have the
                                                                    right to
                                                                    request access to the personal information we
                                                                    collect from you, details about how we have
                                                                    processed it, correct inaccuracies, or delete
                                                                    your personal information. You may also have the
                                                                    right to <bdt class="block-component"></bdt>
                                                                    withdraw your consent to our processing of your
                                                                    personal information. These rights may be
                                                                    limited in some circumstances by applicable law.
                                                                    To request to review, update, or delete your
                                                                    personal information, please <bdt
                                                                      class="block-component"></bdt>fill out and
                                                                    submit a  <a data-custom-class="link"
                                                                      href="https://app.termly.io/notify/a9d766ea-c3d3-4368-a673-267bf08b4250"
                                                                      rel="noopener noreferrer" target="_blank">data
                                                                      subject access request</a>  */}





