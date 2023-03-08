import React from 'react';
import './Footer.css';
import logo from '../../../assests/HH.png';
import github1 from '../../../assests/github1.png';
import linkedin from '../../../assests/linkedin.png';
import facebook from '../../../assests/facebook.png';
// import WhatsAppWidget from "react-whatsapp-chat-widget";
// import "react-whatsapp-chat-widget/index.css";




const Footer = () => {
    let calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress");
        let progressValue = document.getElementById("progress-value");
        let pos = document.documentElement.scrollTop;
        let calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
            scrollProgress.style.display = "grid";
        } else {
            scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });
        scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;

    return (
        <div>
           
            <div id="progress">
                <span id="progress-value">&#x1F815;</span>
            </div>
           
            <footer className="footer items-center p-4 bg-slate-900 text-neutral-content mt-12">
                <div>
                    <a href='index.html'>
                        <img src={logo} alt="" className='w-28 rounded-[50%] cursor-pointer' title='dvlprhriday' />
                    </a>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://github.com/hridoyhalder1" title="github icons"><img src={github1} alt="" width="24" height="24" color='white' /></a>
                        <a href="https://www.linkedin.com/in/hridayhaldar/" title="linkedin icons"><img src={linkedin} alt="" width="24" height="24" color='white' /></a>
                        <a href="https://www.facebook.com/hridaymarketer/" title="facebook icons"><img src={facebook} alt="" width="24" height="24" color='white' /></a>
                    </div>
                </div>
            </footer>
            {/* whatsapp */}
            {/* <WhatsAppWidget
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
            /> */}
        </div>
    );
};

export default Footer;