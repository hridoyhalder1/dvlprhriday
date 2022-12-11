import React from 'react';
import logo from '../../../assests/HH.png';
import github1 from '../../../assests/github1.png';
import linkedin from '../../../assests/linkedin.png';
import facebook from '../../../assests/facebook.png';
import ScrollToTop from "react-scroll-to-top";
import { MessengerChat } from "react-messenger-chat-plugin";



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
                {/* messenger */}
                <MessengerChat
                    pageId="100064708733507"
                    language="sv_SE"
                    themeColor={"red"}
                    bottomSpacing={300}
                    loggedInGreeting="loggedInGreeting"
                    loggedOutGreeting="loggedOutGreeting"
                    greetingDialogDisplay={"show"}
                    debugMode={true}
                    onMessengerShow={() => {
                        console.log("onMessengerShow");
                    }}
                    onMessengerHide={() => {
                        console.log("onMessengerHide");
                    }}
                    onMessengerDialogShow={() => {
                        console.log("onMessengerDialogShow");
                    }}
                    onMessengerDialogHide={() => {
                        console.log("onMessengerDialogHide");
                    }}
                    onMessengerMounted={() => {
                        console.log("onMessengerMounted");
                    }}
                    onMessengerLoad={() => {
                        console.log("onMessengerLoad");
                    }}
                />
            </footer>
        </div>
    );
};

export default Footer;