import React from 'react';
import logo from '../../../assests/HH.png';
import github1 from '../../../assests/github1.png';
import linkedin from '../../../assests/linkedin.png';
import facebook from '../../../assests/facebook.png';
import ScrollToTop from "react-scroll-to-top";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";



const Footer = () => {

    return (
        <div>
            <ScrollToTop
                smooth
                top="1500"
            />
            <footer className="footer items-center p-4 bg-slate-900 text-neutral-content mt-12">
                <div className="items-center grid-flow-col">
                    <img src={logo} alt="" className='w-28 rounded-xl ' />
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href="https://github.com/hridoyhalder1" title="github icons"><img src={github1} alt="" width="24" height="24" color='white' /></a>
                    <a href="https://www.linkedin.com/in/hridayhaldar/" title="linkedin icons"><img src={linkedin} alt="" width="24" height="24" color='white' /></a>
                    <a href="https://www.facebook.com/hridaymarketer/" title="facebook icons"><img src={facebook} alt="" width="24" height="24" color='white' /></a>

                </div>

            </footer>
            {/* whatsapp */}
            <WhatsAppWidget
                phoneNo="+8801863901163"
                position="right"
                widgetWidth="300px"
                widgetWidthMobile="260px"
                autoOpen={true}
                autoOpenTimer={5000}
                messageBox={true}
                messageBoxTxt="Hi Team, is there any related service available ?"
                iconSize="40"
                iconColor="white"
                iconBgColor="#34B7F1"
                // headerIcon="https://www.canva.com/design/DAFUX2Eabnw/4UP7hYXJnq3F8bRWRfCOcA/view?utm_content=DAFUX2Eabnw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                headerIconColor="pink"
                headerTxtColor="black"
                headerBgColor="tomato"
                headerTitle="Hriday Haldar"
                headerCaption="Online"
                bodyBgColor="#0F172A"
                chatPersonName="Support"
                chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
                footerBgColor="#0F172A"
                btnBgColor="#0984e3"
                btnTxtColor="white"
                btnTxt="Start Chat"
            />
        </div>
    );
};

export default Footer;