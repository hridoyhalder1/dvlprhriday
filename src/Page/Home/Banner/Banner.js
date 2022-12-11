import React from 'react';
import banner from '../../../assests/banner.png';
import { FaDownload } from "react-icons/fa";
import Resume from '../../../assests/Hriday Haldar Resume (update2).pdf';
import { Typewriter } from 'react-simple-typewriter'
import github1 from '../../../assests/github1.png';
import linkedin from '../../../assests/linkedin.png';
import facebook from '../../../assests/facebook.png';
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-slate-900">
                <div className="hero-content flex-col lg:flex-row lg:gap-12">
                    <img src={banner} alt='' className="max-w-sm  rounded-lg shadow-2xl" />
                    <div data-aos="zoom-out-right">
                        <h4 className="text-xl font-bold text-white">Hello Everyone!</h4>
                        <h1 className="py-6 text-white text-4xl font-bold">I'm  <span style={{ color: 'cyan', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Hriday Haldar', 'A Front-End Developer', 'A Self Beliver ❤']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span> </h1>


                        <p className=' text-white'>My name is Hriday Haldar. I am a front-end web developer, React Developer and MERN stack developer.<br/> I love to explore new technologies, solve new problems and continuously  learn new things to make the websites. </p>
                        <div className="flex justify-start gap-5 mt-5 mb-5">
                            <a href="https://github.com/hridoyhalder1" title="github icons"><img src={github1} alt="" width="24" height="24" color='white' /></a>
                            <a href="https://www.linkedin.com/in/hridayhaldar/" title="linkedin icons"><img src={linkedin} alt="" width="24" height="24" color='white' /></a>
                            <a href="https://www.facebook.com/hridaymarketer/" title="facebook icons"><img src={facebook} alt="" width="24" height="24" color='white' /></a>

                        </div>
                        <button className="btn btn-primary px-8 mt-3">Resume<a className='pl-2' href={Resume} download><FaDownload></FaDownload></a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;